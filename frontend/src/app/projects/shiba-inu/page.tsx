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
import { Footer } from "@/components/footer/footer";
import { ProjectHeader } from "@/components/projectHeader/projectHeader";
import { ProjectMissionStatement } from "@/components/projectMissionStatement/projectMissionStatement";
import { ProjectStatement } from "@/components/projectStatement/projectStatement";
import { PinScrollImages } from "@/components/pinScrollImages/pinScrollImages";
import { ProjectUserStory } from "@/components/projectUserStory/projectUserStory";

const SCROLL_BLOCK_1_IMAGE_PATHS = [
  "/project_page_res/shiba/scroll1/image1.png",
  "/project_page_res/shiba/scroll1/image2.png",
  "/project_page_res/shiba/scroll1/image3.png",
  "/project_page_res/shiba/scroll1/image4.png",
  "/project_page_res/shiba/scroll1/image5.png",
  "/project_page_res/shiba/scroll1/image6.png",
  "/project_page_res/shiba/scroll1/image7.png",
  "/project_page_res/shiba/scroll1/image8.png",
];

const SCROLL_BLOCK_2_IMAGE_PATHS = [
  "/project_page_res/shiba/scroll2/hifi.png",
  "/project_page_res/shiba/scroll2/lowfi.png",
  "/project_page_res/shiba/scroll2/sketch.png",
  "/project_page_res/shiba/scroll2/clr.png",
];

