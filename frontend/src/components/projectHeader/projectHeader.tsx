import { darkTheme, palette } from "@/theme";
import { East } from "@mui/icons-material";
import {
  Box,
  ScopedCssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Navbar } from "..";

interface ProjectHeaderProps {
  imageURL: string;
  logoString?: string;
  logoImage?: React.ReactNode;
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
    <ThemeProvider theme={darkTheme}>
      <ScopedCssBaseline>
        <HeaderContainer>
          <BackdropImage
            sx={{
              backgroundImage: `url(${imageURL})`,
            }}
          />
          <Box position="absolute" top="0px" left="0px" width="100%">
            <Navbar colorMode="dark" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            p={2}
            zIndex={1}
            alignItems="center"
            maxWidth={920}
          >
            {logoString && (
              <Typography variant="h1" color="#f7f7f7" fontWeight={900}>
                {logoString}
              </Typography>
            )}
            {logoImage}
            <Typography
              variant="h1"
              color="#f7f7f7"
              fontWeight={500}
              textAlign="center"
            >
              {heading}
            </Typography>
            <Typography
              variant="body1"
              color="#f7f7f7"
              textAlign="center"
              fontWeight={400}
            >
              {subheading}
            </Typography>
          </Box>
        </HeaderContainer>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};

const HeaderContainer = styled("div")`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  overflow: hidden;
`;

const BackdropImage = styled("div")`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 0;
  background-attachment: fixed;
  background-size: cover;

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.35) 100%
    );
  }
`;
