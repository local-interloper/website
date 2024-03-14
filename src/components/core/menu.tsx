"use client";

import classNames from "@/util/classNames";
import Link from "next/link";
import {BiCodeBlock, BiHome} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {usePathname} from "next/navigation";
import {GiJoystick} from "react-icons/gi";
import {FaPaintBrush} from "react-icons/fa";

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
    Icon: FaPaintBrush,
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
      {OPTIONS.map(({Icon, href}, i) => (
        <Link
          href={href}
          key={i}
          className={classNames(
            "flex justify-center items-center text-primary",
            (href === "/" ? pathName === href : pathName.startsWith(href)) && "active"
          )}
        >
          <Icon className="text-xl" />
        </Link>
      ))}
    </div>
  );
};

export default Menu;