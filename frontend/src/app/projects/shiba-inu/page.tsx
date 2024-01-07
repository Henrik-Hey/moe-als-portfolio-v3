"use client";

import { baseTheme } from "@/theme";
import { Container, ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Footer } from "@/components/footer/footer";
import { ProjectHeader } from "@/components/projectHeader/projectHeader";

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
      <Container maxWidth="xl"></Container>
      <Footer />
    </ThemeProvider>
  );
}
