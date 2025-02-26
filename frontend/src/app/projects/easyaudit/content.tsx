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
        imageURL="/v3/EasyAudit/img1.png"
        logoString="EasyAudit"
        heading="Revolutionizing Compliance with AI-Driven Automation"
        subheading="EasyAudit is an AI-driven compliance platform that streamlines risk assessment, control generation, and audit management, helping businesses achieve certifications faster."
        color=" #067949"
        secondaryColor="#CFFCE9"
        imageText="Monitoring Concept Screen"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor="#CFFCE9"
            typeTitle="Project Type"
            typeText="Product Design"
            platformsText="Web, Mobile"
            timelineText="Q2 2024 - Ongoing"
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
                I led the UX and design for EasyAudit, creating an intuitive interface that simplifies compliance workflows. 
                The focus was on efficiency, usability, and clarity—helping businesses easily meet regulatory requirements.
              </>
            }
          />
          <Box display="flex" flexDirection="column" gap={6}>
            <FadeIn>
              <Box>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Problem & Approach
                </Typography>
                <Typography variant="body1">
                  Compliance processes are often complex, time-consuming, and prone to errors. Businesses struggle with manual audits, 
                  regulatory tracking, and fragmented compliance tasks—leading to inefficiencies and increased risk.
                  <br />
                  <br />
                  EasyAudit streamlines these workflows with AI-driven automation, control generation, task tracking, 
                  and simplified certification processes, all under one platform.
                </Typography>
              </Box>
            </FadeIn>
            <FadeIn>
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
                    Establishing Brand Appearance & Flow
                  </Typography>
                  <Typography variant="body1">
                    Define a cohesive visual identity and structured workflows to ensure clarity and trust.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Creating Scalable & User-Centered Designs
                  </Typography>
                  <Typography variant="body1">
                    Design for scale, and ensure the experience is prioritizing the user each step of the way.
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Ensuring Compliance & Ethical Standards
                  </Typography>
                  <Typography variant="body1">
                    Integrate accessibility best practices and transparency to align with regulatory requirements.
                  </Typography>
                </Box>
              </Box>
            </FadeIn>
          </Box>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Designing a Brand guide
              </Typography>
              <Typography variant="body1">
                The clients had a clear vision for their brand, including the
                name, colors, and overall aesthetic. With limited time and
                budget, I streamlined the process to deliver a focused and
                effective brand guide aligned with their goals.
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
            src="/v3/EasyAudit/img2.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Defining the Scope
                </Typography>
                <Typography variant="body1">
                  Building EasyAudit meant balancing automation, compliance, and user experience from day one. 
                  The goal was to reduce manual effort, streamline SOC2 compliance, 
                  and create a scalable system that businesses could trust.
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
            src="/v3/EasyAudit/img3.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Questionnaire Flow
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/EasyAudit/img4.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Structuring the Compliance Questionnaire
                </Typography>
                <Typography variant="body1">
                  To automate compliance, we needed a structured way to collect
                  data. I worked with directors to define key inputs and
                  collaborated with developers to ensure flexibility. This led
                  to an adaptive, AI-driven questionnaire that streamlines data
                  collection.
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
              HI-FI Questionnaire Concepts
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/EasyAudit/img5.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Creating the Experience Proposal
                </Typography>
                <Typography variant="body1">
                  With the questionnaire approved, I moved directly into
                  high-fidelity designs, aligning the product experience with
                  stakeholders. Given time and budget constraints, I streamlined
                  the process by skipping wireframes and focusing on refining
                  core interactions.
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
              Phase 2 screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/EasyAudit/img6.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Investor-Backed Growth: Scaling EasyAudit with New
                  Capabilities
                </Typography>
                <Typography variant="body1">
                  Investor approval propelled a major expansion of EasyAudit’s
                  design system, introducing new components, refining workflows,
                  and enhancing automation. This phase advanced the platform
                  beyond its MVP, aligning it with long-term business goals.
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
              Phase 3 Dev-ready screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/EasyAudit/img7.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Phase 3 HI-FI walkthrough & prototypes
            </Typography>
          </Box>
          <video
            src="/v3/EasyAudit/vid8.mp4"
            controls={false}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
            }}
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
            src="/v3/EasyAudit/img9.png"
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
            src="/v3/EasyAudit/img10.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Funding Approval & Next Steps
                </Typography>
                <Typography variant="body1">
                  The strategic design decisions and hands-on execution paid
                  off, securing strong investor interest and unlocking further
                  funding. With this backing, I expanded EasyAudit’s
                  capabilities—introducing key features, refining workflows, and
                  scaling automation to align with long-term business
                  objectives.
                  <br />
                  <br />
                  Now, as I push towards V4, the focus shifts to deepening
                  automation, optimizing usability, and aligning the product
                  with upcoming investor milestones. This next phase will drive
                  even greater impact, scalability, and efficiency in compliance
                  management.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <TeamCommentsCard
        color="#04492C"
        imageURL="/v2/EasyAudit/img19.png"
        imageProps={{
          sx: {
            position: { xs: "relative", md: "absolute" },
            transformOrigin: { xs: "center", md: "top left" },
            transform: {
              xs: "scale(1) translate(10%, 20%)",
              md: "scale(1.5) translate(-10%, 0%)",
            },
            maxHeight: { xs: 300, md: 500 },
          },
        }}
        comments={[
          {
            name: "Aidan Slack-Watkins, CEO/Product Manager",
            comment:
              "Moe played a crucial role in refining our product vision and aligning design with business goals. His ability to quickly iterate on feedback made the process smooth and efficient.",
          },
          {
            name: "Ruben, Backend Developer",
            comment:
              "It was a pleasure to work with Moe—his designs were well-structured, and he always considered technical feasibility, and asked the right questions. It made implementation much easier on my end.",
          },
          {
            name: "Henrik Hey, Frontend Engineer",
            comment:
              "Moe’s attention to detail and understanding of component-based design made frontend integration straightforward. He was always open to collaboration, which really streamlined development.",
          },
        ]}
      />
      <ProjectsNavFooter projects={["afc", "hashmatrix-sharpstakes"]} />
      <Footer />
    </ThemeProvider>
  );
}
