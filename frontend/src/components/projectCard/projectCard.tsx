import { East, LockOpenTwoTone, LockTwoTone } from "@mui/icons-material";
import { Box, Card, Typography, useTheme } from "@mui/material";
import React from "react";
import { raleway } from "@/fonts";

interface ProjectCardProps {
  project: string;
  subtext: string;
  ctaText: string;
  color: string;
  hoverColor: string;
  onCTAClick?: () => void;
  isLocked?: boolean;
  content?: React.ReactNode;
  darkMode?: boolean;
  isDefaultHovered?: boolean;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  subtext,
  ctaText,
  color,
  hoverColor,
  onCTAClick,
  isLocked,
  content,
  darkMode,
  isDefaultHovered,
}) => {
  const theme = useTheme();
  const textColor = darkMode
    ? theme.palette.neutral[100]
    : theme.palette.primary.main;

  return (
    <Card
      sx={{
        background: !isDefaultHovered ? "#E7E8E8" : hoverColor,
        flex: 1,
        borderRadius: "12px",
        boxShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.10)",
        transition: "all 0.5s",
        filter: !isDefaultHovered ? "grayscale(100%)" : "grayscale(0%)",
        [`&:hover`]: {
          filter: "grayscale(0%)",
          transform: "translateY(-8px)",
          cursor: "pointer",
          background: hoverColor,
        },
      }}
      onClick={onCTAClick}
    >
      <Box padding={6} display="flex" gap={3} flexDirection="column">
        <Box>
          <Typography
            variant="body1"
            fontWeight={700}
            color={textColor}
            mb={1.5}
          >
            {project}
          </Typography>
          <Typography variant="h3" fontWeight={400} color={textColor}>
            {subtext}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            cursor: onCTAClick ? "pointer" : "inherit",
            [`&:hover`]: {
              textDecoration: onCTAClick ? "underline" : "none",
              textDecorationColor: textColor,
            },
          }}
        >
          <Typography
            variant="body2"
            fontWeight={700}
            marginRight={1}
            color={textColor}
            fontFamily={raleway.style.fontFamily}
          >
            {ctaText}{" "}
          </Typography>
          {onCTAClick &&
            (isLocked !== undefined ? (
              isLocked ? (
                <LockTwoTone sx={{ color: textColor }} />
              ) : (
                <LockOpenTwoTone sx={{ color: textColor }} />
              )
            ) : (
              <East fontSize="small" sx={{ color: textColor }} />
            ))}
        </Box>
      </Box>
      <Box pb={70} position="relative">
        <Box
          sx={{
            position: "absolute",
            top: 32,
            left: 48,
            width: "calc(100% - 96px)",
          }}
          pb={70}
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
