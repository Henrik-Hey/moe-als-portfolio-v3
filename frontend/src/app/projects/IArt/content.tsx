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
import { TeamCommentsCard } from "@/components/teamCommentsCard/teamCommentsCard";

export default function Content() {
  const baseTheme = useBaseTheme();

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ProjectHeader
        imageURL="/v3/IArt/img1.png"
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
                I led the ideation, branding, and UX design for IArt’s
                ForceGraph, a platform redefining AI-driven interactions.
                <br />
                <br />
                Unlike traditional text-based AI, IArt introduces a visually
                immersive experience, enabling users to engage with AI through
                adaptive visuals rather than static prompts.
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
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Brainstorming & Research
              </Typography>
              <Typography variant="body1">
                With tight timelines and limited funding, this project was
                largely conceptual, leaving little room for testing. My focus
                was on solving key problems while meeting the requirements
                outlined by stakeholders and developers. The challenge was to
                design a solution that aligned with their criteria despite the
                lack of certainty.
              </Typography>
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
            src="/v3/IArt/img2.png"
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
                  I started by researching visual trends and gathering
                  references to define the right aesthetic for IArt. From this,
                  I built a cohesive style guide, focusing on scalability and
                  usability. By refining colors, typography, and branding early
                  on, I established a strong design foundation that would ensure
                  consistency across the platform.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
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
            src="/v3/IArt/img3.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Building Out the App
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
        <Box width="100%">
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
            src="/v3/IArt/img4.png"
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
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              V2 Themes
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
              marginBottom: "12px",
            }}
            src="/v3/IArt/img5.png"
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
                  At this stage, the core product was functional, with most
                  components and features in place while final refinements were
                  still in progress. This version was presented to stakeholders
                  to showcase the interactive experience and ensure alignment
                  before finalizing the themes.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box pb={2}>
          <Typography variant="body2" fontWeight={400} fontSize={14}>
            Stakeholder Showcase by Lead Developer
          </Typography>
        </Box>
        <Box
          width="100%"
          mb={6}
          sx={{
            aspectRatio: "572 / 370",
            position: "relative",
            overflow: "hidden",
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
            src="/v3/IArt/img7.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Adapting to New Priorities & Constraints
              </Typography>
              <Typography variant="body1">
                As we showcased the app to investors and startups, a major car
                manufacturer expressed interest in integrating it into vehicle
                center consoles. This introduced new technical and accessibility
                requirements, requiring a rebuild of components to meet
                automotive UI standards.
                <br />
                <br />
                At the same time, shifting priorities meant we couldn&apos;t
                afford to build everything from scratch again. To maintain
                momentum, I researched pre-built libraries and code generators,
                selecting tools that balanced speed, flexibility, and
                accessibility without compromising quality.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
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
            src="/v3/IArt/img8.png"
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
                  With the project direction shifting, I took the initiative to
                  redefine ForceGraph for a new context—designing an interface
                  optimized for in-car use. This adaptation retained the core
                  experience while integrating updated accessibility standards
                  for safer interaction while driving.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Closed-beta Product Showcase
            </Typography>
          </Box>
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
            src="/v3/IArt/vid9.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Bridging the Gap to the Final Product
                </Typography>
                <Typography variant="body1">
                  Before introducing the final product demo, we needed to adapt
                  the design approach. While the previous mock-ups established a
                  strong foundation, the development team leveraged prebuilt
                  libraries and automation tools from my research to accelerate
                  the build.
                  <br />
                  <br />
                  This shift allowed them to focus on functionality and
                  scalability, resulting in a refined product that differs
                  visually but remains aligned with the original design
                  principles.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Closed-beta Product Showcase
            </Typography>
          </Box>
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
            src="/v3/IArt/vid10.mp4"
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
      <TeamCommentsCard
        color="#6D61E6"
        imageURL="/v2/IArt/teamComments.png"
        imagePaddingRight={{ xs: 0, md: 8 }}
        comments={[
          {
            name: "Yunfei, CEO",
            comment:
              "I’m thrilled to have Moe on our team. He consistently delivers accessible and visually impressive products, and I look forward to collaborating with him on future projects.",
          },
          {
            name: "Winni, Product designer",
            comment:
              "Moe is a pleasure to work with—highly creative and resourceful in any situation. Throughout this project and our previous presentation tool, he demonstrated exceptional attention to detail.",
          },
          {
            name: "Henrik, Front-end Engineer",
            comment:
              "Moe is a breeze to work with, consistently delivering well-annotated designs that are easy to develop. The Forcegraph project was no exception to his high standards.",
          },
        ]}
      />
      <ProjectsNavFooter projects={["afc", "hashmatrix-sharpstakes"]} />
      <Footer />
    </ThemeProvider>
  );
}
