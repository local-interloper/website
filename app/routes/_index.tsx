import {LinksFunction} from "@remix-run/node";
import Hero from "@/app/components/hero";
import Social from "@/app/components/social";
import Logo from "@assets/logo.png";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: Logo
  }
];

const _index = () => (
  <Hero>
    <section className="flex flex-col items-center gap-item">
      <article className="flex items-center gap-item border-b-2 border-b-black p-2">
        <h1 className="font-title">local.interloper</h1>
      </article>
      <Social />
      <span>Press <kbd className="kbd">Ctrl</kbd> + <kbd className="kbd">F</kbd> to get started</span>
    </section>
  </Hero>
);

export default _index;