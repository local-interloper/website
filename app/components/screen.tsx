import type { PropsWithChildren } from "react";

const Screen = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex items-center justify-center h-[100svh] w-full">
      {children}
    </article>
  );
};

export default Screen;
