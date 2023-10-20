import PageWrapper from "@/components/_core/containers/page-wrapper";
import Container from "@/components/_core/containers/container";
import Title from "@/components/_core/text/title";
import Image from "next/image";
import ProfilePicture from "@assets/pfp.png";

const Home = () => {
  return (
    <PageWrapper>
      <Container className="bg-background shadow" screen>
        <Container responsive flow={false}>
          <Container responsive>
            <Title size="sm">local.interloper</Title>
            <Image src={ProfilePicture} alt="Profile Picture" />
          </Container>
        </Container>
      </Container>
    </PageWrapper>
  );
};

export default Home;