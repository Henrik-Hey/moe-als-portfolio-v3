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
        imageURL="/v2/Shiba/headerPhoto.png"
        logoString="Shiba Inu"
        heading="Creating the ultimate Asian cuisine delivery app"
        subheading="While numerous food delivery apps exist, few specialize in specific cuisines. Shiba Inu aims to fill this gap by providing a dedicated platform for Asian cuisine lovers."
        color="#EF3840"
        secondaryColor="#FBD0D2"
        imageText="Hi-Fidelity concept screens"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor="#FBD0D2"
            typeTitle="Project Type"
            typeText="Product Design"
            platformsText="Mobile"
            timelineText="Q1 2022 - Q2 2022"
            collaboration={<>Users</>}
            roleAndResponsibilitiesText={
              <>
                Lead Product Designer <br />
                <br />
                User Research, Sketching, Wireframing, Visual Design, Branding,
                Prototyping, Interaction Design
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
                I developed the brand, product, and UX for Shiba Inu, a platform
                that redefines food delivery by tailoring the experience to
                Asian cuisine enthusiasts.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem
              </Typography>
              <Typography variant="body1">
                Users often feel overwhelmed by the numerous food delivery
                options and prefer specific cuisines. They also value loyalty
                rewards. Existing apps partially address these needs but are too
                generalized. This gap inspired Shiba Inu, focusing on Asian
                cuisine with a tailored, rewarding user experience.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Project Goals
              </Typography>
              <Typography variant="body1">
                Competing with established competition like Uber Eats or Door
                dash is unrealistic. As a specialized app, Shiba Inu targets a
                niche audience. This poses a challenge in balancing the need for
                variety while staying true to its core focus. Here are the early
                challenges considered:
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
                  User Engagement
                </Typography>
                <Typography variant="body1">
                  Identifying ways to keep users engaged with a limited cuisine
                  focus, ensuring repeat usage and satisfaction.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Loyalty Program Design
                </Typography>
                <Typography variant="body1">
                  Developing an effective loyalty rewards system that appeals to
                  users while remaining sustainable for the app.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Market Differentiation
                </Typography>
                <Typography variant="body1">
                  Conducting research to differentiate Shiba Inu from other
                  specialized and generalized food delivery apps, highlighting
                  unique features and advantages.
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
              More Hi-Fidelity concept screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Shiba/conceptScreens.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Research
                </Typography>
                <Typography variant="body1">
                  Due to project constraints, I utilized pre-existing research
                  for similar demographics. This helped me understand my users
                  despite the lack of direct interviews. Here are the methods I
                  utilized:
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
                    <b>User Personas</b>
                  </Typography>
                  <Typography variant="body1">
                    Developed personas based on demographic data to identify key
                    user needs and pain points.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={1.5}>
                    Method 2: <br />
                    <b>Identifying Core Issues</b>
                  </Typography>
                  <Typography variant="body1">
                    Outlined key user issues with existing apps to refine design
                    focus.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={1.5}>
                    Method 3: <br />
                    <b>Journey Mapping</b>
                  </Typography>
                  <Typography variant="body1">
                    Mapped user experiences, pinpointing areas for improvement
                    and ensuring a seamless flow.
                  </Typography>
                </Box>
              </Box>
            </FadeIn>
            <FadeIn>
              <Box>
                <Typography variant="h3" pt={6} mb={2} fontWeight={700}>
                  Who’s the Primary User?
                </Typography>
                <Typography variant="body1">
                  I researched several studies and articles to better understand
                  our target users. Findings show that young adults aged 18 to
                  29 make up the overwhelming majority of food delivery app
                  users. This demographic insight, along with other data, helped
                  me refine my user personas.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
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
            src="/v2/Shiba/primaryUser1.png"
          />
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
            src="/v2/Shiba/primaryUser2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                What Problems Do These Users Often Encounter?
              </Typography>
              <Typography variant="body1">
                To understand user complaints, I conducted research and
                synthesized insights from over 18 external articles about food
                delivery apps and experiences. This provided a more accurate and
                empathetic understanding of the issues, guiding me in the right
                direction.
              </Typography>
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
            src="/v2/Shiba/userProblems.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                How does the journey differ?
              </Typography>
              <Typography variant="body1">
                To better understand the user experience, I expanded my research
                and created user journey maps. This helped identify key steps
                and potential failure points. It also highlighted differences
                between the journeys of new and loyal users, offering valuable
                insights for improving the app.
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
            src="/v2/Shiba/journeyDiffer1.png"
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
            src="/v2/Shiba/journeyDiffer2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Structuring the app
              </Typography>
              <Typography variant="body1">
                With the research completed and a clear direction, the next step
                was to build the app&apos;s foundational elements. I created the
                information architecture and user flow based on industry trends
                and common practices. At this stage, the goal was to establish a
                solid and functional base rather than groundbreaking
                innovations.
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
            src="/v2/Shiba/structuringTheApp.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Style Guide
              </Typography>
              <Typography variant="body1">
                Before starting wireframing, I wanted to determine the emotion
                Shiba Inu should convey—whether it should be fun, professional,
                or exclusive. I revisited my research and decided to adopt the
                following approach.
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
            src="/v2/Shiba/styleGuide.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Wireframing
              </Typography>
              <Typography variant="body1">
                I created a set of low-fidelity wireframes and refined them
                slightly to conduct usability testing. After receiving feedback
                on the general flow, I incorporated the suggestions into my
                notes for the final design.
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
            src="/v2/Shiba/wireFrame1.png"
          />
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
            src="/v2/Shiba/wireFrame2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Creating Concept Screens
              </Typography>
              <Typography variant="body1">
                With the data, branding guide, and wireframes ready, I created
                an app preview. Although Shiba Inu didn&apos;t reach development
                or further testing, the project was a valuable learning
                experience in independent research and real-time feedback.
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
            src="/v2/Shiba/conceptScreens1.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          pb={0}
          mb={12}
          sx={{
            background: "#FBD0D2",
            overflow: "hidden",
          }}
        >
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Shiba/conceptScreens2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          pb={0}
          mb={6}
          sx={{
            background: "#FBD0D2",
            overflow: "hidden",
          }}
        >
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Shiba/conceptScreens3.png"
          />
        </Box>
      </Container>
      <ProjectsNavFooter projects={["afc", "hashmatrix-sharpstakes"]} />
      <Footer />
    </ThemeProvider>
  );
}
