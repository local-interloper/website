import DocumentHero from "@/app/components/document-hero";
import Development from "@/app/routes/_page.hobbies.programming/development";
import LanguagesAndTechnologies from "@/app/routes/_page.hobbies.programming/languages-technologies";
import NoteworthyProjects from "@/app/routes/_page.hobbies.programming/noteworthy-projects";

const Games = () => {
  return (
    <article className="flex flex-col items-center w-full gap-article">
      <DocumentHero title="Programming" subtitle="The act of bullying rocks into thinking">
        <p>
          My programming journey started pretty early on. I think I was like what... maybe 8 years old? Yeah,
          that&apos;s how old I was when I found that book in the attic. It was called something along the lines
          of <i>Basic For Beginners</i> I think. And then I found this program on my old Windows 95 machine (assuming
          you use Windows 11, that&apos;s {95 - 11} installments ahead of you) called&nbsp;
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/QBasic"
            aria-label="QBasic wikipedia link"
          >
            QBASIC
          </a>
          .
        </p>
        <p>
          It wasn&apos;t too long before I started screaming <i>&ldquo;Mom! Mom! Look! I make silly white box calculate
          surface area!&ldquo;</i> And she was all like <i>&ldquo;Holly shit! Bravo son! Now I am 100% sure that dad
          should&apos;ve pulled out!&ldquo;</i>
        </p>
        <p>
          Those inspiring words would only make my interest for computers grow and so my journey through the world of
          computing would begin!
        </p>
      </DocumentHero>

      <Development />

      <LanguagesAndTechnologies />

      <NoteworthyProjects />
    </article>
  );
};

export default Games;