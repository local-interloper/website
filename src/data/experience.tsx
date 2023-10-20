import {SiCsharp, SiHaxe} from "react-icons/si";
import {IconType} from "react-icons";

export interface IExperience {
  title: string;
  year: number;
  description: string;
  techStack: IconType[];
}

export const EXPERIENCE: IExperience[] = [
  {
    title: "VSG Easy Git LFS",
    year: 2019,
    description: "A tool that allows for managing which files will be used with the Git's large file system.",
    techStack: [SiHaxe, SiCsharp]
  }
];