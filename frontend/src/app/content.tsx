"use client";

import { Banner, Navbar, ProjectCard } from "@/components";
import { baseTheme } from "@/theme";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Typewriter } from "@/components/typewriter/typeWriter";
import { ImageAutoScrollBlock } from "@/components/imageAutoScrollBlock/imageAutoScrollBlock";
import { Footer } from "@/components/footer/footer";
import { PresetProjectCard } from "@/components/presetProjectCard/presetProjectCard";

export default function Content() {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Banner />
      <Navbar />
      <Container maxWidth="lg">
        <Box
          width="100%"
          textAlign="center"
          my={12}
          display="flex"
          gap={3}
          flexDirection="column"
        >
          <Box
            sx={{
              height: { xs: "33em", md: "unset" },
            }}
          >
            <Typography variant="h1">
              Hi, I&apos;m Moe Als, a Product Designer{" "}
              <Typography
                variant="h1"
                fontSize="1em"
                component="span"
                fontWeight={100}
              >
                based in Ontario, Canada. When I&apos;m not working, I spend my
                time being a{" "}
                <Typewriter
                  contents={[
                    "Home Chef.",
                    "Professional Photographer.",
                    "Cat Dad.",
                    "Movie Enthusiast.",
                  ]}
                />
              </Typography>
            </Typography>
          </Box>

          <Typography variant="h6" fontWeight={400}>
            Fueled by a deep passion for Human-Centered Design, I wholeheartedly
            dive into the art of blending empathy, creativity, and innovation.
          </Typography>
        </Box>
      </Container>
      {/* CARD SECTION */}
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} md={7} display="flex">
            <PresetProjectCard project="afc" />
          </Grid>
          <Grid item xs={12} md={5} display="flex">
            <PresetProjectCard project="hashmatrix-sharpstakes" />
          </Grid>
          <Grid item xs={12} md={5} display="flex">
            <PresetProjectCard project="shiba" />
          </Grid>
          <Grid item xs={12} md={7} display="flex">
            <PresetProjectCard project="pawfolio" />
          </Grid>
        </Grid>
      </Container>
      {/* END OF CARD SECTION */}
      <Container maxWidth="lg">
        <Box
          width="100%"
          textAlign="center"
          my={12}
          display="flex"
          gap={3}
          flexDirection="column"
        >
          <Typography variant="h1">
            Some organizations and companies I&apos;ve had the pleasure of
            working with
          </Typography>
          <Typography variant="h6" fontWeight={400}>
            While the journey had its challenges, I&apos;m immensely grateful to
            the incredible companies and organizations that placed their trust
            in me to enhance user experiences through intelligent design
            decisions. Here are a few noteworthy entities that welcomed my
            expertise on the quest for a seamless user journey.
          </Typography>
        </Box>
      </Container>
      <Box mb={12}>
        <ImageAutoScrollBlock />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
