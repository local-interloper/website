import PageWrapper from "@/components/core/containers/page-wrapper";
import Image from "next/image";
import ProfilePicture from "@assets/pfp.png"
import {SOCIAL} from "@/data/social";
import Link from "next/link";

const Home = () => {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center h-full w-full">
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
      </div>
    </PageWrapper>
  );
};

export default Home;