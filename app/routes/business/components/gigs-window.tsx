import { FaTools } from "react-icons/fa";
import VguiWindow from "~/components/vgui-window";
import { GIGS } from "../data/gigs";
import { FiExternalLink } from "react-icons/fi";
import GigsTable from "./gigs-table";
import GigCard from "./gig-card";

const GigsWindow = () => (
  <VguiWindow Icon={FaTools} title="Gigs">
    <article className="flex flex-col gap-sm">
      <article>
        <p>
          After some recognition I was asked on multiple ocasions to do stuff
          for people.
        </p>
      </article>
      <article className="hidden md:block">
        <GigsTable />
      </article>
      <article className="block md:hidden">
        <article className="flex flex-col gap-sm p-1 frame-inset">
          {GIGS.map((gig, i) => (
            <GigCard key={i} gig={gig} />
          ))}
        </article>
      </article>
    </article>
  </VguiWindow>
);

export default GigsWindow;
