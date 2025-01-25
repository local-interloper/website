import {LinksFunction} from "@remix-run/node";

import SEL from "@assets/img/art/sel.png";
import CL from "@assets/img/art/cl.png";
import Akira from "@assets/img/art/akira.png";
import TestChamber from "@assets/img/art/test-chamber.png";
import SF from "@assets/img/art/sf.png";
import DocumentTitle from "@/app/components/document-title";
import {useState} from "react";

const ART = [
  {
    src: SEL,
    alt: "Lain's room from Serial experiments lain",
  },
  {
    src: CL,
    alt: "The laboratory from Code Lyoko",
  },
  {
    src: Akira,
    alt: "The infamous elevator from Akira"
  },
  {
    src: TestChamber,
    alt: "The test chamber from Half-Life"
  },
  {
    src: SF,
    alt: "Attack carrier from Star Fox"
  }
];

export const links: LinksFunction = () => ART.map(({src}) => ({
  rel: "preload",
  href: src,
  as: "image"
}));

const Gallery = () => {
  const [image, setImage] = useState<string | undefined>();

  return (
    <>
      <article className="flex flex-col items-center w-full gap-section">
        <DocumentTitle title="Gallery" />
        <div className="flex justify-center flex-wrap w-full gap-section">
          {ART.map(({src, alt}, i) => (
            <button key={i} onClick={() => setImage(src)}>
              <img width={256} height={256} src={src} alt={alt} />
            </button>
          ))}
        </div>
      </article>
      {image && (
        <article
          className="flex fixed top-0 left-0 w-full h-full items-center justify-center z-40 bg-black bg-opacity-50 p-2 md:p-10"
        >
          <section className="flex flex-col items-center justify-center gap-section h-full">
            <img src={image} alt="A work by local.interloper" className="aspect-square" />
            <button className="btn btn-secondary w-20" onClick={() => setImage(undefined)}>Close</button>
          </section>
        </article>
      )}
    </>
  );
};

export default Gallery;