import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "About",
  description: "World’s #1 Storage Accelerated Data Warehouse",
  //ogTitle:'...'
  openGraph: {
    title: "About",
    description: "World’s #1 Storage Accelerated Data Warehouse",
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
    title: "About",
    description: "World’s #1 Storage Accelerated Data Warehouse",
    images: ["/images/akashx.png"], // same image
  },
};

export default function TestAboutPage() {
  return <Page />;
}
