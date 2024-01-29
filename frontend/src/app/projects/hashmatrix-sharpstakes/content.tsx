/* eslint-disable @next/next/no-img-element */
"use client";

import { palette, useBaseTheme, useDarkTheme } from "@/theme";
import {
  Box,
  Container,
  ScopedCssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ProjectHeader } from "@/components/projectHeader/projectHeader";
import { ProjectMissionStatement } from "@/components/projectMissionStatement/projectMissionStatement";
import { ProjectStatement } from "@/components/projectStatement/projectStatement";
import { PinScrollImages } from "@/components/pinScrollImages/pinScrollImages";
import { FooterDark } from "@/components/footer/footerDark";
import { ProjectsNavFooter } from "@/components/projectsNavFooter/projectsNavFooter";
import FadeIn from "@/components/fadeIn/fadeIn";

const SCROLL_BLOCK_1_IMAGE_PATHS = [
  "/project_page_res/hashmatrix/sharpstakes/scroll1/image1.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll1/image2.gif",
  "/project_page_res/hashmatrix/sharpstakes/scroll1/image3.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll1/image4.gif",
  "/project_page_res/hashmatrix/sharpstakes/scroll1/image5.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll1/image6.gif",
  "/project_page_res/hashmatrix/sharpstakes/scroll1/image7.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll1/image8.gif",
];

const SCROLL_BLOCK_2_IMAGE_PATHS = [
  "/project_page_res/hashmatrix/sharpstakes/scroll2/image1.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll2/image2.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll2/image3.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll2/image4.png",
];

const SCROLL_BLOCK_3_IMAGE_PATHS = [
  "/project_page_res/hashmatrix/sharpstakes/scroll3/image1.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll3/image2.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll3/image3.png",
];

const SCROLL_BLOCK_4_IMAGE_PATHS = [
  "/project_page_res/hashmatrix/sharpstakes/scroll4/image1.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll4/image2.gif",
  "/project_page_res/hashmatrix/sharpstakes/scroll4/image3.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll4/image4.gif",
  "/project_page_res/hashmatrix/sharpstakes/scroll4/image5.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll4/image6.gif",
  "/project_page_res/hashmatrix/sharpstakes/scroll4/image7.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll4/image8.gif",
];

const SCROLL_BLOCK_5_IMAGE_PATHS = [
  "/project_page_res/hashmatrix/sharpstakes/scroll5/image1.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll5/image2.png",
  "/project_page_res/hashmatrix/sharpstakes/scroll5/image3.png",
];

