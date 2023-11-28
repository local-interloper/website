import {getAppDetails} from "@/util/steam";
import Image from "next/image";
import Link from "next/link";
import classNames from "@/util/classNames";
import {Suspense} from "react";

interface FavoriteCardProps {
  appid: number;
}

const FavoriteCard = async ({appid}: FavoriteCardProps) => {
  const details = await getAppDetails(appid);

  if (!details) {
    return <p>ERROR</p>;
  }

  return (
    <Suspense fallback={<FavoriteCardSkeleton />}>
      <Link
        href={`https://store.steampowered.com/app/${appid}`}
        className={classNames(
          `relative w-44 h-24 shadow-xl  rounded-xl overflow-hidden`,
          "lg:hover:scale-110 transition-all duration-200"
        )}
        target="_blank"
      >
        <Image
          src={details.header_image} alt="Game banner" fill style={{
          objectFit: "cover",
          objectPosition: "center"
        }}
        />
      </Link>
    </Suspense>
  );
};

const FavoriteCardSkeleton = () => {
  return (
    <div className="skeleton w-44 h-24 shadow-xl  rounded-xl overflow-hidden bg-base-100/50" />
  );
};

export default FavoriteCard;