import { Authentication } from "./authentication";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EasyAudit",
};

export default function EasyAudit() {
  return <Authentication />;
}
