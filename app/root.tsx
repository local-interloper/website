import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./app.css";
import "./vgui.css";
import Navigation from "./components/navbar/navigation";
import PageWrapper from "./components/page-wrapper";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="fixed flex flex-col top-0 left-0 w-full h-full">
          <Navigation />
          <article className="h-[100svh] overflow-y-scroll">{children}</article>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
