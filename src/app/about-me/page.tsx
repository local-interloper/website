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
  SiJavascript, SiJetbrains, SiLinux,
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

const AboutMePage = () => {
  return (
    <PageWrapper className="py-10">
      <Container flow className="gap-5 px-5">
        <Container responsive flow>
          <Container className="h-full w-full bg-background rounded-xl">
            <Image src={ProfilePicture} alt="Profile Picture" className="h-32 w-32 rounded-full shadow" />
            <TextWrapper>
              <Text>local.interloper</Text>
              <Text>Age: 23</Text>
              <Text>Country: Croatia</Text>
            </TextWrapper>
          </Container>
          <Container className="h-full w-full bg-background rounded-xl p-5">
            <Title>About me</Title>
            <Text>
              I am a 23 year old fella from Croatia that&apos;s been into programming for quite a while now. I have a
              bunch of personal and commercial projects under my belt at this point as programming is not only my
              career but also a hobby.
            </Text>
            <Text>
              By nature I&apos;m one hella curious guy. This nudged me into developing a very diverse skill set and made
              me very adaptable by nature.
            </Text>
          </Container>
        </Container>
        <Container responsive flow className="h-full bg-background rounded-xl p-5">
          <Container flow>
            <Title>Languages:</Title>
            <div className="flex flex-col justify-center h-full">
              <div className="grid grid-cols-3 gap-2">
                {[
                  SiTypescript,
                  SiCsharp,
                  SiRust,
                  SiJavascript,
                  SiPython,
                  SiLua,
                  SiHaxe,
                  SiC,
                  TbSql,
                ].map((Icon, i) => (
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
              <div className="grid grid-cols-4 gap-2">
                {[
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
                ].map((Icon, i) => (
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

        <Container flow className="h-full bg-background rounded-xl p-5">
          <Title>My personal projects</Title>
          <Container responsive>
            <div>
              <Text>
                As I&apos;ve already said, I do programming as a hobby too.
                If you are interested into checking out some of my work. Feel free to check out my GitHub.
              </Text>
            </div>
            <Link
              href="https://github.com/local-interloper/"
              className="flex flex-col items-center justify-center bg-background-light hover:bg-background-dark rounded-xl shadow h-32 w-32"
              target="_blank"
            >
              <SiGithub size={80} />
              <Text>My Projects</Text>
            </Link>
          </Container>
        </Container>

        <Container flow className="h-full bg-background rounded-xl p-5">
          <Title>Experience</Title>
          {EXPERIENCE.map((experience, i) => <ExperienceCard key={i} experience={experience} />)}
        </Container>

      </Container>
    </PageWrapper>
  );
};

export default AboutMePage;