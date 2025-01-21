import DocumentTitle from "@/app/components/document-title";
import GAMES from "@/app/routes/_page.hobbies.games/data/games";
import GameEntry from "@/app/routes/_page.hobbies.games/game-entry";

const BestOfTheBest = () => (
  <article className="flex flex-col items-center w-full py-10">
    <DocumentTitle title="Best of the Best" subtitle="(and worst of the worst)" />
    <article className="flex flex-col items-center w-full p-5 gap-section">
      {GAMES.map((game, i) => (
        <GameEntry key={i} game={game} />
      ))}
    </article>
  </article>
);


export default BestOfTheBest;