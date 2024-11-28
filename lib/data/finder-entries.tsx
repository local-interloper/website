import {FaHouse, FaBrush} from "react-icons/fa6";
import FinderEntryData from "@/lib/types/finder-entry-data";
import {MdGames} from "react-icons/md";
import {FaCode, FaLink, FaMusic, FaSuitcase, FaUser} from "react-icons/fa";

const finderEntries: FinderEntryData[] = [
  {
    name: "Home",
    Icon: FaHouse,
    description: "The main landing page of the website",
    url: "/"
  },
  {
    name: "About Me",
    Icon: FaUser,
    description: "Who is responsible for this mess?",
    url: "/about-me/"
  },
  {
    name: "Programming",
    Icon: FaCode,
    description: "Dump of pet projects and unmaintained code",
    url: "/hobbies/programming/"
  },
  {
    name: "Games",
    Icon: MdGames,
    description: "Favorite games",
    url: "/hobbies/games/"
  },
  {
    name: "Music",
    Icon: FaMusic,
    description: "Nic(h)e noise",
    url: "/hobbies/music/"
  },
  {
    name: "Art",
    Icon: FaBrush,
    description: "Cool renders",
    url: "/hobbies/art/"
  },
  {
    name: "Business",
    Icon: FaSuitcase,
    description: "Work career",
    url: "/business/"
  },
  {
    name: "Linktree",
    Icon: FaLink,
    description: "All the different links",
    url: "/linktree/"
  }
];

export default finderEntries;