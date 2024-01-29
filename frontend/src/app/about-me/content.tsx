"use client";

import { Banner, Navbar, ProjectCard } from "@/components";
import { baseTheme } from "@/theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Footer } from "@/components/footer/footer";
import { raleway } from "@/fonts";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";
import { AboutMeImageAutoScrollBlock } from "@/components/aboutMeScrollBlock/aboutMeScrollBlock";

export default function Content() {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Banner />
      <Navbar />
      <Container maxWidth="xl">
        <Box my={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box display="flex" flexDirection="column" gap={3}>
                <Box sx={{ maxWidth: 800 }}>
                  <Typography
                    variant="h3"
                    fontFamily="PP Eiko"
                    fontWeight={400}
                    color={baseTheme.palette.primary.light}
                  >
                    A Passionate Product designer, Cat Dad, Movie Enthusiast,
                    and Home Chef.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1">
                    Hello there! I&apos;m Moe, a product designer based in
                    Canada, passionate about crafting user experiences that
                    seamlessly blend functionality and delight. I thrive on the
                    intricacies of design operations, finding joy in creating
                    systems that bring order to complexity.
                    <br />
                    <br />
                    When I&apos;m not immersed in the world of design,
                    you&apos;ll find me indulging in various interests. From
                    experimenting in the kitchen to caring for my cats,
                    exploring exciting side ventures, or pursuing excellence in
                    martial arts, I&apos;m always seeking inspiration beyond the
                    design realm.
                    <br />
                    <br />
                    Throughout my career, I&apos;ve collaborated with product
                    owners, stakeholders, and users across North America,
                    gaining valuable insights into the diverse needs of
                    audiences. With a solid background in brand identity and web
                    design, I&apos;ve successfully delivered projects ranging
                    from logo design to comprehensive brand guides and on-site
                    rebranding initiatives. My goal is to create visually
                    captivating designs that provide seamless user experiences.
                    <br />
                    <br />
                    Currently, I&apos;m fully engaged as a Product designer{" "}
                    <Typography
                      component={Link}
                      href="https://www.autofinance.com/"
                      target="_blank"
                      sx={{
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                      fontWeight={600}
                      color={baseTheme.palette.secondary.main}
                    >
                      @AFC
                    </Typography>
                    , working closely with users, stakeholders, project managers
                    and owners to achieve exceptional results. I&apos;m
                    constantly seeking new challenges and opportunities to
                    refine my skills and explore innovative design
                    possibilities.
                  </Typography>
                </Box>
                <Box mb={3} mt={3}>
                  <AboutMeImageAutoScrollBlock />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex" flexDirection="column" gap={3}>
                <Box
                  mb={{
                    xs: 0,
                    md: 4,
                  }}
                >
                  <Typography
                    variant="h3"
                    fontFamily="PP Eiko"
                    fontWeight={400}
                    color={baseTheme.palette.primary.light}
                  >
                    Certifications
                  </Typography>
                </Box>
                <Box>
                  <Accordion defaultExpanded={true}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography
                        variant="h6"
                        fontFamily={raleway.style.fontFamily}
                        fontWeight={700}
                        color={baseTheme.palette.primary.light}
                      >
                        Certifications by Designership
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        p={2}
                        pt={0}
                        display="flex"
                        flexDirection="column"
                        gap={3}
                      >
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.thedesignership.com/courses/practical-user-research-strategy-course"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            Practical User Research and Strategy
                          </Typography>
                          <Typography variant="body1">
                            This Course empowered me with valuable insights and
                            techniques for effective design solutions.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.thedesignership.com/courses/the-ultimate-figma-masterclass"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            The ultimate Figma masterclass
                          </Typography>
                          <Typography variant="body1">
                            The comprehensive Figma & UI Masterclass
                            revolutionized my design process, covering
                            everything from file management to advanced
                            animations.
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box>
                  <Accordion defaultExpanded={false}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography
                        variant="h6"
                        fontFamily={raleway.style.fontFamily}
                        fontWeight={700}
                        color={baseTheme.palette.primary.light}
                      >
                        Certifications by Google through Coursera
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        p={2}
                        pt={0}
                        display="flex"
                        flexDirection="column"
                        gap={3}
                      >
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.coursera.org/learn/foundations-user-experience-design?specialization=google-ux-design"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            Foundations of User Experience Design
                          </Typography>
                          <Typography variant="body1">
                            Entry-level UX essentials: Collaboration with
                            cross-functional teams, foundational UX concepts,
                            and design sprints.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.coursera.org/learn/start-ux-design-process?specialization=google-ux-design"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            Start the UX Design Process: Empathize, Define, and
                            Ideate
                          </Typography>
                          <Typography variant="body1">
                            Empathy, problem definition, and ideation in UX
                            design: Understanding users, crafting solutions, and
                            elevating experiences.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.coursera.org/learn/wireframes-low-fidelity-prototypes?specialization=google-ux-design"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            Build Wireframes and Low-Fidelity Prototypes
                          </Typography>
                          <Typography variant="body1">
                            Transformative course: Storyboarding, wireframing,
                            and prototyping for user-friendly designs and
                            efficient iterations.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.coursera.org/learn/conduct-ux-research?specialization=google-ux-design"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            Conduct UX Research and Test Early Concepts
                          </Typography>
                          <Typography variant="body1">
                            Usability studies and insights course: Effective
                            research, meaningful insights, persuasive
                            presentations for refined designs and seamless user
                            experience.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.coursera.org/learn/high-fidelity-designs-prototype?specialization=google-ux-design"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            Create High-Fidelity Designs and Prototypes
                          </Typography>
                          <Typography variant="body1">
                            Design mastery: Stunning designs, brand-aligned
                            visuals, efficient workflows with mockups, design
                            principles, and systems.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.coursera.org/learn/responsive-web-design-adobe-xd?specialization=google-ux-design"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            Responsive Web Design in Adobe XD
                          </Typography>
                          <Typography variant="body1">
                            UX design journey: Empathy to portfolio-worthy web
                            designs in Adobe XD. Skills in research, intuitive
                            interfaces, and impactful showcases.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            component={Link}
                            href="https://www.coursera.org/learn/ux-design-jobs?specialization=google-ux-design"
                            target="_blank"
                            sx={{
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            fontWeight={600}
                            color={baseTheme.palette.secondary.main}
                          >
                            Design a User Experience for Social Good & Prepare
                            for Jobs
                          </Typography>
                          <Typography variant="body1">
                            Social Course: Elevating user experiences with
                            impactful solutions, UX process, prototyping, and
                            freelance for positive impact.
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
