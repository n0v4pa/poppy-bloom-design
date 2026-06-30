import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { FileText, ShieldCheck, Cookie, Scale } from "lucide-react";

export const Route = createFileRoute("/dokumentumok")({
  head: () => ({
    meta: [
      { title: "Dokumentumok — Makovsky Beauty" },
      { name: "description", content: "Impresszum, ÁSZF, adatkezelési tájékoztató és sütitájékoztató — a Makovsky Beauty hivatalos dokumentumai." },
    ],
  }),
  component: DocsPage,
});

const DOCS = [
  { icon: FileText, t: "Impresszum", d: "A szolgáltató adatai és elérhetőségei.", href: "https://makovskybeauty.hu/impresszum" },
  { icon: Scale, t: "ÁSZF", d: "Általános szerződési feltételek.", href: "https://makovskybeauty.hu/aszf" },
  { icon: ShieldCheck, t: "Adatkezelési tájékoztató", d: "Hogyan kezeljük a személyes adataidat.", href: "https://makovskybeauty.hu/adatkezeles-2" },
  { icon: Cookie, t: "Sütitájékoztató", d: "Milyen sütiket használ az oldal.", href: "https://makovskybeauty.hu/sutitajekoztato" },
];

function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dokumentumok"
        title={<>Átláthatóság és <em className="italic text-poppy">bizalom.</em></>}
        lead="A szalon működésével kapcsolatos hivatalos dokumentumok egy helyen."
      />
      <section className="mx-auto max-w-[1100px] px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        {DOCS.map((d) => {
          const Icon = d.icon;
          return (
            <a
              key={d.t}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-3xl border border-line bg-surface/50 p-6 hover:border-poppy/40 transition-colors"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-background/60 text-foreground/70 group-hover:text-poppy group-hover:border-poppy/40 transition-colors">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-display text-xl">{d.t}</h3>
                <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{d.d}</p>
              </div>
            </a>
          );
        })}
      </section>
    </>
  );
}