export default function ShibaInu() {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <ProjectHeader
        imageURL="/project_page_res/shiba/backdrop.jpg"
        logoString="Shiba Inu"
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
          <ProjectStatement content="Crafting a distinctive product with a delightful user experience, Shiba Inu endeavors to compete with established market leaders. Centered on the needs of students and busy young adults, the app caters to those who crave exceptional Asian ethnic food but find themselves pressed for time to cook." />
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
              Countless international food enterprises have made their mark,
              providing an extensive range of options to suit diverse tastes.
              Personally, sifting through this abundance has occasionally felt
              like a challenge. Despite the vast culinary offerings, some fall
              short in recognizing and rewarding loyal patrons.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              mb={2}
              fontWeight={700}
              textTransform="uppercase"
            >
              design key drivers
            </Typography>
            <Typography variant="body1">
              The challenge at hand revolves around the scarcity of food
              delivery apps dedicated to a single cuisine. Compounding this
              issue is the presence of a plethora of well-established
              competitors. The imperative here lies in highlighting the
              distinctiveness of the approach, a task that demands the infusion
              of robust user design principles and human-centric design systems.
              This emphasis on uniqueness is not just a nicety; it&apos;s
              integral to the app&apos;s triumph. Consequently, my redesign
              strategy had to tackle pivotal aspects, ensuring Shiba Inu stands
              out amidst competition by focusing on convenience, reliability,
              and the exclusive delivery of a cherished cuisine.
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
                knowing THE RIGHT DEMOGRAPHIC
              </Typography>
              <Typography variant="body1">
                Shiba Inu will be tailored for students and young adults,
                providing a specialized experience. The strategy has to
                emphasize user-friendly design principles that resonate with our
                demographic. It&apos;s not just about standing out; it&apos;s
                about delivering what users truly need.
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                LEARNING FROM THE BIG PLAYERS
              </Typography>
              <Typography variant="body1">
                The primary objective lies in distilling crucial insights on
                user engagement, service reliability, and app functionality,
                with the intent of assimilating effective design practices while
                preserving a distinctive identity. The integration of lessons
                drawn from industry leaders strategically situates Shiba Inu,
                enabling adept navigation through the competitive design
                landscape.
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography
                variant="body1"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                DESIGNING FOR ACCESSIBILITY
              </Typography>
              <Typography variant="body1">
                Integrating design elements that emphasize user-friendly and
                inclusive features is the goal. Shiba Inu should be sculpted
                using an interface that is both intuitive and accommodating,
                ensuring accessibility for everyone. By embracing accessibility
                in design, we pitfalls and dark design patterns.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <PinScrollImages
        bottomCaption={`
          Finalized Screens P1 - Currently only showcasing the 'happy path' no
          error screens or roadblocks have been included.
        `}
        containerHeight="300vh"
        items={SCROLL_BLOCK_1_IMAGE_PATHS.map((url, index) => (
          <img src={url} alt="" height="100%" key={index} />
        ))}
      />
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={12} my={12}>
          <Box>
            <Typography
              variant="h3"
              mb={2}
              fontWeight={700}
              textTransform="uppercase"
            >
              the target user
            </Typography>
            <Typography variant="body1">
              By considering the target user, my personal motivations for using
              the application, the project&apos;s scale, and the required
              research efforts before the deadline, I strategically assessed the
              project&apos;s scope. Through the process of documenting my
              thoughts, creating user personas, and empathy maps, I gained
              clarity on various aspects of the project.
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" gap={4}>
            <Box>
              <ProjectUserStory
                backgroundColor={palette.neutral[100]}
                title="Ethan Sullivan, 23 Years old, University Student"
                imageURL="/project_page_res/shiba/peeps/peep1.png"
              >
                <Box display="flex" flexDirection="column" gap={1.5}>
                  <Typography variant="body1">
                    Ethan, a college student with a packed schedule, frequently
                    studies from home, leaving him with limited opportunities to
                    go out. During those times when his family is away, he finds
                    solace in ordering authentic Korean or Japanese cuisine for
                    delivery.
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={1.5}
                  >
                    <Typography variant="body1">
                      “Ordering food brings me a sense of convenience that
                      aligns with my lifestyle. Moreover, I value the
                      environmental advantages associated with food delivery.”
                    </Typography>
                    <Typography variant="body1">
                      “I often experience anxiety about possible delays or
                      errors in my orders. Simultaneously, there&apos;s a mix of
                      hunger and anticipation as I eagerly await the arrival of
                      the food.”
                    </Typography>
                  </Box>
                </Box>
              </ProjectUserStory>
            </Box>
            <Box>
              <ProjectUserStory
                backgroundColor={palette.neutral[100]}
                title="Ava Thompson, 33 Years old, Marketing Lead"
                imageURL="/project_page_res/shiba/peeps/peep2.png"
                ltr={false}
              >
                <Box display="flex" flexDirection="column" gap={1.5}>
                  <Typography variant="body1">
                    Ava, a Marketing Lead at a design firm, faces challenges
                    with her vision that make reading small text difficult. With
                    a side gig as a freelancer, Ava prefers to avoid cooking on
                    weekends to save time. Instead, she seeks convenience by
                    ordering meals.
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={1.5}
                  >
                    <Typography variant="body1">
                      “Relying on food delivery services is a common practice
                      for me due to their convenient and time-saving benefits.
                      Efficiency holds a priority in my busy schedule, and I
                      genuinely appreciate the convenience that comes with
                      ordering food online.”
                    </Typography>
                    <Typography variant="body1">
                      “Experiences a sense of anticipation and reliance on the
                      delivery service for a satisfying meal experience. Feeling
                      hungry and eager to enjoy a delicious meal without the
                      time and effort required for cooking.”
                    </Typography>
                  </Box>
                </Box>
              </ProjectUserStory>
              <Typography
                mt={2}
                variant="body1"
                color={palette.neutral[600]}
                fontStyle="italic"
                textAlign="center"
                width="100%"
              >
                Persona & Empathy maps
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h3"
              mb={2}
              fontWeight={700}
              textTransform="uppercase"
            >
              Defining the Potential Problems
            </Typography>
            <Typography variant="body1">
              In this crucial phase, I focused on understanding user challenges
              and creating tailored solutions using techniques like user journey
              maps and problem statements. Proactively identifying key pain
              points, I chose these methods for their effectiveness in providing
              a clear path to grasp user needs. Through continuous user feedback
              and thorough research, I maintained a user-centric approach,
              improving the overall experience and anticipating and addressing
              potential issues. The result was a project that successfully
              delivered a seamless and highly satisfying user experience.
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" gap={4}>
            <ProjectUserStory
              backgroundColor={palette.warning.main}
              title="Benjamin Hayes, 24 Years old, Computer Science Student"
              imageURL="/project_page_res/shiba/peeps/peep3.png"
              ltr={true}
            >
              <Box display="flex" flexDirection="column" gap={1.5}>
                <Typography variant="body1">
                  Benjamin, a busy college student, faces the challenge of
                  finding a reliable and cost-effective food delivery solution
                  that accommodates his limited cooking time. He seeks an app
                  that not only offers convenient food delivery but also
                  provides money-saving incentives based on his ordering
                  frequency.
                </Typography>
              </Box>
            </ProjectUserStory>
            <ProjectUserStory
              backgroundColor={palette.warning.main}
              title="Olivia Parker, 26 Years old, Graphic Designer"
              imageURL="/project_page_res/shiba/peeps/peep4.png"
              ltr={false}
            >
              <Box display="flex" flexDirection="column" gap={1.5}>
                <Typography variant="body1">
                  Olivia, a seasoned graphic designer, encounters the need for a
                  time-efficient and user-friendly food delivery platform that
                  simplifies the process of choosing from a wide selection of
                  restaurants. She aspires to find an app that not only saves
                  her valuable time but also offers a curated experience
                  tailored to her preferences.
                </Typography>
              </Box>
            </ProjectUserStory>
          </Box>
        </Box>
      </Container>
      <PinScrollImages
        bottomCaption={<>Journey mapping & problem statements</>}
        containerHeight="200vh"
        centeredContainerHeight="100vh"
        centerWidth={1440}
        items={[
          <Box
            key={0}
            minWidth="calc(100vw - 128px)"
            width="fit-content"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="1440px" display="flex">
              <Box
                display="flex"
                flexDirection="column"
                gap={13}
                pt={18}
                pr={2}
              >
                <Typography variant="h6" textAlign="center" fontWeight={600}>
                  Happy
                </Typography>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight={600}
                  mt={-4.5}
                >
                  Neutral
                </Typography>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight={600}
                  mt={-4.5}
                >
                  Unhappy
                </Typography>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight={600}
                  my={2.25}
                >
                  Experience
                </Typography>
                <Typography variant="h6" textAlign="center" fontWeight={600}>
                  Imrpovement
                </Typography>
              </Box>
              <Box flex={1} flexDirection="column" width="1244px">
                <Box width="1244px" display="flex">
                  <Box pb={1} borderBottom="14px solid #2A9D8F" flex={1}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight={600}
                    >
                      Find
                    </Typography>
                  </Box>
                  <Box pb={1} borderBottom="14px solid #E9C46A" flex={1}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight={600}
                    >
                      Create
                    </Typography>
                  </Box>
                  <Box pb={1} borderBottom="14px solid #2A9D8F" flex={1}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight={600}
                    >
                      Browse
                    </Typography>
                  </Box>
                  <Box pb={1} borderBottom="14px solid #E76F51" flex={1}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight={600}
                    >
                      Payment
                    </Typography>
                  </Box>
                  <Box pb={1} borderBottom="14px solid #2A9D8F" flex={1}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight={600}
                    >
                      Delivery
                    </Typography>
                  </Box>
                </Box>
                <Box width="1244px" mt={4}>
                  <img
                    alt=""
                    width="1204px"
                    height="304px"
                    src="/project_page_res/shiba/chart/chart.png"
                  />
                </Box>
                <Box flex={1} display="flex" flexDirection="column" pr={8}>
                  <Box flex={1} display="flex">
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Discover the app through online search or
                        recommendations.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Download the app from the appropriate platform (e.g.,
                        App Store, Google Play).
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Launch the app on the device to begin the user
                        experience.
                      </Typography>
                    </Box>
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Explore sign-in options provided by the app (e.g.,
                        email, social media).
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Choose and complete the account creation process,
                        including verifying personal information.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Confirm the email address associated with the account.
                      </Typography>
                    </Box>
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Browse available restaurants.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Choose a specific restaurant and explore its menu.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Add desired items to the cart.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Proceed to the checkout process to finalize the order.
                      </Typography>
                    </Box>
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Explore available payment options.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Select preferred payment method.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Review subscription options and associated perks.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Proceed to make payment and provide a tip.
                      </Typography>
                    </Box>
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Receive confirmation email.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Monitor tracking map and wait for order.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Receive the order.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Provide a rating or feedback.
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box flex={1} display="flex">
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        More screenshots and visual elements that showcase the
                        product.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Utilize user reviews and feedback as a selling point
                      </Typography>
                    </Box>
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Include the option for users to continue as a guest for
                        a seamless experience.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Collaborate with sign-in partners to enhance
                        accessibility and user convenience.
                      </Typography>
                    </Box>
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Implement category buttons at the top of the screen for
                        easy navigation.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Enhance the visual appeal of food items by incorporating
                        pictures and videos.
                      </Typography>
                    </Box>
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Provide a diverse range of payment options to cater to
                        different user preferences.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Introduce a subscription and save system to offer
                        discounts and incentives for frequent users.
                      </Typography>
                    </Box>
                    <Box flex={1} component="ul">
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                        mb={2}
                      >
                        Provide the option for users to enable push alerts,
                        allowing them to receive notifications without it being
                        mandatory.
                      </Typography>
                      <Typography
                        component="li"
                        variant="caption"
                        fontWeight={400}
                      >
                        Offer the ability for users to leave reviews.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>,
        ]}
      />
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline>
          <Container maxWidth="md">
            <Box py={8} display="flex" flexDirection="column" gap={8}>
              <Box>
                <Typography
                  variant="h3"
                  mb={2}
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  The Creative Brainstorming Phase
                </Typography>
                <Typography variant="body1">
                  After my initial research, I delved deeper into understanding
                  user problems and crafting solutions. I formulated &quot;how
                  might we&quot; statements to frame challenges for effective
                  problem-solving. I also prioritized developing the site&apos;s
                  information architecture to align with user needs. These
                  exercises offered valuable insights and paved the way for
                  further project exploration and refinement.
                </Typography>
              </Box>
              <Box>
                <img
                  alt=""
                  width="100%"
                  src="/project_page_res/shiba/chart/flow.png"
                />
                <Typography
                  mt={2}
                  variant="body1"
                  color={palette.neutral[200]}
                  fontStyle="italic"
                  textAlign="center"
                  width="100%"
                >
                  Basic outline of the information architecture
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ScopedCssBaseline>
      </ThemeProvider>
      <PinScrollImages
        bottomCaption={
          <>
            (1) Early wireframes (2) Refined wireframes <br />
            (3) Logo sketches (4) Simplified color palette and full logo
          </>
        }
        containerHeight="300vh"
        items={SCROLL_BLOCK_2_IMAGE_PATHS.map((url, index) => (
          <img src={url} alt="" height="100%" key={index} />
        ))}
      />
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline>
          <Container maxWidth="md">
            <Box py={12}>
              <Typography
                variant="h3"
                mb={2}
                fontWeight={700}
                textTransform="uppercase"
              >
                prototyping, Testing and adapting
              </Typography>
              <Typography variant="body1">
                Having concluded the user research phase and finalized the
                wireframes, the next crucial step was to create a prototype to
                test the primary user journey. This enabled me to gather
                valuable feedback and identify any design or user flow errors
                early on. To accomplish this, I began by developing wire flow
                prototypes, followed by thorough preparation for user studies
                and interviews. For further details, please refer to the
                comprehensive document available here.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                color={palette.neutral[200]}
                fontStyle="italic"
                width="100%"
              >
                Please note that the numbers on the card signify both priority
                and urgency, with 0 indicating the highest urgency level.
              </Typography>
            </Box>
          </Container>
        </ScopedCssBaseline>
      </ThemeProvider>
      <Footer />
    </ThemeProvider>
  );
}