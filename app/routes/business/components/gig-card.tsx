import { FiExternalLink } from "react-icons/fi";
import type { Gig } from "../data/gigs";

interface Props {
  gig: Gig;
}

const GigCard = ({ gig }: Props) => (
  <article className="relative flex frame flex-col gap-sm h-40 w-full p-2">
    <section className="flex justify-between items-center">
      <section className="flex items-center gap-sm">
        <h2 className="font-bold">{gig.title}</h2>
        {gig.link && (
          <a href={gig.link} className="link">
            <FiExternalLink />
          </a>
        )}
      </section>
      <span className="text-vgui-text-dark">{gig.year}</span>
    </section>
    <section className="h-full max-w-md">
      <p>{gig.description}</p>
    </section>
    <section className="flex justify-between items-center">
      <section>
        <span>
          For:{" "}
          {gig.client.url ? (
            <a href={gig.client.url}>{gig.client.name}</a>
          ) : (
            gig.client.name
          )}
        </span>
      </section>
      <section className="flex gap-2">
        {gig.technologies.map((Icon, i) => (
          <Icon key={i} className="text-xl" />
        ))}
      </section>
    </section>
  </article>
);

export default GigCard;
