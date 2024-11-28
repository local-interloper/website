import Hero from "@/app/components/hero";
import Social from "@/app/components/social";

const _index = () => (
  <Hero>
    <section className="flex flex-col items-center gap-item">
      <article className="flex items-center gap-item border-b-2 border-b-black p-2">
        <h1 className="font-title">local.interloper</h1>
      </article>
      <Social />
    </section>
    <footer className="fixed bottom-2">
      <span className="opacity-80">Copyright (C) 2024 local.interloper</span>
    </footer>
  </Hero>
);

export default _index;