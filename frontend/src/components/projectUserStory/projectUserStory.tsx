/* eslint-disable @next/next/no-img-element */
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Polygon = ({ backgroundColor }: { backgroundColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="25"
    viewBox="0 0 22 25"
    fill="none"
  >
    <path
      id="Polygon 1"
      d="M0.49414 12.5L21.2656 0.507577L21.2656 24.4924L0.49414 12.5Z"
      fill={backgroundColor}
    />
  </svg>
);

interface ProjectUserStoryProps {
  ltr?: boolean;
  title: string;
  backgroundColor: string;
  children: React.ReactNode;
  imageURL: string;
}
export const ProjectUserStory: React.FC<ProjectUserStoryProps> = ({
  ltr = true,
  title,
  backgroundColor,
  children,
  imageURL,
}) => {
  return (
    <Box
      display="flex"
      flexDirection={{
        xs: "column",
        md: ltr ? "row" : "row-reverse",
      }}
      gap={2}
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <img src={imageURL} alt="" width="175px" />
      </Box>
      <Box display="flex" flex={1} position="relative">
        <StoryPointerTop display={{ xs: "block", md: "none" }}>
          <Polygon backgroundColor={backgroundColor} />
        </StoryPointerTop>
        {ltr && (
          <StoryPointerLeft display={{ xs: "none", md: "block" }}>
            <Polygon backgroundColor={backgroundColor} />
          </StoryPointerLeft>
        )}
        {!ltr && (
          <StoryPointerRight display={{ xs: "none", md: "block" }}>
            <Polygon backgroundColor={backgroundColor} />
          </StoryPointerRight>
        )}
        <StoryBlurb flex={1} p={3} sx={{ backgroundColor }}>
          <Box mb={1.5}>
            <Typography color="primary" variant="h6" fontWeight={700}>
              {title}
            </Typography>
          </Box>
          {children}
        </StoryBlurb>
      </Box>
    </Box>
  );
};

const StoryBlurb = styled(Box)`
  position: relative;
  border-radius: 12px;
`;

const StoryPointerLeft = styled(Box)`
  position: absolute;
  left: -21px;
  top: 50%;
  transform: translateY(-50%);
`;

const StoryPointerRight = styled(Box)`
  position: absolute;
  right: -21px;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
`;

const StoryPointerTop = styled(Box)`
  position: absolute;
  right: 50%;
  top: -21px;
  transform: rotate(90deg);
`;
