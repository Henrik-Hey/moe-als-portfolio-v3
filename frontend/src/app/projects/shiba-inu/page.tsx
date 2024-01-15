/* eslint-disable @next/next/no-img-element */
"use client";

import { baseTheme, palette } from "@/theme";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
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
      <Footer />
    </ThemeProvider>
  );
}
