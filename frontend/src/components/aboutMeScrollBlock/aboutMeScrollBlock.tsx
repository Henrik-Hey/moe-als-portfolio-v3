import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

export const AboutMeImageAutoScrollBlock = () => {
  return (
    <ContentContainer>
      <ScrollContainer>
        {Array.from({ length: 9 }).map((_, index) => (
          <ScrollItem key={index}>
            <Box
              height={400}
              width={400}
              sx={{
                backgroundImage: `url(./v2/About/aboutPhoto${index + 1}.png)`,

                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            />
          </ScrollItem>
        ))}
        {Array.from({ length: 9 }).map((_, index) => (
          <ScrollItem key={index + "-2"}>
            <Box
              height={400}
              width={400}
              sx={{
                backgroundImage: `url(./v2/About/aboutPhoto${index + 1}.png)`,

                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            />
          </ScrollItem>
        ))}
      </ScrollContainer>
    </ContentContainer>
  );
};

const ContentContainer = styled("div")`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  margin: 0;
  padding: 0;
`;

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(calc((-7416px * 0.5) - 12px));
  }
`;

const ScrollContainer = styled("div")`
  overflow: hidden;
  height: 100%;
  white-space: nowrap;
  animation: ${scrollText} 45s infinite linear;
  margin: 0;
  font-size: 0;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  width: 7416px;
`;

const ScrollItem = styled("div")`
  display: block;
  margin: 0;
  padding: 0;
`;
