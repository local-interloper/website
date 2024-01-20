import PageWrapper from "@/components/core/containers/page-wrapper";
import Title from "@/components/core/text/title";
import Text from "@/components/core/text/text";
import {getImageUrl, getOwnedGames, getPlayerSummary, getRecentGames} from "@/util/apis/steam";
import Image from "next/image";
import Link from "next/link";
import FavoriteCard from "@/app/hobbies/games/favorite-card";
import SteamStats from "@/app/hobbies/games/steam-stats";
import Favorites from "@/app/hobbies/games/favorites";
import RecentGames from "@/app/hobbies/games/recent-games";

const GamesPage = async () => {


  return (
    <PageWrapper className="py-20">
      <Title bold size="lg">Games</Title>
      <SteamStats />
      <Favorites />
      <RecentGames />
    </PageWrapper>
  );
};

export default GamesPage;