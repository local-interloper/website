import { FaBriefcase } from "react-icons/fa";
import VguiWindow from "~/components/vgui-window";

const FORMAL_WORK_EXPERIENCE = [
  ["Ipsos", "Call Agent", 2017],
  ["Roglitech j.d.o.o.", "Full Stack Developer", "2024-2025"],
];

const FormalWorkExperienceWindow = () => (
  <VguiWindow Icon={FaBriefcase} title="Formal Experience" className="w-full md:w-fit">
    <article className="flex flex-col gap-sm">
      <article>
        <p>Here's an overview of things I did under formal employment:</p>
      </article>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Workplace</th>
            <th>Position</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {FORMAL_WORK_EXPERIENCE.map((row, i) => (
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

export default FormalWorkExperienceWindow;
