import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/rolam")({
  head: () => ({
    meta: [
      { title: "Rólam — Paksi Anett kozmetikus | Makovsky Beauty" },
      { name: "description", content: "Paksi Anett kozmetikus mester, a Makovsky Beauty alapítója. Bemutatkozás, szakmai felkészültség és a szalon filozófiája." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rólam · Paksi Anett"
        title={<>Minden, amit tudnod kell <em className="italic text-poppy">rólam.</em></>}
        lead="Kozmetikus vagyok — hivatásomnak érzem ezt a szakmát, amely tele van kihívásokkal, meglepetésekkel és örömmel."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-16 space-y-24">
        {/* Miért szeretem a munkám */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow text-poppy">01 — Hivatás</div>
            <h2 className="mt-3 text-display text-3xl md:text-4xl leading-tight">
              Miért szeretem <em className="italic">a munkám?</em>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-foreground/85 leading-relaxed">
            <p className="text-display text-xl md:text-2xl leading-snug text-foreground">
              <span className="text-poppy text-3xl leading-none align-top mr-2">„</span>
              A bőrproblémák megoldásán túl a legnagyobb és számomra legszebb dolog az, hogy problémamegoldó és egyben relaxáló, lelket is feltöltő szolgáltatásaimat pihentető, csendes környezetben, teljeskörű odafigyeléssel igyekszem vendégeimnek nyújtani.
            </p>
            <p>
              A szalon kialakítása is ennek a tükrében zajlott. Itt minden kis apróság a vendég kényelmét szolgálja. Csak ő és én vagyunk jelen a látogatás első pillanatától az elköszönésig.
            </p>
            <p>
              Mivel számos lehetőség, számos út vezethet az elérendő célig, így sokrétű szakmai tudásom segítségével, valamint a vendég igényeinek és lehetőségeinek felmérésével, mindig közösen tervezzük meg a kezelések-kúrák sorát.
            </p>
            <p>
              Az első találkozás során egy alapos beszélgetéssel igyekszem feltárni a bőrprobléma kialakulásához vezető okokat. A bőrdiagnózis után otthonápolási- és kúra javaslatot készítek, amelyet e-mail formájában kézhez kap a vendég. Ez a javaslat kitér „belső kozmetikumok”, azaz étrendkiegészítők használatára is. Mivel a bőrön megjelenő változások mindig tükrözik a belső folyamatokat, nagyon fontos, hogy belülről is segítsük a bőr épülését.
            </p>
          </div>
        </div>

        {/* Miért különleges a szalon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow text-poppy">02 — Makovsky Beauty</div>
            <h2 className="mt-3 text-display text-3xl md:text-4xl leading-tight">
              Miért különleges <em className="italic">a szalon?</em>
            </h2>
            <p className="mt-3 text-mono text-[12px] uppercase tracking-widest text-muted-foreground">
              Miért engem válassz
            </p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              A klasszikus kozmetikai kezeléseken túl olyan exkluzív szolgáltatásokat kínálok, mint a <strong className="text-foreground">Vagheggi Skin Analyserrel</strong> végzett gépi <strong className="text-foreground">bőrdiagnosztika</strong>, az <strong className="text-foreground">Optikop lágylézerrel</strong> végzett akne-, rozácea- és anti-age kezelések, a csúcstechnológiájú Dr. Derm <strong className="text-foreground">elektroporációs hatóanyag-bejuttatás és RF</strong>, és a problémamegoldó, ősi kínai rózsakvarc <strong className="text-foreground">Gua Sha & Roller</strong> arc-, nyak- és dekoltázs-masszázsok.
            </p>
            <p>
              Munkámban a római székhelyű <strong className="text-foreground">GMS Beauty</strong> prémiumkategóriás orvoskozmetikai termékeivel, a szintén olasz <strong className="text-foreground">MEI</strong> elbűvölő és természetes növényi hatóanyagaival, a német <strong className="text-foreground">Biodroga</strong> cég <em>Organic</em> és <em>Medical</em> kozmetikumaival, valamint „belső kozmetikumokkal” és különleges masszázstechnikákkal igyekszem a leginkább személyre szabott kezeléseket, kezelési kúrákat összeállítani vendégeim számára.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {["Biodroga","Vagheggi","MEI Beauty","GMS Beauty","Optikop lágylézer","Dr. Derm RF"].map((b) => (
                <div key={b} className="rounded-xl border border-line bg-surface/60 px-3 py-2 text-[12px] text-mono uppercase tracking-wider text-foreground/70">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Szakmai felkészültség */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow text-poppy">03 — Elhivatottság</div>
            <h2 className="mt-3 text-display text-3xl md:text-4xl leading-tight">
              Szakmai <em className="italic">felkészültség.</em>
            </h2>
            <p className="mt-3 text-mono text-[12px] uppercase tracking-widest text-muted-foreground">
              Mindig naprakészen
            </p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Nagyon fontos számomra a naprakész szakmai tudás, a felkészültség, ezért számos tanfolyam elvégzésével igyekszem azt folyamatosan bővíteni, csiszolni és elmélyíteni, hogy a kozmetikai ipar folyamatos fejlődésével lépést tartva mindig a legmegfelelőbb és legjobb eredményeket nyújtó szolgáltatást kínálhassam Neked — és bármikor bizalommal fordulhass hozzám.
            </p>
          </div>
        </div>

        {/* Bónuszként */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow text-poppy">04 — Bónuszként</div>
            <h2 className="mt-3 text-display text-3xl md:text-4xl leading-tight">
              Még mindig nem <em className="italic">győztelek meg?</em>
            </h2>
            <p className="mt-3 text-mono text-[12px] uppercase tracking-widest text-muted-foreground">
              Mit nyújtok még szolgáltatásaimon túl
            </p>
          </div>
          <div className="lg:col-span-8 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Ha hozzám betérsz, és esetleg fáradtan, éhesen és szomjasan érkezel, biztos lehetsz benne, hogy nem fogod az itt töltött időt feszengve tölteni, mert minden kedves vendégemet nagy-nagy szeretettel és egy csésze teával, kávéval, egy kis keksszel, aprósüteménnyel várom. Búcsúzáskor pedig sosem maradhat el egy falat ínycsiklandó csokoládé, de ha valaki valami miatt ezt nem fogyaszthatja, annak a gyümölcskosár nyújt vigasztalást. 😊
            </p>
            <p className="text-display text-2xl text-foreground italic">
              Várlak téged is szeretettel!
            </p>
            <p className="text-mono text-[12px] uppercase tracking-widest text-muted-foreground">
              — Paksi Anett, kozmetikus szakember
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
