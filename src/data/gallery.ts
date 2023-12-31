import Img1 from "@assets/gallery/sel.png"
import Img2 from "@assets/gallery/cl.png"
import Img3 from "@assets/gallery/akira.png"
import Img4 from "@assets/gallery/kleiner.png"
import Img5 from "@assets/gallery/alien.png"
import {StaticImageData} from "next/image";

export interface ImageData {
  image: StaticImageData;
  title: string;
  inspiration?: string;
}

export const GALLERY_DATA: ImageData[] = [
  {
    image: Img1,
    title: "Lain's Room",
    inspiration: "Serial Experiments Lain"
  },
  {
    image: Img2,
    title: "The Lab",
    inspiration: "Code Lyoko"
  },
  {
    image: Img3,
    title: "Akira Elevator",
    inspiration: "Akira"
  },
  {
    image: Img4,
    title: "Dr. Kleiner's Lab",
    inspiration: "Half-Life: 2"
  },
  {
    image: Img5,
    title: "MU-TH-UR 6000",
    inspiration: "Alien"
  }
]