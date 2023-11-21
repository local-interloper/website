import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import IChildrenProps from "@/interfaces/children-props";
import classNames from "@/util/classNames";
import Menu from "@/components/_core/menu";
import BgImage from "@assets/background.png";
import Image from "next/image";

const inter = Inter({subsets: ['latin']});

const appName = "local.interloper";
const description = "A hub for all my contacts, services and more.";
const baseUrl = "https://local.interloper.me";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: appName,
  description,
  generator: "Next.js",
  applicationName: appName,
  keywords: ["Personal"],
  creator: "local.interloper",
  publisher: "Vercel",
  authors: [{
    name: "local.interloper",
    url: "https://local.interloper.me"
  }],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/"
    }
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precompressed",
      url: "/icon.png"
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      nocache: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    url: baseUrl,
    title: appName,
    description: description,
    images: [
      {url: "/icon.png", width: 640, height: 640, alt: "App logo"}
    ],
    locale: "en_US",
    type: "website"
  },
};

const RootLayout = ({children}: IChildrenProps) => {
  return (
    <html lang="en">
    <body
      className={classNames(
        "w-screen h-[100svh] backdrop-blur-sm text-text",
        inter.className
      )}
    >
    <Menu />
    <div className="w-screen h-[100svh] bg-black bg-opacity-90">
      <Image
        src={BgImage}
        alt="Backgorund"
        className="-z-10"
        fill
        style={{
          objectFit: "cover",
          opacity: 1
        }}
      />
      {children}
    </div>
    </body>
    </html>
  );
};

export default RootLayout;