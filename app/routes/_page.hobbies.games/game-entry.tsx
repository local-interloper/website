import {GameInfo} from "@/app/routes/_page.hobbies.games/data/games";
import {FiExternalLink} from "react-icons/fi";
import {LinksFunction} from "@remix-run/node";

interface Props {
  game: GameInfo;
}

const GameEntry = ({game: {title, subtitle, description, appId}}: Props) => {
  const imageUrl = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg?t=1645843384`;

  return (
    <article
      className="flex flex-col md:flex-row md:justify-between gap-section w-full max-w-sm md:max-w-6xl bg-base-200 shadow rounded-lg overflow-clip p-2"
    >
      <section className="flex flex-col gap-item p-2">
        <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-item">
          <section className="flex items-center gap-item">
            <h2 className="font-title">{title}</h2>
            <a href={`https://store.steampowered.com/app/${appId}/`} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="text-xl" />
            </a>
          </section>
          <p className="opacity-70">{subtitle}</p>
        </section>
        <p>{description}</p>
      </section>
      <img
        className="rounded-lg"
        src={imageUrl}
        alt={`${title} cover art`}
        width={460 - 60}
        height={215 - 60}
      />
    </article>
  );
};

export default GameEntry;