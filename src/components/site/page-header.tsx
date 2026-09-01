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
    <section className="relative isolate -mt-24 overflow-hidden border-b border-line">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-b from-poppy/5 via-transparent to-transparent" />
      </div>

      {/* Ugyanaz a pipacs mindkét témában. A túlméretezett kép szándékosan
          kifut a hero szélein, miközben a bal/jobb és alsó átmenet a
          háttérbe homogenizálja. Felül nincs fade: a fejléc alá belóghat. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[88%] sm:w-[72%] lg:w-[58%]"
      >
        <img
          src={poppyHero}
          alt=""
          className="absolute -right-[16%] -top-[8%] h-[128%] w-auto max-w-none object-contain object-top-right opacity-65 sm:-right-[10%] sm:opacity-78 lg:-right-[7%] lg:opacity-90"
          width={1024}
          height={1280}
        />
        <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[14%] bg-gradient-to-l from-background/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-background via-background/55 to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[500px] max-w-[1400px] items-center px-6 pt-36 pb-16 md:min-h-[570px] md:pt-40 md:pb-20 lg:grid-cols-[minmax(0,0.68fr)_minmax(360px,0.32fr)] lg:pt-44 lg:pb-24">
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
        <div aria-hidden="true" />
      </div>
    </section>
  );
}
