import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/rolam")({
  head: () => ({
    meta: [
      { title: "Rólam — Paksi Anett kozmetikus | Makovsky Beauty" },
      { name: "description", content: "Paksi Anett kozmetikus mester, Makovsky Beauty alapítója. Budapest II. kerület, Fő utca 49." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rólam · Paksi Anett"
        title={<>Hivatásom <em className="italic text-poppy">a bőröd.</em></>}
        lead="Szeretettel várlak szalonomba Budapest II. kerületében, a Fő utca 49. szám alatt, közel a Batthyány térhez, mégis nyugodt, a város zajától védett, csendes helyen."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-display text-2xl md:text-3xl leading-snug">
              <span className="text-poppy text-4xl leading-none align-top mr-2">„</span>
              A bőrproblémák megoldásán túl a legnagyobb és számomra legszebb dolog az, hogy problémamegoldó és egyben relaxáló, lelket is feltöltő szolgáltatásaimat pihentető, csendes környezetben, teljeskörű odafigyeléssel igyekszem vendégeimnek nyújtani.
            </p>
            <p className="text-foreground/80 text-base leading-relaxed">
              A szalon kialakítása is ennek a tükrében zajlott. Itt minden kis apróság a vendég kényelmét szolgálja. Csak ő és én vagyunk jelen a látogatás első pillanatától az elköszönésig.
            </p>
            <p className="text-foreground/80 text-base leading-relaxed">
              Hivatásomnak érzem ezt a szakmát, amely tele van kihívásokkal, meglepetésekkel és örömmel.
            </p>
            <p className="text-mono text-[12px] text-muted-foreground uppercase tracking-widest">
              — Paksi Anett, kozmetikus mester
            </p>
          </div>
          <aside className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-line bg-surface p-6">
              <div className="eyebrow text-poppy">Szakmai értékek</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3"><span className="text-poppy">·</span> Privát szalon — egyetlen kezelőágy</li>
                <li className="flex gap-3"><span className="text-poppy">·</span> Folyamatos szakmai továbbképzés</li>
                <li className="flex gap-3"><span className="text-poppy">·</span> Orvoskozmetikai és vegán márkák</li>
                <li className="flex gap-3"><span className="text-poppy">·</span> Személyre szabott bőrdiagnosztika</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-line bg-surface p-6">
              <div className="eyebrow">Hol találsz</div>
              <p className="mt-3 text-sm">
                1011 Budapest, II. kerület<br />
                Fő utca 49. (Batthyány tér közelében)
              </p>
              <a href="tel:+36306582730" className="mt-3 inline-block text-mono text-sm text-poppy">+36 30 658 2730</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
