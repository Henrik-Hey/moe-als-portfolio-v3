/* eslint-disable @next/next/no-img-element */
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
import { BrandTile } from "@/components/brandTile/brandTile";

export default function Content() {
  const { activeTheme, theme } = usePortfolioTheme();

  const isDark = theme === "dark";
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />

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
            Hi, I&apos;m Moe 👋
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
              <PresetProjectCard project="openlane" darkMode={isDark} />
            </Grid>
          </FadeIn>
          <FadeIn>
            <Grid item xs={12} md={6} display="flex">
              <PresetProjectCard project="homezai" darkMode={isDark} />
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
              <PresetProjectCard project="easyaudit" darkMode={isDark} />
            </Grid>
          </FadeIn>
          <FadeIn>
            <Grid item xs={12} md={6} display="flex">
              <PresetProjectCard project="iart" darkMode={isDark} />
            </Grid>
          </FadeIn>
          <FadeIn>
            <Grid item xs={12} md={6} display="flex">
              <PresetProjectCard project="sohs" darkMode={isDark} />
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
              Brands I&apos;ve Collaborated With{" "}
            </Typography>
            <Typography variant="body1" fontWeight={400}>
              For over six years, I’ve partnered with these amazing
              organizations to deliver innovative and impactful solutions to all
              kinds of users!{" "}
            </Typography>
          </Box>
        </FadeIn>
      </Container>
      <Container maxWidth="lg">
        <FadeIn>
          <Box mb={12}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={3}>
                <BrandTile brand="OPENLANE" hoverColor="#CFE0FC" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="AFC" hoverColor="#E3FCCF" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="PAR" hoverColor="#FCD0CF" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="HM" hoverColor="#CFE1FC" />
              </Grid>

              <Grid item xs={6} md={3}>
                <BrandTile brand="PAGEON" hoverColor="#FCDFCF" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="SS" hoverColor="#CFE1FC" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand=" HOMEZ" hoverColor="#CFDAFC" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="VEITA" hoverColor="#CFE2FC" />
              </Grid>

              <Grid item xs={6} md={3}>
                <BrandTile brand="EA" hoverColor="#CFFCE9" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="SOHS" hoverColor="#F2CFFC" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="SUNNY" hoverColor="#E5FCCF" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="MOSAIC" hoverColor="#CFF7FC" />
              </Grid>

              <Grid
                item
                xs={6}
                md={3}
                sx={{ display: { xs: "none", md: "block" } }}
              ></Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="APOLLO" hoverColor="#DDCFFC" />
              </Grid>
              <Grid item xs={6} md={3}>
                <BrandTile brand="STAPLES" hoverColor="#FCCFCF" />
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                sx={{ display: { xs: "none", md: "block" } }}
              ></Grid>
            </Grid>
          </Box>
        </FadeIn>
      </Container>
      {isDark ? <FooterDark useSecondaryDarkColor /> : <Footer />}
    </ThemeProvider>
  );
}
