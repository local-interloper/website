import PageWrapper from "@/components/_core/containers/page-wrapper";
import Container from "@/components/_core/containers/container";
import Title from "@/components/_core/text/title";
import TextWrapper from "@/components/_core/containers/text-wrapper";
import {AiFillCode} from "react-icons/ai";
import Text from "@/components/_core/text/text";

const Home = () => {
  return (
    <PageWrapper>
      <Container className="bg-background shadow" screen>
        <Container responsive flow={false}>
          <Container>
            <TextWrapper center={false} className="w-max">
              <Title size="sm">local.interloper&apos;s</Title>
              <Title size="lg">Website</Title>
              <Text>Comming soon...</Text>
            </TextWrapper>
          </Container>
        </Container>
      </Container>
    </PageWrapper>
  );
};

export default Home;