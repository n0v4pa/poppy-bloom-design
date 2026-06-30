import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/gyik")({
  head: () => ({
    meta: [
      { title: "GYIK — Gyakori kérdések | Makovsky Beauty" },
      { name: "description", content: "Gyakran ismételt kérdések a Makovsky Beauty szalonban végzett kezelésekről." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  { q: "Hogyan tudok időpontot foglalni?", a: "Telefonon a +36 30 658 2730 számon, vagy a kapcsolati oldalon található űrlapon keresztül." },
  { q: "Mit hozzak magammal az első alkalomra?", a: "Csak magadat — minden egyebet biztosítok. Az első találkozáson alapos beszélgetéssel és bőrdiagnózissal kezdünk." },
  { q: "Lemondhatom a foglalásomat?", a: "Igen, de kérlek, legalább 24 órával az időpont előtt jelezd, hogy másnak fel tudjam ajánlani az időpontot." },
  { q: "Milyen termékekkel dolgozol?", a: "Biodroga (Organic & Medical), Vagheggi, MEI Beauty, GMS Beauty — kizárólag prémium, orvoskozmetikai és vegán márkák." },
  { q: "Vannak-e otthoni ápolási javaslatok?", a: "Igen — a bőrdiagnózis után e-mailben kapsz személyre szabott otthoni ápolási és kúrajavaslatot." },
];

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="GYIK"
        title={<>Gyakori <em className="italic text-poppy">kérdések.</em></>}
        lead="Ha bármi nem szerepel a listán, hívj bizalommal."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-3">
        {FAQS.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-line bg-surface/40 p-5 open:bg-surface/80">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="text-base md:text-lg font-medium">{f.q}</span>
              <span className="text-poppy text-xl leading-none group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
