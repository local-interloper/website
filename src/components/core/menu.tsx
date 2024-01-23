"use client";

import {BiCode, BiCodeAlt, BiCodeBlock, BiHome} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {usePathname} from "next/navigation";
import classNames from "@/util/classNames";
import Link from "next/link";
import {SiGithub, SiSteam} from "react-icons/si";
import {SlPicture} from "react-icons/sl";
import {MdLightbulb} from "react-icons/md";
import {GiJoystick} from "react-icons/gi";

const OPTIONS = [
  {
    name: "Home",
    Icon: BiHome,
    href: "/"
  },
  {
    name: "Programming",
    Icon: BiCodeBlock,
    href: "/programming"
  },
  {
    name: "Art",
    Icon: SlPicture,
    href: "/art"
  },
  {
    name: "Gaming",
    Icon: GiJoystick,
    href: "/gaming"
  },
  {
    name: "About me",
    Icon: BsPerson,
    href: "/about-me"
  },
];

const Menu = () => {
  const pathName = usePathname();

  return (
    <div className="btm-nav">
      {OPTIONS.map(({Icon, href, name}, i) => (
        <Link
          href={href}
          key={i}
          className={classNames(
            "flex justify-center items-center text-primary lg:tooltip tooltip-primary",
            (href === "/" ? pathName === href : pathName.startsWith(href)) && "active"
          )}
          data-tip={name}
        >
          <Icon className="text-xl" />
        </Link>
      ))}
    </div>
  );
};

export default Menu;