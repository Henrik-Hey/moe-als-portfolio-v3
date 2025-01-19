/* eslint-disable @next/next/no-img-element */
"use client";

import { palette, useDarkTheme } from "@/theme";
import {
  Box,
  Container,
  Grid,
  ScopedCssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ProjectHeader } from "@/components/projectHeader/projectHeader";
import { ProjectMissionStatement } from "@/components/projectMissionStatement/projectMissionStatement";
import { ProjectStatement } from "@/components/projectStatement/projectStatement";
import { PinScrollImages } from "@/components/pinScrollImages/pinScrollImages";
import { ProjectNote } from "@/components/projectNote/projectNote";
import { FooterDark } from "@/components/footer/footerDark";
import { ProjectDataChart } from "@/components/projectDataChart/projectDataChart";
import {
  CompAnalysisChart,
  SurveyCompAnalysisSection,
} from "./surveyCompAnalysisSection";
import { ImagePanAndZoom } from "./imagePanAndZoom";
import { ProjectsNavFooter } from "@/components/projectsNavFooter/projectsNavFooter";
import FadeIn from "@/components/fadeIn/fadeIn";

const SCROLL_BLOCK_1_IMAGE_PATHS = [
  "/project_page_res/afc/scroll1/image1.png",
  "/project_page_res/afc/scroll1/image2.png",
  "/project_page_res/afc/scroll1/image3.png",
  "/project_page_res/afc/scroll1/image4.png",
  "/project_page_res/afc/scroll1/image5.png",
  "/project_page_res/afc/scroll1/image6.png",
];

const SCROLL_BLOCK_2_IMAGE_PATHS = [
  "/project_page_res/afc/scroll2/image1.png",
  "/project_page_res/afc/scroll2/image2.png",
];

const SCROLL_BLOCK_3_IMAGE_PATHS = [
  "/project_page_res/afc/scroll3/image1.png",
  "/project_page_res/afc/scroll3/image2.png",
  "/project_page_res/afc/scroll3/image3.png",
  "/project_page_res/afc/scroll3/image4.png",
];

const SCROLL_BLOCK_4_IMAGE_PATHS = [
  "/project_page_res/afc/scroll4/image1.png",
  "/project_page_res/afc/scroll4/image2.png",
  "/project_page_res/afc/scroll4/image3.png",
];

const SCROLL_BLOCK_5_IMAGE_PATHS = [
  "/project_page_res/afc/scroll5/image1.png",
  "/project_page_res/afc/scroll5/image2.png",
  "/project_page_res/afc/scroll5/image3.png",
  "/project_page_res/afc/scroll5/image4.png",
  "/project_page_res/afc/scroll5/image5.png",
  "/project_page_res/afc/scroll5/image6.png",
];

const SCROLL_BLOCK_6_IMAGE_PATHS = [
  "/project_page_res/afc/scroll6/image1.png",
  "/project_page_res/afc/scroll6/image2.png",
  "/project_page_res/afc/scroll6/image3.png",
  "/project_page_res/afc/scroll6/image4.png",
  "/project_page_res/afc/scroll6/image5.png",
  "/project_page_res/afc/scroll6/image6.png",
  "/project_page_res/afc/scroll6/image7.png",
  "/project_page_res/afc/scroll6/image8.png",
  "/project_page_res/afc/scroll6/image9.png",
];

