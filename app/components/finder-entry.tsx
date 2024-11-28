import FinderEntryData from "@/lib/types/finder-entry-data";
import cn from "@/lib/util/cn";

interface Props {
  data: FinderEntryData;
  selected: boolean;
}

const FinderEntry = ({data: {name, Icon, description, url}, selected}: Props) => {
  return (
    <a
      href={url} className={cn(
      "flex p-2 items-center gap-4 hover:bg-base-300 rounded-lg",
      selected && "bg-base-300"
    )}
    >
      <Icon className="text-2xl" />
      <section className="flex flex-col">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="opacity-80">{description}</p>
      </section>
    </a>
  );
};

export default FinderEntry;