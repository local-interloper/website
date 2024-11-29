import PropsChildren from "@/lib/types/props-children";
import cn from "@/lib/util/cn";

interface Props extends PropsChildren {
  center?: boolean;
}

const SideBySide = ({center = true, children}: Props) => (
  <article
    className={cn(
      "flex flex-col md:flex-row w-full max-w-sm md:max-w-4xl gap-section justify-between",
      center && "items-center"
    )}
  >
    {children}
  </article>
);

export default SideBySide;
