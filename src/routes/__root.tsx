import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../components/site/theme-provider";
import { SiteHeader } from "../components/site/site-header";
import { SiteFooter } from "../components/site/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-6 text-poppy">404 — Eltévedt oldal</p>
        <h1 className="text-display text-6xl">
          Ez a kezelés <span className="italic">nincs a kínálatban.</span>
        </h1>
        <p className="mt-6 text-sm text-muted-foreground">
          Az oldal, amit keresel, már nem érhető el. Visszahívunk a főoldalra.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-6 text-poppy">Hiba történt</p>
        <h1 className="text-display text-4xl">Ez az oldal most nem töltődik be.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Próbáld újra, vagy térj vissza a kezdőoldalra.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium"
          >
            Újratöltés
          </button>
          <a href="/" className="rounded-full border border-line px-5 py-2 text-sm font-medium">
            Főoldal
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Makovsky Beauty — Prémium kozmetikai szalon Budapesten" },
      {
        name: "description",
        content:
          "Paksi Anett kozmetikus szalonja Budapest II. kerületében. Privát kezelőágy, orvoskozmetikai kezelések, Biodroga, Vagheggi, Arkana, japán arcmasszázs.",
      },
      { name: "author", content: "Makovsky Beauty" },
      { property: "og:title", content: "Makovsky Beauty — Prémium kozmetikai szalon" },
      {
        property: "og:description",
        content: "Egyetlen kezelőágy, teljes figyelem. Budapest II. kerület, Fő utca 49.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="hu" className="light">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SiteHeader />
        <main className="pt-24">
          <Outlet />
        </main>
        <SiteFooter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
