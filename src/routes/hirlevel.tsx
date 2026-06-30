import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/hirlevel")({
  head: () => ({
    meta: [
      { title: "Hírlevél — Makovsky Beauty" },
      { name: "description", content: "Iratkozz fel a Makovsky Beauty hírlevélre — szezonális ajánlatok, új kezelések és szakmai cikkek." },
    ],
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hírlevél"
        title={<>Iratkozz fel az <em className="italic text-poppy">újdonságokra.</em></>}
        lead="Szezonális ajánlatok, új kezelések és bőrápolási tippek — havonta egyszer, kéretlen reklámok nélkül."
      />
      <section className="mx-auto max-w-xl px-6 py-20">
        <form className="space-y-3">
          <input
            type="email"
            required
            placeholder="email@cim.hu"
            className="w-full rounded-full border border-line bg-surface/60 px-5 py-3 text-sm outline-none focus:border-poppy"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
          >
            Feliratkozom
          </button>
          <p className="text-[11px] text-muted-foreground text-center">
            A feliratkozással elfogadod az adatkezelési tájékoztatót.
          </p>
        </form>
      </section>
    </>
  );
}
