import { darkTheme } from "@/theme";
import { Instagram, LinkedIn } from "@mui/icons-material";
import {
  Box,
  IconButton,
  ScopedCssBaseline,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export const FooterDark = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={darkTheme}>
      <ScopedCssBaseline>
        <Box
          py={2}
          pb={8}
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
              fontWeight: 700,
            }}
          >
            Don&apos;t hesitate to get in touch through any of my social media
            channels. <br />
            Alternatively, you can drop me an email at{" "}
            <Link
              href="mailto:design.moexls@gmail.com"
              style={{ color: theme.palette.neutral[50] }}
            >
              design.moexls@gmail.com
            </Link>
            . I look forward to hearing from you!
          </Typography>
          <Box display="flex">
            <IconButton
              LinkComponent={Link}
              href="https://www.instagram.com/design.moexls/"
              target="_blank"
            >
              <Instagram sx={{ color: theme.palette.neutral[50] }} />
            </IconButton>
            <IconButton
              LinkComponent={Link}
              href="https://www.linkedin.com/in/moe-als-508908193/"
              target="_blank"
            >
              <LinkedIn sx={{ color: theme.palette.neutral[50] }} />
            </IconButton>
          </Box>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};