import { Box } from "@mui/material";
import { ProjectCard } from "../projectCard/projectCard";
import { palette } from "@/theme";
import React from "react";
import Image from "next/image";
import { ACCESS_COOKIE_KEY, getCookie } from "@/hooks";
import { useRouter } from "next/navigation";

export type ProjectPage =
  | "shiba"
  | "afc"
  | "hashmatrix-sharpstakes"
  | "pawfolio";
export const PresetProjectCard = ({ project }: { project: ProjectPage }) => {
  const router = useRouter();

  switch (project) {
    case "afc":
      return (
        <ProjectCard
          project="Auto Finance Dealer"
          subtext="Reimagining design systems, interfaces, and enhancing product sustainability."
          description="Auto Finance Dealer is a user-facing application that provides North American dealers with the tools to finance, manage both auction and non-auction vehicles, and beyond."
          ctaText="View Protected Project"
          isLocked={getCookie(ACCESS_COOKIE_KEY) !== "true"}
          color={palette.green.main}
          onCTAClick={() => {
            router.push("/projects/afc");
          }}
          content={
            <Box display="flex" marginLeft={-10}>
              <Image
                src="/screenshots/afc-product.png"
                alt="Picture of AFC console"
                width={1000}
                height={1000 / 1.65114503817}
              />
            </Box>
          }
        />
      );
    case "hashmatrix-sharpstakes":
      return (
        <ProjectCard
          project="HashMatrix"
          subtext="Empowering businesses to elevate their products..."
          description="HashMatrix specializes in helping early stage tech startups grow and succeed on a global scale through product development, brand building, and fundraising."
          ctaText="View Project"
          color={palette.blue.main}
          onCTAClick={() => {
            router.push("/projects/hashmatrix-sharpstakes");
          }}
          content={
            <Box display="flex" marginLeft={-10}>
              <Image
                src="/screenshots/hashmatrix-product.png"
                alt="Picture of AFC console"
                width={1000}
                height={1000 / 1.65114503817}
              />
            </Box>
          }
        />
      );
    case "pawfolio":
      return (
        <ProjectCard
          project="Pawfolio"
          subtext="Simplifying Pet Care."
          description="Pawfolio is a pet management app designed to help you stay organized, maintain your pet's health records, and keep track of crucial dates."
          ctaText="In Progress.."
          color={palette.warning.main}
          content={
            <Box display="flex" gap={2}>
              <Image
                src="/screenshots/pawfolio-app-2.png"
                alt="Picture of AFC console"
                width={400}
                height={400 / 0.48583984375}
              />
              <Image
                src="/screenshots/pawfolio-app-1.png"
                alt="Picture of AFC console"
                width={400}
                height={400 / 0.48583984375}
              />
            </Box>
          }
        />
      );
    case "shiba":
    default:
      return (
        <ProjectCard
          project="SHIBA INU"
          subtext="Creating the ultimate Asian cuisine delivery app."
          description="Shiba is a comprehensive food delivery platform designed for busy young adults."
          ctaText="View Case Study"
          color={palette.error.main}
          onCTAClick={() => {
            router.push("/projects/shiba-inu");
          }}
          content={
            <Box display="flex" gap={2}>
              <Image
                src="/screenshots/shiba-app-2.png"
                alt="Picture of AFC console"
                width={300}
                height={300 / 0.48583984375}
              />
              <Image
                src="/screenshots/shiba-app-1.png"
                alt="Picture of AFC console"
                width={300}
                height={300 / 0.48583984375}
              />
            </Box>
          }
        />
      );
  }
};
