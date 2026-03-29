import React from "react";
import { Metadata } from "next";
import Page from "../cognitive";

export const metadata: Metadata = {
  title: "Cognitive SQL",
  description: "World’s #1 OLCP Database.",
};

export default function CognitiveSqlPage() {
  return <Page />;
}
