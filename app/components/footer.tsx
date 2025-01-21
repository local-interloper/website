import {LinksFunction} from "@remix-run/node";
import Logo from "@assets/img/logo-outline.png";
import Social from "@/app/components/social";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    src: Logo,
    type: "image/png"
  }
];

const Footer = () => (
  <footer className="flex w-full items-center bg-base-200 shadow p-5 justify-between mt-40">
    <section className="flex items-center gap-item">
      <img className="h-12 w-12 border-2 border-black rounded" src={Logo} alt="local.interloper's watermark" />
      <section className="flex flex-col">
        <span className="font-mom">local.interloper</span>
        <span>Copyright (C) 2024 local.interloper</span>
      </section>
    </section>
    <section className="hidden md:block">
      <Social tooltipSide="top" />
    </section>
  </footer>
);

export default Footer;