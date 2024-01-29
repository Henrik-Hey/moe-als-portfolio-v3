"use client";

import { palette } from "@/theme";
import { ExpandLess } from "@mui/icons-material";
import { Box, ButtonBase, Grow } from "@mui/material";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled >= window.innerHeight) {
        setShowButton(true);
      } else if (scrolled <= 300) {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {children}
      <Box
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
        }}
      >
        <Grow in={showButton}>
          <ButtonBase
            sx={{
              p: 1,
              borderRadius: "50%",
              backgroundColor: palette.primary.main,
            }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <ExpandLess fontSize="medium" sx={{ color: palette.neutral[50] }} />
          </ButtonBase>
        </Grow>
      </Box>
    </>
  );
}
