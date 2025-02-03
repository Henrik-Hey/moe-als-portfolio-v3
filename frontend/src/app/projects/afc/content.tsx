/* eslint-disable @next/next/no-img-element */
"use client";

import { palette } from "@/theme";
import { Box, Container, Typography } from "@mui/material";
import { ProjectHeader } from "@/components/projectHeader/projectHeader";
import { ProjectMissionStatement } from "@/components/projectMissionStatement/projectMissionStatement";
import { ProjectStatement } from "@/components/projectStatement/projectStatement";
import { SurveyCompAnalysisSection } from "./surveyCompAnalysisSection";
import FadeIn from "@/components/fadeIn/fadeIn";
import { ProjectsNavFooter } from "@/components/projectsNavFooter/projectsNavFooter";
import { Footer } from "@/components/footer/footer";

export default function Content() {
  return (
    <>
      <ProjectHeader
        imageURL="/v2/AFC/headerPhotoAll.png"
        logoString="Auto Finance Dealer"
        heading="Reducing Drop Rates and Enhancing the Inventory Financing Process and Journey."
        subheading="The previous process lacked accessibility, users demanded additional features, and there was a need to streamline operations to enable quicker vehicle flooring."
        color="#4E732A"
        secondaryColor={palette.green.main}
        imageText="Development ready screens"
      />
      <Container maxWidth="lg">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor={palette.green.main}
            typeTitle="Project Type"
            typeText="UX/UI Redesign"
            platformsText="Web, Tablet, Mobile: IOS, Android"
            timelineText="Q2 2022 - Q1 2023"
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
                The NAP (Non-Auction Purchase) Inventory Financing Process, also
                known as &apos;Flooring,&apos; involves an interactive form that
                dealers complete to secure short-term financing for purchasing
                inventory. This process had challenges with high dropout rates
                and disorganized content, and important details were often
                difficult to find due to ineffective color and font choices.
                These issues led to a redesign aimed at simplifying the form and
                improving its usability.
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
                  Streamlining process steps and organizing related information
                  will enable users to transition smoothly from one task to
                  another without unnecessary interruptions.
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
      <Container maxWidth="lg">
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
                    <b>Quantitative Research </b>
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
          pb={0}
          width="100%"
          sx={{
            background: "#DDE2EE",
            overflow: "hidden",
          }}
        >
          <Box pb={2} p={6}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Nextgear Capital was highlighted as AFC’s main
              <br /> competitor by leadership
            </Typography>
          </Box>
          <Box
            component="img"
            alt=""
            role="presentation"
            sx={{
              px: 2,
              width: "100%",
              height: { xs: "150px", md: "600px" },
              objectFit: "cover",
              objectPosition: "top",
              marginBottom: "-10px",
            }}
            src="/v2/AFC/compAnalysis_All.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
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
      <Container maxWidth="xl">
        <Box pb={0} width="100%">
          <Box
            component="img"
            alt=""
            role="presentation"
            sx={{
              width: "100%",
            }}
            src="/v2/AFC/nextGear_barChart.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
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
        <FadeIn>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            my={12}
            alignItems="center"
            sx={{
              background: "#f0f0f0",
            }}
          >
            <Box flex={1} p={6}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                color="#4E732A"
              >
                User Interviews
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Can you describe any challenges you face with the current
                flooring process?
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#4E732A" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “It’s just very slow, and the process can get a bit
                      confusing at times, the steps aren’t really labelled
                      either”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#4E732A" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “Very outdated, looking at other apps on the market and
                      comparing them to what we have currently is disappointing”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#4E732A" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “I think it’s the way the process is structured? Vehicle
                      information is broken down over 2 steps instead of just
                      one”
                    </Typography>
                  </Box>
                </Box>
              </Typography>
            </Box>
            <Box
              flex={1}
              minHeight={{ xs: 150, md: 500 }}
              p={{ xs: 2, md: 12 }}
              pb={{ xs: 2, md: 0 }}
              overflow="hidden"
            >
              <Box
                component="img"
                alt=""
                role="presentation"
                sx={{
                  width: "100%",
                  marginBottom: "-20px",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                src="/v2/AFC/userInterviews_Mobile.png"
              />
            </Box>
          </Box>
        </FadeIn>
        <FadeIn>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            my={12}
            alignItems="center"
            sx={{
              background: "#f0f0f0",
            }}
          >
            <Box flex={1} p={6}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                color="#4E732A"
              >
                User Interviews
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Which platform are you most likely to start and complete a
                flooring process on? why?
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#4E732A" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “Lots of web features are just not available on mobile, I
                      might use it more if that were different but I’m not sure”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#4E732A" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “I use both but I prefer using the website over the app
                      almost always, it’s just a lot easier to manage and use”
                    </Typography>
                  </Box>
                </Box>
              </Typography>
            </Box>
            <Box flex={1} minHeight={500} p={12} overflow="hidden">
              <img
                alt=""
                role="presentation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src="/v2/AFC/userInterviews_PieChart.svg"
              />
            </Box>
          </Box>
        </FadeIn>
        <FadeIn>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            my={12}
            gap={12}
            alignItems="center"
          >
            <Box
              flex={1}
              p={6}
              sx={{
                background: "#f0f0f0",
              }}
            >
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                color="#4E732A"
              >
                Remote Walkthrough
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Flooring a non-auction
                <br /> purchase on mobile:
              </Typography>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v2/AFC/remoteWalkthrough_pieChartL.svg"
                />
              </Box>
            </Box>
            <Box
              flex={1}
              p={6}
              sx={{
                background: "#f0f0f0",
              }}
            >
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                color="#4E732A"
              >
                Remote Walkthrough
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Flooring a non-auction
                <br /> purchase on web:
              </Typography>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v2/AFC/remoteWalkthroughPieChartR.svg"
                />
              </Box>
            </Box>
          </Box>
        </FadeIn>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Narrowing User Pain Points
              </Typography>
              <Typography variant="body1">
                The competitive analysis and qualitative data provided a solid
                foundation, but I needed more quantitative insights to identify
                clear patterns and inform my solutions.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box display="flex" flexDirection="column">
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
              objectFit: "contain",
            }}
            src="/v2/AFC/userPainPoints_barChart.svg"
          />
          <FadeIn>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              my={12}
              gap={4}
              alignItems="center"
            >
              <Box
                flex={1}
                p={6}
                sx={{
                  background: "#f0f0f0",
                }}
              >
                <Typography
                  variant="body1"
                  mb={2}
                  fontWeight={700}
                  color="#4E732A"
                >
                  User Interviews
                </Typography>
                <Typography variant="h3" mb={4} fontWeight={700}>
                  Are you disappointed with recent enhancements?
                </Typography>
                <Box flex={1} overflow="hidden">
                  <img
                    alt=""
                    role="presentation"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src="/v2/AFC/userInterviews_ChartL.svg"
                  />
                </Box>
              </Box>
              <Box
                flex={1}
                p={6}
                sx={{
                  background: "#f0f0f0",
                }}
              >
                <Typography
                  variant="body1"
                  mb={2}
                  fontWeight={700}
                  color="#4E732A"
                >
                  User Interviews
                </Typography>
                <Typography variant="h3" mb={4} fontWeight={700}>
                  If we improve the AFCD app, would you use it more?
                </Typography>
                <Box flex={1} overflow="hidden">
                  <img
                    alt=""
                    role="presentation"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src="/v2/AFC/userInterviews_ChartC.svg"
                  />
                </Box>
              </Box>
              <Box
                flex={1}
                p={6}
                sx={{
                  background: "#f0f0f0",
                }}
              >
                <Typography
                  variant="body1"
                  mb={2}
                  fontWeight={700}
                  color="#4E732A"
                >
                  User Interviews
                </Typography>
                <Typography variant="h3" mb={4} fontWeight={700}>
                  Are you satisfied with the current flooring process on web?
                </Typography>
                <Box flex={1} overflow="hidden">
                  <img
                    alt=""
                    role="presentation"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src="/v2/AFC/userInterviews_ChartR.svg"
                  />
                </Box>
              </Box>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Mapping the User Journey
              </Typography>
              <Typography variant="body1">
                The competitive analysis and qualitative data provided a solid
                foundation, but I needed more quantitative insights to identify
                clear patterns and inform my solutions. I started by mapping out
                a user journey, focusing on pain points and improvement
                opportunities.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <img
          alt=""
          role="presentation"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src="/v2/AFC/mappingTheUserJourney_Image.png"
        />
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Summarizing Insights
              </Typography>
              <Typography variant="body1">
                With the research phase complete, it’s time to address the key
                issues identified. Drawing from user feedback and comments, I’ve
                pinpointed common pain points and proposed targeted solutions:
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
                  Time on Task
                </Typography>
                <Typography variant="body1">
                  Users spend too much time completing tasks on both web and
                  mobile platforms.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Design Refresh
                </Typography>
                <Typography variant="body1">
                  AFCD’s design requires updates to streamline the flow and
                  resolve usability issues.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Mobile and Web Experience
                </Typography>
                <Typography variant="body1">
                  The current experience needs significant improvements to
                  improve user ratings.
                </Typography>
              </Box>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <img
          alt=""
          role="presentation"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src="/v2/AFC/summerizingInsights_Image.png"
        />
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Revisiting the User Flow
              </Typography>
              <Typography variant="body1">
                With a solid set of data to work from, it was time to start
                mapping out the site. I revisited the structure to group
                information correctly and identify refinements and bottlenecks.
                Additionally, I had to consider the legal limitations between
                Canada and the US, as this feature was being released in both
                regions.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <img
          alt=""
          role="presentation"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src="/v2/AFC/revisitingUserFlow_Image.png"
        />
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Creating Wireframes from Current State{" "}
              </Typography>
              <Typography variant="body1">
                With solid data and many enhancement ideas in hand, I was ready
                to execute but faced a key limitation: our outdated codebase.
                This had caused previous bottlenecks, so I engaged the
                development team early during wireframing and sketching,
                actively discussing features and ideas to ensure smooth
                implementation.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <img
          alt=""
          role="presentation"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src="/v2/AFC/wireframesCurrentState_Image.png"
        />
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Establishing a Design System
              </Typography>
              <Typography variant="body1">
                Before diving into high-fidelity designs, I faced another
                hurdle. The business had its limitations, and the previous
                designer never used a design system. There was a rough color
                palette and no consistent fonts or icon styles. Without the
                resources to build a full design system, I created a basic style
                guide for colors and fonts to keep the project moving forward.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <img
          alt=""
          role="presentation"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src="/v2/AFC/establishingDesignSystem_Image.png"
        />
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Bringing it All Together
              </Typography>
              <Typography variant="body1">
                After hours of research, meetings, and brainstorming sessions, I
                had everything needed to create a user-friendly process. This
                design addressed navigation issues and confusion in the flow,
                receiving overwhelmingly positive feedback during closed
                testing.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          width="100%"
          sx={{
            background: "#81BC01",
          }}
        >
          <Box pb={6}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              New (left) vs. Old (right)
            </Typography>
          </Box>
          <Box
            display="flex"
            gap={6}
            flexDirection={{
              xs: "column",
              md: "row",
            }}
          >
            <Box
              flex={1}
              sx={{
                position: "relative",
              }}
            >
              <img
                alt=""
                role="presentation"
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src="/v2/AFC/briningItAllTogether_FrameL.png"
              />
              <Box
                sx={{
                  top: 10,
                  borderRadius: "8px",
                  transform: "scale(0.95)",
                  position: "absolute",
                  overflow: "hidden",
                  aspectRatio: "235 / 132",
                }}
              >
                <video
                  playsInline
                  controls={false}
                  autoPlay
                  loop
                  muted
                  role="presentation"
                  style={{
                    width: "100%",
                    transform: "scale(1.5)",
                  }}
                >
                  <source src="/v2/AFC/briningItAllTogether_ContentL.mp4" />
                </video>
              </Box>
            </Box>
            <Box
              flex={1}
              sx={{
                position: "relative",
              }}
            >
              <img
                alt=""
                role="presentation"
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src="/v2/AFC/briningItAllTogether_FrameR.png"
              />
              <Box
                sx={{
                  top: 10,
                  borderRadius: "8px",
                  transform: "scale(0.95)",
                  position: "absolute",
                  overflow: "hidden",
                  aspectRatio: "235 / 132",
                }}
              >
                <video
                  playsInline
                  controls={false}
                  autoPlay
                  loop
                  muted
                  role="presentation"
                  style={{
                    width: "100%",
                    transform: "scale(1.5)",
                  }}
                >
                  <source src="/v2/AFC/briningItAllTogether_ContentR.mp4" />
                </video>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Applying the Design System
              </Typography>
              <Typography variant="body1">
                The new design system has enhanced the product by providing a
                consistent framework and an accessible color palette. This
                update simplifies development and improves the user experience.
              </Typography>
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
              New design system across different process screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/AFC/applyingTheDesignSystem_Image.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Enhancing Mobile Usability
              </Typography>
              <Typography variant="body1">
                The redesigned mobile platform now meets user expectations and
                accessibility standards. Users will likely prefer and use the
                mobile version more frequently due to its improved usability and
                accessibility.
              </Typography>
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
          <Box pb={6}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              New (left) vs. Old (right)
            </Typography>
          </Box>
          <Box
            display="flex"
            gap={6}
            px={{ xs: 6, md: 24 }}
            flexDirection={{
              xs: "column",
              md: "row",
            }}
          >
            <Box
              flex={1}
              sx={{
                position: "relative",
              }}
            >
              <img
                alt=""
                role="presentation"
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src="/v2/AFC/mobileUsability_FrameL.png"
              />
              <Box
                sx={{
                  top: 60,
                  borderRadius: "16px",
                  transform: "scale(0.95)",
                  position: "absolute",
                  overflow: "hidden",
                  width: "100%",
                  height: "85%",
                  aspectRatio: "218 / 473",
                }}
              >
                <video
                  playsInline
                  controls={false}
                  autoPlay
                  loop
                  muted
                  role="presentation"
                  style={{
                    position: "absolute",
                    left: "-105%",
                    height: "100%",
                    transform: "scale(1.6)",
                  }}
                >
                  <source src="/v2/AFC/mobileUsability_ContentL.mp4" />
                </video>
              </Box>
            </Box>
            <Box
              flex={1}
              sx={{
                position: "relative",
              }}
            >
              <img
                alt=""
                role="presentation"
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                src="/v2/AFC/mobileUsability_FrameR.png"
              />
              <Box
                sx={{
                  top: 60,
                  borderRadius: "32px",
                  transform: "scale(0.97)",
                  position: "absolute",
                  overflow: "hidden",
                  width: "100%",
                  height: "85%",
                  aspectRatio: "218 / 473",
                }}
              >
                <video
                  playsInline
                  controls={false}
                  autoPlay
                  loop
                  muted
                  role="presentation"
                  style={{
                    position: "absolute",
                    left: "-105%",
                    height: "100%",
                    transform: "scale(1.6)",
                  }}
                >
                  <source src="/v2/AFC/mobileUsability_ContentR.mp4" />
                </video>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          my={12}
          p={6}
          width="100%"
          sx={{
            background: palette.green.main,
          }}
        >
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              New design system across different process screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/AFC/mobileUsability_appScreenshots.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Impact
              </Typography>
              <Typography variant="body1">
                Executing this project as AFC&apos;s sole designer was
                challenging. Through collaboration, design-oriented thinking,
                and thorough research, the flooring process was immensely
                improved. This provided users with the desired functionality
                while aligning with business needs and budget constraints. I
                created over 200 pages and states, and added annotations for
                developer clarity. These improvements have been released to
                users across North America. The data below summarizes the impact
                of these changes.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <img
          alt=""
          role="presentation"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src="/v2/AFC/impactUserExperience_BarChart.svg"
        />
        <Box
          display="flex"
          my={6}
          gap={6}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
        >
          <Box
            flex={1}
            sx={{
              p: 6,
              background: "#F0F0F0",
            }}
          >
            <Typography variant="h3" mb={2} fontWeight={700}>
              <span style={{ color: "#466500" }}>+124%</span> increase in visual
              design appeal.
            </Typography>
          </Box>
          <Box
            flex={1}
            sx={{
              p: 6,
              background: "#F0F0F0",
            }}
          >
            <Typography variant="h3" mb={2} fontWeight={700}>
              <span style={{ color: "#466500" }}>+167%</span> boost in user
              ratings and reviews.
            </Typography>
          </Box>
          <Box
            flex={1}
            sx={{
              p: 6,
              background: "#F0F0F0",
            }}
          >
            <Typography variant="h3" mb={2} fontWeight={700}>
              <span style={{ color: "#466500" }}>-25%</span> Decrease in average
              session time.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <FadeIn>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            mt={6}
            mb={6}
            alignItems="center"
            sx={{
              background: "#f0f0f0",
            }}
          >
            <Box flex={1} p={6}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                color="#4E732A"
              >
                User Interviews
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                How do you feel about the update to the Non-Auction Flooring
                Process?
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#4E732A" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “The new look and feel of the interface are way better and
                      easier to handle. It&apos;s like using an app that just
                      clicks for me, you know? Nothing seems old-school, and
                      I&apos;m not scratching my head trying to figure out how
                      things work anymore!”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#4E732A" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “I bet dealers will be way happier with this. It hands
                      them a ton of power, and it could be the solution
                      they&apos;ve been needing, especially since they&Aapos;re
                      always ringing up the offices for help. I see this as a
                      move in the right direction, and with some good coaching
                      and support, even the older folks will catch on.”
                    </Typography>
                  </Box>
                </Box>
              </Typography>
            </Box>
            <Box
              flex={1}
              minHeight={{ xs: 200, md: 500 }}
              p={12}
              pb={0}
              pr={0}
              overflow="hidden"
            >
              <img
                alt=""
                role="presentation"
                style={{
                  width: "100%",
                  marginBottom: "-10px",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "top",
                }}
                src="/v2/AFC/userInterviews_ProductShot.png"
              />
            </Box>
          </Box>
        </FadeIn>
      </Container>
      <ProjectsNavFooter projects={["hashmatrix-sharpstakes", "shiba"]} />
      <Footer />
    </>
  );
}
