/* eslint-disable @next/next/no-img-element */
"use client";

import { baseTheme, darkTheme, palette } from "@/theme";
import {
  Box,
  Container,
  Divider,
  Grid,
  ScopedCssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ProjectHeader } from "@/components/projectHeader/projectHeader";
import { ProjectMissionStatement } from "@/components/projectMissionStatement/projectMissionStatement";
import { ProjectStatement } from "@/components/projectStatement/projectStatement";
import { PinScrollImages } from "@/components/pinScrollImages/pinScrollImages";
import { ProjectUserStory } from "@/components/projectUserStory/projectUserStory";
import { ProjectNote } from "@/components/projectNote/projectNote";
import { FooterDark } from "@/components/footer/footerDark";

const SCROLL_BLOCK_1_IMAGE_PATHS = [
  "/project_page_res/afc/scroll1/image1.png",
  "/project_page_res/afc/scroll1/image2.png",
  "/project_page_res/afc/scroll1/image3.png",
  "/project_page_res/afc/scroll1/image4.png",
  "/project_page_res/afc/scroll1/image5.png",
  "/project_page_res/afc/scroll1/image6.png",
];

const SCROLL_BLOCK_2_IMAGE_PATHS = [
  "/project_page_res/afc/scroll2/image1.png",
  "/project_page_res/afc/scroll2/image2.png",
];

const SCROLL_BLOCK_3_IMAGE_PATHS = [
  "/project_page_res/afc/scroll3/image1.png",
  "/project_page_res/afc/scroll3/image2.png",
  "/project_page_res/afc/scroll3/image3.png",
  "/project_page_res/afc/scroll3/image4.png",
];

const SCROLL_BLOCK_4_IMAGE_PATHS = [
  "/project_page_res/afc/scroll4/image1.png",
  "/project_page_res/afc/scroll4/image2.png",
  "/project_page_res/afc/scroll4/image3.png",
];

const SCROLL_BLOCK_5_IMAGE_PATHS = [
  "/project_page_res/afc/scroll5/image1.png",
  "/project_page_res/afc/scroll5/image2.png",
  "/project_page_res/afc/scroll5/image3.png",
  "/project_page_res/afc/scroll5/image4.png",
  "/project_page_res/afc/scroll5/image5.png",
  "/project_page_res/afc/scroll5/image6.png",
];

const SCROLL_BLOCK_6_IMAGE_PATHS = [
  "/project_page_res/afc/scroll9/image1.png",
  "/project_page_res/afc/scroll9/image2.png",
  "/project_page_res/afc/scroll9/image3.png",
  "/project_page_res/afc/scroll9/image4.png",
  "/project_page_res/afc/scroll9/image5.png",
  "/project_page_res/afc/scroll9/image6.png",
  "/project_page_res/afc/scroll9/image7.png",
  "/project_page_res/afc/scroll9/image8.png",
  "/project_page_res/afc/scroll9/image9.png",
];

