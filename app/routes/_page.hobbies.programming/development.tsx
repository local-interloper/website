import SideBySide from "@/app/components/side-by-side";
import DocumentTitle from "@/app/components/document-title";
import {BsFilm} from "react-icons/bs";
import {SiAudacity, SiBlender, SiKrita, SiUnity, SiVisualstudio} from "react-icons/si";

const Development = () => (
  <article className="flex flex-col items-center w-full py-10 bg-base-200 shadow">
    <SideBySide>
      <section className="flex flex-col gap-item w-full max-w-sm md:max-w-2xl">
        <DocumentTitle title="Development" subtitle="We will NOT talk about C*****T" />
        <p>
          During my teens I played a lot of video games on my PC, PlayStation and Nintendo Wii. Naturally, at some
          point
          I wanted to learn to make video games. That was one of many driving forces that pushed me to learn to code.
        </p>
        <p>
          Game development is a daunting task and while I didn&apos;t release any games (officially) it got a non
          negligible amount of experience in a wide variety of programming disciplines and art software.
        </p>
        <p>
          From programming tools to art programs I was rapidly gaining knowledge. Becoming a little jack of all
          traits.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center">
        <section className="grid grid-cols-3 md:grid-cols-2 gap-5">
          {[
            SiVisualstudio,
            SiBlender,
            SiKrita,
            BsFilm,
            SiAudacity,
            SiUnity
          ].map((Icon, i) => (
            <Icon key={i} className="text-5xl" />
          ))}
        </section>
      </section>
    </SideBySide>
  </article>
);

export default Development;