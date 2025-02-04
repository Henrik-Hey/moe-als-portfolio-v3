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
        imageURL="/v2/SOHS/headerImage.png"
        logoString="SOHS"
        heading="Empowering Service Pros with an On-Demand Marketplace"
        subheading="The previous designs lacked accessibility, visual appeal, and polish. This project focused on addressing these shortcomings to create a more refined and user-friendly visual experience."
        color="#742F88"
        secondaryColor="#F2CFFC"
        imageText="Hi-Fidelity concept screens"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor="#F2CFFC"
            typeTitle="Project Type"
            typeText="UI/UX Redesign"
            platformsText="Web, Mobile, iOS"
            timelineText="Q4 2023 - Q2 2024"
            collaboration={
              <>
                Directors
                <br />
                Dev Leads
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
                I spearheaded the redesign of SOHS&apos;s mobile app, achieving
                a boost in user and stakeholder satisfaction, a 12% increase in
                signups and referrals, and reducing average task time by 2.5
                minutes.
                <br />
                <br />
                My work established a strong foundation for the app’s visual
                appeal and consistency, significantly enhancing user engagement.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem
              </Typography>
              <Typography variant="body1">
                SOHS struggled with inconsistent design, making the app feel
                unpolished and harming its reputation. This lack of cohesion
                discouraged user trust and engagement, limiting its potential.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Project Goals
              </Typography>
              <Typography variant="body1">
                The app needed a visual overhaul to align with modern standards
                while adhering to a limited budget. My focus was to maximize
                impact in a short timeframe by addressing these key objectives:
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
                  Addressing Accessibility Issues
                </Typography>
                <Typography variant="body1">
                  Ensuring the app meets modern accessibility standards by
                  updating branding colors to align with WCAG guidelines and
                  making fonts legible and accessible using best practices.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Refining Visual Design
                </Typography>
                <Typography variant="body1">
                  Fixing design errors and applying visual design principles and
                  usability heuristics to elevate the overall experience, clean
                  up inconsistencies, and strengthen the brand’s appeal.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Leveraging Design Systems
                </Typography>
                <Typography variant="body1">
                  Although outside the immediate budget, the foundation for a
                  design system or library was recommended to support
                  componentization, consistency, and easier development.
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
              Pre-design Screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SOHS/projectGoals.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Cleaning up the Brand
                </Typography>
                <Typography variant="body1">
                  The first step of the redesign was to review the existing
                  materials and refine them. I optimized the color palette by
                  introducing new shades of gray, updated the logo to feel more
                  modern and vibrant, and simplified the typography for better
                  readability and a cleaner user experience.
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
            src="/v2/SOHS/styleGuide.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Prioritizing Key Flows for the Redesign
                </Typography>
                <Typography variant="body1">
                  With a limited budget for research, I focused on identifying
                  and implementing high-impact changes that could be achieved in
                  the shortest time. These ideas were outlined in my
                  consultation but needed further refinement and presentation.
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
            src="/v2/SOHS/keyFlowsRedesign.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Designing for Scale
                </Typography>
                <Typography variant="body1">
                  Using the limited information available, I focused on breaking
                  down existing flows and refining the current screens. The goal
                  was to design for scale by optimizing the visuals without
                  introducing significant new functionality or content, ensuring
                  the app could grow while maintaining its core structure.
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
              Pre-design Screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/SOHS/forScale1.png"
          />
        </Box>
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
            src="/v2/SOHS/forScale2.mp4"
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
            src="/v2/SOHS/forScale3.png"
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
            src="/v2/SOHS/forScale4.png"
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
            src="/v2/SOHS/forScale5.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                An Elevated Experience
              </Typography>
              <Typography variant="body1">
                The revamped SOHS experience is built with scalability at its
                core, serving as a foundation for the future web app. The
                redesigned interface ensures users can easily consume and
                understand information by adhering to proper design principles
                and heuristics. Following the consultation and design phase, I
                recommended adopting Material Design for future development and
                componentization, though this is still pending approval.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Impact
              </Typography>
              <Typography variant="body1">
                With a streamlined interface and enhanced functionality, the
                platform saw a notable increase in signups, task efficiency, and
                stakeholder alignment, laying a strong foundation for future
                growth.
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
              <span style={{ color: "#752F88" }}>+23%</span> boost in user and
              stakeholder satisfaction
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
              <span style={{ color: "#752F88" }}>12%</span> Increase in new user
              signups and referrals
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
              Average time on task reduced by{" "}
              <span style={{ color: "#752F88" }}>roughly 2.5 minutes</span>
            </Typography>
          </Box>
        </Box>
      </Container>
      <TeamCommentsCard
        imageURL="/v2/SOHS/teamComments.png"
        color="#752F88"
        imageProps={{
          sx: {
            position: { xs: "relative", md: "absolute" },
            width: "100%",
            minHeight: { xs: "350px", md: "unset" },
            top: { xs: "150px", md: "200px" },
            transform: "scale(2) ",
            marginBottom: "-10px",
            objectFit: "cover",
            objectPosition: "top",
          },
        }}
        comments={[
          {
            name: "Henrik, Lead developer",
            comment:
              "Moe did an excellent job with this redesign. The entire experience feels significantly more consistent, and incorporating pre-made libraries has streamlined the development process. I’m excited to build the web app in the future using these established guidelines!",
          },
          {
            name: "Seif, CEO",
            comment:
              "Moe truly delivered with these new designs. The app feels more polished than ever, and our users are noticeably happier with the improved experience.",
          },
        ]}
      />
      <ProjectsNavFooter projects={["afc", "hashmatrix-sharpstakes"]} />
      <Footer />
    </ThemeProvider>
  );
}
