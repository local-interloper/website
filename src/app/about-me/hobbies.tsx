import Container from "@/components/core/containers/container";
import Title from "@/components/core/text/title";

import Text from "@/components/core/text/text";
import {GiGamepad} from "react-icons/gi";
import {BsCone, BsGear} from "react-icons/bs";
import {FaCode} from "react-icons/fa";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {BiCube} from "react-icons/bi";

const HOBBIES = [
  {Icon: FaCode, name: "Programming"},
  {Icon: FaMagnifyingGlass, name: "Research"},
  {Icon: GiGamepad, name: "Gaming"},
  {Icon: BiCube, name: "3D Art"},
  {Icon: BsGear, name: "Modding"},
  {Icon: BsCone, name: "Game Prototyping"},
];

const ProgrammingLanguages = () => {
  return (
    <Container responsive flow reverse className="px-5 py-20 gap-20">
      <div className="flex flex-col items-center justify-center w-full gap-10 text-center">
        <Title size="lg" bold>Hobbies</Title>
        <Text>
          I really enjoy active and engaging entertainment. I always had the urge to learn and fiddle with all things
          tech related. As a kid I wanted to make videogames. Creating assets for those &quot;prototypes&quot; as I like to call
          them taught me to use a lot of creative tools and prototyping different game mechanics is what taught me
          to code.
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="grid grid-cols-2 gap-5">
          {HOBBIES.map(({Icon, name}, i) =>
            <div className="card bg-base-200 flex flex-col lg:flex-row gap-2 w-full items-center p-5 shadow justify-center" key={i}>
              <Icon className="text-4xl" />
              <Text bold>{name}</Text>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProgrammingLanguages;