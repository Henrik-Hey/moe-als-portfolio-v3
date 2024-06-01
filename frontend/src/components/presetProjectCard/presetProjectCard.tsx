/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ProjectCard } from "../projectCard/projectCard";
import { palette } from "@/theme";
import React from "react";
import { ACCESS_COOKIE_KEY, getCookie } from "@/hooks";
import { useRouter } from "next/navigation";

export type ProjectPage =
  | "shiba"
  | "afc"
  | "hashmatrix-sharpstakes"
  | "pawfolio";
export const PresetProjectCard = ({
  project,
  darkMode = false,
}: {
  project: ProjectPage;
  darkMode?: boolean;
}) => {
  const router = useRouter();

  switch (project) {
    case "afc":
      return (
        <ProjectCard
          darkMode={darkMode}
          project="Auto Finance Dealer"
          subtext="Reducing Drop Rates and Enhancing the Vehicle Flooring Process and Journey."
          ctaText="View Protected Project"
          isLocked={getCookie(ACCESS_COOKIE_KEY) !== "true"}
          color={darkMode ? palette.darkMode[50] : palette.green.main}
          hoverColor={darkMode ? "#2F2F2F" : "#C6FA9E"}
          onCTAClick={() => {
            router.push("/projects/afc");
          }}
          content={
            <Box display="flex" marginLeft={0}>
              <img
                src="/screenshots/afc-product.png"
                alt="Picture of AFC console"
                width={1135}
                height={1135 / 1.65114503817}
              />
            </Box>
          }
        />
      );
    case "hashmatrix-sharpstakes":
      return (
        <ProjectCard
          darkMode={darkMode}
          project="HashMatrix"
          subtext="Enhancing User Engagement and Retention by Removing Dark Patterns."
          ctaText="View Project"
          color={darkMode ? palette.darkMode[400] : palette.blue.main}
          hoverColor={darkMode ? "#232323" : "#9EFAE9"}
          onCTAClick={() => {
            router.push("/projects/hashmatrix-sharpstakes");
          }}
          content={
            <Box display="flex" marginLeft={0}>
              <img
                src="/screenshots/hashmatrix-product.png"
                alt="Picture of AFC console"
                width={1135}
                height={1135 / 1.65114503817}
              />
            </Box>
          }
        />
      );
    case "pawfolio":
      return (
        <ProjectCard
          darkMode={darkMode}
          project="Pawfolio"
          subtext="Enhancing Pet Care with Efficient Management Tools."
          ctaText="In Progress.."
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#FCCF5A"}
          content={
            <Box display="flex" gap={2}>
              <img
                src="/screenshots/pawfolio-app.png"
                alt="Picture of AFC console"
                width="100%"
              />
            </Box>
          }
        />
      );
    case "shiba":
    default:
      return (
        <ProjectCard
          darkMode={darkMode}
          project="Shiba Inu"
          subtext="Streamlining Food Delivery for Busy Young Adults."
          ctaText="View Case Study"
          color={darkMode ? palette.darkMode[400] : palette.lightRed.main}
          hoverColor={darkMode ? "#232323" : "#FA9E9E"}
          onCTAClick={() => {
            router.push("/projects/shiba-inu");
          }}
          content={
            <Box display="flex" gap={2}>
              <img
                src="/screenshots/shiba-app.png"
                alt="Picture of AFC console"
                width="100%"
              />
            </Box>
          }
        />
      );
  }
};
