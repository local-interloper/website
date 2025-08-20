import { NAV_ENTRIES } from "./navbar-entries";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full justify-between frame-borderless border-b-2 border-b-vgui-border-dark p-2 z-40">
      <article className="flex items-center gap-md">
        <section className="frame-inset h-8 w-8">
          <img alt="Logo" src="/images/logo.png"></img>
        </section>
        <section className="flex gap-sm">
          {NAV_ENTRIES.map(({ label, url }, i) => (
            <a key={i} href={url} className="link">
              {label}
            </a>
          ))}
        </section>
      </article>
    </nav>
  );
};

export default Navigation;
