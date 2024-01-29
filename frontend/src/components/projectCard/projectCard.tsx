import { palette } from "@/theme";
import { East, LockOpenTwoTone, LockTwoTone } from "@mui/icons-material";
import { Box, Card, Typography, useTheme } from "@mui/material";
import React from "react";

interface ProjectCardProps {
  project: string;
  subtext: string;
  description: string;
  ctaText: string;
  color: string;
  onCTAClick?: () => void;
  isLocked?: boolean;
  content?: React.ReactNode;
  darkMode?: boolean;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  subtext,
  description,
  ctaText,
  color,
  onCTAClick,
  isLocked,
  content,
  darkMode,
}) => {
  const theme = useTheme();
  const textColor = darkMode
    ? theme.palette.neutral[100]
    : theme.palette.primary.main;

  const descriptionColor = darkMode
    ? theme.palette.neutral[100]
    : theme.palette.neutral[700];
  return (
    <Card
      sx={{
        background: color,
        flex: 1,
        borderRadius: "48px",
        boxShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.10)",
        transition: "all 0.5s",
        [`&:hover`]: {
          transform: "translateY(-8px)",
          cursor: "pointer",
        },
      }}
      onClick={onCTAClick}
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
          color={textColor}
        >
          {project} -{" "}
          <Typography
            variant="h2"
            fontSize="1em"
            fontFamily="PP Eiko"
            component="span"
            fontWeight={500}
            color={textColor}
          >
            {subtext}
          </Typography>
        </Typography>
        <Typography variant="body1" fontWeight={400} color={descriptionColor}>
          {description}
        </Typography>
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
            variant="body1"
            fontFamily="PP Eiko"
            fontWeight={900}
            marginRight={1}
            color={textColor}
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
