"use client";

import Title from "@/components/_core/text/title";
import classNames from "@/util/classNames";
import {useState} from "react";
import {Transition} from "@headlessui/react";
import {HiX} from "react-icons/hi";
import {GiHamburgerMenu} from "react-icons/gi";
import LinkButton from "@/components/_core/link-button";
import Text from "@/components/_core/text/text";
import Link from "next/link";
import {BiHome} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";

const OPTIONS = [
  {
    Icon: BiHome,
    title: "Home",
    href: "/"
  },
  {
    Icon: BsPerson,
    title: "About Me",
    href: "/about-me"
  },
];

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Transition
        show={open}
        enter="transition-all duration-200"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-all duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className={classNames(
          "fixed top-0 right-0 w-screen lg:w-[30vw] h-[100svh] bg-black/[0.5] backdrop-blur ",
          "z-30 flex flex-col items-center justify-center py-5",
        )}
      >

        <Title>Menu</Title>
        <div className="flex flex-col items-center gap-2 mt-5 w-full px-2 h-full justify-center">
          {OPTIONS.map(({title, Icon, href}, i) => (
            <Link
              href={href}
              key={i}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 w-full bg-background-dark/[0.8] p-2 rounded-xl shadow"
            >
              <Icon size={50} />
              <Text className="text-2xl">{title}</Text>
            </Link>
          ))}
        </div>

      </Transition>
      <div
        className="fixed top-0 right-0 z-40 p-5 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <HiX className="text-3xl lg:text-6xl" />
        ) : (
          <GiHamburgerMenu className="text-3xl lg:text-6xl" />
        )}
      </div>
    </>
  );
};

export default Menu;