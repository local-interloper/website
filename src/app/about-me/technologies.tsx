import Container from "@/components/core/containers/container";
import Title from "@/components/core/text/title";
import IconDisplay from "@/app/about-me/icon-display";
import {
  SiAseprite, SiBlender,
  SiBun,
  SiDotnet,
  SiElectron,
  SiGit,
  SiGodotengine,
  SiInsomnia,
  SiJetbrains,
  SiLinux,
  SiMonogame,
  SiMqtt,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTauri,
  SiUnity,
  SiVercel
} from "react-icons/si";
import Text from "@/components/core/text/text";

const TECHNOLOGIES = [
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiElectron,
  SiTauri,
  SiGit,
  SiDotnet,
  SiLinux,
  SiGodotengine,
  SiUnity,
  SiMonogame,
  SiVercel,
  SiBun,
  SiJetbrains,
  SiBlender,
  SiMqtt,
  SiAseprite,
  SiInsomnia
];

const Technologies = () => {
  return (
    <Container responsive reverse flow className="px-5 py-20">
      <div className="flex flex-col items-center justify-center w-full gap-10 text-center">
        <Title bold size="lg">Technologies</Title>
        <Text>
          It shouldn&apos;t come as a surprise at this point that I also used many different technologies over the
          course of my programming career.
        </Text>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col justify-center h-full">
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-2">
            {TECHNOLOGIES.map((Icon, i) => <IconDisplay key={i} Icon={Icon} />)}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Technologies;