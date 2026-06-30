"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Droplets, Sparkles, Sun, Shield, ArrowRight } from "lucide-react";

const TABS = [
  {
    id: "dry",
    icon: Droplets,
    title: "Dehidratált",
    cn: "Száraz, fáradt, fénytelen bőr",
    headline: "Mély hidratálás, helyreállított ragyogás.",
    desc: "A bőröd kortól és környezeti hatásoktól függetlenül vágyik a folyadékra. Az orvoskozmetikai hialuronsav-komplex és a Biodroga 3D technológia helyreállítja a víztartalmat a sejtek szintjén.",
    treatments: ["Biodroga MD hidratáló kezelés", "EGF Anti-age arckezelés", "3D technológiás feszesítés"],
  },
  {
    id: "sensitive",
    icon: Shield,
    title: "Érzékeny",
    cn: "Rozácea, irritáció, gyulladásra hajlamos",
    headline: "Nyugtatás, megerősítés, csendben.",
    desc: "Az érzékeny bőr nem hibás bőr — csak megfelelő figyelmet igényel. A Biodroga Csipkerózsika és a ROSEMEI kezelések fokozatosan helyreállítják a védőréteget irritáció nélkül.",
    treatments: ["Biodroga Csipkerózsika", "ROSEMEI nyugtató kezelés", "Hiperérzékeny bőr nyugtatása"],
  },
  {
    id: "oily",
    icon: Sparkles,
    title: "Zsíros",
    cn: "Pattanásos, szeborreás, problémás",
    headline: "Mélytisztítás, egyensúly, tisztább bőr.",
    desc: "A zsíros bőr nem ellenség — csak más a kódja. A MEI Detox és a Biodroga MD Clear+ orvoskozmetikai kezelések szabályozzák a faggyútermelést és csökkentik a gyulladást.",
    treatments: ["MEI Detox mélytisztító", "Biodroga MD Clear+", "Balancing lágylézer kezelés"],
  },
  {
    id: "mature",
    icon: Sun,
    title: "Érett",
    cn: "Anti-age, lifting, megújulás",
    headline: "Tudományos fiatalítás, természetesen.",
    desc: "A fiatalság nem visszahozható, de a bőröd vitalitása igen. Az Arkana GABA Therapy és a Juchheim BYEBYEAGE peptidek és őssejtek kombinációjával stimulálják a kollagén-termelést.",
    treatments: ["Arkana GABA Therapy", "Juchheim BYEBYEAGE", "GMS Botox Effect Pro"],
  },
];

export function SkinTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const current = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="eyebrow text-poppy">Bőrtípus diagnosztika</p>
          <h2 className="mt-5 text-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Milyen <em className="italic text-poppy">a te</em> bőröd?
          </h2>
          <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-md">
            Válassz egy bőrtípust és nézd meg, milyen kezelési útvonalat ajánlunk. Minden látogatás
            bőrdiagnosztikával kezdődik — itt egy gyors előzetes.
          </p>
        </div>

        {/* Right interactive */}
        <div className="lg:col-span-7 space-y-3">
          {/* Tabs */}
          <div className="grid grid-cols-4 gap-1.5">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={`group relative flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-poppy/50 bg-poppy/[0.06]"
                      : "border-line bg-surface hover:border-line-strong"
                  }`}
                >
                  <Icon
                    className={`size-5 transition-colors ${
                      isActive ? "text-poppy" : "text-foreground/60"
                    }`}
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className={`text-sm font-medium leading-none ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                      {t.title}
                    </div>
                    <div className="mt-1.5 text-mono text-[10px] uppercase tracking-widest text-muted-foreground line-clamp-1">
                      {t.cn}
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-poppy/40"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-line bg-surface overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <h3 className="text-display text-3xl md:text-4xl leading-tight">
                  {current.headline}
                </h3>
                <p className="mt-5 text-base text-foreground/75 leading-relaxed">
                  {current.desc}
                </p>
              </div>
              <div className="border-t border-line bg-background/40 p-8 md:p-10">
                <div className="eyebrow mb-5">Ajánlott kezelések</div>
                <ul className="space-y-3">
                  {current.treatments.map((tr, i) => (
                    <li
                      key={tr}
                      className="group flex items-center justify-between gap-4 border-b border-line/50 last:border-0 pb-3 last:pb-0"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-mono text-[11px] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base md:text-lg">{tr}</span>
                      </span>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:text-poppy group-hover:translate-x-1 transition-all" />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
