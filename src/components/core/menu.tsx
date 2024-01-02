"use client";

import {BiHome} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {usePathname} from "next/navigation";
import classNames from "@/util/classNames";
import Link from "next/link";
import {SiGithub, SiSteam} from "react-icons/si";
import {SlPicture} from "react-icons/sl";
import {MdLightbulb} from "react-icons/md";

const OPTIONS = [
  {
    text: "Home",
    Icon: BiHome,
    href: "/"
  },
  {
    text: "Hobbies",
    Icon: MdLightbulb,
    href: "/hobbies"
  },
  {
    text: "About me",
    Icon: BsPerson,
    href: "/about-me"
  },
];

const Menu = () => {
  const pathName = usePathname();

  return (
    <div className="btm-nav">
      {OPTIONS.map(({Icon, href, text}, i) => (
        <Link
          href={href}
          key={i}
          className={classNames(
            "text-primary",
            (href === "/" ? pathName === href : pathName.startsWith(href)) && "active"
          )}
        >
          <Icon className="text-xl" />
          <p>{text}</p>
        </Link>
      ))}
    </div>
  );
};

export default Menu;