import type { PropsWithChildren } from "react";

const ArticleContainer = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col items-center my-20">{children}</article>
  );
};

export default ArticleContainer;
