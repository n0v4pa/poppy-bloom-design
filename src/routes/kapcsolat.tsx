import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/kapcsolat")({
  head: () => ({
    meta: [
      { title: "Kapcsolat — Makovsky Beauty" },
      { name: "description", content: "Lépj kapcsolatba Paksi Anett kozmetikussal. Budapest II. ker. Fő utca 49." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kapcsolat"
        title={<>Foglalj <em className="italic text-poppy">időpontot.</em></>}
        lead="A legtöbb kezelés telefonon foglalható le. Egy kezelőágy van — kérlek, jelezz időben."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContactCard icon={Phone} label="Telefon" value="+36 30 658 2730" href="tel:+36306582730" />
            <ContactCard icon={Mail} label="Email" value="info@makovskybeauty.hu" href="mailto:info@makovskybeauty.hu" />
            <ContactCard icon={MapPin} label="Cím" value="Budapest, II. ker. Fő u. 49." href="https://maps.google.com/?q=Budapest+Fő+utca+49" />
            <ContactCard icon={Clock} label="Nyitva" value="H–P 08–20, Szo időpont szerint" />
          </div>
          <div className="rounded-3xl border border-line bg-surface aspect-square lg:aspect-auto overflow-hidden">
            <iframe
              title="Térkép"
              src="https://www.openstreetmap.org/export/embed.html?bbox=19.034%2C47.504%2C19.046%2C47.512&layer=mapnik"
              className="w-full h-full grayscale-[40%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const Cmp: "a" | "div" = href ? "a" : "div";
  return (
    <Cmp
      {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
      className="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-poppy/40 block"
    >
      <Icon className="size-5 text-poppy" strokeWidth={1.5} />
      <div className="mt-6 eyebrow">{label}</div>
      <div className="mt-2 text-base text-foreground group-hover:text-poppy transition-colors">{value}</div>
    </Cmp>
  );
}
