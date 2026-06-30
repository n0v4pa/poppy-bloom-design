import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/szalonetikett")({
  head: () => ({
    meta: [
      { title: "Szalonetikett — Makovsky Beauty" },
      { name: "description", content: "Hogyan készülj a Makovsky Beauty szalon látogatására — pár gondolat a zavartalan élményért." },
    ],
  }),
  component: EtiquettePage,
});

const RULES = [
  { t: "Érkezés", d: "Kérlek, érkezz pontosan a foglalt időpontodra. 5-10 perccel előbb már nyugodtan helyet foglalhatsz a váróban." },
  { t: "Lemondás", d: "Ha valami közbejön, legalább 24 órával az időpont előtt jelezd — így másnak is fel tudom ajánlani az időt." },
  { t: "Mobiltelefon", d: "A szalon csendje a kezelés része. Kérlek, kapcsold néma üzemmódba a telefonodat a látogatás idejére." },
  { t: "Kísérők", d: "Mivel egyetlen kezelőágy van, és a teljes figyelem a vendégé, kísérőket csak előzetes egyeztetés után tudok fogadni." },
  { t: "Allergia & gyógyszerek", d: "Az első beszélgetésen kérlek, oszd meg, ha bármilyen allergiád, krónikus betegséged van, vagy rendszeresen szedsz gyógyszert." },
  { t: "Fizetés", d: "Készpénzes és bankkártyás fizetésre is van lehetőség. Ajándékutalvány bármely összegre váltható." },
];

function EtiquettePage() {
  return (
    <>
      <PageHeader
        eyebrow="Szalonetikett"
        title={<>Pár gondolat a <em className="italic text-poppy">zavartalan élményért.</em></>}
        lead="A Makovsky Beauty privát szalon — egyetlen kezelőággyal és teljes figyelemmel. Az alábbiak ezt az élményt segítik."
      />
      <section className="mx-auto max-w-[1100px] px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        {RULES.map((r, i) => (
          <div key={r.t} className="rounded-3xl border border-line bg-surface/50 p-6">
            <div className="text-mono text-[11px] text-poppy uppercase tracking-widest">0{i + 1}</div>
            <h3 className="mt-2 text-display text-2xl">{r.t}</h3>
            <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{r.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
