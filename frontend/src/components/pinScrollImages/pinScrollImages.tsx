import { Box, Typography, styled, useTheme } from "@mui/material";
import React from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { palette } from "@/theme";
import { useWindowSize } from "@uidotdev/usehooks";
import FadeIn from "../fadeIn/fadeIn";

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
  const itemContainerRef = React.useRef<HTMLDivElement>(null);
  const previousTouchRef = React.useRef<any>(null);
  const scrollPadding = React.useMemo(
    () => (disablePadding ? 0 : SCROLLER_PADDING),
    [disablePadding]
  );

  // React.useEffect(() => {
  //   if (
  //     !containerRef.current ||
  //     !contentRef.current ||
  //     !itemContainerRef.current ||
  //     (!!centerWidth && centerWidth <= (size?.width || 0))
  //   ) {
  //     return;
  //   }

  //   let scrollTrigger: any;
  //   let timeline: any;

  //   setTimeout(() => {
  //     if (
  //       !containerRef.current ||
  //       !contentRef.current ||
  //       !itemContainerRef.current ||
  //       (!!centerWidth && centerWidth <= (size?.width || 0))
  //     ) {
  //       return;
  //     }

  //     const { width: contentWidth } =
  //       contentRef.current.getBoundingClientRect();
  //     const { width: itemContainerWidth } =
  //       itemContainerRef.current.getBoundingClientRect();

  //     timeline = gsap.timeline();
  //     timeline.fromTo(
  //       contentRef.current,
  //       { scrollTo: { x: 0 } },
  //       {
  //         scrollTo: {
  //           x: itemContainerWidth - contentWidth,
  //         },
  //       }
  //     );

  //     scrollTrigger = ScrollTrigger.create({
  //       trigger: containerRef.current,
  //       scrub: true,
  //       start: "top top",
  //       end: "bottom bottom",
  //       animation: timeline,
  //     });
  //   }, 1000);

  //   return () => {
  //     timeline?.clear();
  //     scrollTrigger?.kill();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [centerWidth, containerRef, itemContainerRef, contentRef, scrollPadding]);

  const isDark = theme.palette.mode === "dark";
  const captionColor = isDark ? palette.neutral[200] : palette.neutral[600];
  const height =
    !!centerWidth &&
    centerWidth <= (size?.width || 0) &&
    !!centeredContainerHeight
      ? centeredContainerHeight
      : containerHeight;

  const handleDrag = (e: any) => {
    console.log("aaa", e);

    contentRef.current?.scrollTo({
      left: contentRef.current.scrollLeft - e.movementX,
    });
  };

  const handleDragMobile = (e: any) => {
    const touch = e.touches[0];

    if (previousTouchRef.current) {
      e.movementX = touch.pageX - previousTouchRef.current.pageX;
      e.movementY = touch.pageY - previousTouchRef.current.pageY;

      contentRef.current?.scrollTo({
        left: contentRef.current.scrollLeft - e.movementX,
      });
    }

    previousTouchRef.current = touch;
  };

  return (
    <Box height={"100vh"} ref={containerRef}>
      <ScrollContainer
        sx={{
          background: containerBackground,
          backgroundSize: "cover",
        }}
        onMouseDown={() => {
          containerRef.current?.addEventListener("mousemove", handleDrag);
        }}
        onTouchStart={(e) => {
          containerRef.current?.addEventListener("touchmove", handleDragMobile);
        }}
        onMouseLeave={() => {
          containerRef.current?.removeEventListener("mousemove", handleDrag);
        }}
        onMouseUp={() => {
          containerRef.current?.removeEventListener("mousemove", handleDrag);
        }}
        onTouchEnd={() => {
          containerRef.current?.removeEventListener(
            "touchmove",
            handleDragMobile
          );
          previousTouchRef.current = null;
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
        <ScrollBoxContainer
          ref={contentRef}
          flex={1}
          display="flex"
          p={scrollPadding / 2 / 8}
          pt={topPadding}
          pb={bottomPadding}
        >
          <Box flex={1} position="relative">
            <ScrollContentContainer
              pr={scrollPadding / 8}
              ref={itemContainerRef}
            >
              {items}
            </ScrollContentContainer>
          </Box>
        </ScrollBoxContainer>
        {bottomCaption && (
          <FadeIn>
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
          </FadeIn>
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
  cursor: grab;
  flex-direction: column;
`;

const ScrollContentContainer = styled(Box)`
  position: absolute;
  height: 100%;
  width: fit-content;
  top: 0px;
  left: 0px;
  display: flex;
  gap: 24px;
  flex-direction: row;
  overflow: visible;
`;

const ScrollBoxContainer = styled(Box)`
  width: 100%;
  overflow-x: scroll;
  pointer-events: none;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const TextBlock = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
