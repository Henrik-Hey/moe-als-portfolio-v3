import { palette } from "@/theme";
import { East } from "@mui/icons-material";
import { Box, Card, Typography, useTheme } from "@mui/material";
import React from "react";

interface ProjectCardProps {
  project: string;
  subtext: string;
  description: string;
  ctaText: string;
  color: string;
  onCTAClick?: () => void;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  subtext,
  description,
  ctaText,
  color,
  onCTAClick,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        background: color,
        flex: 1,
        boxShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <Box
        padding={6}
        paddingBottom={3}
        display="flex"
        gap={3}
        flexDirection="column"
      >
        <Typography
          variant="h2"
          fontFamily="PP Eiko"
          fontWeight={500}
          color={theme.palette.primary.main}
        >
          {project} -{" "}
          <Typography
            variant="h2"
            fontSize="1em"
            fontFamily="PP Eiko"
            component="span"
            fontWeight={100}
            color={theme.palette.primary.main}
          >
            {subtext}
          </Typography>
        </Typography>
        <Typography variant="body1" fontWeight={400}>
          {description}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            variant="body1"
            fontFamily="PP Eiko"
            fontWeight={900}
            marginRight={1}
            color={theme.palette.primary.main}
          >
            {ctaText}{" "}
          </Typography>
          {onCTAClick && <East fontSize="small" color="primary" />}
        </Box>
      </Box>
    </Card>
  );
};
