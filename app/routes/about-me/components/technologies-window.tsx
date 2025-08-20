import { BiBaseball } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { PiCircuitry } from "react-icons/pi";
import {
  SiAngular,
  SiArduino,
  SiAstro,
  SiDocker,
  SiDotnet,
  SiElectron,
  SiEspressif,
  SiFlutter,
  SiGin,
  SiGithub,
  SiGodotengine,
  SiMaterialformkdocs,
  SiNestjs,
  SiNetcup,
  SiNextdotjs,
  SiReact,
  SiSvelte,
  SiTauri,
  SiUnity,
  SiUnrealengine,
  SiVercel,
} from "react-icons/si";
import VguiWindow from "~/components/vgui-window";

const TECHNOLOGIES = [
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiAstro,
  SiSvelte,
  SiMaterialformkdocs,
  SiDotnet,
  SiNestjs,
  SiGin,
  SiFlutter,
  SiTauri,
  SiElectron,
  SiEspressif,
  SiArduino,
  SiUnity,
  SiGodotengine,
  SiUnrealengine,
  SiDocker,
  SiVercel,
  SiGithub,
  SiNetcup
];

const TechnologiesWindow = () => (
  <VguiWindow Icon={PiCircuitry} title="Technologies">
    <article className="flex flex-col gap-sm">
      <p>
        Rome was not built in one day, but if it were, it probably wouldn't be
        from scratch! These are some tools that I have familiarized myself
        during my project crusade.
      </p>
    <article className="flex flex-wrap justify-center gap-md frame-inset p-2">
      {TECHNOLOGIES.map((Icon, i) => (
        <Icon key={i} className="text-3xl" />
      ))}
    </article>
    </article>
  </VguiWindow>
);

export default TechnologiesWindow;