export default function Content() {
  const baseTheme = useBaseTheme();
  const darkTheme = useDarkTheme();

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ProjectHeader
        imageURL="/project_page_res/hashmatrix/sharpstakes/backdrop.jpg"
        logoImage={
          <img
            src="/project_page_res/hashmatrix/sharpstakes/logo.png"
            alt=""
            width="214px"
          />
        }
        heading="Reimagining design systems, interfaces, and enhancing product sustainability."
        subheading="Enabling users through accessible and intelligent design choices."
      />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <ProjectMissionStatement
            typeTitle="Project TYPE"
            typeText="Major Feature"
            roleAndResponsibilitiesText="Sketching, User Research, Wireframing, Visual Design, Prototyping, User Testing, Interaction Design"
            platformsText="Web, Tablet, Mobile: IOS, Android"
            timelineText="Q2 2022 - Ongoing"
          />
          <ProjectStatement content="Improving user engagement and fostering business growth, I spearheaded the strategy, design, and testing phases of SharpStakes, a distinctive AI-powered betting solution. My goal was to create a user-friendly product that spurred expansion, drew in more users, and opened up greater referral and sponsorship prospects." />
          <FadeIn>
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
                The existing SharpStakes website had significant issues
                impacting user trust and engagement due to inconsistencies and
                avoidable flaws. In the competitive sports betting app market,
                an unreliable and visually unappealing platform can discourage
                users, especially when involving financial transactions. The
                imperative for SharpStakes to upgrade its appearance goes beyond
                aesthetics; it aims to instill confidence, encouraging active
                participation and ensuring a positive, trustworthy experience
                for users.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
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
                Insufficient attention has been given to showcasing SharpStakes
                as a distinctive product, not widely adopted by established
                industry leaders. Emphasizing this uniqueness through
                user-centric design is crucial for the app&apos;s success. My
                redesign strategy focuses on these critical aspects.
              </Typography>
            </Box>
          </FadeIn>
          <FadeIn>
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
                  ai as a driving factor
                </Typography>
                <Typography variant="body1">
                  The captivating realm of artificial intelligence and its
                  immense potential have truly enthralled us. SharpStakes gains
                  a unique edge by making this technology the cornerstone of its
                  entire product. Leveraging this as the primary driving force
                  will enable us to attract and retain a larger user base.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography
                  variant="body1"
                  mb={2}
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  reinventing current processes
                </Typography>
                <Typography variant="body1">
                  Several of SharpStakes&apos; existing practices, marked by
                  dark design patterns and suboptimal copywriting, adversely
                  affect the user-product relationship. My goal is to transform
                  and enhance these processes by leveraging contemporary design
                  methodologies and adhering to industry standards.
                </Typography>
              </Box>
              <Box flex={1}>
                <Typography
                  variant="body1"
                  mb={2}
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  applying better design habits
                </Typography>
                <Typography variant="body1">
                  Uniform spacing, adequate white space, readable fonts,
                  effective contrast ratios, proper hierarchy implementation,
                  and consideration of reading patterns and content positioning
                  are essential elements. Numerous enhancements can be achieved
                  simply by adopting intelligent and accessible design
                  practices.
                </Typography>
              </Box>
            </Box>
          </FadeIn>
        </Box>
      </Container>
      <PinScrollImages
        bottomCaption={`
          First Stage Pre-redesign screens and comments
        `}
        containerHeight="300vh"
        items={SCROLL_BLOCK_1_IMAGE_PATHS.map((url, index) => (
          <img src={url} alt="" height="100%" key={index} />
        ))}
      />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <ProjectStatement content="Following the initial consultation and a comprehensive review of comments with the business owners at SharpStakes, we delved into the project objectives and schedule. We developed a general understanding of what the end product should entail from a business standpoint and devised strategies to align these requirements with user-friendly design principles, avoiding any misleading patterns or detrimental user experiences." />
          <Box>
            <FadeIn>
              <Box mb={8}>
                <Typography
                  variant="h3"
                  mb={2}
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  Analyzing Competitor Designs
                </Typography>
                <Typography variant="body1">
                  “Conduct a thorough competitive analysis to examine the
                  strategies employed by prominent industry players to enhance
                  user experiences. Make note of the color schemes and
                  typography choices they implement, as well as any potential
                  dark patterns in their designs. This information will serve as
                  valuable insights that we can apply to enhance our existing
                  product.”
                </Typography>
              </Box>
            </FadeIn>
            <Box display="flex" flexDirection="column" gap={6}>
              <FadeIn>
                <Box>
                  <Typography variant="body1" fontStyle="italic">
                    <b>Competitor 1:</b> OddsJam.com
                  </Typography>
                  <Typography variant="body1" fontStyle="italic">
                    <b>Pros:</b> Strong branding, uniform components,
                    informative arrangement, user-friendly navigation, effective
                    utilization of white space, and a cohesive design approach
                    that fosters a seamless and engaging user experience.
                  </Typography>
                  <Typography variant="body1" fontStyle="italic">
                    <b>Cons: </b> Certain manipulative tactics are employed, and
                    a substantial portion of the content is inaccessible due to
                    paywalls.
                  </Typography>
                </Box>
              </FadeIn>

              <img
                alt=""
                src="/project_page_res/hashmatrix/sharpstakes/objective1/objective1.png"
              />
              <FadeIn>
                <Box>
                  <Typography variant="body1" fontStyle="italic">
                    <b>Competitor 2:</b> bettingpros.com
                  </Typography>
                  <Typography variant="body1" fontStyle="italic">
                    <b>Pros:</b>Cohesive brand identity, uniform design
                    elements, a thriving community, mobile application
                    availability, both premium and free user account options,
                    player leaderboards, educational resources, exemplary
                    layout, and clear visual hierarchy.
                  </Typography>
                  <Typography variant="body1" fontStyle="italic">
                    <b>Cons: </b> A significant amount of content is behind
                    paywalls, and the interface might feel overwhelming for
                    newcomers to sports betting due to its information density.
                  </Typography>
                </Box>
              </FadeIn>

              <img
                alt=""
                src="/project_page_res/hashmatrix/sharpstakes/objective1/objective2.png"
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline>
          <Container maxWidth="md">
            <Box py={8} display="flex" flexDirection="column" gap={8}>
              <FadeIn>
                <Box>
                  <Typography
                    variant="h3"
                    mb={2}
                    fontWeight={700}
                    textTransform="uppercase"
                  >
                    Revamp, Adapt, Elevate
                  </Typography>
                  <Typography variant="body1">
                    “Utilize the data collected from the first objective and
                    implement adjustments to the branding that maintain the
                    current ambiance while enhancing SharpStakes&apos; overall
                    perception, aiming for a more organized, premium, and
                    welcoming atmosphere.”
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1" fontStyle="italic">
                    <b>Important note:</b> This project brought about unique
                    challenges that ultimately became opportunities for growth.
                    The business owners had a strong emphasis on a tight
                    timeline, prompting me to make early compromises, such as
                    bypassing the wireframing stage. Additionally, the existing
                    branding and typography, set by a previous designer, were
                    non-negotiable. Embracing these constraints, I skillfully
                    adapted to the circumstances, turning challenges into
                    valuable experiences.
                  </Typography>
                </Box>
              </FadeIn>
            </Box>
          </Container>
          <PinScrollImages
            bottomCaption={<>Early components</>}
            containerHeight="300vh"
            items={SCROLL_BLOCK_2_IMAGE_PATHS.map((url, index) => (
              <img src={url} alt="" height="100%" key={index} />
            ))}
          />
          <PinScrollImages
            bottomCaption={<>Early Screens and states</>}
            containerHeight="300vh"
            items={SCROLL_BLOCK_3_IMAGE_PATHS.map((url, index) => (
              <img src={url} alt="" height="100%" key={index} />
            ))}
          />
          <Container maxWidth="md">
            <FadeIn>
              <Box py={12}>
                <Typography
                  variant="h3"
                  mb={2}
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  Guide Development, Craft Onboarding
                </Typography>
                <Typography variant="body1">
                  “Pass the initial screens to the development team and provide
                  assistance when necessary to ensure that all coded elements
                  meet industry-standard UX criteria. Concurrently, begin work
                  on the second set of designs, determining the approach for the
                  new user sign-up process, shaping the onboarding flow&apos;s
                  user experience, and specifying the content to be included.”
                </Typography>
              </Box>
            </FadeIn>
          </Container>
          <PinScrollImages
            bottomCaption={
              <>
                Website UX & UI QA - Addressing development errors and
                inaccuracies
              </>
            }
            containerHeight="300vh"
            items={SCROLL_BLOCK_4_IMAGE_PATHS.map((url, index) => (
              <img src={url} alt="" height="100%" key={index} />
            ))}
          />
          <Container maxWidth="md">
            <FadeIn>
              <Box py={12}>
                <Typography
                  variant="h3"
                  mb={2}
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  Revise, Reframe, Renew
                </Typography>
                <Typography variant="body1">
                  “Refine and reconfigure components in alignment with our
                  updated business objectives. This process entails a
                  comprehensive review of all previously crafted materials, as
                  well as the incorporation of additional screens and states
                  that better align with our evolved business approach.”
                </Typography>
                <br />
                <br />
                <Typography variant="body1" fontStyle="italic">
                  <b>Important note:</b> Collaborating with start-ups has been a
                  fantastic journey, exposing me to the exciting challenges of
                  tight deadlines and substantial revamps—something the current
                  project also embraces wholeheartedly! After thoroughly
                  exploring our business objectives and engaging in extensive
                  discussions with our fantastic partners at SharpsStakes,
                  we&apos;ve decided to give a fresh, vibrant look to the
                  interface and user experience of several screens we&apos;ve
                  previously presented. It&apos;s worth noting that, while our
                  branding stays true, this big change was all about meeting new
                  criteria and taking our project to even greater heights.
                </Typography>
              </Box>
            </FadeIn>
          </Container>
          <PinScrollImages
            bottomCaption={<>Final screens and states</>}
            containerHeight="300vh"
            items={SCROLL_BLOCK_5_IMAGE_PATHS.map((url, index) => (
              <img src={url} alt="" height="100%" key={index} />
            ))}
          />
          <Container maxWidth="md">
            <Box py={12} display="flex" flexDirection="column" gap={12}>
              <FadeIn>
                <Box>
                  <Typography
                    variant="h3"
                    mb={2}
                    fontWeight={700}
                    textTransform="uppercase"
                  >
                    closing NOTES:
                  </Typography>
                  <Typography variant="body1">
                    The updated interface and design strategy enable SharpStakes
                    to streamline development through the utilization of
                    reusable components, adhere to accessibility guidelines, and
                    attract a broader user base by aligning with contemporary
                    competitors. This has resulted in a remarkable surge in user
                    satisfaction, accompanied by hundreds of positive comments
                    and reviews.
                  </Typography>
                </Box>
              </FadeIn>
              <FadeIn>
                <Box>
                  <Typography
                    variant="h3"
                    mb={2}
                    fontWeight={700}
                    textTransform="uppercase"
                  >
                    user results:
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Box display="flex" gap={6} alignItems="center">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "4em",
                          fontWeight: 800,
                          background:
                            "linear-gradient(1deg, #0E86D4 -358.82%, #FFF 99.25%);",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        95%
                      </Typography>
                      <Typography variant="body1">
                        of users interviewed reported a notable enhancement in
                        their experience, specifically citing improvements in
                        usability, design, and overall satisfaction with the
                        redesigned product.
                      </Typography>
                    </Box>
                    <Box display="flex" gap={6} alignItems="center">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "4em",
                          fontWeight: 800,
                          background:
                            "linear-gradient(0deg, #0E86D4 -260.6%, #FFF 219.26%);",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        91%
                      </Typography>
                      <Typography variant="body1">
                        of users interviewed reported a significant increase in
                        efficiency and task completion speed after interacting
                        with the revamped product interface.
                      </Typography>
                    </Box>
                    <Box display="flex" gap={6} alignItems="center">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "4em",
                          fontWeight: 800,
                          background:
                            "linear-gradient(0deg, #0E86D4 -153.72%, #FFF 347.39%);",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        88%
                      </Typography>
                      <Typography variant="body1">
                        of users praised the redesigned interface, citing its
                        positive influence on user engagement and overall
                        satisfaction with the product&apos;s enhanced features.
                      </Typography>
                    </Box>
                    <Box display="flex" gap={6} alignItems="center">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "4em",
                          fontWeight: 800,
                          background:
                            "linear-gradient(2deg, #0E86D4 -40.68%, #FFF 450.39%);",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        73%
                      </Typography>
                      <Typography variant="body1">
                        of users expressed a strong preference for trying out
                        the redesigned product over competing alternatives.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </FadeIn>
            </Box>
          </Container>
          <Box>
            <Box
              component="video"
              autoPlay
              muted
              loop
              controls={false}
              playsInline
              width="100%"
              sx={{ pointerEvents: "none" }}
            >
              <source
                src={
                  "/project_page_res/hashmatrix/sharpstakes/videos/video1.mp4"
                }
                type="video/mp4"
              />
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              mt={-1}
            >
              <Box
                flex={1}
                minHeight="100vh"
                display="flex"
                flexDirection="column"
                gap={3}
                alignItems="center"
                justifyContent="center"
                sx={{
                  background:
                    "url(/project_page_res/hashmatrix/sharpstakes/spotlight/blackBackground.png)",
                  backgroundSize: {
                    xs: "cover",
                    sm: "cover",
                    md: "cover",
                    lg: "cover",
                  },
                  backgroundPosition: {
                    xs: "center center",
                    lg: "left center",
                  },
                }}
              >
                <Box position="relative" height={{ xs: "50vh", lg: "70%" }}>
                  <img
                    src="/project_page_res/hashmatrix/sharpstakes/spotlight/blackBehind.png"
                    alt=""
                    height="90%"
                    style={{
                      position: "absolute",
                      transform: "translateX(-30%) translateY(5%)",
                    }}
                  />
                  <img
                    src="/project_page_res/hashmatrix/sharpstakes/spotlight/blackFront.png"
                    alt=""
                    height="100%"
                    style={{
                      transform: "translateX(30%)",
                    }}
                  />
                </Box>
                <Box
                  px={6}
                  py={1}
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
                    Home screens (live)
                  </Typography>
                </Box>
              </Box>
              <Box
                flex={1}
                minHeight="100vh"
                display="flex"
                flexDirection="column"
                gap={3}
                alignItems="center"
                justifyContent="center"
                sx={{
                  background:
                    "url(/project_page_res/hashmatrix/sharpstakes/spotlight/lightBackground.png)",
                  backgroundSize: { xs: "cover", sm: "cover", lg: "250%" },
                  backgroundPosition: { xs: "center center", lg: "85% center" },
                }}
              >
                <Box position="relative" height={{ xs: "50vh", lg: "70%" }}>
                  <img
                    src="/project_page_res/hashmatrix/sharpstakes/spotlight/lightBehind.png"
                    alt=""
                    height="90%"
                    style={{
                      position: "absolute",
                      transform: "translateX(-30%) translateY(5%)",
                    }}
                  />
                  <img
                    src="/project_page_res/hashmatrix/sharpstakes/spotlight/lightFront.png"
                    alt=""
                    height="100%"
                    style={{
                      transform: "translateX(30%)",
                    }}
                  />
                </Box>
                <Box
                  px={6}
                  py={1}
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
                    Sign-up and guides (live)
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="video"
              autoPlay
              muted
              loop
              controls={false}
              playsInline
              width="100%"
              sx={{ pointerEvents: "none" }}
            >
              <source
                src={
                  "/project_page_res/hashmatrix/sharpstakes/videos/video2.mp4"
                }
                type="video/mp4"
              />
            </Box>
            <Box mt={-1}>
              <PinScrollImages
                containerHeight="300vh"
                disablePadding
                items={[
                  <img
                    src={"/project_page_res/hashmatrix/sharpstakes/stretch.png"}
                    alt=""
                    height="100%"
                    key={0}
                  />,
                ]}
              />
            </Box>
          </Box>
          <ProjectsNavFooter projects={["shiba", "afc"]} />
          <FooterDark />
        </ScopedCssBaseline>
      </ThemeProvider>
    </ThemeProvider>
  );
}
