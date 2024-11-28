import Hero from "@/app/components/hero";
import PropsChildren from "@/lib/types/props-children";
import DocumentTitle from "@/app/components/document-title";

interface Props extends PropsChildren {
  title: string;
  subtitle?: string;
}

const DocumentHero = ({title, subtitle, children}: Props) => (
  <Hero>
    <article className="flex flex-col gap-item w-full max-w-2xl">
      <DocumentTitle title={title} subtitle={subtitle} />
      <section className="flex flex-col gap-item">
        {children}
      </section>
    </article>
  </Hero>
)

export default DocumentHero;