import PageWrapper from "@/components/_core/containers/page-wrapper";
import Title from "@/components/_core/text/title";
import Text from "@/components/_core/text/text";
import {getImageUrl, getRecentGames} from "@/util/steam";
import {cache} from "react";
import Image from "next/image";
import Link from "next/link";

const GamesPage = cache(async () => {
  const games = (await getRecentGames())?.slice(0, 8);

  return (
    <PageWrapper className="py-20">
      <Title>Games</Title>
      <Text>Lately I&apos;ve been playing:</Text>
      <div className="grid gric-cols-1 lg:grid-cols-2 gap-5">
        {games && (games.map(({appid, name, img_icon_url, playtime_2weeks}, i) => (
          <Link
            href={`https://store.steampowered.com/app/${appid}`}
            className="btn card justify-start flex flex-row gap-5 items-center p-2 bg-base-200 shadow-xl"
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
        )))}
      </div>
    </PageWrapper>
  );
});

export default GamesPage;