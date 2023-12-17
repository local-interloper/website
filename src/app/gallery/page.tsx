import PageWrapper from "@/components/_core/containers/page-wrapper";
import Title from "@/components/_core/text/title";
import Gallery from "@/app/gallery/gallery";
import Text from "@/components/_core/text/text";


const GalleryPage = () => {
  return (
    <PageWrapper className="pb-20">
      <div className="flex flex-col gap-5 pt-20">
        <Title>Gallery</Title>
        <Text>
          Here you can find some of my renders. It&apos;s something I do from time to time for fun.
        </Text>
      </div>
      <div className="p-2">
        <Gallery />
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;