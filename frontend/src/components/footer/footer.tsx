import { Ballot, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ background: theme.palette.neutral[100], width: "100%" }}
      py={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Typography
        textAlign="center"
        variant="body2"
        sx={{
          color: theme.palette.neutral[700],
          fontWeight: 700,
        }}
      >
        Don&apos;t hesitate to get in touch through any of my social media
        channels. <br />
        Alternatively, you can drop me an email at design.moexls@gmail.com. I
        look forward to hearing from you!
      </Typography>
      <Box display="flex">
        <IconButton>
          <Instagram sx={{ color: theme.palette.neutral[700] }} />
        </IconButton>
        <IconButton>
          <Ballot sx={{ color: theme.palette.neutral[700] }} />
        </IconButton>
        <IconButton>
          <LinkedIn sx={{ color: theme.palette.neutral[700] }} />
        </IconButton>
      </Box>
    </Box>
  );
};
