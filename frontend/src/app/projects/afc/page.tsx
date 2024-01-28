import { Authentication } from "./authentication";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFC",
};

export default function AFC() {
  return <Authentication />;
}
