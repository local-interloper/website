import { BiImage, BiInfoCircle, BiUser } from "react-icons/bi";
import Responsive from "~/components/responsive";
import Screen from "~/components/screen";
import VguiWindow from "~/components/vgui-window";

export const SUBJECT_INFO = [
  ["Alias", "local.interloper"],
  ["Location", "Earth"],
  ["Profession", "Making rocks think"],
];

const AboutMeTitle = () => (
  <Screen>
    <Responsive className="items-center">
      <section className="flex flex-col items-center md:items-end gap-sm">
        <VguiWindow
          title="Subject Info"
          Icon={BiUser}
          className="w-full md:w-fit"
        >
          <table>
            <tbody>
              {SUBJECT_INFO.map(([label, value], i) => (
                <tr key={i}>
                  <td className="text-vgui-gold font-bold pr-5 text-right">{label}:</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </VguiWindow>
        <VguiWindow
          title="About"
          Icon={BiInfoCircle}
          className="w-full md:w-fit"
        >
          <p className="max-w-sm">
            Hi, I am local.interloper! I am a programmer with a passion for
            everything tech related. At the ripe age of 8, I found a book on
            BASIC and that's where it all kinda started for me.
          </p>
        </VguiWindow>
      </section>
      <VguiWindow title="Alias Preview" Icon={BiImage}>
        <section className="h-64 w-64 frame-inset">
          <img alt="local.interloper's avatar" src="images/pfp.png"></img>
        </section>
      </VguiWindow>
    </Responsive>
  </Screen>
);

export default AboutMeTitle;
