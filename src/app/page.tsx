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
      <Container screen>
        <Container responsive flow={false}>
          <div className="flex items-center flex-col-reverse lg:flex-row gap-5 select-none">
            <div className="flex flex-col gap-5">
              <p className="text-primary text-3xl font-bold text-center">local.interloper</p>
              <div className="flex justify-center w-full gap-5">
                {SOCIAL.map(({Icon, href}, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="btn btn-circle btn-outline btn-primary"
                    target="_blank"
                  >
                    <Icon size={30} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="avatar">
              <div className="w-24 mask mask-squircle shadow-xl">
                <Image src={ProfilePicture} alt="Profile Picture" />
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </PageWrapper>
  );
};

export default Home;