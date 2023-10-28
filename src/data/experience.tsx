import {
  SiCsharp,
  SiDocker, SiGit,
  SiHaxe,
  SiLinux,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiVercel,
  SiWindows
} from "react-icons/si";
import {IconType} from "react-icons";
import {TbBrandNextjs} from "react-icons/tb";

export interface IExperience {
  title: string;
  year: number;
  description: string;
  techStack: IconType[];
}

export const EXPERIENCE: IExperience[] = [
  {
    title: "Workflow Automation",
    year: 2019,
    description: "I was asked by my friend who worked at Reblika to create a texture sorting solution for his team.",
    techStack: [SiPython, SiWindows]
  },
  {
    title: "VSG Easy Git LFS",
    year: 2019,
    description: "A tool that allows for managing which files will be used with the Git's large file system.",
    techStack: [SiHaxe, SiCsharp, SiGit, SiWindows]
  },
  {
    title: "An IoT prototype - Geminus",
    year: 2020,
    description: "A prototype IoT backend called Geminus with auth system and an extensible design that allows simple implementation of multiple protocols.",
    techStack: [SiTypescript, SiPostgresql, SiGit, SiDocker]
  },
  {
    title: "Tradescrow - Assistant",
    year: 2022,
    description: "I assisted in creation of tradescrow.io. I did a chunk of UI, some trade logic.",
    techStack: [SiTypescript, TbBrandNextjs, SiGit, SiVercel]
  },
  {
    title: "Front end web development",
    year: 2023,
    description: "I was tasked to recreate valsogard.com from ground up using modern technologies. The CEO of the company also asked me to create his personal website too (dragoslav.expert).",
    techStack: [SiTypescript, TbBrandNextjs, SiVercel]
  }
];