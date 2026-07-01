import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        {/* Big wordmark */}
        <div className="flex flex-col gap-3 border-b border-line pb-12">
          <span className="eyebrow text-poppy">Makovsky Beauty · Budapest II. ker.</span>
          <h2 className="text-display text-5xl md:text-7xl lg:text-[110px]">
            Találkozzunk <span className="italic text-poppy">személyesen.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-12">
          <div className="md:col-span-5 space-y-5">
            <div className="eyebrow">Kapcsolat</div>
            <a
              href="https://maps.google.com/?q=Budapest+Fő+utca+49"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground"
            >
              <MapPin className="size-4 mt-0.5 text-poppy" />
              <span>
                1011 Budapest, II. kerület
                <br />
                Fő utca 49. (a Batthyány tér közelében)
              </span>
            </a>
            <a
              href="tel:+36306582730"
              className="flex items-center gap-3 text-sm text-foreground/80 hover:text-foreground"
            >
              <Phone className="size-4 text-poppy" />
              <span className="text-mono">+36 30 658 2730</span>
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-line hover:border-poppy/50 hover:text-poppy transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-line hover:border-poppy/50 hover:text-poppy transition-colors"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <div className="eyebrow">Nyitvatartás</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex justify-between">
                <span>Hétfő – Péntek</span>
                <span className="text-mono text-muted-foreground">08–20</span>
              </li>
              <li className="flex justify-between">
                <span>Szombat</span>
                <span className="text-mono text-muted-foreground">időpont szerint</span>
              </li>
              <li className="flex justify-between">
                <span>Vasárnap</span>
                <span className="text-mono text-muted-foreground">zárva</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="eyebrow">Menü</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/szolgaltatasok" className="link-underline">Szolgáltatások</Link></li>
              <li><Link to="/rolam" className="link-underline">Rólam</Link></li>
              <li><Link to="/aktualis-ajanlatok" className="link-underline">Ajánlatok</Link></li>
              <li><Link to="/galeria" className="link-underline">Galéria</Link></li>
              <li><Link to="/blog" className="link-underline">Blog</Link></li>
              <li><Link to="/kapcsolat" className="link-underline">Kapcsolat</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="eyebrow">Jogi</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://makovskybeauty.hu/impresszum" target="_blank" rel="noreferrer" className="link-underline">Impresszum</a></li>
              <li><a href="https://makovskybeauty.hu/aszf" target="_blank" rel="noreferrer" className="link-underline">ÁSZF</a></li>
              <li><a href="https://makovskybeauty.hu/adatkezeles-2" target="_blank" rel="noreferrer" className="link-underline">Adatkezelés</a></li>
              <li><a href="https://makovskybeauty.hu/sutitajekoztato" target="_blank" rel="noreferrer" className="link-underline">Sütitájékoztató</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <span className="text-mono text-[11px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Makovsky Beauty · Paksi Anett kozmetikus mester
          </span>
          <span className="text-mono text-[11px] text-muted-foreground uppercase tracking-widest">
            Készült szeretettel Budapesten
          </span>
        </div>
      </div>
    </footer>
  );
}
