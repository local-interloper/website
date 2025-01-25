import DocumentHero from "@/app/components/document-hero";
import Timeline from "@/app/routes/_page.career/timeline";

const Career = () => {
  return (
    <article>
      <DocumentHero title="Career">
        <p>Here you can learn more about my professional career and how I here.</p>
        <p>
          As someone who&apos;s been behind a keyboard for a good portion of my life, it&apos;s really not uncommon for
          work to find me. Here are some documented cases of my work providing value to people.
        </p>
      </DocumentHero>
      <Timeline/>
    </article>
  );
};

export default Career;