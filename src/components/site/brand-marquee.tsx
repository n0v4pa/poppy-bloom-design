"use client";

const ITEMS = [
  "Biodroga Medical Institute",
  "Vagheggi Phytocosmetici",
  "Arkana Neurokozmetika",
  "MEI Beauty",
  "Juchheim Cosmetics",
  "GMS Beauty",
  "Biodroga Organic",
  "Lágylézer technológia",
];

export function BrandMarquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Márkák, amelyekkel dolgozunk"
      className="relative border-y border-line bg-surface/40 py-8 overflow-hidden"
    >
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-mono text-sm uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span>{item}</span>
            <span className="size-1 rounded-full bg-poppy/60" />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </section>
  );
}
