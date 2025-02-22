/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ProjectCard } from "../projectCard/projectCard";
import { palette } from "@/theme";
import React from "react";
import {
  ACCESS_COOKIE_KEY,
  AFC2_ACCESS_COOKIE_KEY,
  EA_ACCESS_COOKIE,
  getCookie,
  HOMEZ_ACCESS_COOKIE,
} from "@/hooks";
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
          subtext="Optimizing Home Buying with AI-Powered Scheduling"
          ctaText="View Project"
          isLocked={getCookie(ACCESS_COOKIE_KEY) !== "true"}
          color={darkMode ? palette.darkMode[50] : palette.green.main}
          hoverColor={darkMode ? "#2F2F2F" : "#C6FA9E"}
          passwordRequiredColor="#CFDAFC"
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
          subtext="Designing AI-Powered Betting Solutions That Work for Users"
          ctaText="View Project"
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
          subtext="Revolutionizing Compliance with AI-Driven Automation"
          ctaText="View Project"
          isLocked={getCookie(EA_ACCESS_COOKIE) !== "true"}
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#CFFCE9"}
          passwordRequiredColor="#FCDFCF"
          onCTAClick={() => {
            router.push("/projects/easyaudit");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_EA.png"
                alt="Picture of AFC console"
                sx={{
                  transform: "scale(2.45) translate(-44px, 0px)",
                  transformOrigin: "top left",
                }}
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
          subtext="Redefining In-Car Interfaces with Adaptive AI Visuals"
          ctaText="View Project"
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#FCDFCF"}
          onCTAClick={() => {
            router.push("/projects/IArt");
          }}
          content={
            <Box display="flex" gap={2} justifyContent="center">
              <Box
                component="img"
                src="/v2/Home page/Projects/prodShowcase_FG.png"
                alt="Picture of AFC console"
                sx={{
                  transform: "scale(2.45) translate(-44px, 0px)",
                  transformOrigin: "top left",
                }}
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
          subtext="Optimizing Home Buying with AI-Powered Scheduling"
          ctaText="View Project"
          isLocked={getCookie(HOMEZ_ACCESS_COOKIE) !== "true"}
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          hoverColor={darkMode ? "#2F2F2F" : "#CFDAFC"}
          passwordRequiredColor="#FCDFCF"
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
          ctaText="View Project"
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
          ctaText="View Project"
          isLocked={getCookie(AFC2_ACCESS_COOKIE_KEY) !== "true"}
          color={darkMode ? palette.darkMode[50] : "#FEF0CD"}
          passwordRequiredColor="#CFDAFC"
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
                src="/v2/Home page/Projects/prodShowcase_AFC2.png"
                alt="Picture of AFC console"
                sx={{
                  transform: "scale(2.45) translate(-44px, 0px)",
                  transformOrigin: "top left",
                }}
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
          ctaText="View Project"
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