export default function Content() {
  const darkTheme = useDarkTheme();

  return (
    <>
      <ProjectHeader
        imageURL="/v2/AFC/headerPhoto_all.png"
        logoString="Auto Finance Dealer"
        heading="Reducing Drop Rates and Enhancing the Inventory Financing Process and Journey."
        subheading="The previous process lacked accessibility, users demanded additional features, and there was a need to streamline operations to enable quicker vehicle flooring."
        color="#4E732A"
        secondaryColor={palette.green.main}
        imageText="Development ready screens"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor={palette.green.main}
            typeTitle="Project Type"
            typeText="Redesign"
            platformsText="Web, Tablet, Mobile: IOS, Android"
            timelineText="Q2 2022 - Ongoing"
            collaboration={
              <>
                Product Owners
                <br />
                Product Manager
                <br />
                Stakeholders <br />
                Technical Directors
                <br />
                Development Leads
                <br />
                Front End Engineers
              </>
            }
            roleAndResponsibilitiesText={
              <>
                Lead Product Designer <br />
                <br />
                User Research, Sketching, Wireframing, Visual Design,
                Prototyping, User Testing, Interaction Design, Dev Handoff
              </>
            }
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <ProjectStatement
            content={
              <>
                I redesigned AFCD’s flooring process, driving a significant
                boost in user satisfaction and reducing session times by 25%.
                <br />
                <br /> By streamlining workflows and modernizing the interface,
                I delivered a faster, more intuitive experience that transformed
                how users interact with the platform.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem
              </Typography>
              <Typography variant="body1">
                I redesigned AFCD’s flooring process, driving a significant
                boost in user satisfaction and reducing session times by 25%. By
                streamlining workflows and modernizing the interface, I
                delivered a faster, more intuitive experience that transformed
                how users interact with the platform.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Project Goals
              </Typography>
              <Typography variant="body1">
                As the digital auto industry expands, AFC faces increasing
                competition in offering services that are easy and clear to use.
                Maintaining its market position hinges on the simplicity and
                clarity of completing tasks. Recognizing the value of user time,
                I focused my redesign strategy and success principles on
                optimizing efficiency and user experience.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={{ xs: 2, md: 2 }}
            >
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Enhancing User Flow
                </Typography>
                <Typography variant="body1">
                  As the digital auto industry expands, AFC faces increasing
                  competition in offering services that are easy and clear to
                  use. Maintaining its market position hinges on the simplicity
                  and clarity of completing tasks. Recognizing the value of user
                  time, I focused my redesign strategy and success principles on
                  optimizing efficiency and user experience.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Addressing Accessibility Issues
                </Typography>
                <Typography variant="body1">
                  Creating a design system to meet WCAG standards is critical.
                  Elements must be clear, easy to understand, and responsive.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Reducing Process Time
                </Typography>
                <Typography variant="body1">
                  Streamlining the flow and resolving accessibility issues will
                  help users complete tasks faster. Implementing a failsafe
                  system for incomplete applications is also important.
                </Typography>
              </Box>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          width="100%"
          sx={{
            background: palette.green.main,
          }}
        >
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Old process screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/AFC/processScreens_All.png"
          />
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Understanding Current Market Expectations
                </Typography>
                <Typography variant="body1">
                  To fully grasp how our primary users interact with our
                  processes, what drives their behavior, and the underlying
                  reasons for high dropout rates and frequent requests for new
                  features, I employed the following research methods:
                </Typography>
              </Box>
            </FadeIn>
          </Box>
          <Box>
            <FadeIn>
              <Box
                mb={6}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={2}
              >
                <Box flex={1}>
                  <Typography variant="body1" mb={1.5}>
                    Method 1: <br />
                    <b>Competitive Analysis</b>
                  </Typography>
                  <Typography variant="body1">
                    Conducted internal research and interviews with stakeholders
                    to assess our competitive landscape and identify improvement
                    areas.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={1.5}>
                    Method 2: <br />
                    <b>Qualitative Research </b>
                  </Typography>
                  <Typography variant="body1">
                    Performed user interviews and remote walkthroughs to uncover
                    deep insights into user pain points through open-ended
                    questions.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={1.5}>
                    Method 3: <br />
                    <b>Qualitative Research </b>
                  </Typography>
                  <Typography variant="body1">
                    Executed A/B tests and gathered data via surveys with
                    closed-ended questions to identify which designs best meet
                    user expectations.
                  </Typography>
                </Box>
              </Box>
            </FadeIn>
            <FadeIn>
              <Box>
                <Typography variant="h3" pt={6} mb={2} fontWeight={700}>
                  Competitive Analysis: NextGear Capital
                </Typography>
                <Typography variant="body1">
                  AFC’s traditional, location-based business model faces
                  challenges from digital-first competitors like NextGear, which
                  attract a tech-savvy demographic with efficient, accessible
                  apps. To remain competitive, AFC must evaluate the potential
                  benefits of adopting a similar digital strategy.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          pb={0}
          width="100%"
          sx={{
            background: "#DDE2EE",
            overflow: "hidden",
          }}
        >
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Nextgear Capital was highlighted as AFC’s main
              <br /> competitor by leadership
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              objectPosition: "top",
              marginBottom: "-10px",
            }}
            src="/v2/AFC/compAnalysis_All.png"
          />
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Assessing NextGear&apos;s Impact
              </Typography>
              <Typography variant="body1">
                I explored whether concerns about NextGear’s digital-first
                solutions were shared beyond our management team. I conducted a
                brief survey to gather primary users&apos; opinions on
                NextGear’s app and flooring process.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <SurveyCompAnalysisSection />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Deepening User Insights
              </Typography>
              <Typography variant="body1">
                Over a few weeks, I interviewed over a dozen internal and
                external users who manage extensive inventories. This approach
                aimed to uncover nuanced perspectives and hidden challenges that
                surface-level data might miss.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={12}
          my={12}
        >
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Deepening User Insights
              </Typography>
              <Typography variant="body1">
                Over a few weeks, I interviewed over a dozen internal and
                external users who manage extensive inventories. This approach
                aimed to uncover nuanced perspectives and hidden challenges that
                surface-level data might miss.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
    </>
  );
}
