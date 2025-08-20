import { FaBriefcase, FaHandshake } from "react-icons/fa";
import { MdHandshake } from "react-icons/md";
import ArticleContainer from "~/components/article-container";
import Screen from "~/components/screen";
import VguiWindow from "~/components/vgui-window";

const BusinessTitle = () => (
  <Screen>
    <VguiWindow Icon={FaHandshake} title="Business" className="w-full">
      <article className="flex flex-col gap-sm max-w-md">
        <p>
          It goes without saying that given my skills I was offerend a multitude
          of opportunities to produce things.
        </p>
        <p>
          Here you can learn about my capabilities and my prior work experience
          both formal and non formal.
        </p>
        <p className="text-vgui-text-dark">
        </p>
      </article>
    </VguiWindow>
  </Screen>
);

export default BusinessTitle;
