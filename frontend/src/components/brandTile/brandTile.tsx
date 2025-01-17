/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import React from "react";

interface BrandTileProps {
  brand: string;
  hoverColor: string;
}

export const BrandTile: React.FC<BrandTileProps> = ({ brand, hoverColor }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        aspectRatio: "1",
        background: "#E7E8E8",
        flex: 1,
        borderRadius: "12px",
        transition: "all 0.5s",
        filter: "grayscale(100%)",
        [`&:hover`]: {
          filter: "grayscale(0%)",
          transform: "translateY(-8px)",
          cursor: "pointer",
          background: hoverColor,
        },
      }}
    >
      <img
        src={`./v2/Home page/Logos/logoCollection_${brand}.svg`}
        alt=""
        role="presentation"
      />
    </Box>
  );
};
