"use client";

import {BiHome} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {usePathname} from "next/navigation";
import classNames from "@/util/classNames";
import Link from "next/link";
import {GiConsoleController} from "react-icons/gi";
import {AiFillExperiment} from "react-icons/ai";

const OPTIONS = [
  {
    text: "Home",
    Icon: BiHome,
    href: "/"
  },
  {
    text: "Projects",
    Icon: AiFillExperiment,
    href: "/projects"
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
      {OPTIONS.map(({Icon, href}, i) => (
        <Link
          href={href}
          key={i}
          className={classNames(
            "text-primary",
            pathName === href && "active"
          )}
        >
          <Icon className="text-xl" />
        </Link>
      ))}
    </div>
  );
};

export default Menu;