import PageWrapper from "@/components/core/containers/page-wrapper";
import Image from "next/image";
import {SOCIAL} from "@/data/social";
import Link from "next/link";
import Title from "@/components/core/text/title";
import ProfilePicture from "@/components/core/profile-picture";

const Home = () => {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex items-center flex-col-reverse lg:flex-row gap-5 select-none">
          <div className="flex flex-col gap-5">
            <Title className="text-primary text-3xl font-bold text-center">local.interloper</Title>
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
          <ProfilePicture />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;