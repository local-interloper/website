import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type {LinksFunction, MetaFunction} from "@remix-run/node";

import "./tailwind.css";
import Finder from "@/app/components/finder";

export const links: LinksFunction = () => [
  {rel: "preconnect", href: "https://fonts.googleapis.com"},
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta: MetaFunction = () => [
  {title: "local.interloper"},
  {name: "description", content: "The official website of local.interloper"},
];

export const Layout = ({children}: { children: React.ReactNode }) => (
  <html lang="en" data-theme="retro">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta />
    <Links />
  </head>
  <body>
  <Finder />
  {children}
  <ScrollRestoration />
  <Scripts />
  </body>
  </html>
);

const App = () => {
  return <Outlet />;
};

export default App;