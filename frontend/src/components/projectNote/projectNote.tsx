import { Box, styled, useTheme } from "@mui/material";
import React from "react";

const FoldedEdge = ({ color = "#252525" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
  >
    <path d="M0.5 0.760742H20.5V20.7607L0.5 0.760742Z" fill={color} />
  </svg>
);

interface ProjectNoteProps {
  children: React.ReactNode | React.ReactNode[] | string;
  backgroundColor?: string;
}
export const ProjectNote: React.FC<ProjectNoteProps> = ({
  children,
  backgroundColor,
}) => {
  const theme = useTheme();
  return (
    <NoteContainer sx={{ backgroundColor }}>
      {children}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "20px",
          height: "20px",
        }}
      >
        <Box
          sx={{
            transformOrigin: "top left",
            transform: "translateX(-5%) translateY(0%)",
          }}
        >
          <FoldedEdge />
        </Box>
        <Box
          sx={{
            transformOrigin: "top left",
            transform: "rotate(180deg) translateX(-100%) translateY(20%)",
          }}
        >
          <FoldedEdge color={theme.palette.background.default} />
        </Box>
      </Box>
    </NoteContainer>
  );
};

const NoteContainer = styled(Box)`
  padding: 20px;
  min-height: 222px;
  height: 100%;
  width: 100%;
  position: relative;
`;
