import DocumentHero from "@/app/components/document-hero";
import BestOfTheBest from "@/app/routes/_page.hobbies.games/best-of-the-best";
import {LinksFunction} from "@remix-run/node";
import GAMES from "@/app/routes/_page.hobbies.games/data/games";

export const links: LinksFunction = () => GAMES.map(game => ({
  rel: "preload",
  href: `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.appId}/header.jpg`,
  as: "image"
}));

const Games = () => {
  return (
    <article className="flex flex-col items-center w-full gap-article">
      <DocumentHero title="Games" subtitle="As an insurance fund">
        <p>
          My Steam account was born in 2012 and it&apos;s library has been growing ever since. It&apos;s no secret
          that I plan to sell it for replacement organs (hopefully ethically sourced) once they eventually start failing
          from writing JavaScript.
        </p>
        <p>
          Given enough time you can get bored of pretty much anything. That&apos;s why my most played games as of now
          consist mostly (keyword mostly) out of cool funky indie games some of which I will shill in the next module.
        </p>
      </DocumentHero>
      <BestOfTheBest />
    </article>
  );
};

export default Games;