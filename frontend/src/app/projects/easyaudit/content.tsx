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
        imageURL="/v2/EasyAudit/img1.png"
        logoString="EasyAudit"
        heading="Transforming Compliance with a Smarter Audit Process."
        subheading="EasyAudit offers an AI-powered platform that automates the compliance process, helping businesses achieve SOC 2 certification more efficiently."
        color=" #067949"
        secondaryColor="#CFFCE9"
        imageText="Document Management Concept Screen"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor="#CFFCE9"
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
                I led the design and UX for EasyAudit, crafting an intuitive
                interface to simplify compliance processes. This project focuses
                on efficiency and usability to support businesses in achieving
                their compliance goals.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Project Goals
              </Typography>
              <Typography variant="body1">
                The objective was to create a compliance platform from the
                ground up, blending brand identity, seamless user experience,
                and adherence to regulatory standards. The design needed to
                balance scalability, user-centricity, and clarity while meeting
                business needs and compliance requirements.
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
                  Establishing Brand & Flow
                </Typography>
                <Typography variant="body1">
                  Define the brand identity and foundational workflows to align
                  design and functionality with user needs.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Scalability & User-Centered Design
                </Typography>
                <Typography variant="body1">
                  Design for scale, and ensure the experience is prioritizing
                  the user each step of the way.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Compliance & Clarity
                </Typography>
                <Typography variant="body1">
                  Meet regulatory standards while delivering a clear,
                  trustworthy platform.
                </Typography>
              </Box>
            </Box>
          </FadeIn>
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
            src="/v2/EasyAudit/img2.svg"
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
                  Building EasyAudit meant balancing automation, compliance, and
                  user experience from day one. The goal was to create a
                  seamless, scalable platform that simplifies SOC2 compliance
                  while maintaining clarity and regulatory trust.
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
            src="/v2/EasyAudit/img3.png"
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
            src="/v2/EasyAudit/img4.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Creating the Questionnaire
                </Typography>
                <Typography variant="body1">
                  With the foundation in place, I worked with directors and
                  product owners to define the data we need to collect while
                  collaborating with developers to assess flexibility and
                  funding constraints for framework implementation.
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
              V1 Questionnaire
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img5.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              V2 Questionnaire - After stakeholder comments and new requirements
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img6.svg"
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
                  With the questionnaire approved for the MVP, my next task was
                  aligning on the full product experience with stakeholders.
                  Time and budget constraints meant skipping wireframes and
                  jumping straight into high-fidelity designs.
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
              Required Proposal Pages (Requested by owners)
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img7.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              V3 Questionnaire - Some adjustments and flows were changed after
              the proposal to align better with investor requests
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img8.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Refining Designs for Investors
                </Typography>
                <Typography variant="body1">
                  After extensive design work and collaboration, we aligned on a
                  clear direction for the product showcase. With refined
                  business requirements, I streamlined flows and polished
                  designs to prepare for investor demos.
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
              Dev ready showcase flow (web)
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img9.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Dev ready showcase flow (Mobile)
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img10.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              HI-FI Showcase mockups
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img11.png"
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
            src="/v2/EasyAudit/img12.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <FadeIn>
          <Box mt={12} mb={4}>
            <Typography variant="h3" mb={2} fontWeight={700}>
              Shifting Focus
            </Typography>
            <Typography variant="body1">
              With the product in good standing, I shifted my focus to creating
              a landing page that conveyed EasyAudit’s value. This would be used
              for any investor meetings, online and In-person promotions. It was
              a key piece to helping people understand EasyAudit’s value. Here’s
              what was required:
            </Typography>
          </Box>
        </FadeIn>
        <FadeIn>
          <Box
            display="flex"
            mb={12}
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={{ xs: 2, md: 2 }}
          >
            <Box flex={1}>
              <Typography variant="body1" mb={2} fontWeight={700}>
                Must Use Provided Copy
              </Typography>
              <Typography variant="body1">
                The owners and marketing team supplied the copy, optimized for
                SEO. This meant working within structured content constraints.
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography variant="body1" mb={2} fontWeight={700}>
                Must Be Webflow-Transferable
              </Typography>
              <Typography variant="body1">
                To ensure seamless integration with Webflow, the design followed
                strict guidelines, requiring expertise in Autolayout for proper
                handoff.
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography variant="body1" mb={2} fontWeight={700}>
                Must Include Specific Screenshots
              </Typography>
              <Typography variant="body1">
                The marketing team required specific screenshots to be used,
                ensuring consistency and alignment with brand messaging.
              </Typography>
            </Box>
          </Box>
        </FadeIn>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              V1: No wireframing, Inspo, and approach was specified by marketing
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img13.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              V2 - A few rounds of feedback later, some content was cut out and
              design contrast was updated to be easier on the eyes
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img14.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              HI-FI Showcase mockups
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/EasyAudit/img15.png"
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
            src="/v2/EasyAudit/img16.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} mt={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Funding Approval & Next Steps
                </Typography>
                <Typography variant="body1">
                  The hard work and hours paid off, we had some serious interest
                  generating and the owners decided to invest more into this
                  project. We started looking at competitiors, and we started
                  adding some new ideas to the board. I am currently working on
                  V3 and I look forward to highlighting its impact and sharing
                  success stories from our users in the near future. Thank you
                  for reading through this!
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
            src="/v2/EasyAudit/img17.svg"
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
            src="/v2/EasyAudit/img18.png"
          />
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
