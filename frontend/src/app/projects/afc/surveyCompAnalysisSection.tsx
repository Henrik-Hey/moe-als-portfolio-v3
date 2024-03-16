"use client";

import { PinScrollImages } from "@/components/pinScrollImages/pinScrollImages";
import { ProjectDataChart } from "@/components/projectDataChart/projectDataChart";
import { Box } from "@mui/material";
import React from "react";

const SurveyChart: React.FC = () => (
  <ProjectDataChart
    title="Survey Data"
    subtitle="Branch personnel and user experience rating using the current nap flooring process."
    caption="Average based on 8 interviews"
    colors={["#71A501", "#517601"]}
    data={[
      {
        title: "Navigability",
        data: [3, 5],
      },
      {
        title: "Modernity",
        data: [2, 4],
      },
      {
        title: "Accessibility",
        data: [2, 5],
      },
      {
        title: "Practicality",
        data: [3, 6],
      },
      {
        title: "Content relativeness ",
        data: [4, 7],
      },
      {
        title: "Responsiveness",
        data: [4, 6],
      },
      {
        title: "Automatization",
        data: [1, 1],
      },
      {
        title: "Performance vs ng",
        data: [1, 3],
      },
    ]}
    cardColumns={[
      [
        {
          title: "Survey findings",
          body: "We must gain a deeper understanding of user preferences and overcome the fear of implementing changes. Our hesitance to introduce significant changes for fear of alienating the older generations has been too cautious, and now it's impacting the financial health of the business.",
        },
      ],
      [
        {
          title: "Survey findings",
          body: "AFC must enhance and expand its online presence, fostering dealer engagement and providing support for the adoption of new features or updates. Addressing significant interface issues and allocating additional time to comprehend dealer and branch concerns are crucial aspects. There is valuable insight to be gained by studying NextGear and their approach to these matters.",
        },
      ],
    ]}
  />
);

const CompAnalysisChart: React.FC = () => (
  <ProjectDataChart
    title="Competitive analysis "
    subtitle="Branch personnel experience rating using nextgear's alternative flooring process."
    caption="Average based on 8 interviews"
    colors={["#72ACDA", "#255F8D"]}
    data={[
      {
        title: "Navigability",
        data: [7, 9],
      },
      {
        title: "Modernity",
        data: [9, 9],
      },
      {
        title: "Accessibility",
        data: [7, 8],
      },
      {
        title: "Practicality",
        data: [8, 7],
      },
      {
        title: "Content relativeness ",
        data: [7, 7],
      },
      {
        title: "Responsiveness",
        data: [8, 9],
      },
      {
        title: "Automatization",
        data: [1, 1],
      },
      {
        title: "Performance vs AFCD",
        data: [9, 8],
      },
    ]}
    cardColumns={[
      [
        {
          title: "Competitive analysis findings",
          body: "NextGear recognizes both its strengths and weaknesses, strategically directing a significant portion of its budget toward developing projects and elements that reflect this awareness.",
        },
      ],
      [
        {
          title: "Competitive analysis findings",
          body: "NextGear outperforms AFC in nearly every aspect discussed. They demonstrate a strong understanding of accessibility, and many of their UI elements align more closely with current web standards. AFC could potentially benefit from a comprehensive brand overhaul.",
        },
      ],
    ]}
  />
);

export const SurveyCompAnalysisSection = () => {
  return (
    <>
      <Box display={{ xs: "block", lg: "none" }}>
        <PinScrollImages
          containerHeight="200vh"
          centeredContainerHeight="100vh"
          centerWidth={1440}
          topPadding={0}
          bottomPadding={0}
          items={[
            <Box
              key={0}
              minWidth="calc(100vw - 128px)"
              width="fit-content"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SurveyChart />
            </Box>,
          ]}
        />
        <PinScrollImages
          containerHeight="200vh"
          centeredContainerHeight="100vh"
          centerWidth={1440}
          topPadding={0}
          bottomPadding={0}
          items={[
            <Box
              key={0}
              minWidth="calc(100vw - 128px)"
              width="fit-content"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CompAnalysisChart />
            </Box>,
          ]}
        />
      </Box>
      <Box
        display={{ xs: "none", lg: "flex" }}
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Box>
          <SurveyChart />
        </Box>
        <Box>
          <CompAnalysisChart />
        </Box>
      </Box>
    </>
  );
};
