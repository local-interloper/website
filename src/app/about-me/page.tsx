import PageWrapper from "@/components/core/containers/page-wrapper";
import Container from "@/components/core/containers/container";
import Title from "@/components/core/text/title";
import AboutMe from "@/app/about-me/about-me";
import Languages from "@/app/about-me/programming-languages";
import Hobbies from "@/app/about-me/hobbies";
import Technologies from "@/app/about-me/technologies";
import PersonalProjects from "@/app/about-me/personal-projects";
import ScrollForMore from "@/components/core/scroll-for-more";
import Experience from "@/app/about-me/experience";
import {BsPerson} from "react-icons/bs";


const AboutMePage = () => {
  return (
    <PageWrapper>
      <Container screen>
        <div className="flex flex-col gap-2 items-center select-none">
          <div className="flex gap-5 items-center">
            <Title bold size="lg">About Me</Title>
            <BsPerson className="text-8xl text-primary" />
          </div>
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