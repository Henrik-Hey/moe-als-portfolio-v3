import { palette } from "@/theme";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FadeIn from "../fadeIn/fadeIn";

interface ProjectMissionStatementProps {
  typeTitle: string;
  typeText: string;
  collaboration: string | React.ReactNode;
  roleAndResponsibilitiesText: string | React.ReactNode;
  platformsText: string;
  timelineText: string;
  backgroundColor?: string;
}
export const ProjectMissionStatement = ({
  typeTitle,
  typeText,
  roleAndResponsibilitiesText,
  platformsText,
  timelineText,
  collaboration,
  backgroundColor = "#FEF4CD",
}: ProjectMissionStatementProps) => {
  return (
    <FadeIn>
      <Box
        display="flex"
        gap={8}
        p={3}
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          background: backgroundColor,
        }}
      >
        <Box flex={1}>
          <Typography variant="body2" fontWeight={700} mb={1.5}>
            {typeTitle}
          </Typography>
          <Typography variant="body2">{typeText}</Typography>
        </Box>
        <Box flex={1}>
          <Typography variant="body2" fontWeight={700} mb={1.5}>
            Collaboration
          </Typography>
          <Typography variant="body2">{collaboration}</Typography>
        </Box>
        <Box flex={1}>
          <Typography variant="body2" fontWeight={700} mb={1.5}>
            Platforms
          </Typography>
          <Typography variant="body2">{platformsText}</Typography>
        </Box>
        <Box flex={1}>
          <Typography variant="body2" fontWeight={700} mb={1.5}>
            Timeline
          </Typography>
          <Typography variant="body2">{timelineText}</Typography>
        </Box>
        <Box flex={2}>
          <Typography variant="body2" fontWeight={700} mb={1.5}>
            Role & responsibilities
          </Typography>
          <Typography variant="body2">{roleAndResponsibilitiesText}</Typography>
        </Box>
      </Box>
    </FadeIn>
  );
};
