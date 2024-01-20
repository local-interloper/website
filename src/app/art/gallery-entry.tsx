"use client";

import Image from "next/image";
import {ImageData} from "@/data/gallery";
import classNames from "@/util/classNames";

export interface GalleryEntryProps {
  imageData: ImageData;
  onClick?: () => void;
}

const GalleryEntry = ({imageData: {image, title}, onClick}: GalleryEntryProps) => {
  return (
    <div
      className="relative group rounded-xl overflow-hidden select-none cursor-pointer"
      onClick={() => onClick?.()}
    >
      <Image unoptimized src={image} alt={title} />
      <div
        className={classNames(
          "absolute hidden lg:group-hover:flex items-center justify-center",
          "bg-black bg-opacity-90 bottom-0 w-full h-16"
        )}
      >
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GalleryEntry;