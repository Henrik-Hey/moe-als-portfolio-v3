/* eslint-disable @next/next/no-img-element */
import { Container, Box, Typography, BoxProps } from "@mui/material";
import React from "react";
import FadeIn from "../fadeIn/fadeIn";

interface TeamCommentsCardProps {
  imageURL: string;
  imagePaddingRight?: BoxProps["pr"];
  imageProps?: BoxProps;
  color: string;
  comments: {
    name: string;
    comment: string;
  }[];
}

export const TeamCommentsCard: React.FC<TeamCommentsCardProps> = ({
  imageURL,
  imagePaddingRight,
  imageProps,
  color,
  comments,
}) => {
  return (
    <Container maxWidth="xl">
      <FadeIn>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          mt={6}
          mb={12}
          alignItems="center"
          sx={{
            background: "#f0f0f0",
            overflow: "hidden",
          }}
        >
          <Box flex={1}>
            <Box p={6}>
              <Typography variant="body1" mb={2} fontWeight={700} color={color}>
                Team Comments
              </Typography>
              <Typography variant="h3" mb={3} fontWeight={700}>
                How was your experience
                <br /> working with Moe?
              </Typography>
              <Typography component="div" variant="body1">
                <Box display="flex" flexDirection="column" gap={1}>
                  {comments.map((comment, index) => (
                    <Box key={index} mb={2} display="flex">
                      <Typography
                        variant="h5"
                        color={color}
                        fontWeight={700}
                        mr={1}
                      >
                        &gt;
                      </Typography>
                      <Typography variant="body1">
                        <Box
                          component="span"
                          fontWeight={700}
                          display="block"
                          mb={2}
                        >
                          {comment.name}:
                        </Box>
                        “{comment.comment}”
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Typography>
            </Box>
          </Box>
          <Box
            flex={1}
            pb={0}
            pr={imagePaddingRight || 0}
            minHeight={{ xs: 200, md: 500 }}
            position="relative"
          >
            <Box
              component="img"
              alt=""
              role="presentation"
              sx={{
                width: "100%",
                height: "100%",
                marginBottom: "-60px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src={imageURL}
              {...imageProps}
            />
          </Box>
        </Box>
      </FadeIn>
    </Container>
  );
};
