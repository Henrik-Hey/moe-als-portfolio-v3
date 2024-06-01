"use client";

import { Banner, Navbar, ProjectCard } from "@/components";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Footer } from "@/components/footer/footer";
import { raleway } from "@/fonts";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";
import { AboutMeImageAutoScrollBlock } from "@/components/aboutMeScrollBlock/aboutMeScrollBlock";
import { usePortfolioTheme } from "@/theme";
import { FooterDark } from "@/components/footer/footerDark";

export default function Content() {
  const { activeTheme, theme } = usePortfolioTheme();

  const isDark = theme === "dark";

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Banner />
      <Navbar />
      <Container maxWidth="lg">
        <Box my={12}>
          <Box mb={6}>
            <AboutMeImageAutoScrollBlock />
          </Box>
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="h2"
              fontWeight={400}
              color={
                isDark
                  ? activeTheme.palette.neutral[100]
                  : activeTheme.palette.primary.main
              }
            >
              I’m passionate about creating user experiences that blend
              functionality and delight. I love bringing order to complexity
              through intricate design operations.
            </Typography>
            <Box>
              <Typography variant="body1">
                Currently working at{" "}
                <Typography
                  component={Link}
                  href="https://www.autofinance.com/"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  fontWeight={600}
                  variant="body1"
                  color={activeTheme.palette.secondary.main}
                >
                  AFC
                </Typography>{" "}
                and also doing some exciting projects during my off hours at{" "}
                <Typography
                  component={Link}
                  href="https://www.hashmatrix.xyz/"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  fontWeight={600}
                  variant="body1"
                  color={activeTheme.palette.secondary.main}
                >
                  Hashmatrix
                </Typography>
                . My focus is on enhancing user experiences through intuitive
                design. With a background in brand identity, web design, and
                comprehensive rebranding projects, I thrive on solving complex
                design challenges and creating systems that delight users.
                <br />
                <br />
                Outside of work, I enjoy cooking, spending time with Sushi and
                Nacho (my cats), and exploring new ventures. I&apos;m always on
                the lookout for new hobbies, challenges, and adventures that
                inspire my creativity.
                <br />
                <br />
                Feel free to{" "}
                <Typography
                  component={Link}
                  href="mailto:design.moexls@gmail.com"
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  fontWeight={600}
                  variant="body1"
                  color={activeTheme.palette.secondary.main}
                >
                  get in touch!
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      {isDark ? <FooterDark useSecondaryDarkColor /> : <Footer />}
    </ThemeProvider>
  );
}
