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
        imageURL="/v3/Openlane/img1.png"
        logoString="Openlane"
        heading="Boosting Engagement by Linking Discovery to Financing"
        subheading="The existing financing flow lacked visibility and engagement. We aimed to create a seamless connection between vehicle discovery and financing to improve conversions and user retention."
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
                I led the UX and design for Openlane’s recommendation system,
                boosting engagement by 13% and driving marketplace traffic by
                surfacing relevant inventory at key decision points.
                <br />
                <br />
                Research and iteration led to optimized discovery flows,
                personalized recommendations, and higher conversion rates for
                AFC dealers.
              </>
            }
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={12} sx={{ background: "#E5F7D4" }}>
          <Box pb={2} pt={6} px={6}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Original Design
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img2.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <FadeIn>
          <Box my={12}>
            <Typography variant="h3" mb={2} fontWeight={700}>
              Problem
            </Typography>
            <Typography variant="body1">
              AFC dealers completed transactions and left the platform, missing
              opportunities to engage with Openlane’s marketplace. This resulted
              in missed opportunities for Openlane to showcase relevant
              inventory, reducing potential revenue and retention.
              <br />
              <br />
              To uncover root causes and missed opportunities, I broke the
              problem down using the 5W1H framework.
            </Typography>
          </Box>
        </FadeIn>
      </Container>

      <Container maxWidth="xl">
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Breaking Down the Problem with the 5W1H Framework
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img3.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <FadeIn>
            <Box>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Clarifying the Scope & Business Alignment
              </Typography>
              <Typography variant="body1">
                With the problem clearly defined, I worked cross-functionally to
                align scope—clarifying whether this was a content overhaul or a
                visual refresh while ensuring legal compliance and business
                goals were met.
              </Typography>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Copy review
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img4.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Researching Cross-Selling Insights
                </Typography>
                <Typography variant="body1">
                  I analyzed how leading B2B platforms drive cross-selling,
                  applying key strategies to enhance our recommendation model.
                  These insights informed how we seamlessly integrated vehicle
                  recommendations, ensuring relevance without disrupting
                  transactions.
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
              Research summary
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img5.png"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Mood boarding
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img6.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Designing the Payment Confirmation Screen
                </Typography>
                <Typography variant="body1">
                  With research complete, I worked on updating the structure and
                  components across the mobile and web layouts.
                </Typography>
              </Box>
            </FadeIn>
          </Box>
        </Box>
      </Container>
      {/* <Container maxWidth="xl">
        <Box width="100%" mb={6}>
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Wireframes
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img7.png"
          />
        </Box>
      </Container> */}
      <Container maxWidth="xl">
        <Box width="100%">
          <Box pb={2}>
            <Typography variant="body2" fontWeight={400} fontSize={14}>
              Dev-ready screens
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img8.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} my={12}>
          <Box>
            <FadeIn>
              <Box mb={2}>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Testing the Live Designs
                </Typography>
                <Typography variant="body1">
                  After deploying the updated design to a test group, I analyzed
                  pilot test data to evaluate engagement and usability.
                  Stakeholders raised concerns about layout effectiveness and
                  the results guided discussions on potential refinements.
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
                Pilot Test Results Over 1 Month
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
                      Desktop Leads Conversions: 93% of dealers transacted on
                      desktop, reinforcing it as the priority platform.
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#1F74FE" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      Mobile Usability Issue: Dealers found scroll-based
                      carousels intrusive. Future iterations should explore less
                      disruptive engagement methods.
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
                src="/v3/Openlane/img9.svg"
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
              <Typography variant="h3" mb={2} fontWeight={700}>
                Evaluating dealer
                <br /> engagement over 1st pilot
              </Typography>
              <Box mb={2} display="flex">
                <Typography variant="body1" color="#1F74FE" mr={1}>
                  &gt;
                </Typography>
                <Typography variant="body1">
                  Low engagement rates indicated friction in the signup process,
                  reinforcing the need for a more seamless experience.
                </Typography>
              </Box>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v3/Openlane/img10.svg"
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
              <Typography variant="h3" mb={2} fontWeight={700}>
                Evaluating dealer reactions
                <br /> over 1st pilot
              </Typography>
              <Box mb={2} display="flex">
                <Typography variant="body1" color="#1F74FE" mr={1}>
                  &gt;
                </Typography>
                <Typography variant="body1">
                  With 52% positive feedback, sentiment was largely neutral or
                  favorable. Negative responses highlighted concerns with layout
                  usability.
                </Typography>
              </Box>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v3/Openlane/img11.svg"
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
                  Balancing Business Needs & User Experience
                </Typography>
                <Typography variant="body1">
                  Testing confirmed the design&apos;s usability, but the
                  business expected higher conversion rates. A key point of
                  contention was the carousel placement—stakeholders pushed for
                  a more prominent position, while I identified potential UX
                  risks with an intrusive layout.
                  <br />
                  <br />
                  To balance business goals with user needs, I led a structured
                  design iteration—collaborating with the creative team to
                  evaluate alternative placements that preserved engagement
                  without disrupting usability. The final design satisfied
                  stakeholders while maintaining a seamless payment confirmation
                  experience, proving that conversion goals and UX can coexist.
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
              Revised designs using a more streamlined card formation, and
              additional conversion opportunities
            </Typography>
          </Box>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img12.svg"
          />
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box pb={2}>
          <Typography variant="body2" fontWeight={400} fontSize={14}>
            Device Mockups
          </Typography>
        </Box>
        <Box width="100%" mb={6}>
          <img
            alt=""
            role="presentation"
            style={{
              width: "100%",
            }}
            src="/v3/Openlane/img13.png"
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
            src="/v3/Openlane/img14.png"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={2} mt={12}>
          <Box>
            <FadeIn>
              <Box>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Final Results: Validating the Design & Driving Engagement
                </Typography>
                <Typography variant="body1">
                  The pilot study confirmed the effectiveness of the redesign,
                  with higher click-through rates, increased signups, and
                  positive sentiment from users. However, feedback also
                  highlighted friction in the signup process and concerns around
                  mobile usability, informing future improvements.
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
                Pilot Test Results Over 3 Months
              </Typography>
              <Typography variant="h3" mb={2} fontWeight={700}>
                Across 2345 dealerships, here are the dealer usage patterns
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column">
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#1F74FE" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      Desktop Dominates Transactions: 90% of users completed
                      transactions on desktop, reinforcing its importance as the
                      primary design focus.
                    </Typography>
                  </Box>
                  <Box mb={2} display="flex">
                    <Typography variant="body1" color="#1F74FE" mr={1}>
                      &gt;
                    </Typography>
                    <Typography variant="body1">
                      Minimal Mobile Usage (7%): While adoption remains low,
                      non-scroll alternatives received positive feedback,
                      suggesting opportunities for future mobile optimizations.
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
                src="/v3/Openlane/img15.svg"
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
              <Typography variant="h3" mb={2} fontWeight={700}>
                Evaluating dealer
                <br /> engagement over 2nd pilot
              </Typography>
              <Box mb={2} display="flex">
                <Typography variant="body1" color="#1F74FE" mr={1}>
                  &gt;
                </Typography>
                <Typography variant="body1">
                  Increased Click-Through Rates (21%): More users engaged with
                  recommendations, signaling improved visibility.
                </Typography>
              </Box>
              <Box mb={2} display="flex">
                <Typography variant="body1" color="#1F74FE" mr={1}>
                  &gt;
                </Typography>
                <Typography variant="body1">
                  Signup Drop-Off (6.3%): While more users clicked, friction in
                  the signup process led to fewer conversions—indicating the
                  need for further streamlining.
                </Typography>
              </Box>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v3/Openlane/img16.svg"
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
              <Typography variant="h3" mb={2} fontWeight={700}>
                Evaluating dealer reactions
                <br /> over 2nd pilot
              </Typography>
              <Box mb={2} display="flex">
                <Typography variant="body1" color="#1F74FE" mr={1}>
                  &gt;
                </Typography>
                <Typography variant="body1">
                  60% Positive Sentiment: Majority of dealers found the new
                  design intuitive, with improved discoverability of inventory
                  recommendations.
                </Typography>
              </Box>
              <Box mb={2} display="flex">
                <Typography variant="body1" color="#1F74FE" mr={1}>
                  &gt;
                </Typography>
                <Typography variant="body1">
                  7% Negative Sentiment: Some users found layout changes
                  intrusive, highlighting the need for more adaptable user
                  controls for a smoother experience.
                </Typography>
              </Box>
              <Box flex={1} minHeight={500} p={6} overflow="hidden">
                <img
                  alt=""
                  role="presentation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src="/v3/Openlane/img18.svg"
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
                  The redesigned experience improved engagement and visibility,
                  ensuring business objectives aligned with user behavior. By
                  applying an iterative, research-driven approach, I helped
                  refine recommendation placement within the payment
                  confirmation screen, balancing conversion goals with
                  usability. These insights directly informed future design
                  iterations, positioning the product for continued growth.
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
