import {FaRegCircle} from "react-icons/fa";
import TIMELINE from "@/app/routes/_page.career/data/timeline";

const Timeline = () => (
  <article className="flex flex-col items-center">
    <article className="px-5">
      {TIMELINE.map(({year, title, text}, i) => (
        <article key={i} className="grid grid-cols-12 max-w-4xl">
          <article className="flex items-center justify-center col-span-1">
            <FaRegCircle />
          </article>
          <article className="col-span-11">
            <time className="font-mono italic">{year}</time>
          </article>
          <article className="flex justify-center col-span-1">
            <hr className="w-min h-full border-2 border-base-300" />
          </article>
          <article className="flex flex-col col-span-11 pb-10">
            <h1 className="font-mom text-3xl">{title}</h1>
            <p>{text}</p>
          </article>
        </article>
      ))}
    </article>
    <section className="flex w-full">
      <div className="flex flex-col items-center opacity-70 italic text-lg">
        <span>Present Day</span>
        <span>Present Time</span>
      </div>
    </section>
  </article>
);

export default Timeline;