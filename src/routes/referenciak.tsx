import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/referenciak")({
  head: () => ({
    meta: [
      { title: "Referenciák — Makovsky Beauty" },
      { name: "description", content: "Vendégeim visszajelzései a Makovsky Beauty szalon kezeléseiről." },
    ],
  }),
  component: ReferencesPage,
});

const REFS = [
  { name: "Melinda Tóbelné Mildner", text: "Anett Szuper, Szuper, Szuper!!! Profi termékekkel, profi szaktudással, türelemmel. Nagyon nagyon kedves! Csak ajánlani tudom mindenkinek!" },
  { name: "Kyru Okiro", text: "Fantasztikus volt az arckezelés és a masszázs, csodás a szalon, Anett kiváló szakember, a weboldalán mindig vannak klassz akciók, érdemes feliratkozni. ♥️" },
  { name: "Zita Major", text: "Anettet azért kerestem fel, mert érzem, hogy a bőröm kezd változni. Hidratáló és feszesítő hatású kezelést kértem. Nagyszerűen sikerült, meg vagyok elégedve az eredménnyel." },
  { name: "Dóra Virág", text: "Nyugodt, kellemes környezet. A szolgáltatások széles választékából tudta ajánlani Anett a számomra megfelelőt. Felfrissülve távoztam!" },
  { name: "Ágnes Kóczi-Kocsis", text: "Minőségi termékekkel minőségi kezelések. Anett nagyon kedves, felkészült, a kezelés élmény — megnyugtató, ellazító, kényeztető." },
  { name: "Enikő Zsiros-Rőth", text: "Professzionális kezelések, nyugodt hangulat, Anett kezei alatt egy élmény megszépülni és kikapcsolódni! A Biodroga termékekkel csodás változásokat értünk el." },
];

function ReferencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Referenciák"
        title={<>Ők már elégedettek. <em className="italic text-poppy">És te?</em></>}
        lead="Néhány vendégem visszajelzése — köszönöm a bizalmat."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {REFS.map((r) => (
          <figure key={r.name} className="rounded-3xl border border-line bg-surface/60 p-6">
            <blockquote className="text-foreground/85 text-sm leading-relaxed">„{r.text}”</blockquote>
            <figcaption className="mt-4 eyebrow text-poppy">— {r.name}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
