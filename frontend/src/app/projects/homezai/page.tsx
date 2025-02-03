import { Authentication } from "./authentication";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomezAI",
};

export default function HomezAI() {
  return <Authentication />;
}
