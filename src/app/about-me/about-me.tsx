import Text from "@/components/core/text/text";
import Title from "@/components/core/text/title";
import Container from "@/components/core/containers/container";
import ProfilePicture from "@/components/core/profile-picture";

const AboutMe = () => {
  return (
    <Container responsive flow className="px-5 py-20">
      <div className="flex flex-col items-center justify-center w-full gap-5">
        <Title bold size="lg">Who am I?</Title>
        <Text>
          I am a 23 year old guy from Croatia that&apos;s been into programming for quite a while now. With a long
          line of personal and commercial projects under my belt I&apos;ve acquired a wide skill set that didn&apos;t go
          unnoticed.
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5">
        <ProfilePicture large />
      </div>
    </Container>
  );
};

export default AboutMe;