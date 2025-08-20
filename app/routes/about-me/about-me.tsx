import ArticleContainer from "~/components/article-container";
import PageWrapper from "~/components/page-wrapper";
import HobbiesWindow, { HOBBIES } from "./components/hobbies-window";
import AboutMeTitle from "./components/about-me-title";
import ProgrammingLanguagesWindow from "./components/programming-languages-window";
import TechnologiesWindow from "./components/technologies-window";
import Responsive from "~/components/responsive";
import ToolsWindow from "./components/tools-window";

const AboutMe = () => {
  return (
    <PageWrapper>
      <AboutMeTitle />
      <ArticleContainer>
        <Responsive>
          <article className="flex flex-col gap-sm w-full">
            <HobbiesWindow />
            <ProgrammingLanguagesWindow />
          </article>
          <article className="flex flex-col gap-sm w-full">
          <TechnologiesWindow />
          <ToolsWindow />
          </article>
        </Responsive>
      </ArticleContainer>
    </PageWrapper>
  );
};

export default AboutMe;
