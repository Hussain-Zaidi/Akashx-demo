import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Home",
  description: "World’s #1 OLCP Database.",
  //ogTitle:'...'
  openGraph: {
    title: "Home",
    description: "World’s #1 OLCP Database.",
    images: [
      {
        url: "/images/akashx.png", // replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Home OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home",
    description: "World’s #1 OLCP Database.",
    images: ["/images/akashx.png"], // same image
  },
};

export default function TestHomePage() {
  return <Page />;
}
