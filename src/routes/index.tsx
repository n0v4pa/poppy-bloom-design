import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown, MapPin, Phone, Gift } from "lucide-react";

import { SkinTabs } from "@/components/site/skin-tabs";
import { BrandMarquee } from "@/components/site/brand-marquee";
import { Testimonials } from "@/components/site/testimonials";

import salonHero from "@/assets/salon-hero.jpg";
import poppyConcrete from "@/assets/poppy-concrete.jpg";
import textureWater from "@/assets/texture-water.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makovsky Beauty — Prémium kozmetikai szalon Budapesten" },
      { name: "description", content: "Paksi Anett privát kozmetikai szalonja a Fő utca 49. szám alatt. Orvoskozmetika, Biodroga, Vagheggi, japán arcmasszázs, lágylézer." },
      { property: "og:title", content: "Makovsky Beauty — Egy kezelőágy. Teljes figyelem." },
      { property: "og:description", content: "Privát szalon Budapest II. kerületében. Orvoskozmetika és tudományos bőrápolás csendes környezetben." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <SkinTabs />
      <Philosophy />
      <BlogPreview />
      <Testimonials />
      <Voucher />
      <Visit />
    </>
  );
}

/* ============================================================
   HERO — kinetic display headline, parallax image, status row
   ============================================================ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate -mt-24 min-h-[100svh] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 -z-10">
        <img src={salonHero} alt="" className="size-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </motion.div>

      {/* Top status bar */}
      <div className="relative mx-auto max-w-[1400px] px-6 pt-32 md:pt-36">
        <div className="flex items-center gap-3 text-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="size-1.5 rounded-full bg-sage animate-pulse" />
          Privát szalon · Budapest II. ker. Fő u. 49.
        </div>
      </div>

      {/* Headline */}
      <motion.div style={{ y: titleY, opacity }} className="relative mx-auto max-w-[1400px] px-6 pt-10 md:pt-14">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] max-w-[14ch]"
        >
          Egy kezelőágy.{" "}
          <em className="italic text-poppy">Teljes figyelem.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed"
        >
          <span className="text-foreground">Üdvözöllek!</span> Paksi Anett vagyok. Szeretettel várlak
          szalonomba — ahol a látogatás első pillanatától az elköszönésig csak Te és én vagyunk
          jelen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#foglalas"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium transition-transform hover:scale-[1.02]"
          >
            Időpontot foglalok
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            to="/szolgaltatasok"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-background/40 backdrop-blur-md px-6 py-3.5 text-sm font-medium hover:border-line-strong"
          >
            Kezelések böngészése
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom stat strip */}
      <div className="relative mx-auto max-w-[1400px] px-6 pb-12 mt-20 md:mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {[
            { k: "15+", v: "év szakmai tapasztalat" },
            { k: "1", v: "kezelőágy — csak Te" },
            { k: "8+", v: "prémium kozmetikai márka" },
            { k: "II.", v: "kerület · Fő utca 49." },
          ].map((s) => (
            <div key={s.v} className="bg-background/60 backdrop-blur-md p-5">
              <div className="text-display text-3xl md:text-4xl text-poppy">{s.k}</div>
              <div className="mt-1 text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <ArrowDown className="size-3 animate-bounce" />
        Görgess
      </div>
    </section>
  );
}

/* ============================================================
   PHILOSOPHY — large quote with side imagery
   ============================================================ */
