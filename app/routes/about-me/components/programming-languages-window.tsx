import { BiBaseball, BiCode } from "react-icons/bi";
import {
  SiC,
  SiDart,
  SiDotnet,
  SiGo,
  SiHaxe,
  SiJavascript,
  SiLua,
  SiPython,
  SiRust,
  SiSharp,
  SiTypescript,
  SiYaml,
} from "react-icons/si";
import VguiWindow from "~/components/vgui-window";

const PROGRAMMING_LANGUAGES = [
  SiRust,
  SiGo,
  SiTypescript,
  SiJavascript,
  SiC,
  SiDart,
  SiHaxe,
  SiLua,
  SiPython,
  SiDotnet,
];

const ProgrammingLanguagesWindow = () => (
  <VguiWindow Icon={BiCode} title="Programming Languages">
    <p>
      Projects are not built with magic. More often than not, you will use some
      sort of a programming language. These are the ones that I've acquired a
      solid grasp of throughout my programming endeavours!
    </p>
    <article className="flex flex-wrap justify-center gap-md frame-inset p-2">
      {PROGRAMMING_LANGUAGES.map((Icon, i) => (
        <Icon key={i} className="text-3xl" />
      ))}
    </article>
  </VguiWindow>
);

export default ProgrammingLanguagesWindow;
