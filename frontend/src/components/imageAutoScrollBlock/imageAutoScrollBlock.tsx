import { css, keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";

export const ImageAutoScrollBlock = () => {
  return (
    <ContentContainer>
      <ScrollContainer>
        <ScrollItem>
          <img src="/companies/afc.png" height={64} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/apollo.png" height={58} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/hashmatrix.png" height={55} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/mosaic.png" height={104} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/openlane.png" height={30} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/par.png" height={92} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/staples.png" height={42} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/afc.png" height={64} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/apollo.png" height={58} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/hashmatrix.png" height={55} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/mosaic.png" height={104} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/openlane.png" height={30} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/par.png" height={92} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/staples.png" height={42} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/afc.png" height={64} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/apollo.png" height={58} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/hashmatrix.png" height={55} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/mosaic.png" height={104} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/openlane.png" height={30} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/par.png" height={92} />
        </ScrollItem>
        <ScrollItem>
          <img src="/companies/staples.png" height={42} />
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
  &::before,
  &::after {
    background: linear-gradient(
      to right,
      #f7f7f7 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100px;
    position: absolute;
    width: 10vw;
    z-index: 2;
  }
  &::after {
    right: -1px;
    top: 0;
    transform: rotateZ(180deg);
  }
  &::before {
    left: 0;
    top: 0;
  }
`;

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(calc((-3905.59px * 0.5) - 32px));
  }
`;

const ScrollContainer = styled("div")`
  overflow: hidden;
  height: 100%;
  white-space: nowrap;
  animation: ${scrollText} 30s infinite linear;
  margin: 0;
  font-size: 0;
  display: flex;
  justify-content: space-between;
  gap: 64px;
  align-items: center;
  width: calc(3905.59px * 1.5);
`;

const ScrollItem = styled("div")`
  display: block;
  margin: 0;
  padding: 0;
`;
