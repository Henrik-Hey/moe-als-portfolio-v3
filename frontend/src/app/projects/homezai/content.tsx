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
        imageURL="/v2/HomezAI/img1.png"
        logoString="HomezAI"
        heading="A Smarter Way to View Homes"
        subheading="HomezAI lets buyers schedule property viewings without brokers, saving time and eliminating hassle, so they can focus on finding their perfect home."
        color=" #2555E6"
        secondaryColor="#CFDAFC"
        imageText="Latest concept screen"
      />
      <Container maxWidth="lg">
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
                I led the design, branding, and UX for HomezAI, a platform built
                to streamline realtor and broker scheduling for clients and
                investors. The project reimagines real estate coordination with
                a focus on efficiency.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem & Approach
              </Typography>
              <Typography variant="body1">
                HomezAI set out to transform real estate coordination by
                automating scheduling and communication between users and
                brokers. The goal was to create an AI-powered platform that
                saves users time, reduces manual effort, and redefines the
                property viewing experience.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={{ xs: 2, md: 2 }}
            >
              <Box display="flex" flexDirection="column" gap={{ xs: 2, md: 2 }}>
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Streamlined Scheduling
                  </Typography>
                  <Typography variant="body1">
                    The AI manages all broker communication, including
                    availability and confirmation, ensuring users can focus on
                    finding the right property without logistical distractions.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Integrated Tools
                  </Typography>
                  <Typography variant="body1">
                    With integrations like Calendly, Google Maps, and personal
                    calendars, Homezai ensures accurate scheduling, real-time
                    updates, and effortless navigation for all parties involved.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap={{ xs: 2, md: 2 }}>
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Simplified User Input
                  </Typography>
                  <Typography variant="body1">
                    Users simply share their preferences or specific listings,
                    while the AI seamlessly handles the rest, creating a smooth
                    and stress-free process.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Cost and Time Savings
                  </Typography>
                  <Typography variant="body1">
                    By automating traditionally resource-heavy processes,
                    Homezai delivers a scalable solution that saves users time
                    and provides businesses with a cost-effective approach to
                    real estate coordination.
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
                To align user needs with business goals, I conducted in-depth{" "}
                <a
                  href="https://www.figma.com/board/4xnW9HE2YeF9lAl2yQ2tz7/HomezAI--Research?node-id=10-1172&t=GYLuES4r5sBHSrDw-1&fuid=755186265588674562"
                  style={{
                    color: "inherit",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                >
                  research
                </a>
                , including user personas, journey mapping, and a MoSCoW
                analysis.{" "}
                <a
                  href="https://docs.google.com/document/d/1pVw48BxmYp_v4hl9NqNffUtGKhLdfM6P99gmoWX-Ho0/edit?usp=sharing"
                  style={{
                    color: "inherit",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                >
                  Collaborative discussions
                </a>{" "}
                with stakeholders and development teams ensured the design
                accounted for both technical constraints and backend/frontend
                feasibility.
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
                  User Personas & Journey Mapping
                </Typography>
                <Typography variant="body1">
                  Identified pain points, motivations, and interactions to
                  design for key user needs.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Technical Exploration
                </Typography>
                <Typography variant="body1">
                  Assessed backend and frontend limitations while exploring APIs
                  like Google Maps and Calendly.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  MoSCoW Prioritization
                </Typography>
                <Typography variant="body1">
                  Used the framework to establish a clear timeline, and ideate
                  possible features and solutions.
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
              Personas and user journey mapping
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img2.png"
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
            src="/v2/HomezAI/img3.png"
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
            src="/v2/HomezAI/img4.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              MOSCOW
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img5.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Wireframes: From MVP to Final Product
                </Typography>
                <Typography variant="body1">
                  The wireframe process for HomezAI followed a structured,
                  iterative approach, evolving through multiple stages to create
                  a seamless, mobile-first platform.
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
              <b>Stage 1: MVP Wireframes</b>
              <br />
              Laying the foundation with the essential screens focused on core
              functionality
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img6.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Stage 2: Expanded Flow</b>
              <br />
              Conceptualizing the full user journey and ideating future
              features.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img7.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Stage 3: MVP Wireframes</b>
              <br />
              Incorporating stakeholder feedback to refine usability and
              clarity.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img8.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Stage 4: Full Product Experience</b>
              <br />
              Delivering a complete design that balances user needs with
              technical feasibility.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img9.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Stage 5: Feedback & Future Features</b>
              <br />
              Identifying opportunities for improvement and long-term
              enhancements.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img10.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <video
            playsInline
            controls
            muted
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/video11.mp4"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              <b>Stage 6: Landing Page Wireframes</b>
              <br />
              Pitching a concept for a landing page built using Figma & Webflow.
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img12.png"
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
                  To establish HomezAI as a modern and reliable platform, I
                  crafted a clean visual identity, balancing innovation and
                  trust. the brand was meant to connect with both tech-savvy
                  users and traditional stakeholders.
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
              Concept work
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img13.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Additional explorations
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img14.svg"
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
            src="/v2/HomezAI/img15.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Simplifying Future Development
                </Typography>
                <Typography variant="body1">
                  Collaborating with developers and project leads, I proposed
                  using Material Design to streamline component creation. This
                  pragmatic choice eliminated the need for a custom design
                  system at this stage, ensuring efficiency and consistency
                  across the platform.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
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
            src="/v2/HomezAI/img16.png"
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
                  With all the groundwork established, I spent the following
                  months designing solutions that aligned with user needs and
                  business objectives, collaborating closely with stakeholders,
                  owners, and development teams at every step.
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
              VI Theming work
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/HomezAI/img17.png"
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
            src="/v2/HomezAI/img18.png"
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
            src="/v2/HomezAI/img19.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
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
              As the product evolved, I prepared designs for investor showcases
              to gauge interest and secure funding. Collaborating with
              stakeholders, we carefully selected previews to align with our
              goals.
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
            src="/v2/HomezAI/video21.mp4"
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
            src="/v2/HomezAI/img20.png"
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
            src="/v2/HomezAI/img21.png"
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
              Designs were showcased to investors and briefly tested on the live
              app, generating enough interest to secure funding. As HomezAI
              evolves, I look forward to highlighting its impact and sharing
              success stories from our users. Thank you for reading through
              this!
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
