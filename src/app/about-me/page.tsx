import PageWrapper from "@/components/core/containers/page-wrapper";
import Container from "@/components/core/containers/container";
import Title from "@/components/core/text/title";
import Text from "@/components/core/text/text";
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
  SiUnity,
} from "react-icons/si";
import Link from "next/link";
import {EXPERIENCE} from "@/data/experience";
import ExperienceCard from "@/app/about-me/experience-card";
import IconDisplay from "@/app/about-me/icon-display";
import AboutMe from "@/app/about-me/about-me";
import ProfilePicture from "@/components/core/profile-picture";
import Languages from "@/app/about-me/programming-languages";
import Hobbies from "@/app/about-me/hobbies";
import Technologies from "@/app/about-me/technologies";
import PersonalProjects from "@/app/about-me/personal-projects";
import ScrollForMore from "@/components/core/scroll-for-more";
import Experience from "@/app/about-me/experience";


const AboutMePage = () => {
  return (
    <PageWrapper>
      <Container screen>
        <div className="flex flex-col gap-2 items-center select-none">
          <Title bold size="lg">About me</Title>
          <ScrollForMore />
        </div>
      </Container>


      <AboutMe />

      <Hobbies />

      <Languages />

      <Technologies />

      <PersonalProjects />

      <Experience />
    </PageWrapper>
  );
};

export default AboutMePage;