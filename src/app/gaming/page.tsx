import PageWrapper from "@/components/core/containers/page-wrapper";
import Title from "@/components/core/text/title";
import Text from "@/components/core/text/text";
import {getImageUrl, getOwnedGames, getPlayerSummary, getRecentGames} from "@/util/apis/steam";
import Image from "next/image";
import Link from "next/link";
import FavoriteCard from "@/app/gaming/favorite-card";
import SteamStats from "@/app/gaming/steam-stats";
import Favorites from "@/app/gaming/favorites";
import RecentGames from "@/app/gaming/recent-games";
import Container from "@/components/core/containers/container";
import {BiJoystick} from "react-icons/bi";
import {GiJoystick} from "react-icons/gi";
import ScrollForMore from "@/components/core/scroll-for-more";

const GamesPage = async () => {


  return (
    <PageWrapper className="pb-20">
      <Container screen fill>
        <div className="flex gap-5 items-center">
          <Title bold size="lg">Games</Title>
          <GiJoystick className="text-8xl text-primary" />
        </div>
        <Text>
          A medium that wraps programming, art and design into a nice bundle. Unless you play League of Legends.
        </Text>
        <ScrollForMore />
      </Container>
      <SteamStats />
      <Favorites />
      <RecentGames />
    </PageWrapper>
  );
};

export default GamesPage;