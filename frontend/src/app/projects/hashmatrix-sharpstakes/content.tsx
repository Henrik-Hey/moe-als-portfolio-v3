/* eslint-disable @next/next/no-img-element */
"use client";

import { palette, useBaseTheme } from "@/theme";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { ProjectHeader } from "@/components/projectHeader/projectHeader";
import { ProjectMissionStatement } from "@/components/projectMissionStatement/projectMissionStatement";
import { ProjectStatement } from "@/components/projectStatement/projectStatement";
import FadeIn from "@/components/fadeIn/fadeIn";
import { ProjectsNavFooter } from "@/components/projectsNavFooter/projectsNavFooter";
import { Footer } from "@/components/footer/footer";

export default function Content() {
  const baseTheme = useBaseTheme();

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ProjectHeader
        imageURL="/v2/SharpStakes/header_All.png"
        logoString="SharpStakes"
        heading="Enhancing User Engagement and Retention by Removing Dark Patterns"
        subheading="The previous process had several issues, including inconsistent design, dark pattern use, and accessibility problems. Users deserved a healthier product journey, prompting a need to investigate user retention and understand the high drop rates."
        color="#0E86D3"
        secondaryColor="#CFEAFC"
        imageText="Development ready screens"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor="#CFEAFC"
            typeTitle="Project Type"
            typeText="UX/UI Redesign"
            platformsText="Web, Mobile, IOS"
            timelineText="Q1 2023 - Q1 2024"
            collaboration={
              <>
                Directors
                <br />
                Dev Leads
                <br />
                Engineers <br />
              </>
            }
            roleAndResponsibilitiesText={
              <>
                Lead Product Designer <br />
                <br />
                UX Consulting, User Research, Sketching, Wireframing, Visual
                Design, Prototyping, User Testing, Interaction Design, Dev
                Handoff
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
                I led the complete redesign of SharpStakes&apos; app, boosting
                user satisfaction, reducing drop-off rates by 34%, and
                increasing session durations by 47%.
                <br />
                <br />
                Through strategic research, innovative design, and focused
                execution, I transformed the platform into an engaging,
                intuitive experience that enhanced user retention and trust.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem
              </Typography>
              <Typography variant="body1">
                SharpStakes faced significant issues with user trust and
                engagement due to inconsistencies and flaws. In the competitive
                sports betting market, a reliable and visually appealing
                platform is crucial. Upgrading the design is essential to build
                user confidence, encourage active participation, and ensure a
                trustworthy user experience.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Project Goals
              </Typography>
              <Typography variant="body1">
                As the AI industry booms, SharpStakes faces tough competition
                from other startups with substantial resources dedicated to
                perfecting their UX/UI. Staying ahead requires smart business
                strategies and prioritizing design decisions that offer both
                immediate and long-term benefits. To ensure user retention and
                positive word of mouth, I focused on the following key drivers
                for the redesign:
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
                  Crafting a Design Language
                </Typography>
                <Typography variant="body1">
                  Redesigning the visual elements to create a modern,
                  attractive, and consistent brand that enhances user experience
                  and brand perception.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Streamlined Sign-Up Experience
                </Typography>
                <Typography variant="body1">
                  Simplifying the sign-up process to make it quicker and more
                  intuitive, reducing drop-off rates and encouraging more users
                  to complete registration.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Better Content Hierarchy
                </Typography>
                <Typography variant="body1">
                  Simplifying the sign-up process to make it quicker and more
                  intuitive, reducing drop-off rates and encouraging more users
                  to complete registration.
                </Typography>
              </Box>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Consultation phase
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SharpStakes/problemImage.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Pushing for Research
                </Typography>
                <Typography variant="body1">
                  Due to budget constraints, research wasn’t initially a
                  priority for SharpStakes. However, I pushed for some dedicated
                  hours to understand how our primary users interact with the
                  process. I aimed to uncover what drives their behavior, what
                  they hope to achieve, and why they lose interest after signing
                  up. Here are the research methods I employed:
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
                    Conducted interviews with stakeholders to assess the
                    competitive landscape and identify learning opportunities
                    from similar sites.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={1.5}>
                    Method 2: <br />
                    <b>Qualitative Research </b>
                  </Typography>
                  <Typography variant="body1">
                    Collected data through A/B testing using Google Forms and
                    conducted targeted surveys with close-ended questions at key
                    points on the website to capture user feedback.
                  </Typography>
                </Box>
              </Box>
            </FadeIn>
            <FadeIn>
              <Box>
                <Typography variant="h3" pt={6} mb={2} fontWeight={700}>
                  Competitive Analysis
                </Typography>
                <Typography variant="body1">
                  In the sports betting market, creating cohesive brands and
                  superior user experiences is now the standard. As a newcomer,
                  SharpStakes must analyze competitors and identify areas for
                  improvement to meet and exceed these established expectations.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          my={12}
          pb={0}
          width="100%"
          sx={{
            background: "#E7D7F4",
            overflow: "hidden",
          }}
        >
          <Box pb={6}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Company directors praised OddsJam and hoped
              <br /> SharpStakes&apos; redesign could align with some of
              <br /> their successful strategies.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={4}
          >
            <img
              alt=""
              role="presentation"
              style={{
                flex: 1,
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "top",
                marginBottom: "-10px",
              }}
              src="/v2/SharpStakes/compAnalysis_OddsJam_L1.png"
            />
            <img
              alt=""
              role="presentation"
              style={{
                flex: 1,
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "top",
                marginBottom: "-10px",
              }}
              src="/v2/SharpStakes/compAnalysis_OddsJam_C1.png"
            />
            <img
              alt=""
              role="presentation"
              style={{
                flex: 1,
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "top",
                marginBottom: "-10px",
              }}
              src="/v2/SharpStakes/compAnalysis_OddsJam_R1.png"
            />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          pb={0}
          width="100%"
          sx={{
            background: "#CEE3FD",
            overflow: "hidden",
          }}
        >
          <Box pb={6}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Company directors favor the minimal color use
              <br /> and structured layout of BettingPros, finding it
              <br /> highly effective.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
          >
            <img
              alt=""
              role="presentation"
              style={{
                flex: 1,
                width: "100%",
                height: "600px",
                objectFit: "cover",
                objectPosition: "top",
                marginBottom: "-10px",
              }}
              src="/v2/SharpStakes/compAnalysis_BettingPros.png"
            />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Insights From Competitors
              </Typography>
              <Typography variant="body1">
                OddsJam and BettingPros excel in branding, design, and
                navigation, but rely heavily on paywalls and can overwhelm new
                users with dense information. To surpass these competitors,
                SharpStakes should maintain a user-friendly interface, ensure
                critical content is freely accessible, and simplify the user
                experience. This strategy will enhance user engagement and
                satisfaction.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          my={12}
          pb={0}
          width="100%"
          sx={{
            background: "#CFEAFC",
            overflow: "hidden",
          }}
        >
          <Box pb={6}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              BettingPros has over 50,000 downloads, OddsJam
              <br /> has more than 10,000 downloads, and <br />
              SharpStakes has over 50 downloads.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={4}
          >
            <img
              alt=""
              role="presentation"
              style={{
                flex: 1,
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "top",
                marginBottom: "-10px",
              }}
              src="/v2/SharpStakes/compAnalysis_OddsJam_L2.png"
            />
            <img
              alt=""
              role="presentation"
              style={{
                flex: 1,
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "top",
                marginBottom: "-10px",
              }}
              src="/v2/SharpStakes/compAnalysis_OddsJam_C2.png"
            />
            <img
              alt=""
              role="presentation"
              style={{
                flex: 1,
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "top",
                marginBottom: "-10px",
              }}
              src="/v2/SharpStakes/compAnalysis_OddsJam_R2.png"
            />
          </Box>
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
                color="#0E86D3"
              >
                User Feedback
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Tell us about your experience using SharpStakes so far.
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#0E86D3" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “It&apos;s alright, but I&apos;m not really happy with the
                      amount of locked content and popups. It&apos;s pretty
                      annoying because sometimes I just want to browse and see
                      the bets without getting spammed.”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#0E86D3" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “The colors are really distracting, and I wish there was
                      support for dark mode. The background is super bright, and
                      it makes everything else hard to look at.”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#0E86D3" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “The colors are really distracting, and I wish there was
                      support for dark mode. The background is super bright, and
                      it makes everything else hard to look at.”
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
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                src="/v2/SharpStakes/userFeedback_Image.png"
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
                color="#0E86D3"
              >
                User Interviews
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Do you find yourself using SharpStakes on desktop or mobile more
                often?
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#0E86D3" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “I mostly use the desktop version right now. It&apos;s
                      easier to digest all the information that way, and it
                      doesn&apos;t feel as cramped.”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#0E86D3" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “I almost exclusively use the desktop version.
                      There&apos;s just too much information to manage on a
                      smaller screen.”
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
                src="/v2/SharpStakes/userInterviews_PieChart.svg"
              />
            </Box>
          </Box>
        </FadeIn>
      </Container>
      <Container maxWidth="xl">
        <Box display="flex" flexDirection="column">
          <FadeIn>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
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
                  color="#0E86D3"
                >
                  User Interviews
                </Typography>
                <Typography variant="h3" mb={4} fontWeight={700}>
                  Do you find the current experience frustrating?
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
                    src="/v2/SharpStakes/userInterviews_PieChartL.svg"
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
                  color="#0E86D3"
                >
                  User Interviews
                </Typography>
                <Typography variant="h3" mb={4} fontWeight={700}>
                  Would you use SharpStakes over OddsJam?
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
                    src="/v2/SharpStakes/userInterviews_PieChartC.svg"
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
                  color="#0E86D3"
                >
                  User Interviews
                </Typography>
                <Typography variant="h3" mb={4} fontWeight={700}>
                  Would you use the mobile app more if it gets better?
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
                    src="/v2/SharpStakes/userInterviews_PieChartR.svg"
                  />
                </Box>
              </Box>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box my={12}>
          <FadeIn>
            <Box mb={6}>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Summarizing Insights
              </Typography>
              <Typography variant="body1">
                Despite limited research, I gained valuable insights to focus on
                the platform&apos;s key priorities and issues. The three main
                insights that stood out were:
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
                  Reducing Dark Pattern Usage{" "}
                </Typography>
                <Typography variant="body1">
                  Identifying and minimizing dark patterns to enhance user trust
                  and experience.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Implementing Dark Mode{" "}
                </Typography>
                <Typography variant="body1">
                  Creating a stable design system that uses dark mode
                  exclusively to improve visual comfort.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Enhancing Mobile Usability{" "}
                </Typography>
                <Typography variant="body1">
                  Redesigning the mobile app to present information more clearly
                  and prevent overwhelming users.
                </Typography>
              </Box>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SharpStakes/insightsImage.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                From Insights to Action
              </Typography>
              <Typography variant="body1">
                With key insights in hand, I began drafting wireframes for the
                new layout, focusing initially on the landing page and web app.
                Collaborating closely with the directors, I ensured all ideas
                were vetted and refined before moving forward. This approach
                expedited the process and helped us navigate the project&apos;s
                tight deadlines efficiently.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SharpStakes/insightsToAction_Image1.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SharpStakes/insightsToAction_Image2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Establishing a Design System
              </Typography>
              <Typography variant="body1">
                SharpStakes lacked a defined design system, and due to a tight
                timeline, I couldn&apos;t create one from scratch. Instead, I
                utilized an existing template, which provided a solid
                foundation. This approach allowed their developers to start
                building designs efficiently.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <video
            playsInline
            controls={false}
            autoPlay
            loop
            muted
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SharpStakes/finalizingDesigns_Video.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          pb={0}
          sx={{
            background: "#CFEAFC",
            overflow: "hidden",
          }}
        >
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Different SharpStakes pages using a consistent
              <br /> dark theme
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SharpStakes/finalizedDesigns_Image.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                A New Design System
              </Typography>
              <Typography variant="body1">
                Implementing dark mode has given SharpStakes a more cohesive and
                exclusive feel, unifying various products and platforms. This
                design system update has been well-received by developers,
                stakeholders, and users. Additionally, the update has reduced
                development costs by providing a centralized file for accessing
                color styles and components.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <video
            playsInline
            controls={false}
            autoPlay
            loop
            muted
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SharpStakes/newDesignSystem_Image1.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          mb={12}
          sx={{
            background: "#CFEAFC",
            overflow: "hidden",
          }}
        >
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Mobile App Concept Screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SharpStakes/newDesignSystem_Image1.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <img
          alt=""
          role="presentation"
          style={{
            width: "100%",
          }}
          src="/v2/SharpStakes/newDesignSystem_Image2.png"
        />
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                A Consistent Experience{" "}
              </Typography>
              <Typography variant="body1">
                The new SharpStakes experience is designed with responsiveness
                in mind, ensuring no compromises when scaling down to mobile.
                Users can access the same amount of information on mobile as
                they would on the web. Since the update, the mobile user count
                has been steadily increasing.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Impact{" "}
              </Typography>
              <Typography variant="body1">
                The updated interface and design strategy empower SharpStakes to
                streamline development by utilizing reusable components,
                adhering to accessibility guidelines, and eliminating dark
                patterns. Aligning with contemporary competitors, these changes
                attract a broader user base. This has led to a significant surge
                in user satisfaction, evidenced by numerous positive comments
                and reviews.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
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
              <span style={{ color: "#0E86D3" }}>+68%</span> boost in user
              satisfaction across both mobile and web experiences.
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
              <span style={{ color: "#0E86D3" }}>-34%</span> decrease in drop
              rates after the sign-up process is completed.
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
              <span style={{ color: "#0E86D3" }}>+47%</span> increase in average
              session duration on both web and mobile platforms.
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
            mb={12}
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
                color="#0E86D3"
              >
                Team Comments
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                How was your experience working with Moe?
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#0E86D3" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      <b>Shubs, CEO:</b>
                      <br />
                      <br />
                      “Moe is a great designer. He enhances our projects with
                      professionalism and quality. His deep understanding of
                      business goals and thoughtful design decisions shaped our
                      platform. Moe excels in adapting to changing requests and
                      delivering impressive designs. New users consistently
                      praise our improved UI/UX since Moe&apos;s involvement.”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#0E86D3" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      <b>Jaiden, Co-Founder:</b>
                      <br />
                      <br />
                      “In moments of uncertainty, Moe&apos;s guidance has been
                      indispensable, offering crucial direction in
                      decision-making. Our site&apos;s exceptional UI/UX, widely
                      praised by users, reflects Moe&apos;s influential
                      contributions. Beyond technical expertise, Moe&apos;s
                      patient and collaborative approach played a vital role in
                      fostering overall improvement.”
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
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                src="/v2/SharpStakes/teamComments_Image.png"
              />
            </Box>
          </Box>
        </FadeIn>
      </Container>
      <ProjectsNavFooter projects={["afc", "shiba"]} />
      <Footer />
    </ThemeProvider>
  );
}
