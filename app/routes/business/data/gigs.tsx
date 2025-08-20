import type { IconType } from "react-icons";
import {
  SiBlender,
  SiBootstrap,
  SiDotnet,
  SiElectron,
  SiHaxe,
  SiHtml5,
  SiJavascript,
  SiMqtt,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export interface Gig {
  title: string;
  client: {
    name: string;
    url?: string;
  };
  link?: string;
  description: string;
  technologies: IconType[];
  year: number | string;
}

export const GIGS: Gig[] = [
  {
    title: "A Music Video",
    client: {
      name: "The Splitters",
    },
    description: "A local band asked me to make a music video for their song.",
    technologies: [SiBlender],
    link: "https://www.youtube.com/watch?v=cdtbczau8d4&list=RDcdtbczau8d4",
    year: 2019,
  },
  {
    title: "Apartment Website",
    client: {
      name: "A Friend",
    },
    description:
      "A friend of mine asked me to build a website for some apartment.",
    technologies: [SiHtml5, SiBootstrap],
    year: 2020,
  },
  {
    title: "Automation (Workflow Optimization)",
    client: {
      name: "Reblika",
      url: "https://reblika.com",
    },
    description:
      "A friend who worked at Reblika asked me to lend them a hand in optimizing their workflows.",
    technologies: [SiPython],
    year: 2021,
  },
  {
    title: "Easy LFS Manager",
    client: {
      name: "Valsogard",
      url: "https://valsogard.com",
    },
    description:
      "I've made a tool that would allow artsits to use the Git LFS system without CLI knowledge.",
    technologies: [SiHaxe, SiDotnet],
    year: 2021,
  },
  {
    title: "Game Launcher",
    client: {
      name: "Valsogard",
      url: "https://valsogard.com",
    },
    description:
      "I've created a small game launcher for a project called Cosmic Universe",
    technologies: [SiJavascript, SiElectron, SiReact],
    year: 2022,
  },
  {
    title: "geminus",
    client: {
      name: "Valsogard",
      url: "https://valsogard.com",
    },
    description:
      "I worked on the backend of an IOT system. It originally used WebSockets but was later rebuilt to work with MQTT.",
    technologies: [SiTypescript, SiMqtt, SiNextdotjs],
    year: 2022,
  },
  {
    title: "Tradescrow",
    client: {
      name: "Valsogard",
      url: "https://valsogard.com",
    },
    description:
      "I helped out with building some GUI stuff of a crypto escrow.",
    technologies: [SiTypescript, SiNextdotjs],
    link: "https://tradescrow.io",
    year: 2023,
  },
  {
    title: "Websites",
    client: {
      name: "Valsogard",
      url: "https://valsogard.com",
    },
    description: "I've built multiple websites for Valsogard.",
    technologies: [SiTypescript, SiNextdotjs],
    year: "2023-2024",
  },
];
