import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galéria — Makovsky Beauty" },
      { name: "description", content: "Pillantás a Makovsky Beauty szalon belső tereibe, kezeléseibe és atmoszférájába." },
    ],
  }),
  component: GalleryPage,
});

const TILES = [
  { className: "col-span-2 row-span-2 aspect-square", label: "A szalon" },
  { className: "col-span-1 row-span-1 aspect-square", label: "Részlet" },
  { className: "col-span-1 row-span-2 aspect-[1/2]", label: "Növények" },
  { className: "col-span-1 row-span-1 aspect-square", label: "Beton fal" },
  { className: "col-span-2 row-span-1 aspect-[2/1]", label: "Kezelőágy" },
  { className: "col-span-1 row-span-1 aspect-square", label: "Eszközök" },
  { className: "col-span-1 row-span-1 aspect-square", label: "Termékek" },
  { className: "col-span-2 row-span-1 aspect-[2/1]", label: "Atmoszféra" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galéria"
        title={<>Pillanatok a <em className="italic text-poppy">szalonból.</em></>}
        lead="Beton, pipacs, növények, csend. A tér, ahol a vendégek elengedik magukat."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 md:gap-4">
          {TILES.map((t, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-surface ${t.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-poppy/10 via-transparent to-sage/10 opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-mono text-[10px] uppercase tracking-widest text-foreground/60">
                <span>{String(i + 1).padStart(2, "0")} / {TILES.length}</span>
                <span>{t.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-muted-foreground text-sm">
          A galéria hamarosan valódi képekkel bővül.
        </p>
      </section>
    </>
  );
}
