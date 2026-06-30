import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/szolgaltatasok")({
  head: () => ({
    meta: [
      { title: "Szolgáltatások — Makovsky Beauty" },
      { name: "description", content: "Kezelések és szolgáltatások a Makovsky Beauty szalonban: arckezelések, masszázsok, lágylézer, neurokozmetika." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Szolgáltatások"
        title={<>Kezelések és <em className="italic text-poppy">rituálék</em></>}
        lead="A szolgáltatások oldala fejlesztés alatt. Itt találod majd a teljes kezelési kínálatot — arckezelések, masszázsok, technológiák és szezonális ajánlatok."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="rounded-3xl border border-line p-10 text-center">
          <p className="text-mono eyebrow text-poppy">Hamarosan</p>
          <h2 className="mt-3 text-display text-3xl">A kezelés-katalógus folyamatban van.</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm">
            Addig is hívj minket bizalommal a +36 30 658 2730 számon, vagy nézd meg az aktuális ajánlatokat.
          </p>
        </div>
      </section>
    </>
  );
}
