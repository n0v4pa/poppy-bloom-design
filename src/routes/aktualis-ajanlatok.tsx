import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/aktualis-ajanlatok")({
  head: () => ({
    meta: [
      { title: "Aktuális ajánlatok — Makovsky Beauty" },
      { name: "description", content: "Időszakos akciók, kedvezmények és szezonális csomagok a Makovsky Beauty szalonban." },
    ],
  }),
  component: OffersPage,
});

const OFFERS = [
  { tag: "Tavaszi favorit", title: "Arctisztító kezelés Biodroga MD savval", price: "—15%", desc: "Pigmentfoltok és tisztátalanságok kezelése orvoskozmetikai savakkal." },
  { tag: "Új", title: "Japán arcmasszázs csomag", price: "5 alkalom", desc: "Speciális arcszobrász technika, lifting hatással." },
  { tag: "Limitált", title: "MEI Beauty Anti-age", price: "kedvezmény", desc: "Innovatív kínai prémium kozmetikum, kollagén-stimuláló komplexszel." },
];

function OffersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aktuális ajánlatok"
        title={<>Szezonális <em className="italic text-poppy">kedvezmények.</em></>}
        lead="Időszakos akciók és csomagajánlatok — limitált ideig elérhető kezelések kedvezményes áron."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OFFERS.map((o) => (
            <article
              key={o.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-line bg-surface p-6 min-h-[300px] overflow-hidden hover:border-poppy/40 transition-colors"
            >
              <div className="absolute -top-12 -right-12 size-40 rounded-full bg-poppy/10 blur-3xl group-hover:bg-poppy/20 transition-colors" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-poppy/30 px-3 py-1 text-mono text-[10px] uppercase tracking-widest text-poppy">
                  <span className="size-1.5 rounded-full bg-poppy" />
                  {o.tag}
                </div>
                <h3 className="mt-6 text-display text-2xl leading-tight">{o.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{o.desc}</p>
              </div>
              <div className="relative mt-6 flex items-end justify-between border-t border-line pt-4">
                <span className="text-mono text-[11px] uppercase tracking-widest text-muted-foreground">Ajánlatkód</span>
                <span className="text-display text-2xl text-poppy">{o.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
