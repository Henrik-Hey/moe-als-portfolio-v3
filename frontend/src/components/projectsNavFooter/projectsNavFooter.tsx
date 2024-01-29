import { palette, useDarkTheme } from "@/theme";
import {
  Box,
  Container,
  ScopedCssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import {
  PresetProjectCard,
  ProjectPage,
} from "../presetProjectCard/presetProjectCard";

interface ProjectsNavFooterProps {
  projects: ProjectPage[];
}

export const ProjectsNavFooter: React.FC<ProjectsNavFooterProps> = ({
  projects,
}) => {
  const darkTheme = useDarkTheme();

  return (
    <ThemeProvider theme={darkTheme}>
      <ScopedCssBaseline>
        <Container maxWidth="lg">
          <Box pt={12} pb={6}>
            <Typography
              variant="h3"
              textTransform="uppercase"
              textAlign="center"
              fontWeight={700}
            >
              There&apos;s more to see :)
            </Typography>
            <Box
              mt={6}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={2}
            >
              {projects.map((page, index) => (
                <PresetProjectCard project={page} key={index} />
              ))}
            </Box>
          </Box>
        </Container>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};
