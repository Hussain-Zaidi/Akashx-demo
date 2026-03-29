import React from "react";
import { Metadata } from "next";
import CognitivePage from "./cognitive";

export const metadata: Metadata = {
  title: "Cognitive",
  description: "World’s #1 OLCP Database.",
  openGraph: {
    title: "Cognitive",
    description: "World’s #1 OLCP Database.",
    images: [
      {
        url: "/images/akashx.png",
        width: 1200,
        height: 630,
        alt: "Home OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitive",
    description: "World’s #1 OLCP Database.",
    images: ["/images/akashx.png"],
  },
};

export default function HomePage() {
  return <CognitivePage />;
}
