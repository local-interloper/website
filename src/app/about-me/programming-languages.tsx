import Container from "@/components/core/containers/container";
import Title from "@/components/core/text/title";
import IconDisplay from "@/app/about-me/icon-display";
import {SiC, SiCsharp, SiHaxe, SiJavascript, SiLua, SiPython, SiRust, SiTypescript} from "react-icons/si";
import {TbSql} from "react-icons/tb";
import Text from "@/components/core/text/text";

const ProgrammingLanguages = [
  {Icon: SiTypescript, skill: 95,},
  {Icon: SiJavascript, skill: 90,},
  {Icon: SiCsharp, skill: 90,},
  {Icon: SiRust, skill: 90,},
  {Icon: SiPython, skill: 85,},
  {Icon: SiC, skill: 70,},
  {Icon: SiLua, skill: 70,},
];

const Languages = () => {
  return (
    <Container responsive flow className="px-5 py-20 gap-20">
      <div className="flex flex-col items-center justify-center w-full gap-10 text-center">
        <Title size="lg" bold>Programming Languages</Title>
        <Text>
          My technological endeavours powered by my natural curiosity spawned tons of pet projects and unmaintained code
          that made me proficient at a wide range of languages.
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        {ProgrammingLanguages.map(({Icon, skill}, i) =>
          <div className="flex gap-2 w-full items-center" key={i}>
            <IconDisplay Icon={Icon} />
            <progress className="progress progress-primary" value={skill} max="100"></progress>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Languages;