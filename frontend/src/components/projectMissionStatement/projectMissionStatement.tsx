import { palette } from "@/theme";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FadeIn from "../fadeIn/fadeIn";

interface ProjectMissionStatementProps {
  typeTitle: string;
  typeText: string;
  roleAndResponsibilitiesText: string;
  platformsText: string;
  timelineText: string;
}
export const ProjectMissionStatement = ({
  typeTitle,
  typeText,
  roleAndResponsibilitiesText,
  platformsText,
  timelineText,
}: ProjectMissionStatementProps) => {
  return (
    <FadeIn>
      <Box
        display="flex"
        gap={8}
        p={3}
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          background: palette.warning[50],
        }}
      >
        <Box flex={1}>
          <Typography variant="body1" fontWeight={700} mb={1.5}>
            {typeTitle}
          </Typography>
          <Typography variant="body1">{typeText}</Typography>
        </Box>
        <Box flex={2}>
          <Typography variant="body1" fontWeight={700} mb={1.5}>
            Role & responsibilities
          </Typography>
          <Typography variant="body1">{roleAndResponsibilitiesText}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" flex={3} gap={8}>
          <Box flex={1}>
            <Typography variant="body1" fontWeight={700} mb={1.5}>
              Platforms
            </Typography>
            <Typography variant="body1">{platformsText}</Typography>
          </Box>
          <Box flex={1}>
            <Typography variant="body1" fontWeight={700} mb={1.5}>
              Timeline
            </Typography>
            <Typography variant="body1">{timelineText}</Typography>
          </Box>
        </Box>
      </Box>
    </FadeIn>
  );
};
