import type { PropsWithChildren } from "react";
import { cn } from "~/lib/util/cn";

interface Props extends PropsWithChildren {
  reverse?: boolean;
  className?: string;
}

const Responsive = ({ children, reverse = false, className }: Props) => (
  <article
    className={cn(
      "flex flex-col gap-sm",
      reverse ? "md:flex-row-reverse" : "md:flex-row",
      className
    )}
  >
    {children}
  </article>
);

export default Responsive;
