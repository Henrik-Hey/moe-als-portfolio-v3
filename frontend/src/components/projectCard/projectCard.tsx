import {
  East,
  Lock,
  LockOpen,
  LockOpenTwoTone,
  LockTwoTone,
} from "@mui/icons-material";
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
  passwordRequiredColor?: string;
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
  passwordRequiredColor,
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
          cursor: "pointer",
          background: hoverColor,
          ".password-required": {
            background: passwordRequiredColor,
          },
          ".project-card-content": {
            transform: "scale(1.075)",
          },
        },
      }}
      onClick={onCTAClick}
    >
      <Box padding={6} display="flex" gap={3} flexDirection="column">
        <Box>
          <Box display="flex" justifyContent="space-between" gap={1}>
            <Box maxWidth={isLocked !== undefined ? "65%" : "100%"}>
              <Typography
                variant="body1"
                fontWeight={700}
                color={textColor}
                mb={1.5}
              >
                {project}
              </Typography>
            </Box>
            <Box>
              {isLocked !== undefined && (
                <Box
                  className="password-required"
                  sx={{
                    mt: 0.5,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 40,
                    transition: "all 0.5s",
                    background: !isDefaultHovered
                      ? "#DCDCDC"
                      : passwordRequiredColor,
                  }}
                >
                  <Typography fontSize={12}>Password Required</Typography>
                </Box>
              )}
            </Box>
          </Box>
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
                <Lock sx={{ color: textColor, fontSize: "16px" }} />
              ) : (
                <LockOpen sx={{ color: textColor, fontSize: "16px" }} />
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
            className="project-card-content"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: "scale(1)",
              transition: "all 0.5s",
            }}
          >
            {content}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
