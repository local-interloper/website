import PageWrapper from "@/components/_core/containers/page-wrapper";
import Container from "@/components/_core/containers/container";
import Title from "@/components/_core/text/title";
import Text from "@/components/_core/text/text";
import Image from "next/image";
import ProfilePicture from "@assets/pfp.png";
import TextWrapper from "@/components/_core/containers/text-wrapper";
import List from "@/components/_core/list";
import {
  TbBrandCSharp,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandRust,
  TbBrandTypescript, TbSql
} from "react-icons/tb";
import {
  SiArduino,
  SiC,
  SiCsharp, SiElectron, SiGodotengine, SiHaxe,
  SiJavascript,
  SiLua, SiNestjs,
  SiNextdotjs, SiPostgresql,
  SiPython, SiReact,
  SiRust, SiSqlite, SiTauri,
  SiTypescript,
  SiUnity,
  SiUnrealengine
} from "react-icons/si";
import {GoDot} from "react-icons/go";

const AboutMePage = () => {
  return (
    <PageWrapper className="pb-10">
      <Container flow className="bg-background shadow p-5">
        <Title>About</Title>
      </Container>
      <Container responsive flow className="px-5">
        <Container className="h-full w-full bg-background rounded-xl p-5">
          <Image src={ProfilePicture} alt="Profile Picture" className="h-32 w-32 rounded-full shadow" />
          <TextWrapper>
            <Text>local.interloper</Text>
            <Text>Age: 23</Text>
            <Text>Country: Croatia</Text>
          </TextWrapper>
        </Container>
        <Container className="h-full w-full bg-background rounded-xl p-5">
          <Title>About me</Title>
          <Text>
            I am a 23 year old fella from Croatia that&apos;s been into programming for quite a while now. I have a
            bunch of personal and commercial projects under my belt at this point as programming is not only my
            career but also a hobby.
          </Text>
          <Text>
            By nature I&apos;m one hella curious guy. This nudged me into developing a very diverse skill set and made
            me very adaptable by nature.
          </Text>
        </Container>
      </Container>
      <Container flow className="px-5">
        <Container responsive flow className="h-full bg-background rounded-xl p-5">
          <Container flow className="h-full">
            <Title>Languages:</Title>
            <div className="grid grid-cols-3 gap-2 h-full">
              {[
                SiTypescript,
                SiCsharp,
                SiRust,
                SiJavascript,
                SiPython,
                SiLua,
                SiHaxe,
                SiC,
                TbSql
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center flex-col w-24 h-24 bg-background-light shadow rounded-xl"
                >
                  <Icon size={40} />
                </div>
              ))}
            </div>
          </Container>
          <Container flow className="h-full">
            <Title>Technologies:</Title>
            <div className="grid grid-cols-3 gap-2">
              {[
                SiNextdotjs,
                SiReact,
                SiNestjs,
                SiPostgresql,
                SiElectron,
                SiTauri,
                SiArduino,
                SiGodotengine,
                SiUnity,
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center flex-col w-24 h-24 bg-background-light shadow rounded-xl"
                >
                  <Icon size={40} />
                </div>
              ))}
            </div>
          </Container>
        </Container>
      </Container>
    </PageWrapper>
  );
};

export default AboutMePage;