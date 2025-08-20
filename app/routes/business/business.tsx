import PageWrapper from "~/components/page-wrapper";
import BusinessTitle from "./components/business-title";
import ArticleContainer from "~/components/article-container";
import FormalWorkExperienceWindow from "./components/formal-work-experience-window";
import GigsWindow from "./components/gigs-window";
import Responsive from "~/components/responsive";
import LanguagesWindow from "./components/languages-window";

const Business = () => (
  <PageWrapper>
    <BusinessTitle />
    <ArticleContainer>
      <article className="flex flex-col gap-sm">
        <Responsive className="items-end">
          <FormalWorkExperienceWindow />
          <LanguagesWindow />
        </Responsive>
        <GigsWindow />
      </article>
    </ArticleContainer>
  </PageWrapper>
);

export default Business;
