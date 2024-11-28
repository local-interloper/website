import PropsChildren from "../../lib/types/props-children";

interface Props extends PropsChildren {
}

const Hero = ({children}: Props) => (
  <article className="flex flex-col items-center justify-center w-screen h-[100svh]">
    {children}
  </article>
);

export default Hero;