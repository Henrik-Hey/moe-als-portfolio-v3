"use client";

import { baseTheme } from "@/theme";
import { Box, Container, ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Footer } from "@/components/footer/footer";
import { ProjectHeader } from "@/components/projectHeader/projectHeader";
import { ProjectMissionStatement } from "@/components/projectMissionStatement/projectMissionStatement";
import { ProjectStatement } from "@/components/projectStatement/projectStatement";

export default function ShibaInu() {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ProjectHeader
        imageURL="/projects/shiba/backdrop.jpg"
        logoString="Shiba Inu"
        heading="Creating the ultimate Asian cuisine delivery app"
        subheading="Crafting Convenience for Busy Young Adults."
      />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <ProjectMissionStatement
            typeTitle="case study type"
            typeText="Bootcamp Project"
            roleAndResponsibilitiesText="Sketching, User Research, Wireframing, Visual Design, Prototyping, User Testing, Interaction Design, Brand Creation."
            platformsText="Mobile"
            timelineText="Q1 2022 - Q2 2022"
          />
          <ProjectStatement content="Crafting a distinctive product with a delightful user experience, Shiba Inu endeavors to compete with established market leaders. Centered on the needs of students and busy young adults, the app caters to those who crave exceptional Asian ethnic food but find themselves pressed for time to cook." />
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
