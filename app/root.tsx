import {
  Links, LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type {MetaFunction} from "@remix-run/node";

import "./tailwind.css";
import Finder from "@/app/components/finder";
import PropsChildren from "@/lib/types/props-children";

export const meta: MetaFunction = () => [
  {title: "local.interloper"},
  {name: "description", content: "The official website of local.interloper"},
];

interface Props extends PropsChildren {}

export const Layout = ({children}: Props) => (
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
  <LiveReload />
  <Scripts />
  </body>
  </html>
);

const App = () => {
  return <Outlet />;
};

export default App;