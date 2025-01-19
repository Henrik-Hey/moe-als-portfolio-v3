/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Navbar } from "@/components";
import { Box, Chip, Container, ThemeProvider, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Footer } from "@/components/footer/footer";
import Link from "next/link";
import { usePortfolioTheme } from "@/theme";
import { FooterDark } from "@/components/footer/footerDark";

const SOFTWARE = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "Affinity",
  "Google Forms",
  "Google Analytics",
  "Lucid",
  "Miro",
];

const TECHNICAL = [
  "UXD",
  "UID",
  "Virtual Design",
  "Interaction Design",
  "Branding",
  "Design Systems",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Usability Testing",
  "Information Architecture",
];

export default function Content() {
  const { activeTheme, theme } = usePortfolioTheme();

  const isDark = theme === "dark";

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ minHeight: "67vh" }}>
        <Box my={12}>
          <Box display="flex" gap={6} pb={12}>
            <Box
              flex={1}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
              }}
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundImage: `url(./v2/About/aboutPhoto_${
                      index + 1
                    }.png)`,
                    backgroundSize: "cover",
                    borderRadius: "12px",
                  }}
                />
              ))}
            </Box>
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              gap={3}
              minWidth={{ lg: "548px" }}
            >
              <Typography
                variant="body1"
                fontWeight={600}
                color={
                  isDark
                    ? activeTheme.palette.neutral[100]
                    : activeTheme.palette.primary.main
                }
              >
                I’m all about creating user experiences that are not only
                functional but also bring a little joy to people’s lives. I
                thrive on turning chaos into order through thoughtful design :)
              </Typography>
              <Box>
                <Typography variant="body2">
                  Currently, I’m refining user experiences at{" "}
                  <Typography
                    component={Link}
                    href="https://www.openlane.ca/"
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    fontWeight={600}
                    variant="body2"
                    color={activeTheme.palette.primary.main}
                  >
                    OPENLANE
                  </Typography>{" "}
                  while collaborating on impactful projects with{" "}
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
                    variant="body2"
                    color={activeTheme.palette.primary.main}
                  >
                    Hashmatrix
                  </Typography>
                  . With over six years of experience in design, I’ve worked
                  across brand identity, web design, and comprehensive
                  rebranding efforts. I excel at solving complex design
                  challenges and building systems that resonate with users and
                  businesses alike.
                  <br />
                  <br />
                  Outside of work, I enjoy cooking, spending time with my two
                  cats (Sushi and Nacho), and diving into new hobbies that fuel
                  my inspiration.
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                fontWeight={600}
                color={
                  isDark
                    ? activeTheme.palette.neutral[100]
                    : activeTheme.palette.primary.main
                }
              >
                Software & Technical Experience
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1.5}>
                {SOFTWARE.map((item, index) => (
                  <Chip
                    sx={{ py: 0.5, px: 1.25, background: "#CFDAFC" }}
                    key={index + "-software"}
                    label={item}
                  />
                ))}
                {TECHNICAL.map((item, index) => (
                  <Chip
                    sx={{ py: 0.5, px: 1.25, background: "#FCDFCF" }}
                    key={index + "-technical"}
                    label={item}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      {isDark ? <FooterDark useSecondaryDarkColor /> : <Footer />}
    </ThemeProvider>
  );
}
