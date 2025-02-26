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
import Link from "next/link";

export default function Content() {
  const baseTheme = useBaseTheme();

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ProjectHeader
        imageURL="/v3/HomezAI/img1.png"
        logoString="HomezAI"
        heading="Optimizing Home Buying with AI-Powered Scheduling"
        subheading="HomezAI lets buyers schedule property viewings without brokers, saving time and eliminating hassle, so they can focus on finding their perfect home."
        color=" #2555E6"
        secondaryColor="#CFDAFC"
        imageText="Latest concept screen"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor="#CFDAFC"
            typeTitle="Project Type"
            typeText="Product Design"
            platformsText="Web, Mobile"
            timelineText="Q3 2024 - Ongoing"
            collaboration={
              <>
                Directors
                <br />
                Engineers
                <br />
                Product Managers
                <br />
                Clients
              </>
            }
            roleAndResponsibilitiesText={
              <>
                Lead Product Designer <br />
                <br />
                User Research, UX, Sketching, Wireframing, Visual Design,
                Branding, Prototyping, Interaction Design, QA, Dev handoff
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
                I led the design, branding, and UX for HomezAI, an AI-powered
                platform that automates real estate scheduling, reducing delays
                and manual coordination so buyers can book property viewings
                faster.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem & Approach
              </Typography>
              <Typography variant="body1">
                Scheduling property viewings is slow and inefficient. Buyers and
                brokers waste time on back-and-forth emails, availability
                conflicts, and missed appointments, often losing out on listings
                before a viewing is even scheduled.
                <br />
                <br />
                HomezAI hopes to eliminate these delays with AI-driven
                automation, instantly finding available slots, booking viewings,
                and handling confirmations. This solution focuses on three key
                areas:
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={{ xs: 2, md: 2 }}
            >
              <Box
                display="flex"
                flexDirection={{
                  xs: "column",
                  md: "row",
                }}
                gap={{ xs: 2, md: 2 }}
              >
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    AI-Powered Scheduling
                  </Typography>
                  <Typography variant="body1">
                    Automates availability tracking and broker coordination,
                    reducing manual effort.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Reminders & Follow-Ups{" "}
                  </Typography>
                  <Typography variant="body1">
                    AI confirms, reschedules, and prevents missed appointments.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Integrated Tools
                  </Typography>
                  <Typography variant="body1">
                    Syncs with Google Maps, calendars, and listing platforms for
                    real-time updates.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Research & Discovery
              </Typography>
              <Typography variant="body1">
                To ensure AI automation effectively solved scheduling
                inefficiencies, I led research focusing on user behavior and
                technical feasibility. The insights gained from this will help
                shape HomezAI’s scheduling system.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={{ xs: 2, md: 4 }}
            >
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  User Research
                </Typography>
                <Typography variant="body1">
                  Analyzed buyer and broker workflows to identify high-friction
                  areas in scheduling.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Technical Feasibility
                </Typography>
                <Typography variant="body1">
                  Assessed API integrations (Google Maps, listing platforms,
                  calendars) to define automation capabilities.
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
            src="/v3/HomezAI/img2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img3.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Wireframes: MVP and Beyond
                </Typography>
                <Typography variant="body1">
                  The wireframes for HomezAI evolved through iterative
                  refinements based on user testing and stakeholder input,
                  ensuring an intuitive and efficient home-viewing experience.
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
              <b>MVP Wireframes</b>
              <br />
              Initial wireframes streamlined scheduling interactions, shaped by
              stakeholder feedback.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img4.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Conversation UX Refinements</b>
              <br />
              Refined AI chatbot interactions to improve user guidance,
              balancing structured inputs with free-text flexibility.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img5.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Scope & Advanced Functionality Check-In</b>
              <br />I used Loom often to provide regular async check-ins, this
              ensured design-to-dev & stakeholder alignment.
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
            src="/v3/HomezAI/vid6.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Defining HomezAI’s Identity
                </Typography>
                <Typography variant="body1">
                  HomezAI’s visual identity balances innovation and trust,
                  designed to resonate with both tech-savvy users and
                  traditional stakeholders. The goal was to create a brand that
                  feels modern, intelligent, and reliable.
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
              HI FI Logo Concepts{" "}
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img7.svg"
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
            src="/v3/HomezAI/img8.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Streamlining Development with Material Design
                </Typography>
                <Typography variant="body1">
                  To ensure a scalable and efficient design system, I introduced
                  Material Design to reduce design debt and development time.
                  Leveraging a pre-established library allowed the team to focus
                  on core features without reinventing components, keeping the
                  experience cohesive while accelerating the build process.
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
              Standardizing UI components minimized technical debt and sped up implementation{" "}
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img9.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Building the App
                </Typography>
                <Typography variant="body1">
                 With the groundwork in place, I transitioned from research and wireframes to full-scale design. 
                  Over the following months, I refined flows, collaborated with stakeholders, 
                  and ensured each feature aligned with user needs and business objectives. 
                  Every iteration focused on usability, efficiency, and AI-driven automation to streamline scheduling.
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
              <b>Sign-in flow & reset screens</b>
              <br />A standard onboarding flow leveraging Material Design
              components and HomezAI branding for a seamless experience.{" "}
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img10.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Manual Schedule flow</b>
              <br /> This flow is designed for users who prefer manual
              scheduling without AI assistance.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img11.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Booking Management</b>
              <br /> This flow is for users who want a centralized space for
              managing, editing, and cancelling scheduled bookings.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img12.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Design Check-In</b>
              <br /> I continued to use Loom to keep stakeholders aligned,
              explaining design decisions and iteration updates asynchronously.
            </Typography>
          </Box>
          <video
            playsInline
            controls
            muted
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/video20.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <FadeIn>
          <Box my={12}>
            <Typography variant="h3" mb={2} fontWeight={700}>
              Polished Designs
            </Typography>
            <Typography variant="body1">
              As HomezAI evolved, I curated high-fidelity designs for investor showcases, aiming to generate interest 
              and secure funding. Working closely with stakeholders, I selected key previews that best highlighted 
              the platform’s value and potential.
            </Typography>
          </Box>
        </FadeIn>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
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
            src="/v3/HomezAI/vid14.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img15.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/HomezAI/img16.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <FadeIn>
          <Box my={12}>
            <Typography variant="h3" mb={2} fontWeight={700}>
              Securing the Future of HomezAI
            </Typography>
            <Typography variant="body1">
              To validate HomezAI’s impact, we showcased designs to investors
              and tested them on the live app, generating strong interest and
              securing funding. As the platform evolves, I look forward to
              measuring its success and sharing real user stories. Thank you for
              reading along!
            </Typography>
          </Box>
        </FadeIn>
      </Container>
      <TeamCommentsCard
        color="#1E4DDB"
        imageURL="/v2/HomezAI/img22.png"
        imagePaddingRight={{ xs: 2, md: 8 }}
        imageProps={{
          sx: {
            position: { xs: "relative", md: "absolute" },
            width: "100%",
            maxHeight: { xs: 600, md: "unset" },
            transform: {
              xs: "scale(1.5) translateY(20%)",
              md: "translateY(-10%)",
            },
            objectFit: "cover",
            objectPosition: "top",
          },
        }}
        comments={[
          {
            name: "Frank Li, Lead Engineer",
            comment:
              "Moe has a remarkable ability to understand both the technical and user-facing aspects of a project. Working with him ensured our engineering efforts aligned perfectly with the product vision.",
          },
          {
            name: "Michael Ens, Backend Developer",
            comment:
              "Moe’s clear communication and collaborative approach made integrating complex systems seamless. He consistently ensured the backend supported the product’s needs without overcomplicating the process.",
          },
          {
            name: "Henrik Hey, Frontend Engineer",
            comment:
              "Moe’s eye for detail and focus on user experience made my job easier. His designs are intuitive, and his feedback is always constructive, fostering a great development workflow.",
          },
        ]}
      />
      <ProjectsNavFooter projects={["afc", "hashmatrix-sharpstakes"]} />
      <Footer />
    </ThemeProvider>
  );
}
