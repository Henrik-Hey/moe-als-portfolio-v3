"use client";

import { useBaseTheme, useDarkTheme } from "@/theme";
import {
  Box,
  Container,
  IconButton,
  ScopedCssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Navbar } from "..";
import { KeyboardArrowDown } from "@mui/icons-material";

interface ProjectHeaderProps {
  imageURL: string;
  logoString?: string;
  logoImage?: React.ReactNode;
  heading: string;
  subheading: string;
  imageText?: string;
  color?: string;
  secondaryColor?: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  imageURL,
  logoString,
  logoImage,
  heading,
  subheading,
  imageText,
  color,
  secondaryColor,
}) => {
  const theme = useBaseTheme();

  return (
    <>
      <Box position="absolute" top="0px" left="0px" width="100%" zIndex={100}>
        <Navbar colorMode="light" />
      </Box>
      <Container maxWidth="xl">
        <HeaderContainer>
          <Container maxWidth="xl">
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              pt={32}
              pb={28}
              zIndex={1}
              alignItems="center"
            >
              {logoString && (
                <Typography variant="h5" fontWeight={700} color={color}>
                  {logoString}
                </Typography>
              )}
              {logoImage}
              <Typography variant="h1" fontWeight={700} textAlign="center">
                {heading}
              </Typography>
              <Typography variant="h5" textAlign="center" fontWeight={400}>
                {subheading}
              </Typography>
            </Box>
          </Container>
          <Box
            p={6}
            width="100%"
            sx={{
              background: secondaryColor,
            }}
          >
            <Box pb={2}>
              <Typography variant="body2" fontWeight={400} fontSize={14}>
                {imageText}
              </Typography>
            </Box>
            <BackdropImage src={`${imageURL}`} />
          </Box>
        </HeaderContainer>
      </Container>
    </>
  );
};

const HeaderContainer = styled("div")`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;

const BackdropImage = styled("img")`
  width: 100%;
  height: 717px;
  object-fit: cover;
  z-index: 0;
`;