function Philosophy() {
  return (
    <section className="relative border-y border-line bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-line">
            <img src={textureWater} alt="Csepp egy levelen" className="size-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-mono text-[10px] uppercase tracking-widest text-foreground/80">
              <span>Részlet</span>
              <span className="text-poppy">001</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow text-poppy">Filozófia</p>
          <h2 className="mt-5 text-display text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
            <span className="text-poppy text-5xl leading-none align-top mr-1">„</span>
            A bőrproblémák megoldásán túl a legnagyobb és számomra legszebb dolog az, hogy
            problémamegoldó és egyben relaxáló, lelket is feltöltő szolgáltatásaimat
            <em className="italic text-poppy"> pihentető, csendes környezetben</em>, teljeskörű
            odafigyeléssel igyekszem vendégeimnek nyújtani.
          </h2>
          <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-2xl">
            A szalon kialakítása is ennek a tükrében zajlott. Itt minden kis apróság a vendég
            kényelmét szolgálja. Csak ő és én vagyunk jelen a látogatás első pillanatától az
            elköszönésig.
          </p>
          <p className="mt-6 text-mono text-[12px] uppercase tracking-widest text-muted-foreground">
            — Paksi Anett, kozmetikus mester
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BLOG PREVIEW
   ============================================================ */
function BlogPreview() {
  const posts = [
    { tag: "Kezelések", date: "2024.01.14.", title: "Japán arcmasszázs — speciális arcszobrász technika" },
    { tag: "Kezelések", date: "2024.01.14.", title: "Lifting — a megereszkedett arckontúrok kezelése" },
    { tag: "Kezelések", date: "2024.01.14.", title: "Rádiófrekvencia és elektroporáció" },
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="eyebrow text-poppy">Blog</p>
          <h2 className="mt-5 text-display text-5xl md:text-6xl leading-[0.95]">
            Szakmai <em className="italic text-poppy">írások</em>
          </h2>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-mono text-sm uppercase tracking-widest text-foreground/70 hover:text-poppy transition-colors"
        >
          Összes cikk
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((p, i) => (
          <Link
            key={i}
            to="/blog"
            className="group relative overflow-hidden rounded-3xl border border-line bg-surface hover:border-poppy/30 transition-colors"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-poppy/15 via-background to-sage/15" />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-mono text-[10px] uppercase tracking-widest text-foreground/80">
                <span>{p.tag}</span>
                <span className="size-1 rounded-full bg-poppy" />
                <span>{p.date}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-display text-2xl leading-tight group-hover:text-poppy transition-colors">
                {p.title}
              </h3>
              <span className="mt-5 inline-flex items-center gap-1.5 text-mono text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-poppy">
                Olvasom <ArrowUpRight className="size-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   VOUCHER CTA
   ============================================================ */
function Voucher() {
  return (
    <section className="mx-auto max-w-[1400px] px-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-line">
        <img src={poppyConcrete} alt="" className="absolute inset-0 size-full object-cover -z-10" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30 -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 md:p-16 lg:p-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-poppy/40 bg-poppy/10 px-3 py-1 text-mono text-[10px] uppercase tracking-widest text-poppy">
              <Gift className="size-3" /> Ajándékutalvány
            </div>
            <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              Ajándékozz <em className="italic text-poppy">énidőt.</em>
            </h2>
            <p className="mt-6 max-w-md text-base text-foreground/75 leading-relaxed">
              Arckezelésre, masszázsra, feltöltődésre ad lehetőséget ez a névre szóló ajándékutalvány,
              amely bármely összeggel megvásárolható és a Makovsky Beauty szalon valamennyi kozmetikai
              szolgáltatására felhasználható.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+36306582730"
                className="inline-flex items-center gap-2 rounded-full bg-poppy text-white px-6 py-3.5 text-sm font-medium hover:bg-poppy-deep transition-colors"
              >
                Utalvány rendelése
                <ArrowUpRight className="size-4" />
              </a>
              <Link
                to="/aktualis-ajanlatok"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-background/60 backdrop-blur-md px-6 py-3.5 text-sm font-medium"
              >
                Aktuális kedvezmények
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-y-0 right-0 flex flex-col justify-end items-end gap-4">
              <div className="text-mono text-[11px] uppercase tracking-widest text-muted-foreground text-right">
                Tetszőleges összegben<br />
                A szalon minden szolgáltatására
              </div>
              <div className="text-display text-[12rem] leading-none text-foreground/[0.08]">€</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   VISIT — final CTA block
   ============================================================ */
function Visit() {
  return (
    <section id="foglalas" className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line rounded-3xl overflow-hidden border border-line">
        <a
          href="tel:+36306582730"
          className="group relative bg-background/60 p-10 md:p-14 flex flex-col justify-between min-h-[280px] hover:bg-surface transition-colors"
        >
          <Phone className="size-6 text-poppy" strokeWidth={1.5} />
          <div>
            <div className="eyebrow">Foglalj telefonon</div>
            <div className="mt-3 text-display text-4xl md:text-5xl text-mono group-hover:text-poppy transition-colors">
              +36 30 658 2730
            </div>
          </div>
          <ArrowUpRight className="absolute top-10 right-10 size-5 text-foreground/40 group-hover:text-poppy group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </a>
        <a
          href="https://maps.google.com/?q=Budapest+Fő+utca+49"
          target="_blank"
          rel="noreferrer"
          className="group relative bg-background/60 p-10 md:p-14 flex flex-col justify-between min-h-[280px] hover:bg-surface transition-colors"
        >
          <MapPin className="size-6 text-poppy" strokeWidth={1.5} />
          <div>
            <div className="eyebrow">Látogass meg</div>
            <div className="mt-3 text-display text-3xl md:text-4xl group-hover:text-poppy transition-colors">
              Budapest II. ker.<br />
              Fő utca 49.
            </div>
          </div>
          <ArrowUpRight className="absolute top-10 right-10 size-5 text-foreground/40 group-hover:text-poppy group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </a>
      </div>
    </section>
  );
}
