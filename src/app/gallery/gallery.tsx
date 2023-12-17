"use client";

import {GALLERY_DATA, ImageData} from "@/data/gallery";
import GalleryEntry, {GalleryEntryProps} from "@/app/gallery/gallery-entry";
import {useState} from "react";
import Image, {StaticImageData} from "next/image";
import {HiX} from "react-icons/hi";
import classNames from "@/util/classNames";

const Gallery = () => {
  const [imageData, setImageData] = useState<ImageData>();

  const handleSelectImage = (imageData: ImageData) => {
    setImageData(imageData);
  };

  return (
    <>
      {imageData && (
        <div
          className={classNames(
            "fixed flex top-0 left-0 w-screen h-[100svh] bg-black bg-opacity-90 z-50 justify-center items-center",
            "p-2 lg:p-5 backdrop-blur select-none"
          )}
        >
          <div className="relative w-full h-full">
            <Image src={imageData.image} alt={imageData.title} fill style={{objectFit: "contain"}} />
          </div>
          <button className="absolute top-2 right-2" onClick={() => setImageData(undefined)}>
            <HiX className="text-3xl" />
          </button>
          <div className="absolute top-2 left-2">
            <p>{imageData.title}</p>
          </div>
          <div className="absolute bottom-2 left-2 italic opacity-60">
            <p>Inspired by:</p>
            <p>{imageData.inspiration}</p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {GALLERY_DATA.map((imageData, i) => (
          <GalleryEntry imageData={imageData} onClick={() => handleSelectImage(imageData)} key={i} />
        ))}
      </div>
    </>
  );
};

export default Gallery;