import { Box, Typography } from "@mui/material";
import React from "react";

interface ProjectStatementProps {
  content: string;
}
export const ProjectStatement = ({ content }: ProjectStatementProps) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={400} fontStyle="italic">
        {content}
      </Typography>
    </Box>
  );
};
