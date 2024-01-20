import Title from "@/components/core/text/title";
import Link from "next/link";
import {SiGithub} from "react-icons/si";
import Text from "@/components/core/text/text";
import Container from "@/components/core/containers/container";

const PersonalProjects = () => {
  return (
    <Container responsive fill className="px-5 py-20">
      <div className="flex flex-col gap-10 items-center w-full">
        <Title bold size="lg">Personal projects</Title>
        <Text className="max-w-sm">
          Most of my publicly available work is in form of projects I&apos;ve decided to open source. If you are
          interested into checking out my work or learning from me, this is a good place to get started.
        </Text>
      </div>
      <div className="flex flex-col items-center w-full gap-2">
        <Link
          href="/hobbies/programming"
          className="btn h-32 w-32 btn-circle btn-outline btn-primary"
        >
          <SiGithub className="text-8xl" />
        </Link>
        <Text>Click me!</Text>
      </div>
    </Container>
  );
};

export default PersonalProjects;