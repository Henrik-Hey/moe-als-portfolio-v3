"use client";

import React from "react";
import { Box, Typography, keyframes, styled, useTheme } from "@mui/material";

export const Banner: React.FC = () => {
  const theme = useTheme();
  return (
    <BannerContainer>
      <Typography color={theme.palette.neutral[50]} variant="body2">
        I&apos;m on the lookout for new exciting career opportunities.{" "}
        <Typography
          component="a"
          href="mailto:design.moexls@gmail.com"
          fontWeight={800}
          color={theme.palette.neutral[50]}
          variant="body2"
          sx={{
            textDecoration: "none",
          }}
        >
          Email me!
        </Typography>
      </Typography>
    </BannerContainer>
  );
};

const moveGradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const BannerContainer = styled(Box)`
  background: linear-gradient(-45deg, #e76f51, #2a9d8f, #e76f51);
  background-size: 400%;
  animation: ${moveGradientAnimation} 15s ease infinite;
  display: flex;
  padding: 16px 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  width: 100%;

  @media (prefers-reduced-motion) {
    background-size: 100%;
    animation: none;
  }
`;
