import {useState} from "react";

interface Props {
  srcs: string[];
}

const Gallery = ({srcs}: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {srcs.map((src, i) => (
          <button
            className="relatvie flex w-32 h-32 md:w-80 md:h-80 shadow rounded transition-all duration-100 hover:scale-110 overflow-clip"
            onClick={() => setSelectedImage(src)}
            key={i}
          >
            <img src={src} alt="Artpiece" />
          </button>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed flex top-0 right-0 w-screen h-[100svh] bg-black bg-opacity-90 z-40 justify-center items-center"
        >
          <div className="relative aspect-square p-10 max-h-[80%]">
            <img src={selectedImage} alt="Artpiece" />
            <div className="absolute -bottom-5 right-1/2 translate-x-1/2">
              <button className="btn btn-primary" onClick={() => setSelectedImage(undefined)}>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;