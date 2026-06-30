import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/markak")({
  head: () => ({
    meta: [
      { title: "Kozmetikai márkák — Makovsky Beauty" },
      { name: "description", content: "A Makovsky Beauty szalonban használt prémium és orvoskozmetikai márkák: Biodroga, Vagheggi, MEI Beauty, GMS Beauty." },
    ],
  }),
  component: BrandsPage,
});

const BRANDS = [
  { name: "Biodroga", tag: "Medical & Organic", origin: "Németország", desc: "Klinikai hatékonyságú és bio kozmetikumok — a klasszikus német minőség." },
  { name: "Biodroga BioScience", tag: "Orvoskozmetika", origin: "Németország", desc: "Célzott, klinikailag vizsgált hatóanyag-rendszerek érzékeny és problémás bőrre." },
  { name: "Vagheggi", tag: "Fitokozmetika", origin: "Olaszország", desc: "Növényi hatóanyagokra épülő, érzékszervi élményt nyújtó arc- és testkezelések." },
  { name: "MEI Beauty", tag: "Természetes hatóanyagok", origin: "Olaszország", desc: "Elbűvölő, növényi formulák — látványos eredménnyel és kifinomult illatvilággal." },
  { name: "GMS Beauty", tag: "Prémium orvoskozmetika", origin: "Olaszország (Róma)", desc: "Csúcskategóriás professzionális hatóanyagok az anti-age és problémás bőr kezeléséhez." },
  { name: "Arkana", tag: "Neurokozmetika", origin: "Lengyelország", desc: "Neurokozmetikai megközelítés — GABA Therapy, szemkörnyék-ápolás, hatóanyag-bejuttatás." },
  { name: "KRX", tag: "Koreai bőrápolás", origin: "Dél-Korea", desc: "Innovatív koreai bőrápolási protokollok a sugárzó, hidratált bőrért." },
  { name: "Optikop", tag: "Lágylézer technológia", origin: "—", desc: "Akne, rozácea és anti-age kezelésekhez használt csúcstechnológiás lágylézer." },
  { name: "Dr. Derm", tag: "Elektroporáció & RF", origin: "—", desc: "Csúcstechnológiájú hatóanyag-bejuttatás és rádiófrekvenciás feszesítés." },
];

function BrandsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kozmetikai márkák"
        title={<>Csak a <em className="italic text-poppy">legjobbakat</em> a bőrödre.</>}
        lead="A szalonban kizárólag prémium- és orvoskozmetikai márkákkal dolgozom, melyeket folyamatos szakmai továbbképzéseken ismerek és mélyítek meg."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {BRANDS.map((b) => (
          <article key={b.name} className="group rounded-3xl border border-line bg-surface/50 p-6 hover:border-poppy/40 transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl">{b.name}</h3>
              <span className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">{b.origin}</span>
            </div>
            <div className="mt-1 eyebrow text-poppy">{b.tag}</div>
            <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{b.desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}
