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
`;

const scrollText = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
`;

const ScrollContainer = styled("div")`
  overflow: hidden;
  height: 100%;
  white-space: nowrap;
  animation: ${scrollText} 40s infinite linear;
  margin: 0;
  font-size: 0;
  display: flex;
  justify-content: space-between;
  gap: 64px;
  align-items: center;
  width: fit-content;
`;

const ScrollItem = styled("div")`
  display: block;
  margin: 0;
  padding: 0;
`;
