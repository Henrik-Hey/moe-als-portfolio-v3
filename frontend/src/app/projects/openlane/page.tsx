import { Authentication } from "./authentication";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openlane",
};

export default function Openlane() {
  return <Authentication />;
}
