import Title from "@/components/core/text/title";
import Image from "next/image";
import {getOwnedGames, getPlayerSummary} from "@/util/apis/steam";
import Container from "@/components/core/containers/container";
import Text from "@/components/core/text/text";

const SteamStats = async () => {
  const player = (await getPlayerSummary())[0];
  const games = await getOwnedGames();

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:items-center w-full px-10 py-20">
      <div className="flex flex-col items-center w-full gap-10">
        <Title size="lg" bold>Steam</Title>
        <Text>
          Steam is my gaming platform of choice. I am an active member since 2012 and over the years I have accumulated
          a worrying number of games and hours played.
        </Text>
      </div>
      <div className="flex flex-col items-center gap-5 xl:h-full w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-5 items-center py-10">
            <div className="avatar">
              <div className="mask mask-squircle">
                <Image src={player.avatarfull} alt="Steam avatar" width={128} height={128} />
              </div>
            </div>
            <p className="text-3xl">{player.personaname}</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
            <div className="stat">
              <div className="stat-title">Hours played</div>
              <div className="stat-value">
                {Math.floor(games.reduce((acc, game) => acc + game.playtime_forever / 60, 0))}
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Games owned</div>
              <div className="stat-value">{games.length}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Years of service</div>
              <div className="stat-value">
                {new Date(Date.now()).getUTCFullYear() - new Date(player.timecreated * 1000).getUTCFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteamStats;