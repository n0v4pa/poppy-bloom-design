import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Makovsky Beauty" },
      { name: "description", content: "Szakmai cikkek a bőrápolásról, kezelésekről és kozmetikai technológiákról." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    title: "Japán arcmasszázs — speciális arcszobrász technika",
    category: "Kezelések",
    date: "2024.01.14.",
    excerpt: "A hagyományos japán technika, amely természetes liftinget és mély relaxációt nyújt egyszerre.",
  },
  {
    title: "Lifting",
    category: "Kezelések",
    date: "2024.01.14.",
    excerpt: "A megereszkedett arckontúrok kezelései — Liftingeljünk!",
  },
  {
    title: "Rádiófrekvencia – elektroporáció",
    category: "Kezelések",
    date: "2024.01.14.",
    excerpt: "Hogyan érhető el bőrfeszesítés és hatóanyag-bejuttatás fájdalommentesen?",
  },
  {
    title: "Újdonságok & megújult tisztító kezelések",
    category: "Kezelések",
    date: "2023.11.01.",
    excerpt: "A legújabb arctisztító protokollok bemutatása.",
  },
  {
    title: "Lunch-time kezelések",
    category: "Kezelések",
    date: "2023.11.01.",
    excerpt: "Gyors, de hatékony arckezelések az ebédszünetedbe.",
  },
  {
    title: "A Vagheggi rituálékról I.",
    category: "Egyéb",
    date: "2023.10.31.",
    excerpt: "Az olasz fitokozmetika filozófiája és módszertana.",
  },
];

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={<>Szakmai <em className="italic text-poppy">írások</em></>}
        lead="Tudásmegosztás a bőrápolásról, a legújabb kezelésekről és a kozmetikus szemszögéből szóló történetekről."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POSTS.map((p, i) => (
            <Link
              key={i}
              to="/blog"
              className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-poppy/40"
            >
              <div className="aspect-[4/3] rounded-xl border border-line mb-5 bg-gradient-to-br from-poppy/10 via-background to-sage/10" />
              <div className="flex items-center justify-between text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{p.category}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-3 text-display text-2xl leading-tight group-hover:text-poppy transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-mono text-[11px] uppercase tracking-widest text-foreground/60 group-hover:text-poppy">
                Olvasom <ArrowUpRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
