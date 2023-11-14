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
import classNames from "@/util/classNames";
import {ABOUT} from "@/data/about";

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
    <PageWrapper className="pb-10">
      <Container className="w-full shadow p-5">
        <Title>About me</Title>
        <div className="flex gap-5 items-center">
          <TextWrapper>
            <Text>local.interloper</Text>
            <Text>Age: 23</Text>
            <Text>Country: Croatia</Text>
          </TextWrapper>
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            className="h-32 w-32 rounded-full shadow border-2 border-primary"
          />
        </div>
        <Container className="h-full p-2">
          <TextWrapper>
            {ABOUT.map((text,i) => <Text key={i}>{text}</Text>)}
          </TextWrapper>
        </Container>
      </Container>

      <Container responsive flow className="p-5">
        <Container flow>
          <Title>Languages:</Title>
          <div className="flex flex-col justify-center h-full">
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map((Icon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center flex-col w-24 h-24 bg-background-light shadow rounded-xl"
                >
                  <Icon size={40} />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container flow className="h-full">
          <Title>Technologies:</Title>
          <div className="flex flex-col justify-center h-full">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
              {TECHNOLOGIES.map((Icon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center flex-col w-24 h-24 bg-background-light shadow rounded-xl"
                >
                  <Icon size={40} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Container>

      <Container flow className="h-full p-5">
        <Title>My personal projects</Title>
        <Link
          href="https://github.com/local-interloper/"
          className={classNames(
            "flex flex-col items-center justify-center bg-background-light rounded-xl border-2 border-primary",
            "shadow h-32 w-32 lg:hover:scale-110 hover:bg-background-light transition-all duration-200"
          )}
          target="_blank"
        >
          <SiGithub size={80} />
          <Text>Browse</Text>
        </Link>
        <Text>
          As I&apos;ve already said, I do programming as a hobby too.
          If you are interested into checking out some of my work. Feel free to check out my GitHub.
        </Text>
      </Container>
      <Container flow className="p-5">
        <Title>Experience</Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {EXPERIENCE.map((experience, i) => <ExperienceCard key={i} experience={experience} />)}
        </div>
      </Container>
    </PageWrapper>
  );
};

export default AboutMePage;