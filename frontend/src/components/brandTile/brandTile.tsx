/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import React from "react";

interface BrandTileProps {
  brand: string;
  hoverColor: string;
}

const brandLinks: any = {
  OPENLANE: "https://www.openlane.com/",
  AFC: "https://www.autofinance.com/",
  PAR: "https://www.parnorthamerica.com/",
  HM: "https://www.hashmatrix.xyz/",
  PAGEON: "https://app.pageon.ai/",
  SS: "https://www.sharpstakes.ca/",
  " HOMEZ": "https://homezai.com/",
  VEITA: "https://www.veita.ai/",
  EA: "https://www.easyaudit.ai/",
  SOHS: "https://www.sohs.app/",
  SUNNY: "https://www.sunnybrook.ca/",
  MOSAIC: "https://www.mosaic.com/",
  STAPLES: "https://www.staples.ca/",
  APOLLO: "",
};

export const BrandTile: React.FC<BrandTileProps> = ({ brand, hoverColor }) => {
  return (
    <Box
      component={"a"}
      href={brandLinks[brand] || ""}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        aspectRatio: "1",
        p: 6,
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
        width="100%"
        style={{
          aspectRatio: "1",
          objectFit: "contain",
        }}
        role="presentation"
      />
    </Box>
  );
};
