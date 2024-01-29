import { Instagram, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ background: theme.palette.neutral[100], width: "100%" }}
      py={2}
      px={2}
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
        Feel free to reach out for collaborations or just a friendly hello!
        <br />{" "}
        <Link
          href="mailto:design.moexls@gmail.com"
          style={{ color: theme.palette.neutral[700] }}
        >
          design.moexls@gmail.com
        </Link>
      </Typography>
      <Box display="flex">
        <IconButton
          LinkComponent={Link}
          href="https://www.instagram.com/design.moexls/"
          target="_blank"
        >
          <Instagram sx={{ color: theme.palette.neutral[700] }} />
        </IconButton>
        <IconButton
          LinkComponent={Link}
          href="https://www.linkedin.com/in/moe-als-508908193/"
          target="_blank"
        >
          <LinkedIn sx={{ color: theme.palette.neutral[700] }} />
        </IconButton>
      </Box>
    </Box>
  );
};
