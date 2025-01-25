import DocumentHero from "@/app/components/document-hero";
import Gallery from "@/app/routes/_page.hobbies.art/gallery";

const Art = () => {
  return (
    <article className="flex flex-col items-center w-full gap-article">
      <DocumentHero title="Art" subtitle="(AKA renders of stuff I'm into)">
        <p>
          Originally I wanted to learn it to make video games but then ended up really enjoying just starting up Blender
          and working on something just for the sake of making something I can call pretty.
        </p>
        <p>
          You may notice some of these &quot;renders&quot; as I like to call them, really look 2D. Tis nothing but
          smoke and mirrors. I never really grasped drawing enough to make something I can be proud of, so I
          learned a bunch of maths to make my 3D art look 2D.
        </p>
      </DocumentHero>
      <Gallery />
    </article>
  );
};

export default Art;