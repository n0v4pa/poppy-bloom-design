"use client";

import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  MoonStar,
  SunMedium,
  Home,
  User,
  Sparkles,
  Images,
  BookOpen,
  Mail,
  Star,
  HelpCircle,
  ScrollText,
  FlaskConical,
  FileText,
  CalendarClock,
  MapPin,
  Tag,
} from "lucide-react";
import { useTheme } from "./theme-provider";
import poppyConcrete from "@/assets/poppy-concrete.jpg";

type MegaItem = {
  icon: typeof User;
  name: string;
  desc: string;
  href: string;
};
type MegaGroup = { title: string; items: MegaItem[] };

const MEGA_GROUPS: MegaGroup[] = [
  {
    title: "Szalon",
    items: [
      { icon: Home, name: "Kezdőlap", desc: "Vissza a főoldalra", href: "/" },
      { icon: User, name: "Rólam", desc: "Paksi Anett kozmetikus", href: "/rolam" },
      { icon: Sparkles, name: "Szolgáltatások", desc: "Teljes kezelési kínálat", href: "/szolgaltatasok" },
      { icon: Tag, name: "Aktuális ajánlatok", desc: "Szezonális kedvezmények", href: "/aktualis-ajanlatok" },
      { icon: Images, name: "Galéria", desc: "A szalon és a kezelések", href: "/galeria" },
    ],
  },
  {
    title: "Tudástár",
    items: [
      { icon: BookOpen, name: "Blog", desc: "Szakmai cikkek, hírek", href: "/blog" },
      { icon: Star, name: "Referenciák", desc: "Vendégeim visszajelzései", href: "/referenciak" },
      { icon: HelpCircle, name: "GYIK", desc: "Gyakori kérdések", href: "/gyik" },
      { icon: ScrollText, name: "Szalonetikett", desc: "Hogyan készülj a látogatásra", href: "/szalonetikett" },
      { icon: CalendarClock, name: "Kapcsolat", desc: "Foglalás, elérhetőség", href: "/kapcsolat" },
    ],
  },
  {
    title: "Márkák & dokumentumok",
    items: [
      { icon: FlaskConical, name: "Kozmetikai márkák", desc: "Biodroga, Vagheggi, MEI, GMS…", href: "/markak" },
      { icon: Mail, name: "Hírlevél", desc: "Iratkozz fel az újdonságokra", href: "/hirlevel" },
      { icon: FileText, name: "Dokumentumok", desc: "Impresszum, ÁSZF, adatkezelés", href: "/dokumentumok" },
    ],
  },
];

/** Animated hamburger → X (works on all viewports) */
function MorphIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <motion.line
        x1="3" x2="21"
        animate={open ? { y1: 12, y2: 12, rotate: 45 } : { y1: 7, y2: 7, rotate: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.line
        x1="3" x2="21" y1="12" y2="12"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="3" x2="21"
        animate={open ? { y1: 12, y2: 12, rotate: -45 } : { y1: 17, y2: 17, rotate: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className={`flex items-center justify-between rounded-full border border-line transition-all duration-500 ${
            scrolled ? "h-12 px-3 glass" : "h-14 px-4 bg-background/40 backdrop-blur-md"
          }`}
        >
          {/* Left: Menu trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menü"
            aria-expanded={menuOpen}
            className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[12px] text-foreground/80 hover:text-foreground hover:border-line-strong transition-colors"
          >
            <MorphIcon open={menuOpen} />
            <span className="text-mono uppercase tracking-widest text-[11px]">
              {menuOpen ? "Bezárás" : "Menü"}
            </span>
          </button>

          {/* Center: Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative inline-block size-2.5 rounded-full bg-poppy">
              <span className="absolute inset-0 rounded-full bg-poppy animate-ping opacity-40" />
            </span>
            <span className="font-serif text-lg leading-none tracking-tight">
              Makovsky <span className="text-poppy italic">Beauty</span>
            </span>
          </Link>

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
            <Link
              to="/kapcsolat"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-[12px] font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Időpontfoglalás
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-[1400px] px-6"
          >
            <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              <div className="grid grid-cols-12 gap-0">
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
                                to={it.href as any}
                                onClick={() => setMenuOpen(false)}
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
                      Látogatás
                    </div>
                    <h4 className="font-serif text-2xl leading-tight">
                      Egyetlen kezelőágy. Teljes figyelem.
                    </h4>
                    <p className="mt-2 text-[12px] text-muted-foreground leading-snug">
                      Budapest II. kerület · Fő utca 49.
                    </p>
                  </div>
                  <Link
                    to="/kapcsolat"
                    onClick={() => setMenuOpen(false)}
                    className="relative inline-flex items-center gap-2 text-[12px] text-mono text-foreground/80 hover:text-poppy transition-colors"
                  >
                    <MapPin className="size-3.5" />
                    Útvonal & elérhetőség
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-background/40 px-6 py-3">
                <span className="eyebrow">Paksi Anett · kozmetikus mester</span>
                <a href="tel:+36306582730" className="text-[12px] text-mono text-foreground/70 hover:text-poppy">
                  +36 30 658 2730
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
