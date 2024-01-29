import { Box, Typography, styled, useTheme } from "@mui/material";
import React from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { palette } from "@/theme";
import { useWindowSize } from "@uidotdev/usehooks";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const SCROLLER_PADDING = 128;

interface PinScrollImagesProps {
  containerHeight: string;
  centeredContainerHeight?: string;
  items: React.ReactNode[];
  topCaption?: React.ReactNode | string;
  bottomCaption?: React.ReactNode | string;
  centerWidth?: number;
  disablePadding?: boolean;
  topPadding?: number;
  bottomPadding?: number;
  containerBackground?: string;
}
export const PinScrollImages = ({
  containerHeight,
  centeredContainerHeight,
  items,
  topCaption,
  bottomCaption,
  centerWidth,
  disablePadding,
  topPadding,
  bottomPadding,
  containerBackground,
}: PinScrollImagesProps) => {
  const theme = useTheme();
  const size = useWindowSize();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const scrollPadding = React.useMemo(
    () => (disablePadding ? 0 : SCROLLER_PADDING),
    [disablePadding]
  );

  React.useEffect(() => {
    if (
      !containerRef.current ||
      !contentRef.current ||
      (!!centerWidth && centerWidth <= (size?.width || 0))
    ) {
      return;
    }

    const { width: containerWidth } =
      containerRef.current.getBoundingClientRect();

    const timeline = gsap.timeline();
    timeline.fromTo(
      contentRef.current,
      { xPercent: 0, x: 0 },
      { xPercent: -100, x: Number(containerWidth) - scrollPadding }
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      animation: timeline,
    });

    return () => {
      timeline.clear();
      scrollTrigger.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerWidth, containerRef, contentRef, scrollPadding]);

  const isDark = theme.palette.mode === "dark";
  const captionColor = isDark ? palette.neutral[200] : palette.neutral[600];
  const height =
    !!centerWidth &&
    centerWidth <= (size?.width || 0) &&
    !!centeredContainerHeight
      ? centeredContainerHeight
      : containerHeight;

  return (
    <Box height={height} ref={containerRef}>
      <ScrollContainer
        sx={{
          background: containerBackground,
          backgroundSize: "cover",
        }}
      >
        {topCaption && (
          <TextBlock mt={2} px={2}>
            <Typography
              component="div"
              variant="body1"
              color={captionColor}
              fontStyle="italic"
            >
              {topCaption}
            </Typography>
          </TextBlock>
        )}
        <Box
          flex={1}
          display="flex"
          p={scrollPadding / 2 / 8}
          pt={topPadding}
          pb={bottomPadding}
        >
          <Box flex={1} position="relative">
            <ScrollContentContainer ref={contentRef}>
              {items}
            </ScrollContentContainer>
          </Box>
        </Box>
        {bottomCaption && (
          <TextBlock mb={2} px={2}>
            <Typography
              component="div"
              variant="body1"
              color={captionColor}
              fontStyle="italic"
            >
              {bottomCaption}
            </Typography>
          </TextBlock>
        )}
      </ScrollContainer>
    </Box>
  );
};

const ScrollContainer = styled("div")`
  position: sticky;
  display: flex;
  height: 100vh;
  width: 100%;
  top: 0px;
  left: 0px;
  overflow: none;
  overflow-x: auto;
  flex-direction: column;
`;

const ScrollContentContainer = styled("div")`
  position: absolute;
  height: 100%;
  width: fit-content;
  top: 0px;
  left: 0px;
  display: flex;
  gap: 24px;
  flex-direction: row;
  white-space: nowrap;
`;

const TextBlock = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
