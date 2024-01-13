import { css, keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";

export const AboutMeImageAutoScrollBlock = () => {
  return (
    <ContentContainer>
      <ScrollContainer>
        <ScrollItem>
          <img
            src="/aboutme/moe-bday.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-climb.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-cook.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-shep.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-smile.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-cat.png"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-steak.png"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-pie.png"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-pic.png"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-bday.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-climb.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-cook.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-shep.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-smile.jpg"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-cat.png"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-steak.png"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-pie.png"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
        <ScrollItem>
          <img
            src="/aboutme/moe-pic.png"
            height={400}
            width={400}
            style={{ objectFit: "cover", borderRadius: "24px" }}
          />
        </ScrollItem>
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
