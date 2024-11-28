import Hero from "@/app/components/hero";
import socials from "@/lib/data/socials";
import {FaGlobe} from "react-icons/fa";

const Games = () => {
  const entries = [
    {
      name: "Webpage",
      Icon: FaGlobe,
      url: "https://local.interloper.me",
    },
    ...socials
  ]

  return (
    <article>
      <Hero>
        <article className="flex flex-col items-center gap-section">
          <section>
            <h1 className="font-title">Linktree</h1>
          </section>
          <section className="flex flex-col gap-item w-full">
            {entries.map(({name, url, Icon}, i) => (
              <a href={url} className="btn" target="_blank" rel="noopener noreferrer" key={i}>
                <section className="flex items-center gap-2 w-full">
                  <Icon className="text-2xl" />
                  <span className="text-1xl">{name}</span>
                </section>
              </a>
            ))}
          </section>
        </article>
      </Hero>
    </article>
);
};

export default Games;