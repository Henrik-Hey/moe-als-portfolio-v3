"use client";

import { Banner, Navbar } from "@/components";
import { usePortfolioTheme } from "@/theme";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Typewriter } from "@/components/typewriter/typeWriter";
import { ImageAutoScrollBlock } from "@/components/imageAutoScrollBlock/imageAutoScrollBlock";
import { Footer } from "@/components/footer/footer";
import { PresetProjectCard } from "@/components/presetProjectCard/presetProjectCard";
import { FooterDark } from "@/components/footer/footerDark";
import FadeIn from "@/components/fadeIn/fadeIn";

export default function Content() {
  const { activeTheme, theme } = usePortfolioTheme();

  const isDark = theme === "dark";
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Banner />
      <Navbar />
      <Container maxWidth="md">
        <Box
          width="100%"
          textAlign={{ xs: "left", md: "center" }}
          my={12}
          display="flex"
          gap={3}
          flexDirection="column"
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color={
              isDark
                ? activeTheme.palette.neutral[100]
                : activeTheme.palette.primary.main
            }
          >
            Hi, I&apos;m Moe!
          </Typography>

          <Typography
            variant="h2"
            fontWeight={500}
            color={
              isDark
                ? activeTheme.palette.neutral[100]
                : activeTheme.palette.primary.main
            }
          >
            A product designer blending empathy, creativity, and innovation
            through human-centered design.
          </Typography>

          <Typography variant="body1" fontWeight={400}>
            When I&apos;m not working, I spend my time{" "}
            <span style={{ fontWeight: 600 }}>
              being a{" "}
              <Typewriter
                contents={[
                  "Home Chef.",
                  "Professional Photographer.",
                  "Cat Dad.",
                  "Movie Enthusiast.",
                ]}
              />
            </span>
          </Typography>
        </Box>
      </Container>
      {/* CARD SECTION */}
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <FadeIn>
            <Grid item xs={12} md={6} display="flex">
              <PresetProjectCard project="afc" darkMode={isDark} />
            </Grid>
          </FadeIn>
          <FadeIn>
            <Grid item xs={12} md={6} display="flex">
              <PresetProjectCard
                project="hashmatrix-sharpstakes"
                darkMode={isDark}
              />
            </Grid>
          </FadeIn>
          <FadeIn>
            <Grid item xs={12} md={6} display="flex">
              <PresetProjectCard project="shiba" darkMode={isDark} />
            </Grid>
          </FadeIn>
          <FadeIn>
            <Grid item xs={12} md={6} display="flex">
              <PresetProjectCard project="pawfolio" darkMode={isDark} />
            </Grid>
          </FadeIn>
        </Grid>
      </Container>
      {/* END OF CARD SECTION */}
      <Container maxWidth="md">
        <FadeIn>
          <Box
            width="100%"
            textAlign={{ xs: "left", md: "center" }}
            my={12}
            display="flex"
            gap={3}
            flexDirection="column"
          >
            <Typography
              variant="h3"
              fontWeight={500}
              color={
                isDark
                  ? activeTheme.palette.neutral[100]
                  : activeTheme.palette.primary.main
              }
            >
              Trusted by Leading Organizations
            </Typography>
            <Typography variant="body1" fontWeight={400}>
              Several leading organizations have successfully leveraged my
              expertise to create seamless user journeys:
            </Typography>
          </Box>
        </FadeIn>
      </Container>
      <FadeIn>
        <Box mb={12}>
          <ImageAutoScrollBlock />
        </Box>
      </FadeIn>
      {isDark ? <FooterDark useSecondaryDarkColor /> : <Footer />}
    </ThemeProvider>
  );
}
