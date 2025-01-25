import {useEffect, useState, ChangeEvent} from "react";
import FinderEntries from "@/lib/data/finder-entries";
import FinderEntry from "@/app/components/finder-entry";
import clamp from "@/lib/util/clamp";
import {useNavigate} from "react-router";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {FaBars} from "react-icons/fa";
import cn from "@/lib/util/cn";

const Finder = () => {
  const [finderOpen, setFinderOpen] = useState(false);
  const [filteredFinderEntries, setFilteredFinderEntries] = useState(FinderEntries);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        setSearch("");
        updateFilter();
        setFinderOpen(true);
        setSelectedIndex(0);
        setFilteredFinderEntries(FinderEntries);
      }

      document.getElementById("search")?.focus();

      const scrollSelectedIntoView = () => {
        const selected = document.getElementById("results")!.children[selectedIndex] as HTMLElement;
        selected.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
      };

      if (finderOpen) {
        if (e.key === "Escape") {
          setFinderOpen(false);
        }

        if (e.key === "ArrowDown") {
          setSelectedIndex(clamp(selectedIndex + 1, 0, filteredFinderEntries.length - 1));
          scrollSelectedIntoView();
        }

        if (e.key === "ArrowUp") {
          setSelectedIndex(clamp(selectedIndex - 1, 0, filteredFinderEntries.length - 1));
          scrollSelectedIntoView();
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

    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  });

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
    updateFilter()
  };

  const updateFilter = () => {
    if (search.length === 0) {
      setFilteredFinderEntries(FinderEntries);
      return;
    }

    setSelectedIndex(0);

    setFilteredFinderEntries(FinderEntries.filter(entry => (
      entry.name.toLowerCase().includes(search) ||
      entry.description.toLowerCase().includes(search)
    )));
  }

  return (
    <>
      <header className="fixed top-2 left-2 w-full">
        <span className="hidden md:block">
          Press <kbd className="kbd">Ctrl</kbd> + <kbd className="kbd">K</kbd> to navigate
        </span>
        <button
          className="flex md:hidden btn btn-square items-center justify-center"
          onClick={() => setFinderOpen(true)}
          aria-label="Navigation menu"
        >
          <FaBars className="text-2xl" />
        </button>
      </header>
      <article
        className={cn(
          "fixed top-0 left-0 items-center justify-center w-full h-full",
          "bg-black bg-opacity-50 z-20 p-2",
          finderOpen ? "flex" : "hidden pointer-events-none"
        )}
      >
        <section
          className="flex flex-col gap-section bg-base-200 rounded-xl h-full w-full md:h-1/2 md:w-1/2 p-5 shadow z-40"
        >
          <label className="input flex items-center justify-between">
            <input
              id="search"
              placeholder="What do you want?"
              type="text"
              autoComplete="off"
              onChange={(e) => onSearch(e)}
              value={search}
            />
            <FaMagnifyingGlass />
          </label>
          <section id="results" className="h-full flex flex-col gap-item overflow-y-scroll">
            {filteredFinderEntries.map((data, i) => (
              <FinderEntry key={i} data={data} selected={selectedIndex === i} />
            ))}
          </section>
          <section className="flex md:hidden btn btn-outline justify-center items-center w-full">
            <button onClick={() => setFinderOpen(false)}>Close</button>
          </section>
        </section>
      </article>
    </>
  );
};

export default Finder;