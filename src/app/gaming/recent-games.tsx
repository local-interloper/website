import Title from "@/components/core/text/title";
import Text from "@/components/core/text/text";
import Link from "next/link";
import Image from "next/image";
import {getImageUrl, getRecentGames} from "@/util/apis/steam";
import Container from "@/components/core/containers/container";

const RecentGames = async () => {
  const recentGames = (await getRecentGames())?.slice(0, 6);

  return (
    <Container responsive fill className="px-5 py-20">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <Title bold>Recently played</Title>
        <Text>
          These are the titles I&apos;ve been playing recently. The list is dynamically updated using the data pulled
          from steam (yes, that means if I was no-lifing something off steam like Starsector, it won&apos;t show up here).
        </Text>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-5">
        <div className="flex flex-col gap-2">
          {recentGames.map(({appid, name, img_icon_url}, i) => (
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
              <p>{name}</p>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecentGames;