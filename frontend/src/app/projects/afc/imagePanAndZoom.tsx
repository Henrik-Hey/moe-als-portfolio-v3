/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { palette } from "@/theme";

export const ImagePanAndZoom: React.FC = () => {
  return (
    <Box width="100%" height="800px" mb={12}>
      <Container maxWidth="xl">
        <Box
          height="800px"
          width="100%"
          border={`4px solid ${palette.neutral[100]}`}
          overflow="hidden"
          sx={{
            ".react-transform-wrapper": {
              width: "100%",
            },
          }}
        >
          <TransformWrapper initialScale={5} maxPositionX={12}>
            <TransformComponent>
              <Box height="800px">
                <img
                  alt=""
                  src="/project_page_res/afc/AFCFlow.png"
                  height="800px"
                />
              </Box>
            </TransformComponent>
          </TransformWrapper>
        </Box>
        <Typography
          mt={2}
          component="div"
          variant="body1"
          color={palette.neutral.main}
          fontStyle="italic"
          textAlign="center"
        >
          Early-level information architecture
        </Typography>
      </Container>
    </Box>
  );
};
