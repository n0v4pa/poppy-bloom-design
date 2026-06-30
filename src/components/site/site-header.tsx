"use client";

import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Sparkles,
  HandHeart,
  Droplets,
  Sun,
  Zap,
  Flower2,
  ArrowUpRight,
  Phone,
  Menu,
  X,
  MoonStar,
  SunMedium,
} from "lucide-react";
import { useTheme } from "./theme-provider";
import poppyConcrete from "@/assets/poppy-concrete.jpg";

const NAV = [
  { label: "Szolgáltatások", href: "/szolgaltatasok", hasMega: true },
  { label: "Rólam", href: "/rolam" },
  { label: "Aktuális ajánlatok", href: "/aktualis-ajanlatok" },
  { label: "Galéria", href: "/galeria" },
  { label: "Blog", href: "/blog" },
  { label: "Kapcsolat", href: "/kapcsolat" },
] as const;

const MEGA_GROUPS = [
  {
    title: "Arckezelések",
    items: [
      { icon: Sparkles, name: "Orvoskozmetikai kezelések", desc: "Biodroga Medical Institute, anti-age, EGF" },
      { icon: Droplets, name: "Hidratáló & dehidratált bőr", desc: "Mély hidratálás minden bőrtípusra" },
      { icon: Flower2, name: "Vegán & bio kezelések", desc: "Biodroga Organic, Vagheggi fitokozmetika" },
      { icon: Sun, name: "Halványító kezelések", desc: "Pigmentfoltok, bőrszín-homogenizálás" },
    ],
  },
  {
    title: "Speciális technológiák",
    items: [
      { icon: Zap, name: "Lágylézer kezelések", desc: "Beauty-Glow, SlowAging, AllAges quick-lifting" },
      { icon: Sparkles, name: "Mikrotűs – savas kezelések", desc: "Dermapen, kollagén-indukció, peeling" },
      { icon: Zap, name: "Rádiófrekvencia & elektroporáció", desc: "Feszesítés és hatóanyag-bejuttatás" },
      { icon: Sparkles, name: "Arkana neurokozmetika", desc: "GABA Therapy, Eye Complex Care" },
    ],
  },
  {
    title: "Masszázs & test",
    items: [
      { icon: HandHeart, name: "Japán arcmasszázs", desc: "Speciális arcszobrász technika" },
      { icon: HandHeart, name: "Szervzónás arcmasszázs", desc: "Arcdiagnosztika és reflexzóna" },
      { icon: HandHeart, name: "Vagheggi testkezelések", desc: "5 elem masszázs, Fuoco alakformálás" },
      { icon: HandHeart, name: "Testmasszázsok", desc: "Lignum / Maderoterápia, cellulit" },
    ],
  },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding,backdrop-filter] duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className={`mx-auto max-w-[1400px] px-6 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <div
          className={`flex items-center justify-between rounded-full border border-line transition-all duration-500 ${
            scrolled ? "h-12 px-4 glass" : "h-14 px-5 bg-background/40 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative inline-block size-2.5 rounded-full bg-poppy">
              <span className="absolute inset-0 rounded-full bg-poppy animate-ping opacity-40" />
            </span>
            <span className="font-serif text-lg leading-none tracking-tight">
              Makovsky <span className="text-poppy italic">Beauty</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasMega && setMegaOpen(true)}
              >
                <Link
                  to={item.href}
                  className="link-underline rounded-full px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+36306582730"
              className="hidden md:flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] text-mono text-foreground/70 hover:text-foreground transition-colors"
            >
              <Phone className="size-3" />
              +36 30 658 2730
            </a>
            <button
              type="button"
              onClick={toggle}
              aria-label="Téma váltása"
              className="grid size-9 place-items-center rounded-full border border-line text-foreground/70 hover:text-foreground hover:border-line-strong transition-colors"
            >
              {theme === "dark" ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />}
            </button>
            <a
              href="#foglalas"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-[12px] font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Időpontfoglalás
              <ArrowUpRight className="size-3.5" />
            </a>
            <button
              type="button"
              className="lg:hidden grid size-9 place-items-center rounded-full border border-line"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Menü"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-[1400px] px-6"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              <div className="grid grid-cols-12 gap-0">
                {/* 3 columns of categories */}
                <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
                  {MEGA_GROUPS.map((group) => (
                    <div key={group.title} className="bg-background/40 p-6">
                      <div className="eyebrow mb-5 text-poppy">{group.title}</div>
                      <ul className="space-y-1">
                        {group.items.map((it) => {
                          const Icon = it.icon;
                          return (
                            <li key={it.name}>
                              <Link
                                to="/szolgaltatasok"
                                className="group flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 transition-colors hover:bg-foreground/[0.04]"
                              >
                                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-background/60 text-foreground/70 group-hover:text-poppy group-hover:border-poppy/40 transition-colors">
                                  <Icon className="size-3.5" strokeWidth={1.5} />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-[13px] font-medium leading-tight group-hover:text-foreground">
                                    {it.name}
                                  </span>
                                  <span className="mt-0.5 block text-[11.5px] leading-snug text-muted-foreground">
                                    {it.desc}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured panel */}
                <div className="col-span-12 lg:col-span-3 relative bg-surface-elevated/60 p-6 flex flex-col justify-between min-h-[280px]">
                  <div className="absolute inset-0 opacity-30">
                    <img src={poppyConcrete} alt="" className="size-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 to-transparent" />
                  </div>
                  <div className="relative">
                    <div className="eyebrow mb-3 inline-flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-sage" />
                      Szezon favorit
                    </div>
                    <h4 className="font-serif text-2xl leading-tight">
                      Japán arcmasszázs — speciális arcszobrász technika
                    </h4>
                  </div>
                  <Link
                    to="/szolgaltatasok"
                    className="relative inline-flex items-center gap-2 text-[12px] text-mono text-foreground/80 hover:text-poppy transition-colors"
                  >
                    Összes szolgáltatás megtekintése
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
              {/* Bottom row: contact */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-background/40 px-6 py-3">
                <span className="eyebrow">Budapest II. ker. · Fő utca 49.</span>
                <span className="text-[12px] text-mono text-foreground/60">
                  Egyetlen kezelőágy. Csak Ön és a szakértelem.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-[64px] bg-background z-40"
          >
            <div className="px-6 py-8 space-y-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-line text-2xl font-serif"
                >
                  {item.label}
                  <ArrowUpRight className="size-5 text-muted-foreground" />
                </Link>
              ))}
              <a
                href="tel:+36306582730"
                className="mt-8 flex items-center gap-2 text-mono text-sm text-muted-foreground"
              >
                <Phone className="size-4" />
                +36 30 658 2730
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
