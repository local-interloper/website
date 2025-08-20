import type { PropsWithChildren } from "react";
import Footer from "./footer";
import Navigation from "./navbar/navigation";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex relative flex-col items-center overflow-clip">
      <article className="flex flex-col max-w-4xl px-2 md:px-0">{children}</article>
      <Footer />
    </article>
  );
};

export default PageWrapper;
