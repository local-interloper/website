import { FaBriefcase } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";
import VguiWindow from "~/components/vgui-window";

const LANGUAGES = [
  ["English", "C1"],
  ["Croatian", "C2"],
];

const LanguagesWindow = () => (
  <VguiWindow Icon={GiTalk} title="Languages" className="w-full md:w-fit">
    <article className="flex flex-col gap-sm">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Language</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {LANGUAGES.map((row, i) => (
            <tr key={i}>
              {row.map((text, i) => (
                <td key={i}>{text}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tbody></tbody>
      </table>
    </article>
  </VguiWindow>
);

export default LanguagesWindow;
