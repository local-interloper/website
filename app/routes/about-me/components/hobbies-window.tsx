import {
  BiBaseball,
  BiCamera,
  BiCode,
  BiJoystick,
  BiPaint,
  BiWalk,
} from "react-icons/bi";
import { LuCircuitBoard } from "react-icons/lu";
import ExternalLink from "~/components/extenral-link";
import VguiWindow from "~/components/vgui-window";

export const HOBBIES = [
  {
    Icon: BiJoystick,
    label: "Gaming",
    relevant: [
      ["Steam Account", "https://steamcommunity.com/id/local-interloper/"],
    ],
  },
  {
    Icon: BiCode,
    label: "Programming",
    relevant: [["GitHub", "https://github.com/local-interloper/"]],
  },
  {
    Icon: BiPaint,
    label: "Art",
    relevant: [["Instagram", "https://www.instagram.com/local.interloper"]],
  },
  {
    Icon: LuCircuitBoard,
    label: "Tinkering",
    relevant: [
      [
        "wireless-nes-adapter",
        "https://github.com/local-interloper/wireless-nes-adapter",
      ],
    ],
  },
  {
    Icon: BiCamera,
    label: "Photography",
    relevant: [],
  },
  {
    Icon: BiWalk,
    label: "Un-fatting",
    relevant: [],
  },
];

const HobbiesWindow = () => (
  <VguiWindow Icon={BiBaseball} title="Hobbies">
    <p>
      Ever since I was a kid I loved video games and wanted to make some one
      day. That nudged me into picking up a bunch of hobbies that ended up
      giving birth to my career.
    </p>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Icon</th>
          <th>Relevant Links</th>
        </tr>
      </thead>
      <tbody>
        {HOBBIES.map(({ Icon, label, relevant }, i) => (
          <tr key={i}>
            <td>{label}</td>
            <td>
              <section className="flex justify-center px-2">
                <Icon className="text-xl" />
              </section>
            </td>
            <td>
              {relevant.map(([label, link], i) => (
                <ExternalLink key={i} label={label} url={link} />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </VguiWindow>
);

export default HobbiesWindow;
