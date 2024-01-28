import Content from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMe() {
  return <Content />;
}
