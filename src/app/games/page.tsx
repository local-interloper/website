import PageWrapper from "@/components/_core/containers/page-wrapper";
import Title from "@/components/_core/text/title";
import Text from "@/components/_core/text/text";
import {getImageUrl, getOwnedGames, getPlayerSummary, getRecentGames} from "@/util/steam";
import Image from "next/image";
import Link from "next/link";
import FavoriteCard from "@/app/games/favorite-card";

const GamesPage = async () => {
  const recentGames = (await getRecentGames())?.slice(0, 6);
  const player = (await getPlayerSummary())[0];
  const games = await getOwnedGames();

  const FAVORITES = [
    312520,
    238210,
    602960,
    427520,
    632360,
    70,
    4000,
    220
  ];

  return (
    <PageWrapper className="p-5 pb-20">
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="flex flex-col items-center gap-5 card bg-base-200 p-5 h-full w-full shadow-xl">
          <Title>Steam</Title>
          <div className="avatar">
            <div className="mask mask-squircle">
              <Image src={player.avatarfull} alt="Steam avatar" width={128} height={128} />
            </div>
          </div>
          <p className="text-3xl">{player.personaname}</p>
          <div className="stat">
            <div className="stat-value">
              {Math.floor(games.reduce((acc, game) => acc + game.playtime_forever / 60, 0))}
            </div>
            <div className="stat-desc">Hours played</div>
          </div>
          <div className="stat">
            <div className="stat-value">{games.length}</div>
            <div className="stat-desc">Games owned</div>
          </div>
          <div className="stat">
            <div className="stat-value">
              {new Date(Date.now()).getUTCFullYear() - new Date(player.timecreated * 1000).getUTCFullYear()}
            </div>
            <div className="stat-desc">Years of service</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 card bg-base-200 p-5 h-full w-full shadow-xl">
          <Title>Favorites</Title>
          <div className="flex flex-col h-full justify-center">
            <div className="grid grid-cols-2 gap-5">
              {FAVORITES.map((appid, i) => (
                <FavoriteCard key={i} appid={appid} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 card bg-base-200 p-5 h-full w-full shadow-xl">
          <Title>Recent</Title>
          <Text>Lately I&apos;ve been playing:</Text>
          <div className="flex flex-col h-full justify-center">
            <div className="flex flex-col gap-5">
              {recentGames.map(({appid, name, img_icon_url, playtime_2weeks}, i) => (
                <Link
                  href={`https://store.steampowered.com/app/${appid}`}
                  className="btn card flex justify-start flex-row gap-5 items-center p-2 bg-base-100 shadow-xl"
                  key={i}
                  target="_blank"
                >
                  <Image
                    src={getImageUrl(appid, img_icon_url)}
                    className="rounded-full"
                    alt={`${name} icon`}
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col items-start gap-1">
                    <p>{name}</p>
                    <p className="text-primary">{Math.floor(playtime_2weeks / 60)}hrs</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default GamesPage;