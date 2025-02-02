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
  | "pawfolio"
  | "easyaudit"
  | "iart"
  | "homezai"
  | "sohs"
  | "openlane";
export const PresetProjectCard = ({
  project,
  darkMode = false,
  isDefaultHovered = false,
}: {
  project: ProjectPage;
  darkMode?: boolean;
  isDefaultHovered?: boolean;
}) => {
  const router = useRouter();

  switch (project) {
    case "afc":
      return (
        <ProjectCard
          darkMode={darkMode}
          isDefaultHovered={isDefaultHovered}
          project="Auto Finance Dealer"
          subtext="Reducing Drop Rates and Improving the Flooring process"
          ctaText="View Case Study"
          isLocked={getCookie(ACCESS_COOKIE_KEY) !== "true"}
          color={darkMode ? palette.darkMode[50] : palette.green.main}
          hoverColor={darkMode ? "#2F2F2F" : "#C6FA9E"}
          onCTAClick={() => {
            router.push("/projects/afc");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_AFC.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
              />
            </Box>
          }
        />
      );
    case "hashmatrix-sharpstakes":
      return (
        <ProjectCard
          darkMode={darkMode}
          isDefaultHovered={isDefaultHovered}
          project="Sharpstakes"
          subtext="Boosting Engagement by Removing Dark Patterns"
          ctaText="View Case Study"
          color={darkMode ? palette.darkMode[400] : palette.blue.main}
          hoverColor={darkMode ? "#232323" : "#9EFAE9"}
          onCTAClick={() => {
            router.push("/projects/hashmatrix-sharpstakes");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_ SS.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
              />
            </Box>
          }
        />
      );
    case "pawfolio":
      return (
        <ProjectCard
          darkMode={darkMode}
          isDefaultHovered={isDefaultHovered}
          project="Pawfolio"
          subtext="Enhancing Pet Care with Efficient Management Tools"
          ctaText="In Progress.."
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#FCCF5A"}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_PAWFOLIO.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
              />
            </Box>
          }
        />
      );
    case "easyaudit":
      return (
        <ProjectCard
          darkMode={darkMode}
          isDefaultHovered={isDefaultHovered}
          project="EasyAudit"
          subtext="Transforming Compliance with a Smarter Audit Process"
          ctaText="View Case Study"
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#CFFCE9"}
          onCTAClick={() => {
            router.push("/projects/easyaudit");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_EA.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
              />
            </Box>
          }
        />
      );
    case "iart":
      return (
        <ProjectCard
          darkMode={darkMode}
          isDefaultHovered={isDefaultHovered}
          project="IArt"
          subtext="Redefining Car Interfaces with Immersive Visual Solutions"
          ctaText="View Case Study"
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#FCDFCF"}
          onCTAClick={() => {
            router.push("/projects/IArt");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_FORCEGRAPH.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
              />
            </Box>
          }
        />
      );
    case "homezai":
      return (
        <ProjectCard
          darkMode={darkMode}
          isDefaultHovered={isDefaultHovered}
          project="HomezAI"
          subtext="Simplifying Home Buying with Smarter Scheduling Tools"
          ctaText="View Case Study"
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#CFDAFC"}
          onCTAClick={() => {
            router.push("/projects/homezai");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_HOMEZ.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
              />
            </Box>
          }
        />
      );
    case "sohs":
      return (
        <ProjectCard
          darkMode={darkMode}
          isDefaultHovered={isDefaultHovered}
          project="SOHS"
          subtext="Empowering Service Pros with an On-Demand Marketplace"
          ctaText="View Case Study"
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#F2CFFC"}
          onCTAClick={() => {
            router.push("/projects/sohs");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_SOHS.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
              />
            </Box>
          }
        />
      );
    case "openlane":
      return (
        <ProjectCard
          darkMode={darkMode}
          isDefaultHovered={isDefaultHovered}
          project="Openlane & Auto Finance Dealer"
          subtext="Boosting Engagement by Linking Discovery to Financing"
          ctaText="View Case Study"
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={
            darkMode
              ? "#2F2F2F"
              : "linear-gradient(148.76deg, #E3FCCF -1.47%, #CFDAFC 103.52%)"
          }
          onCTAClick={() => {
            router.push("/projects/openlane");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_ AFC2.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
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
          isDefaultHovered={isDefaultHovered}
          project="Shiba Inu"
          subtext="Streamlining Food Delivery for Busy Young Adults"
          ctaText="View Case Study"
          color={darkMode ? palette.darkMode[400] : palette.lightRed.main}
          hoverColor={darkMode ? "#232323" : "#FA9E9E"}
          onCTAClick={() => {
            router.push("/projects/shiba-inu");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_SHIBA.png"
                alt="Picture of AFC console"
                width={{ xs: 350, md: 450 }}
              />
            </Box>
          }
        />
      );
  }
};
