"use client";

import { Banner, Navbar, ProjectCard } from "@/components";
import { baseTheme } from "@/theme";
import {
  Box,
  Card,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { palette } from "@/theme";

export default function Home() {
  const theme = useTheme();
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
          <Typography variant="h1">
            Hi, I&apos;m Moe Als, a Product Designer{" "}
            <Typography
              variant="h1"
              fontSize="1em"
              component="span"
              fontWeight={100}
            >
              based in Ontario, Canada. When I&apos;m not working, I spend my
              time being a Home Chef.
            </Typography>
          </Typography>
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
            <ProjectCard
              project="Auto Finance Dealer"
              subtext="Reimagining design systems, interfaces, and enhancing product sustainability."
              description="Auto Finance Dealer is a user-facing application that provides North American dealers with the tools to finance, manage both auction and non-auction vehicles, and beyond."
              ctaText="Enter Password"
              color={palette.green.main}
              onCTAClick={() => {}}
            />
          </Grid>
          <Grid item xs={12} md={5} display="flex">
            <ProjectCard
              project="HashMatrix"
              subtext="Empowering businesses to elevate their products "
              description="HashMatrix specializes in helping early stage tech startups grow and succeed on a global scale through product development, brand building, and fundraising."
              ctaText="View Project"
              color={palette.blue.main}
              onCTAClick={() => {}}
            />
          </Grid>
          <Grid item xs={12} md={5} display="flex">
            <ProjectCard
              project="SHIBA INU"
              subtext="Creating the ultimate Asian cuisine delivery app"
              description="Shiba is a comprehensive food delivery platform designed for busy young adults."
              ctaText="View Case Study"
              color={palette.error.main}
              onCTAClick={() => {}}
            />
          </Grid>
          <Grid item xs={12} md={7} display="flex">
            <ProjectCard
              project="Pawfolio"
              subtext="Simplifying Pet Care"
              description="Pawfolio is a pet management app designed to help you stay organized, maintain your pet's health records, and keep track of crucial dates."
              ctaText="In Progress.."
              color={palette.warning.main}
            />
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
    </ThemeProvider>
  );
}
