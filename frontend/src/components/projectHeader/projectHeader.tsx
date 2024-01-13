import { palette } from "@/theme";
import { East } from "@mui/icons-material";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

interface ProjectHeaderProps {
  imageURL: string;
  logoString?: string;
  logoImage?: string;
  heading: string;
  subheading: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  imageURL,
  logoString,
  logoImage,
  heading,
  subheading,
}) => {
  return (
    <HeaderContainer>
      <BackdropImage
        sx={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        zIndex={1}
        alignItems="center"
        maxWidth={920}
      >
        {logoString && (
          <Typography variant="h1" color="#f7f7f7" fontWeight={900}>
            {logoString}
          </Typography>
        )}
        <Typography
          variant="h1"
          color="#f7f7f7"
          fontWeight={500}
          textAlign="center"
        >
          {heading}
        </Typography>
        <Typography variant="body1" color="#f7f7f7" fontWeight={400}>
          {subheading}
        </Typography>
      </Box>
    </HeaderContainer>
  );
};

const HeaderContainer = styled("div")`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const BackdropImage = styled("div")`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 0;
  background-position-y: -349px !important;
  background-size: cover;

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.35) 100%
    );
  }
`;
