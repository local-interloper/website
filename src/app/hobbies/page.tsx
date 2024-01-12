import PageWrapper from "@/components/core/containers/page-wrapper";
import Title from "@/components/core/text/title";
import {BsController} from "react-icons/bs";
import {BiCode} from "react-icons/bi";
import {SlPicture} from "react-icons/sl";
import Text from "@/components/core/text/text";
import classNames from "@/util/classNames";

const HOBBIES = [
  {
    title: "Games",
    href: "hobbies/games",
    Icon: BsController
  },
  {
    title: "Programming",
    href: "hobbies/programming",
    Icon: BiCode
  },
  {
    title: "Art",
    href: "hobbies/art",
    Icon: SlPicture
  }
];

const HobbiesPage = () => {
  return (
    <PageWrapper className="pt-20">
      <Title bold>Hobbies</Title>
      <div className="flex flex-col justify-center h-full gap-5 p-5">
        {HOBBIES.map(({title, href, Icon}, i) => (
          <a
            key={i}
            className={classNames(
              "flex items-center justify-start w-full rounded-xl",
              "bg-base-200 gap-5 p-5 shadow-lg",
              "transition-all duration-200 hover:scale-105"
            )}
            href={href}
          >
            <Icon className="text-4xl lg:text-8xl" />
            <p className="text-2xl lg:text-4xl">{title}</p>
          </a>
        ))}
      </div>
    </PageWrapper>
  );
};

export default HobbiesPage;