import {useEffect, useState, ChangeEvent} from "react";
import finderEntries from "@/lib/data/finder-entries";
import FinderEntry from "@/app/components/finder-entry";
import clamp from "@/lib/util/clamp";
import {useNavigate} from "react-router";

const Finder = () => {
  const [finderOpen, setFinderOpen] = useState(false);
  const [filteredFinderEntries, setFilteredFinderEntries] = useState(finderEntries);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.key === "f" && e.ctrlKey) {
        e.preventDefault();
        setFinderOpen(true);
        setSelectedIndex(0);
        setFilteredFinderEntries(finderEntries);
      }

      if (finderOpen) {
        if (e.key === "Escape") {
          setFinderOpen(false);
        }

        if (e.key === "ArrowDown") {
          setSelectedIndex(clamp(selectedIndex + 1, 0, filteredFinderEntries.length - 1));
        }

        if (e.key === "ArrowUp") {
          setSelectedIndex(clamp(selectedIndex - 1, 0, filteredFinderEntries.length - 1));
        }

        if (e.key == "Enter") {
          const url = filteredFinderEntries[selectedIndex].url;
          navigate(url);
          setSelectedIndex(0);
          setFinderOpen(false);
        }
      }
    };


    document.addEventListener("keydown", keyPressHandler);
    document.getElementById("search")?.focus();

    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  });

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();

    if (search.length === 0) {
      setFilteredFinderEntries(finderEntries);
      return;
    }

    setFilteredFinderEntries(finderEntries.filter(entry => (
      entry.name.toLowerCase().includes(search) ||
      entry.description.toLowerCase().includes(search)
    )));
  };

  return finderOpen && (
    <article
      className="fixed flex top-0 left-0 items-center justify-center w-screen h-[100svh] bg-black bg-opacity-50 z-20"
    >
      <section className="flex flex-col gap-section bg-base-200 rounded-xl h-1/2 w-1/2 p-5 shadow">
        <input
          id="search"
          className="input"
          placeholder="What do you want?"
          type="text"
          onChange={(e) => onSearch(e)}
        />
        <section className="h-full flex flex-col gap-item overflow-y-scroll">
          {filteredFinderEntries.map((data, i) => (
            <FinderEntry key={i} data={data} selected={selectedIndex === i} />
          ))}
        </section>
      </section>
    </article>
  );
};

export default Finder;