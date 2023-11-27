import {getAppDetails} from "@/util/steam";
import Image from "next/image";
import Link from "next/link";
import classNames from "@/util/classNames";

interface FavoriteCardProps {
  appid: number;
}

const FavoriteCard = async ({appid}: FavoriteCardProps) => {
  const SCALE = 0.4;
  const WIDTH = 460 * SCALE;
  const HEIGHT = 245 * SCALE;

  const details = await getAppDetails(appid);

  if (!details) {
    return <p>ERROR</p>;
  }

  return (
    <Link
      href={`https://store.steampowered.com/app/${appid}`}
      className={classNames(
        `relative w-[${WIDTH}] h-[${HEIGHT}] shadow-xl  rounded-xl overflow-hidden`,
        "lg:hover:scale-110 transition-all duration-200"
        )}
      target="_blank"
    >
      <Image src={details.header_image} alt="Game banner" width={WIDTH} height={HEIGHT} />
    </Link>
  );
};

export default FavoriteCard;