import { Box, Container, Typography } from "@mui/material";
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
  return (
    <Box sx={{ background: "#E7E8E8" }}>
      <Container maxWidth="xl">
        <Box pt={12} pb={6}>
          <Typography variant="h3" textAlign="center" fontWeight={700}>
            More to see :)
          </Typography>
          <Box
            mt={12}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={6}
          >
            {projects.map((page, index) => (
              <PresetProjectCard project={page} key={index} isDefaultHovered />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
