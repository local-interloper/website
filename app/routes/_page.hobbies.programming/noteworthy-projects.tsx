import DocumentTitle from "@/app/components/document-title";
import {SiGithub} from "react-icons/si";

const NoteworthyProjects = () => (
  <article
    className="flex flex-col items-center gap-section text-center  rounded-lg shadow bg-base-200 max-w-sm md:max-w-2xl p-5"
  >
    <DocumentTitle title="Noteworthy Projects" />
    <section className="flex flex-col items-center gap-item">
      <p>
        During my lifespan I&apos;ve worked on many projects. Some personal, some commercial and some open source. The
        best way to get an idea of what I worked on is to check out my GitHub account. Check the pinned repositories on
        my profile.
      </p>
      <a
        className="btn btn-outline" href="https://github.com/local-interloper" rel="noopener noreferrer" target="_blank"
      >
        <SiGithub className="text-2xl" />
        GitHub
      </a>
    </section>
  </article>
);

export default NoteworthyProjects;