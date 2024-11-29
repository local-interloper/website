import {BiSolidTrafficCone} from "react-icons/bi";

const UnderConstruction = () => (
  <article className="flex items-center justify-center w-full h-[100svh]">
    <section className="flex flex-col items-center">
    <section className="flex items-center gap-item uppercase text-2xl md:text-4xl border-b-2 border-black">
      <BiSolidTrafficCone />
      <h1>Under construction</h1>
      <BiSolidTrafficCone />
    </section>
      <span>Try checking again sometime later!</span>
    </section>
  </article>
)

export default UnderConstruction