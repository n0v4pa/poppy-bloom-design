import type { ReactNode } from "react";

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
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="eyebrow text-poppy">{eyebrow}</p>
        <h1 className="mt-6 text-display text-5xl md:text-7xl lg:text-[88px] max-w-5xl">{title}</h1>
        {lead ? (
          <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
