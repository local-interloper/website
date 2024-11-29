interface Props {
  title: string;
  subtitle?: string;
}

const DocumentTitle = ({title, subtitle}: Props) => (
  <section className="flex flex-col md:flex-row justify-between md:items-end gap-item border-b-2 border-black w-full max-w-sm md:max-w-2xl pb-2">
    <h1 className="font-title">{title}</h1>
    {subtitle && <p className="opacity-70 font-serif">{subtitle}</p>}
  </section>
);

export default DocumentTitle;