export default function AFC() {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ProjectHeader
        imageURL="/project_page_res/afc/backdrop.jpg"
        logoImage={
          <img src="/project_page_res/afc/logo.svg" alt="" width="168" />
        }
        heading="Creating the ultimate Asian cuisine delivery app"
        subheading="Crafting Convenience for Busy Young Adults."
      />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <ProjectMissionStatement
            typeTitle="case study type"
            typeText="Bootcamp Project"
            roleAndResponsibilitiesText="Sketching, User Research, Wireframing, Visual Design, Prototyping, User Testing, Interaction Design, Brand Creation."
            platformsText="Mobile"
            timelineText="Q1 2022 - Q2 2022"
          />
          <ProjectStatement
            content={
              <>
                I dedicated my efforts to improving user experience, promoting
                effective design practices, and streamlining the user journey.
                This involved addressing the design, strategy, and testing
                phases of the NAP flooring process, a pivotal element within
                AFC&apos;s dealer and business applications.
                <br />
                <br />
                Specifically focusing on the outdated NAP Input, my goal is to
                modernize and revamp various elements and processes. I aim to
                clean up the user journey, elevate accessibility standards, and
                create an overall enhanced experience for anyone using AFCD,
                whether they are new or returning users.
              </>
            }
          />
          <Box>
            <Typography
              variant="h3"
              mb={2}
              fontWeight={700}
              textTransform="uppercase"
            >
              problem
            </Typography>
            <Typography variant="body1">
              AFC, as a brand, is currently navigating a unique challenge. While
              our marketing applications stay up-to-date, and a committed team
              consistently enhances accessibility and usability on
              autofinance.com, our business application, AFC Dealer, has not
              received the attention it warrants. As the sole product designer
              brought in, I encountered a user interface grappling with
              substantial issues, especially in terms of accessibility, and the
              design presented as outdated and uninspiring. It is imperative for
              AFCD to harmonize with the standards established by
              autofinance.com and actively pursue enhancements.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              mb={2}
              fontWeight={700}
              textTransform="uppercase"
            >
              redesign key drivers
            </Typography>
            <Typography variant="body1">
              Insufficient attention has been given to dealers handling NAPs.
              The previous procedure lacked clarity, accessibility, and failed
              to meet WCAG standards. The focus now is on implementing
              data-driven modifications, incorporating user feedback, and
              aligning with industry trends and competitor practices. This
              serves as an initial step for AFCD&apos;s improvement, crucial for
              establishing a foundation for upcoming features.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={{ xs: 12, md: 2 }}
          >
            <Box flex={1}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                Modernize and adapt
              </Typography>
              <Typography variant="body1">
                AFCD has successfully met the needs of traditional dealers, but
                it encounters issues with an outdated interface for newer users.
                The current strategy involves integrating contemporary web
                elements and modern UX trends, aiming to position AFCD as a
                cutting-edge application that caters to both established and
                emerging demographics.
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                accessibility & responsiveness
              </Typography>
              <Typography variant="body1">
                Ensuring inclusivity and adaptability, accessibility and
                responsiveness are pivotal to our user experience. Despite
                challenges, my goal is to enhance both aspects by incorporating
                intuitive navigation, device compatibility, and adhering to
                accessibility standards. Embracing human design and user
                feedback, I aim to create a better platform for all users.
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                simplifying the journey
              </Typography>
              <Typography variant="body1">
                While AFCD exhibits minor issues across the entire application,
                the section dedicated to flooring NAPS stands out with glaring
                errors. My objective is to rectify these issues by grouping
                similar elements, employing proper hierarchy and white space
                practices, and ensuring clarity for the user at every stage of
                their interaction.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <PinScrollImages
        bottomCaption={
          <>
            <b>Pre-redesign</b> screenshots and related material for AFCDs unit
            flooring process
          </>
        }
        containerHeight="300vh"
        items={SCROLL_BLOCK_1_IMAGE_PATHS.map((url, index) => (
          <img src={url} alt="" height="100%" key={index} />
        ))}
      />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <Box>
            <Box mb={8}>
              <Typography
                variant="h3"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                should a change be made?
              </Typography>
              <Typography variant="body1">
                AFC has long followed a traditional approach, conducting
                in-person dealings with dealers and maintaining multiple
                locations across North America, a model that has thrived for
                over two decades. However, in the era of technological
                advancement, new opportunities have emerged, prompting many of
                AFC&apos;s competitors to innovate. NextGear is a notable
                example, embracing a similar business model with a key
                distinction — they interact with dealers and users exclusively
                through web and mobile platforms, eliminating the need for
                physical locations.
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap={6}>
              <Box>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  fontWeight={700}
                  mb={1.5}
                >
                  Why this works so well
                </Typography>
                <Typography variant="body1">
                  NextGear doesn&apos;t have to oversee branches or handle
                  in-person applications, giving them a more substantial budget
                  to invest in developing an app that aligns with current
                  accessibility standards and boasts a contemporary design.
                  Their focus isn&apos;t on the traditional demographic that AFC
                  consistently engages with; instead, they aim to tap into the
                  newer generation of dealers. Crafting modern, accessible, and
                  visually appealing apps is a strategic move that aligns with
                  this objective.
                </Typography>
              </Box>
              <iframe
                width="100%"
                style={{
                  height: "50vh",
                  border: "none",
                  borderRadius: 8,
                }}
                src="https://www.youtube.com/embed/sJV1vViiGU8?si=29RzoHwHdw7JQnL5"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
          <Box>
            <Box mb={8}>
              <Typography
                variant="h3"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                finding the why behind it all
              </Typography>
              <Typography variant="body1">
                Ultimately, I wanted to get a better idea on what made our
                dealers tick, were they okay with the outdated interfaces, maybe
                they were afraid of change and didn’t want to be presented with
                a new product. What could I shift around without destroying the
                balance that has been set for decades before I arrived. I
                planned two research methods and went to work.
              </Typography>
            </Box>
            <Box
              mb={6}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={2}
            >
              <Box flex={1}>
                <Typography variant="body1" textTransform="uppercase" mb={1.5}>
                  Method 1: <br />
                  <b>Qualitative & quantitative data</b>
                </Typography>
                <Typography variant="body1">
                  I conducted and organized several interviews, gathering data
                  through surveys and questionnaires to comprehend the
                  sentiments of branch members, assess their day-to-day
                  interactions with dealers, and gauge their perceptions of
                  AFC&apos;s dealer-facing application.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="body1" textTransform="uppercase" mb={1.5}>
                  Method 2: <br />
                  <b>competitive analysis</b>
                </Typography>
                <Typography variant="body1">
                  I explored the market where AFC has excelled, consulting with
                  my managers and product owners to gain a deeper comprehension
                  of the competitors AFC identifies and those from whom we seek
                  to glean insights.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box mb={2}>
                <ProjectStatement
                  content={
                    <>
                      “We aim to retain our older demographic, requiring user
                      interfaces that aren&apos;t overly complex.
                      Simultaneously, we aspire to compete with NextGear for the
                      business of the newer generation of dealers.”
                    </>
                  }
                />
              </Box>
              <Typography variant="body1">
                This quote served as the central premise for much of the
                research presented below. Striking the right balance was
                challenging because we sought improved systems while
                encountering resistance from our older users who preferred
                handling business through phone calls. This presented an
                additional challenge affecting both our business and operational
                costs.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline>
          <Container maxWidth="md">
            <Box pt={6} pb={12}>
              <Typography
                variant="h3"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                finding the why behind it all
              </Typography>
              <Typography variant="body1">
                Ultimately, I wanted to get a better idea on what made our
                dealers tick, were they okay with the outdated interfaces, maybe
                they were afraid of change and didn’t want to be presented with
                a new product. What could I shift around without destroying the
                balance that has been set for decades before I arrived. I
                planned two research methods and went to work.
              </Typography>
            </Box>
          </Container>
          <PinScrollImages
            containerHeight="300vh"
            items={SCROLL_BLOCK_2_IMAGE_PATHS.map((url, index) => (
              <img src={url} alt="" height="100%" key={index} />
            ))}
          />
          <Container maxWidth="md">
            <Box my={12}>
              <Typography
                variant="h3"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                Creating a temporary design system
              </Typography>
              <Typography variant="body1">
                Although AFC&apos;s branding established a foundation for fonts
                and colors, a comprehensive system with pre-set components and
                styles for design construction was notably absent. This meant I
                had to begin designing from scratch.
                <br />
                The challenge extended to the development team, who had to
                implement my designs afresh for each project. In response, I
                opted to develop a temporary but efficient design system,
                leveraging knowledge acquired from accessibility and design
                system courses I had completed.
              </Typography>
            </Box>
          </Container>
          <Box
            display={{
              xs: "block",
              sm: "block",
              md: "none",
            }}
          >
            <PinScrollImages
              containerHeight="200vh"
              items={[
                <img src="/project_page_res/afc/palette.svg" alt="" key={0} />,
              ]}
            />
          </Box>
          <Box
            display={{
              xs: "none",
              sm: "none",
              md: "block",
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <img src="/project_page_res/afc/palette.svg" alt="" key={0} />
            </Box>
          </Box>
          <PinScrollImages
            bottomCaption={
              <>
                (1) Typography guide (2) Layout grid
                <br />
                (3) Drop shadow styles
              </>
            }
            containerHeight="300vh"
            items={SCROLL_BLOCK_3_IMAGE_PATHS.map((url, index) => (
              <img src={url} alt="" height="100%" key={index} />
            ))}
          />
          <PinScrollImages
            bottomCaption={<>(1) Button Styles (2,3) Input Fields</>}
            containerHeight="300vh"
            items={SCROLL_BLOCK_4_IMAGE_PATHS.map((url, index) => (
              <img src={url} alt="" height="100%" key={index} />
            ))}
          />
          <Container maxWidth="md">
            <Box my={12}>
              <Typography
                variant="h3"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                Putting in the hours
              </Typography>
              <Typography variant="body1">
                Practically speaking, I had all the essential elements to
                commence the project – a robust system, wireframes, and valuable
                feedback from peers, managers, and stakeholders. The remaining
                tasks included fine-tuning, engaging in iterative exchanges with
                the development team, and collaborating with various users and
                branch personnel.
                <br />
                Fortunately, I won&apos;t delve into months of meeting notes,
                calls, interviews, and fixes. Instead, here&apos;s the
                conclusive set of changes. Thanks for sticking around!
              </Typography>
            </Box>
          </Container>
          <Box>
            <Box component="video" autoPlay muted loop width="100%">
              <source
                src={"/project_page_res/afc/videos/video1.mp4"}
                type="video/mp4"
              />
            </Box>
            <Box mt={-1}>
              <PinScrollImages
                containerBackground="url(/project_page_res/afc/backroundscroll5.png)"
                containerHeight="300vh"
                items={SCROLL_BLOCK_5_IMAGE_PATHS.map((url, index) => (
                  <img src={url} alt="" height="100%" key={index} />
                ))}
                topCaption={
                  <>
                    <Box mb={6}></Box>
                  </>
                }
                bottomCaption={
                  <>
                    <Box
                      px={6}
                      py={1}
                      mb={6}
                      sx={{
                        background: "rgba(30, 30, 30, 0.40)",
                      }}
                    >
                      <Typography
                        variant="body1"
                        color={palette.neutral[200]}
                        fontStyle="italic"
                        textAlign="center"
                        width="100%"
                      >
                        Finalized Screens Desktop US - Currently only showcasing
                        filled states to reduce the amount of content repetition{" "}
                        <br />
                        Alt button style
                      </Typography>
                    </Box>
                  </>
                }
              />
            </Box>
            <Box component="video" autoPlay muted loop width="100%">
              <source
                src={"/project_page_res/afc/videos/video2.mp4"}
                type="video/mp4"
              />
            </Box>
            <Box mt={-1}>
              <PinScrollImages
                containerBackground="url(/project_page_res/afc/backroundscroll6.png)"
                containerHeight="300vh"
                items={SCROLL_BLOCK_5_IMAGE_PATHS.map((url, index) => (
                  <img src={url} alt="" height="100%" key={index} />
                ))}
                topCaption={
                  <>
                    <Box mb={6}></Box>
                  </>
                }
                bottomCaption={
                  <>
                    <Box
                      px={6}
                      py={1}
                      mb={6}
                      sx={{
                        background: "rgba(30, 30, 30, 0.40)",
                      }}
                    >
                      <Typography
                        variant="body1"
                        color={palette.neutral[200]}
                        fontStyle="italic"
                        textAlign="center"
                        width="100%"
                      >
                        Finalized Screens Mobile US - Currently only showcasing
                        filled states to reduce the amount of content repetition
                        <br />
                        Alt button style
                      </Typography>
                    </Box>
                  </>
                }
              />
            </Box>
          </Box>
          <Container maxWidth="md">
            <Box my={12}>
              <Typography
                variant="h3"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                closing NOTES & Bonus data:
              </Typography>
              <Typography variant="body1">
                This enhanced interface bridges the gap between AFC and NG,
                preserving much of the previous functionality while
                significantly enhancing accessibility and modernity. Extensively
                tested and refined through feedback from diverse users,
                stakeholders, product owners, and managers, this layout
                effectively addresses the fundamental issues identified earlier
                in the project. <br />
                Marking a significant milestone, future designs will be based on
                this style, incorporating elements specifically crafted for this
                project. Despite months of dedicated effort, the result is an
                improved AFC product, better tailored to the needs of our users.{" "}
                <br />
                Below, you&apos;ll find a summary of data reflecting the updated
                layout&apos;s impact on user and branch personnel sentiments.
              </Typography>
            </Box>
          </Container>
          <FooterDark />
        </ScopedCssBaseline>
      </ThemeProvider>
    </ThemeProvider>
  );
}
