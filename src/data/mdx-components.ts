import Paragraph from "@/components/mdx/Paragraph.astro"
import Title from "@/components/mdx/Title.astro";

const mdxComponents = {
  h1: Title,
  p: Paragraph
};

export default mdxComponents;