import PageWrapper from "@/components/core/containers/page-wrapper";
import Title from "@/components/core/text/title";
import Gallery from "@/app/art/gallery";
import Text from "@/components/core/text/text";


const ArtPage = () => {
  return (
    <PageWrapper className="pt-20">
      <Title bold>Art</Title>
      <Text>
        Here you can find some of my renders. It&apos;s something I do from time to time for fun.
      </Text>
      <div className="p-2 lg:p-5">
        <Gallery />
      </div>
    </PageWrapper>
  );
};

export default ArtPage;