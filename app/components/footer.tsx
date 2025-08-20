import { SOCIAL } from "~/lib/constants/social";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-sm py-5">
      <section>
        <span>© 2025 local.interloper</span>
      </section>
      <section className="flex gap-sm">
        {SOCIAL.map(({ Icon, url }, i) => (
          <a key={i} target="_blank" href={url}>
            <Icon className="text-2xl" target="_blank" />
          </a>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
