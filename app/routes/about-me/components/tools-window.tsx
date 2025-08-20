import { BsHammer } from "react-icons/bs";
import { DiVisualstudio } from "react-icons/di";
import {
  SiBlender,
  SiCratedb,
  SiDavinciresolve,
  SiFirefox,
  SiGit,
  SiGnubash,
  SiGooglechrome,
  SiJetbrains,
  SiJira,
  SiKde,
  SiKrita,
  SiLinux,
  SiObsidian,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import VguiWindow from "~/components/vgui-window";

const TOOLS = [
  VscVscode,
  SiGit,
  SiLinux,
  SiGnubash,
  SiKde,
  SiBlender,
  SiKrita,
  SiObsidian,
  SiDavinciresolve,
  SiJetbrains,
  DiVisualstudio,
  SiJira,
  SiPostman,
  SiFirefox,
  SiGooglechrome,
];

const ToolsWindow = () => (
  <VguiWindow Icon={BsHammer} title="Tools">
    <p>
      If someone did however task me to build Rome in a day, I would probably
      end up using some of these at some point:
    </p>
    <article className="flex flex-wrap justify-center gap-md frame-inset p-2">
      {TOOLS.map((Icon, i) => (
        <Icon key={i} className="text-3xl" />
      ))}
    </article>
  </VguiWindow>
);

export default ToolsWindow;
