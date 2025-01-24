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
        imageURL="/v2/IArt/headerImage.png"
        logoString="IArt"
        heading="Redefining Car Interfaces with Immersive Visual Solutions."
        subheading="While many AI tools and LLMs focus on text-based interactions, IArt goes further by enabling users to generate and explore information visually."
        color=" #6B65F2"
        secondaryColor="linear-gradient(90deg, #D1CFFC 0%, #E1CFFC 100%)"
        imageText="Latest concept screen"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor="linear-gradient(90deg, #D1CFFC 0%, #E1CFFC 100%)"
            typeTitle="Project Type"
            typeText="Product Design"
            platformsText="Web, Vehicle Console"
            timelineText="Q1 2024 - Ongoing"
            collaboration={
              <>
                Directors
                <br />
                Dev Leads
                <br />
                Product Managers
              </>
            }
            roleAndResponsibilitiesText={
              <>
                Lead Product Designer <br />
                <br />
                UX Consulting, Visual Design, Branding, Prototyping, Interaction
                Design, Dev handoff
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
                The project aimed to break away from traditional text-based AI
                interactions by introducing a visually immersive chat
                experience. I led the ideation, branding, and experience design
                for this project, pushing the boundaries of how users interact
                with AI.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem
              </Typography>
              <Typography variant="body1">
                Text-based AI interactions feel static and fail to engage users
                who benefit from visual learning. This gap limits intuitive
                exploration and makes processing complex information harder.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Project Goals
              </Typography>
              <Typography variant="body1">
                The app needed to meet key stakeholder expectations while moving
                beyond simply integrating GPT. The focus was on enhancing and
                expanding functionality to deliver a polished and scalable
                solution.
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
                  Experience Personalization{" "}
                </Typography>
                <Typography variant="body1">
                  Allow users to customize their experience with options like
                  colors and fonts, establishing a strong visual standard and
                  user control.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Responsiveness and Scalability
                </Typography>
                <Typography variant="body1">
                  Ensure the app works across various screen sizes, with a
                  desktop-first approach and components built for future
                  flexibility.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Ease of development
                </Typography>
                <Typography variant="body1">
                  Simplify development by using design systems and icon
                  libraries, enabling quick implementation without sacrificing
                  functionality.
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
              Brainstorming
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/brainstorming.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Starting the Process
                </Typography>
                <Typography variant="body1">
                  With my limited knowledge and initial questions, I began by
                  focusing on the product&apos;s foundation—colors, typography,
                  and overall feel. I gathered inspiration, documented ideas,
                  and developed concepts to align stakeholders on a shared
                  vision. (It&apos;s worth noting that this was my second
                  project with iArt, so I wasn’t starting entirely from
                  scratch.)
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Initial Research
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/limitResearch.png"
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
            src="/v2/IArt/styleGuide.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Building out the app
                </Typography>
                <Typography variant="body1">
                  With the concepts approved and requirements defined by
                  stakeholders and developers, I began designing the interface.
                  I started with a basic layout, then focused on theming to
                  incorporate key elements of user customization.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Initial Concepts
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/building_InitialConcepts.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              VI Theming work
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
            src="/v2/IArt/building_ThemingWork1.png"
          />
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
            src="/v2/IArt/building_ThemingWork2.png"
          />
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/building_ThemingWork3.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Addressing Additional Feedback
                </Typography>
                <Typography variant="body1">
                  Building on the initial themes, I refined and expanded them,
                  creating component sets to clearly communicate the designs to
                  developers and stakeholders.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Refined
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
            src="/v2/IArt/additionalFeedback1.png"
          />
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/additionalFeedback2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Finishing the Scoped Product
                </Typography>
                <Typography variant="body1">
                  At this stage, we had a functional product ready for users,
                  with most of the components and functionality in place, while
                  the themes were still being finalized.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          width="100%"
          mb={12}
          sx={{
            aspectRatio: "572 / 370",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            role="presentation"
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
            }}
            src="/v2/IArt/movingForward.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          p={6}
          width="100%"
          sx={{
            background: "linear-gradient(90deg, #D1CFFC 0%, #E1CFFC 100%)",
          }}
        >
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              HI-FI Concept Screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/scopedProductHIFI.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Addressing a Change in Priorities..
              </Typography>
              <Typography variant="body1">
                During this process, we had multiple investor meetings and
                showcased the app at various Startup events to secure funding.
                At one point, a major car manufacturer showed interest, seeing
                the potential for integrating the app into vehicle center
                consoles. This request would expand on the initial app,
                requiring a rebuild of components and updates to accessibility
                standards to meet the new criteria
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Working with limited resources
              </Typography>
              <Typography variant="body1">
                Due to shifting priorities and our adjusted approach, we didn’t
                have the time to build components from scratch again. Instead,
                it became crucial to leverage pre-existing libraries and code
                generators. I conducted the initial research to guide us through
                this process.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Solution Research
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/limitedResearch.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Moving Forward
                </Typography>
                <Typography variant="body1">
                  With the research complete and some downtime while the team
                  evaluated the best decisions, I took the initiative to create
                  an additional set of designs for a standard car console. These
                  designs retained the core concept of ‘ForceGraph’ but
                  incorporated updated accessibility rules to ensure they could
                  be safely used while driving.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Vehicle Console Interaction Mockups
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
            src="/v2/IArt/movingForward.png"
          />
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/movingForward2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Crossing the Finish Line
                </Typography>
                <Typography variant="body1">
                  The updated designs were approved, solidifying investor
                  confidence and giving us the green light to proceed. This
                  allowed the business to invest heavily in automation tools,
                  prebuilt libraries, and other resources I had briefly
                  researched, streamlining development and driving the project
                  forward.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Closed-beta Product (beta) - Desktop only until full funding is
              approved
            </Typography>
          </Box>
          <video
            autoPlay
            loop
            muted
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/IArt/visualChat.mp4"
          />
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
            <Typography variant="h3" mb={2} fontWeight={700} color={"#6D61E6"}>
              Conclusion
            </Typography>
            <Typography variant="body1" mb={2}>
              This project was a challenging and exciting journey, from the
              initial ForceGraph concept to the unexpected pivot brought by an
              automotive investor. Adapting to shifting priorities made this one
              of the most rewarding projects I’ve worked on.
            </Typography>
          </Box>
          <Box
            flex={1}
            sx={{
              p: 6,
              background: "#F0F0F0",
            }}
          >
            <Typography variant="h3" mb={2} fontWeight={700} color={"#6D61E6"}>
              Lessons
            </Typography>
            <Typography variant="body1" mb={2}>
              This project taught me the value of leveraging frameworks,
              libraries, and automation tools to streamline workflows. Moving
              forward, I’ll continue incorporating these strategies to optimize
              future projects.
            </Typography>
          </Box>
          <Box
            flex={1}
            sx={{
              p: 6,
              background: "#F0F0F0",
            }}
          >
            <Typography variant="h3" mb={2} fontWeight={700} color={"#6D61E6"}>
              Future Steps
            </Typography>
            <Typography variant="body1" mb={2}>
              The focus now is on refining the experience, user testing, and
              iterating on designs. With an expected completion in Q4 2025,
              there’s time to enhance the product and ensure its success.
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
            position="relative"
            overflow="hidden"
            sx={{
              background: "#f0f0f0",
            }}
          >
            <Box flex={1} p={6}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                color="#6D61E6"
              >
                Team Comments
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                How was your experience working with Moe?
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#6D61E6" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      <b>Yunfei, CEO:</b>
                      <br />
                      <br />
                      “I’m thrilled to have Moe on our team. He consistently
                      delivers accessible and visually impressive products, and
                      I look forward to collaborating with him on future
                      projects.”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#6D61E6" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      <b>Winni, Product designer:</b>
                      <br />
                      <br />
                      “Moe is a pleasure to work with—highly creative and
                      resourceful in any situation. Throughout this project and
                      our previous presentation tool, he demonstrated
                      exceptional attention to detail.”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#6D61E6" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      <b>Henrik, Front-end Engineer:</b>
                      <br />
                      <br />
                      “Moe is a breeze to work with, consistently delivering
                      well-annotated designs that are easy to develop. The
                      Forcegraph project was no exception to his high
                      standards.”
                    </Typography>
                  </Box>
                </Box>
              </Typography>
            </Box>
            <Box
              flex={1}
              minHeight={{ xs: 300, md: 0 }}
              height="100%"
              width="100%"
              position="relative"
            >
              <Box
                component="img"
                alt=""
                role="presentation"
                sx={{
                  position: "absolute",
                  width: "100%",
                  top: { xs: "-50px", md: "-250px" },
                  transform: "scale(0.85) ",
                  marginBottom: "-10px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                src="/v2/IArt/teamComments.png"
              />
            </Box>
          </Box>
        </FadeIn>
      </Container>
      <ProjectsNavFooter projects={["afc", "hashmatrix-sharpstakes"]} />
      <Footer />
    </ThemeProvider>
  );
}
