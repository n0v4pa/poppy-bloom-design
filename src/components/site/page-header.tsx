import type { ReactNode } from "react";
import poppyHero from "@/assets/hero/poppy-hero-02-transparent.png";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="relative border-b border-line">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-b from-poppy/5 via-transparent to-transparent" />
      </div>
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 pt-12 pb-14 md:pt-16 md:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-16 lg:pt-20 lg:pb-24">
        <div className="relative z-10">
          <p className="eyebrow text-poppy">{eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-display text-5xl md:text-7xl lg:text-[76px]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="pointer-events-none relative mx-auto aspect-[4/5] w-full max-w-[360px] lg:mx-0 lg:ml-auto">
          <div className="absolute inset-[12%] rounded-full bg-poppy/8 blur-3xl" />
          <img
            src={poppyHero}
            alt="Három pipacsvirág botanikus illusztrációja"
            className="relative size-full object-contain drop-shadow-[0_24px_48px_rgba(80,30,25,0.12)] dark:brightness-[1.45] dark:saturate-[0.88]"
            width={1024}
            height={1280}
          />
        </div>
      </div>
    </section>
  );
}
