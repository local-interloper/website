import {GameInfo} from "@/app/routes/_page.hobbies.games/data/games";
import {FiExternalLink} from "react-icons/fi";

interface Props {
  game: GameInfo;
}

const GameEntry = ({game: {title, subtitle, description, appId}}: Props) => {
  const imageUrl = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg?t=1645843384`;

  return (
    <article
      className="flex justify-between gap-section w-full max-w-6xl bg-base-200 shadow rounded-lg overflow-clip p-2"
    >
      <section className="flex flex-col gap-item p-2">
        <section className="flex gap-item justify-between items-center">
          <section className="flex items-center gap-item">
            <h2 className="font-title">{title}</h2>
            <a href={`https://store.steampowered.com/app/${appId}/`} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="text-xl" />
            </a>
          </section>
          <p className="opacity-50">{subtitle}</p>
        </section>
        <p>{description}</p>
      </section>
      <img className="rounded-lg shadow" src={imageUrl} alt={`${title} cover art`} width={400} />
    </article>
  );
};

export default GameEntry;