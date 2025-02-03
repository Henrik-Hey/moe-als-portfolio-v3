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
        imageURL="/v2/Openlane/img1.png"
        logoString="Openlane"
        heading="Boosting Engagement by Linking Discovery to Financing"
        subheading="The old approach felt flat. We saw a chance to elevate brand awareness and enhance brand awareness with a sharper, more strategic promotional push."
        color=" #0061FF"
        secondaryColor="linear-gradient(180deg, #E3FCCF 0%, #CFDAFC 100%)"
        imageText="Development ready screens"
      />
      <Container maxWidth="xl">
        <Box mt={6}>
          <ProjectMissionStatement
            backgroundColor="#CFDAFC"
            typeTitle="Project Type"
            typeText="Product Feature UX/UI Redesign"
            platformsText="Web, Tablet, Mobile: IOS, Android"
            timelineText="Q3 2024 - Q1 2025"
            collaboration={
              <>
                Product Managers
                <br />
                Product Owners
                <br />
                Stakeholders <br />
                Technical Directors
                <br />
                Dev Leads
                <br />
                Creative Team
              </>
            }
            roleAndResponsibilitiesText={
              <>
                Lead Product Designer <br />
                <br />
                User Research, Sketching, Wireframing, Visual Design,
                Prototyping, Interaction Design, Dev Handoff
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
                I led the UX and design for OpenLane’s vehicle recommendation
                feature, boosting engagement by 13% and increasing marketplace
                traffic by surfacing relevant inventory at key moments.
                <br />
                <br />
                Through research and iteration, we streamlined discovery and
                improved conversion rates while keeping the experience seamless
                for AFC dealers.
              </>
            }
          />
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Problem
              </Typography>
              <Typography variant="body1">
                AFC dealers often exit the platform after completing
                transactions, resulting in missed opportunities to introduce
                them to Openlane’s marketplace. The challenge was to seamlessly
                integrate relevant vehicle recommendations at the right moment,
                encouraging continued engagement and increasing marketplace
                traffic.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              5W1H
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Openlane/img2.png"
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
            src="/v2/Openlane/img3.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Project Goals
                </Typography>
                <Typography variant="body1">
                  This project focused on refining the recommendation feature
                  and updating the payment interface for better usability.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={2}
          >
            <Box flex={1}>
              <FadeIn>
                <Box>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Interface Overhaul
                  </Typography>
                  <Typography variant="body1">
                    Refining the interface to align with recent feature updates
                    and design improvements.
                  </Typography>
                </Box>
              </FadeIn>
            </Box>
            <Box flex={1}>
              <FadeIn>
                <Box>
                  <Typography variant="body1" mb={2} fontWeight={700}>
                    Optimizing the Recommendation Carousel
                  </Typography>
                  <Typography variant="body1">
                    Strategically placing recommendations to drive engagement
                    without disrupting user flow.
                  </Typography>
                </Box>
              </FadeIn>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          width="100%"
          sx={{
            backgroundColor: "#E5F7D4",
            p: 6,
          }}
        >
          <Box>
            <Typography variant="body2" mb={2} fontWeight={400}>
              Previous Design
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Openlane/img4.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Understanding the Business Need
                </Typography>
                <Typography variant="body1">
                  Before diving in, I worked to clarify the scope—was this a
                  full content overhaul or just a visual refresh? I collaborated
                  with stakeholders and legal teams, aligning on necessary
                  changes and ensuring all legal updates were approved before
                  moving forward.
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
            src="/v2/Openlane/img5.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Approval & Next steps
                </Typography>
                <Typography variant="body1">
                  After reviewing feedback from stakeholders and refining the
                  copy, I mapped out the next steps. Conversations with design
                  peers led me to explore B2B cross-selling strategies to
                  strengthen our approach.
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
            src="/v2/Openlane/img6.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Gen Inspo
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Openlane/img7.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Expanding My Research
                </Typography>
                <Typography variant="body1">
                  Diving deeper into cross-selling, I reviewed past promotional
                  strategies, asked key questions, and explored new scenarios to
                  sharpen our approach.
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
              Brainstorming
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Openlane/img8.png"
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
            src="/v2/Openlane/img9.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Starting the Design Process
                </Typography>
                <Typography variant="body1">
                  With content and approach finalized after many discussions
                  with the business, I focused on presenting it effectively.
                  Given time constraints, I skipped low-fidelity concepts and
                  went straight to high-fidelity designs, leveraging existing
                  AFC components and styles to maintain consistency and
                  efficiency.
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
            src="/v2/Openlane/img10.svg"
          />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <FadeIn>
          <Box my={12}>
            <Typography variant="h3" mb={2} fontWeight={700}>
              Narrowing Down Directions
            </Typography>
            <Typography variant="body1">
              I explored multiple layouts to optimize the payment confirmation
              experience, ensuring clarity and usability. After aligning with
              business goals and user needs, I moved on to refining carousel
              cards and defining interactions for developers.
            </Typography>
          </Box>
        </FadeIn>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              First Round of Designs
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Openlane/img11.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Alt Screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Openlane/img12.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} mt={12}>
          <Box>
            <FadeIn>
              <Box>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Validating the Approach
                </Typography>
                <Typography variant="body1">
                  After presenting the update across AFC & Openlane, I gathered
                  feedback from various teams and stakeholders. Some proposed
                  major changes that didn’t align with user needs, so we decided
                  to conduct a pilot test to collect real user data and ensure
                  the best direction before proceeding.
                </Typography>
              </Box>
            </FadeIn>
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
                color="#1F74FE"
              >
                User Pilot [1 month]
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Across 709 dealerships, here are the most used resolutions
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#1F74FE" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      Insight 1: Most conversions come from desktop, not mobile
                      or tablet. Promotional efforts and resources should
                      prioritize desktop experiences.
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#1F74FE" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      Insight 2: A scroll-based carousel on mobile may be too
                      intrusive. Alternative methods to increase brand awareness
                      should be explored without complicating the user
                      experience.
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
                src="/v2/Openlane/img13.svg"
              />
            </Box>
          </Box>
        </FadeIn>
        <FadeIn>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            my={12}
            gap={12}
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
                color="#1F74FE"
              >
                User Pilot [1 month]
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Conversion rate over 1 month
              </Typography>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v2/Openlane/img14.svg"
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
                color="#1F74FE"
              >
                User Pilot [1 month]
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                User Impressions
              </Typography>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v2/Openlane/img15.svg"
                />
              </Box>
            </Box>
          </Box>
        </FadeIn>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Addressing Feedback & Demand
                </Typography>
                <Typography variant="body1">
                  Testing went as expected, but the business anticipated a
                  higher conversion rate. Frustrations surfaced, especially
                  around my hesitation to move the carousel to the top, which I
                  felt was too intrusive. So, what next?
                  <br />
                  <br />I regrouped with the creative team, explored alternative
                  solutions, and refined the designs to align with business
                  needs. This update delivered exactly what was requested,
                  without sacrificing the user experience entirely.
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
              Second round of designs & Additional conversion points
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Openlane/img16.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box pb={2}>
          <Typography variant="body2" fontWeight={400} fontSize={14}>
            Device Mockups
          </Typography>
        </Box>
        <Box width="100%" mb={12}>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v2/Openlane/img17.png"
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
            src="/v2/Openlane/img18.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} mt={12}>
          <Box>
            <FadeIn>
              <Box>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Final Impressions & Impact
                </Typography>
                <Typography variant="body1">
                  The user pilot provided key insights into engagement and
                  conversion behaviors. Click-through rates increased, and while
                  signups improved, the data suggested further refinements could
                  drive even stronger results. User sentiment remained mostly
                  positive, confirming the design was effective without being
                  overly intrusive.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <FadeIn>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            my={12}
            gap={12}
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
                color="#1F74FE"
              >
                User Pilot [3 months]
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Conversion rate
              </Typography>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v2/Openlane/img19.svg"
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
                color="#1F74FE"
              >
                User Pilot [3 month]
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                User Impressions
              </Typography>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v2/Openlane/img20.svg"
                />
              </Box>
            </Box>
          </Box>
        </FadeIn>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2}>
          <Box>
            <FadeIn>
              <Box>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Impact
                </Typography>
                <Typography variant="body1">
                  The updated experience led to higher visibility and
                  interaction, aligning business goals with user behavior. The
                  structured approach—iterative design, testing, and stakeholder
                  collaboration—proved valuable in optimizing conversions while
                  maintaining a seamless experience. These findings will guide
                  future enhancements and further opportunities for growth.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <FadeIn>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            mt={12}
            mb={6}
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
                color="#1F74FE"
              >
                Reviews
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                How’s your experience with the new updated interface and
                experience?
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#1F74FE" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “The new recommendation feature feels intuitive. It adds
                      value without disrupting the experience, and we’re already
                      seeing better engagement numbers.”
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#1F74FE" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      “I wasn’t sure about the recommendations at first, but
                      they actually surfaced some interesting options I wouldn’t
                      have found otherwise. It’s a smart addition.”
                    </Typography>
                  </Box>
                </Box>
              </Typography>
            </Box>
            <Box flex={1} minHeight={500} overflow="hidden">
              <img
                alt=""
                role="presentation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  transformOrigin: "top left",
                  transform: "scale(2) translate(-5%, 5%)",
                }}
                src="/v2/Openlane/img21.png"
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
