"use client";

const TESTIMONIALS = [
  {
    name: "Melinda Tóbelné Mildner",
    text: "Anett szuper, szuper, szuper! Profi termékekkel, profi szaktudással, türelemmel. Nagyon kedves! Csak ajánlani tudom mindenkinek!",
  },
  {
    name: "Kyru Okiro",
    text: "Fantasztikus volt az arckezelés és a masszázs, csodás a szalon, Anett kiváló szakember, a weboldalán mindig vannak klassz akciók, érdemes feliratkozni.",
  },
  {
    name: "Zita Major",
    text: "Anettet azért kerestem fel, mert érzem, hogy a bőröm kezd változni, látszani a korom rajta. Hidratáló és feszesítő hatású kezelést kértem. Nagyszerűen sikerült, meg vagyok elégedve az eredménnyel.",
  },
  {
    name: "Dóra Virág",
    text: "Nyugodt, kellemes környezet. A szolgáltatások széles választékából tudta ajánlani Anett a számomra megfelelőt. A kezelés után felfrissülve távoztam!",
  },
  {
    name: "Ágnes Kóczi-Kocsis",
    text: "Minőségi termékekkel minőségi kezelések. Anett nagyon kedves, felkészült, a kezelés élmény, megnyugtató, ellazító, kényeztető, akkor is, ha éppen arctisztításról van szó.",
  },
  {
    name: "Enikő Zsiros-Rőth",
    text: "Professzionális kezelések, nyugodt hangulat, Anett kezei alatt egy élmény megszépülni és kikapcsolódni! A Biodroga termékekkel csodás változásokat értünk el.",
  },
  {
    name: "Katalin",
    text: "Barátságos, kedves kiszolgálás, hatékony kezelések. Olyan szalon, ahová az ember szívesen tér vissza.",
  },
  {
    name: "Olga Volkova",
    text: "Top! A részletekre való odafigyelés és Anett kedvessége mindenért kárpótol.",
  },
];

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="eyebrow text-poppy">Vendégeink mondják</p>
          <h2 className="mt-5 text-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Ők már elégedettek. <em className="italic text-poppy">És te?</em>
          </h2>
        </div>
        <p className="text-mono text-[12px] uppercase tracking-widest text-muted-foreground max-w-xs">
          Valódi vélemények · Google &amp; Facebook
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="mb-4 break-inside-avoid rounded-2xl border border-line bg-surface p-6 hover:border-line-strong transition-colors"
          >
            <blockquote className="text-[15px] leading-relaxed text-foreground/85">
              "{t.text}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span className="grid size-8 place-items-center rounded-full bg-poppy/15 text-poppy text-mono text-[11px]">
                {t.name.charAt(0)}
              </span>
              <span className="text-sm font-medium">{t.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
