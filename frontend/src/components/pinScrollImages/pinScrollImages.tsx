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
}
export const PinScrollImages = ({
  containerHeight,
  centeredContainerHeight,
  items,
  topCaption,
  bottomCaption,
  centerWidth,
  disablePadding,
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
    const { width: contentWidth } = contentRef.current.getBoundingClientRect();

    const timeline = gsap.timeline();
    timeline.fromTo(
      contentRef.current,
      { x: 0 },
      { x: -Number(contentWidth) + Number(containerWidth) - scrollPadding }
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
  }, [centerWidth, containerRef, contentRef, scrollPadding, size]);

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
      <ScrollContainer>
        {topCaption && (
          <TextBlock mt={2} px={2}>
            <Typography variant="body1" color={captionColor} fontStyle="italic">
              {topCaption}
            </Typography>
          </TextBlock>
        )}
        <Box flex={1} display="flex" p={scrollPadding / 2 / 8}>
          <Box flex={1} position="relative">
            <ScrollContentContainer ref={contentRef}>
              {items}
            </ScrollContentContainer>
          </Box>
        </Box>
        {bottomCaption && (
          <TextBlock mb={2} px={2}>
            <Typography variant="body1" color={captionColor} fontStyle="italic">
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
  overflow: hidden;
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
`;

const TextBlock = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
