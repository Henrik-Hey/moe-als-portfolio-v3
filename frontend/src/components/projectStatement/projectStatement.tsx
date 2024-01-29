import { Box, Typography } from "@mui/material";
import React from "react";
import FadeIn from "../fadeIn/fadeIn";

interface ProjectStatementProps {
  content: string | React.ReactNode | React.ReactNode[];
}
export const ProjectStatement = ({ content }: ProjectStatementProps) => {
  return (
    <FadeIn>
      <Box>
        <Typography variant="h2" fontWeight={400} fontStyle="italic">
          {content}
        </Typography>
      </Box>
    </FadeIn>
  );
};
