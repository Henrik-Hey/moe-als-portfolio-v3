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
  content?: React.ReactNode;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  subtext,
  description,
  ctaText,
  color,
  onCTAClick,
  content,
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
          fontWeight={600}
          color={theme.palette.primary.main}
        >
          {project} -{" "}
          <Typography
            variant="h2"
            fontSize="1em"
            fontFamily="PP Eiko"
            component="span"
            fontWeight={500}
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
      <Box pb={50} position="relative">
        <Box
          sx={{
            position: "absolute",
            top: 32,
            left: 96,
            width: "100%",
          }}
          pb={58}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            {content}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
