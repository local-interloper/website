import Img1 from "@assets/gallery/sel.png"
import Img2 from "@assets/gallery/cl.png"
import {StaticImageData} from "next/image";

export interface ImageData {
  image: StaticImageData;
  title: string;
  inspiration?: string;
}

export const GALLERY_DATA: ImageData[] = [
  {
    image: Img1,
    title: "Lain's room",
    inspiration: "Serial Experiments Lain"
  },
  {
    image: Img2,
    title: "The Lab",
    inspiration: "Code Lyoko"
  }
]