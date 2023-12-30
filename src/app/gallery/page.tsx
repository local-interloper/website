import PageWrapper from "@/components/_core/containers/page-wrapper";
import Title from "@/components/_core/text/title";
import Gallery from "@/app/gallery/gallery";
import Text from "@/components/_core/text/text";


const GalleryPage = () => {
  return (
    <PageWrapper className="pt-20">
      <Title bold>Gallery</Title>
      <Text>
        Here you can find some of my renders. It&apos;s something I do from time to time for fun.
      </Text>
      <div className="p-2 lg:p-5">
        <Gallery />
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;