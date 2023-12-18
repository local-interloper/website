import PageWrapper from "@/components/_core/containers/page-wrapper";
import Container from "@/components/_core/containers/container";
import Title from "@/components/_core/text/title";
import Text from "@/components/_core/text/text";
import Image from "next/image";
import ProfilePicture from "@assets/pfp.png";
import TextWrapper from "@/components/_core/containers/text-wrapper";
import {TbSql} from "react-icons/tb";
import {
  SiC,
  SiCsharp, SiDotnet, SiElectron, SiGit, SiGithub, SiGodotengine, SiHaxe,
  SiJavascript, SiLinux,
  SiLua,
  SiNextdotjs, SiNodedotjs, SiPostgresql,
  SiPython, SiReact,
  SiRust, SiTauri,
  SiTypescript,
  SiUnity, SiUnrealengine,
} from "react-icons/si";
import Link from "next/link";
import {EXPERIENCE} from "@/data/experience";
import ExperienceCard from "@/app/about-me/experience-card";
import {ABOUT} from "@/data/about";
import IconDisplay from "@/app/about-me/icon-display";

const TECHNOLOGIES = [
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiElectron,
  SiTauri,
  SiGit,
  SiDotnet,
  SiLinux,
  SiGodotengine,
  SiUnity,
  SiUnrealengine
];

const LANGUAGES = [

  SiTypescript,
  SiCsharp,
  SiRust,
  SiJavascript,
  SiPython,
  SiLua,
  SiHaxe,
  SiC,
  TbSql,
];

const AboutMePage = () => {
  return (
    <PageWrapper className="pt-20">
      <Title>About Me</Title>
      <div className="card card-body bg-base-200 shadow-xl">
        <div className="flex gap-5 items-center">
          <TextWrapper>
            <Text>local.interloper</Text>
            <Text>Age: 23</Text>
            <Text>Country: Croatia</Text>
          </TextWrapper>
          <div className="avatar">
            <div className="mask mask-squircle w-32 shadow-xl">
              <Image src={ProfilePicture} alt="Profile Picture" />
            </div>
          </div>
        </div>
      </div>

      <TextWrapper className="p-2">
        {ABOUT.map((text, i) => <Text key={i}>{text}</Text>)}
      </TextWrapper>

      <Container responsive flow className="p-5">
        <Container flow>
          <Title>Languages:</Title>
          <div className="flex flex-col justify-center h-full">
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map((Icon, i) => <IconDisplay key={i} Icon={Icon} />)}
            </div>
          </div>
        </Container>
        <Container flow className="h-full">
          <Title>Technologies:</Title>
          <div className="flex flex-col justify-center h-full">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
              {TECHNOLOGIES.map((Icon, i) => <IconDisplay key={i} Icon={Icon} />)}
            </div>
          </div>
        </Container>
      </Container>

      <div className="p-2">
        <div className="flex flex-col gap-5 items-center card bg-base-200 p-10 shadow-xl">
          <Title>My personal projects</Title>
          <Link
            href="/github"
            className="btn btn-lg btn-circle btn-outline btn-primary"
          >
            <SiGithub className="text-4xl" />
          </Link>
          <Text>
            As I&apos;ve already said, I do programming as a hobby too.
            If you are interested into checking out some of my work. Feel free to check out my GitHub.
          </Text>
        </div>
      </div>

      <Container flow className="p-5">
        <Title>Experience</Title>
        <div className="flex flex-col gap-2">
          {EXPERIENCE.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
        </div>
      </Container>
    </PageWrapper>
  );
};

export default AboutMePage;