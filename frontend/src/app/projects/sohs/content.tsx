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

// remove this

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
               I Led the redesign of SOHS’s mobile app, improving usability and visual consistency. 
               Streamlined workflows, increasing signups and referrals by 12% while cutting task time by 2.5 minutes.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem
              </Typography>
              <Typography variant="body1">
                SOHS suffered from inconsistent design, making the app feel unpolished and reducing user trust. 
                This directly impacted engagement and retention, limiting its market potential.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Project Goals
              </Typography>
              <Typography variant="body1">
                The redesign aimed to modernize SOHS while working within strict budget constraints. 
                My focus was to maximize impact efficiently through three key initiatives:
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
                  Improving Accessibility
                </Typography>
                <Typography variant="body1">
                  I updated branding and typography to meet WCAG standards, ensuring better readability and usability.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Refining Visual Design
                </Typography>
                <Typography variant="body1">
                  I fixed inconsistencies, applied usability heuristics, and strengthened the brand’s visual identity.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" mb={2} fontWeight={700}>
                  Introducing a Design System
                </Typography>
                <Typography variant="body1">
                  While outside the immediate budget, I introduced scalable components to improve consistency 
                  and speed up future development.
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
                  Refining the Brand for a Cohesive Experience
                </Typography>
                <Typography variant="body1">
                  Before tackling UX improvements, I addressed the inconsistent branding that made the app 
                  feel disjointed and unpolished. A stronger visual foundation was needed to enhance user trust 
                  and create a more seamless experience.
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
                  With a limited research budget, I focused on high-impact flows that could be improved quickly. 
                  These included service browsing, booking, account management, and user verification—areas critical 
                  to reducing friction and improving engagement.
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
                  I optimized existing flows to support future growth without adding unnecessary complexity. 
                  By refining layouts and visual structures, I ensured the app could scale efficiently 
                  while maintaining usability and consistency.
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
              Initial screens
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
                Impact and Closing Notes
              </Typography>
              <Typography variant="body1">
                I redesigned SOHS with scalability and clarity at its core, ensuring a more intuitive user experience. 
                The updated interface improves usability by following strong design principles and heuristics, 
                setting the foundation for future expansion.
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
