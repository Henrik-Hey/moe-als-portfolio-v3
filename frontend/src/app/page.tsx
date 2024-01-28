import Content from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moe Als Portfolio",
};

export default function Home() {
  return <Content />;
}
