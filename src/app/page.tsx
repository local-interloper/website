import PageWrapper from "@/components/_core/containers/page-wrapper";
import Container from "@/components/_core/containers/container";
import Title from "@/components/_core/text/title";
import Image from "next/image";
import ProfilePicture from "@assets/pfp.png";
import {SOCIAL} from "@/data/social";
import Link from "next/link";
import classNames from "@/util/classNames";

const Home = () => {
  return (
    <PageWrapper>
      <Container className="bg-background shadow" screen>
        <Container responsive flow={false}>
          <div className="flex items-center flex-col-reverse lg:flex-row gap-10">
            <div className="flex flex-col gap-5">
              <Title className="font-bold" size="sm">local.interloper</Title>
              <div className="flex justify-center w-full gap-5">
                {SOCIAL.map(({Icon, href}, i) => (
                  <Link
                    key={i}
                    href={href}
                    className={classNames("p-2 bg-background-light rounded-full shadow",
                      "hover:bg-background-dark transition-all duration-200 hover:scale-110"
                    )}
                    target="_blank"
                  >
                    <Icon size={40} />
                  </Link>
                ))}
              </div>
            </div>
            <Image src={ProfilePicture} alt="Profile Picture" className="w-32 h-32 rounded-full shadow" />
          </div>
        </Container>
      </Container>
    </PageWrapper>
  );
};

export default Home;