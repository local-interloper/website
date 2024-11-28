import socials from "@/lib/data/socials";

interface Props {
  tooltipSide?: string;
}

const Social = ({tooltipSide}: Props) => (
  <article className="flex items-center gap-item">
    {socials.map(({name, Icon, url}, i) => (
      <a
        key={i}
        href={url}
        data-tip={name}
        className={`flex btn btn-square tooltip tooltip-${tooltipSide || "bottom"} items-center justify-center btn-outline border-2`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="text-2xl" />
      </a>
    ))}
  </article>
);

export default Social;