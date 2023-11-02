import {
  SiCsharp,
  SiDocker, SiGit,
  SiHaxe,
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
  shortDescription: string;
  description: string;
  techStack: IconType[];
  client?: Client;
}

export interface Client {
  name: string;
  url?: string;
}

export const EXPERIENCE: IExperience[] = [
  {
    title: "Workflow Automation",
    year: 2019,
    shortDescription: "I did workflow automation for Reblika's artists.",
    description: `
    A friend of mine called me in to automate sorting of textures into some folders. The tool used was Adobe Substance
    Painter which outputs all of it's textures in a singular folder and artists had to waste time sorting them into 
    their respective folders all the time. So I automated that process using python by writing a program that uses the 
    file name to sort the into their respective folders. 
    `,
    techStack: [SiPython, SiWindows]
  },
  {
    title: "VSG Easy Git LFS",
    year: 2019,
    shortDescription: "A tool that allows for managing which files will be used with the Git's large file system.",
    description: `
    This was my first work on a tool. Git at the moment didn't support any elegant solution to mark specific files for 
    use with GitLFS, so I created a utility that supports crawling the project by filesize, extension, etc. It's core is
    a CLI tool I wrote using Haxe, then I added a UI using Microsoft forms. The UI would use the core as it's 
    subprocess to carry out the tasks.
    `,
    techStack: [SiHaxe, SiCsharp, SiGit, SiWindows],
    client: {
      name: "Valsogard Enterprise",
      url: "https://valsogard.com"
    }
  },
  {
    title: "An IoT prototype - Geminus",
    year: 2020,
    shortDescription: "A prototype IoT backend called Geminus",
    description: `
    I was tasked with creating a modular IoT backend that could implement multiple communication protocols. This is 
    where I sharpened my OOP skills. The goal of the task was creating an IoT backend that would support user and 
    device connections, allow them to register and allow them to interact with one another. I worked with 2 other 
    people on this project, one of which was tasked with creating the actual hardware using an ESP32 and the other who 
    worked on the client. The prototype was a success.
    `,
    techStack: [SiTypescript, SiPostgresql, SiGit, SiDocker],
    client: {
      name: "Valsogard Enterprise",
      url: "https://valsogard.com"
    }
  },
  {
    title: "Tradescrow - Assistant",
    year: 2022,
    shortDescription: "I assisted in creation of tradescrow.io. I did a chunk of UI and some trade logic.",
    description: `
    I was tasked with assisting the lead programmer in the creation of a crypto asset trade escrow. 
    It was a wonderful learning experience and it's the experience responsible for my current front-end development 
    capabilities. I had a chance to fiddle a bit with some web3 technologies too.
    `,
    techStack: [SiTypescript, TbBrandNextjs, SiGit, SiVercel],
    client: {
      name: "Tradescrow",
      url: "https://tradescrow.io"
    }
  },
  {
    title: "Front end web development",
    year: 2023,
    shortDescription: "I reworked and created a few websites for Valsogard",
    description: `
    I was tasked to recreate valsogard.com from ground up using modern technologies. The CEO of the company also asked 
    me to create his personal website too (dragoslav.expert).
    `,
    techStack: [SiTypescript, TbBrandNextjs, SiVercel],
    client: {
      name: "Valsogard Enterprise",
      url: "https://valsogard.com"
    }
  }
];