from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "assets" / "hero" / "poppy-hero-02.jpg"
TARGET = ROOT / "src" / "assets" / "hero" / "poppy-hero-02-transparent.png"

image = Image.open(SOURCE).convert("RGB")
rgb = np.asarray(image, dtype=np.float32) / 255.0

# The paper tone is sampled from clean corner regions, so the botanical
# watercolour remains intact while the warm JPG background becomes alpha.
corner = 96
samples = np.concatenate(
    [
        rgb[:corner, :corner].reshape(-1, 3),
        rgb[:corner, -corner:].reshape(-1, 3),
        rgb[-corner:, :corner].reshape(-1, 3),
        rgb[-corner:, -corner:].reshape(-1, 3),
    ]
)
paper = np.percentile(samples, 90, axis=0)

raw_alpha = np.max(np.clip((paper - rgb) / np.maximum(paper, 1e-6), 0.0, 1.0), axis=2)
alpha = np.clip((raw_alpha - 0.025) / 0.975, 0.0, 1.0)
alpha = np.power(alpha, 0.82)
alpha_image = Image.fromarray(np.uint8(alpha * 255), mode="L").filter(ImageFilter.GaussianBlur(0.45))
alpha = np.asarray(alpha_image, dtype=np.float32) / 255.0

safe_alpha = np.maximum(alpha[..., None], 1 / 255)
foreground = (rgb - paper * (1.0 - safe_alpha)) / safe_alpha
foreground = np.clip(foreground, 0.0, 1.0)

rgba = np.dstack((np.uint8(foreground * 255), np.uint8(alpha * 255)))
Image.fromarray(rgba, mode="RGBA").save(TARGET, optimize=True)
print(f"created={TARGET}")
print(f"paper_rgb={tuple(np.uint8(paper * 255))}")
print(f"opaque_pixels={(alpha > 0.98).sum()}")
print(f"visible_pixels={(alpha > 0.02).sum()}")
