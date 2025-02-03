/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Content from "./content";
import {
  Box,
  CssBaseline,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useBaseTheme } from "@/theme";
import { ArrowLeft, ArrowRightAlt } from "@mui/icons-material";
import { getCookie, HOMEZ_ACCESS_COOKIE, setCookie } from "@/hooks";
import { default as NextLink } from "next/link";

export const Authentication = () => {
  const baseTheme = useBaseTheme();
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const [authError, setAuthError] = React.useState(false);
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    const accessKey = getCookie(HOMEZ_ACCESS_COOKIE);
    if (accessKey != "true") {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Dialog
        open={!isAuthenticated}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        sx={{
          ".MuiPaper-root": {
            maxWidth: 912,
          },
        }}
      >
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={{ xs: 2, md: 6 }}
            pt={{ xs: 6, md: 6 }}
            gap={3}
            position="relative"
          >
            <Link
              component={NextLink}
              href="/"
              sx={{
                position: "absolute",
                top: { xs: "16px", md: "48px" },
                left: { xs: 0, md: "48px" },
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                "&:hover, &:active": {
                  textDecoration: "underline",
                },
              }}
            >
              <ArrowLeft />
              <Typography variant="body1">Return Home</Typography>
            </Link>
            <Box mt={6}>
              <img
                alt=""
                src="/project_page_res/afc/henrik.png"
                width="124px"
                height="124px"
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  objectPosition: "top center",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h2"
                fontWeight={500}
                textAlign="center"
                mb={1.5}
                fontFamily="PP Eiko"
              >
                This content is protected.
              </Typography>
              <Typography variant="body1" fontWeight={400} textAlign="center">
                To view, please enter the password.
              </Typography>
            </Box>
            <Box
              width="100%"
              mt={3}
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                if (password === "HOMEZAI_ProACCESS!") {
                  setIsAuthenticated(true);
                  setAuthError(false);
                  setCookie(HOMEZ_ACCESS_COOKIE, "true");
                } else {
                  setAuthError(true);
                }
              }}
            >
              <TextField
                fullWidth
                error={authError}
                helperText={
                  authError ? (
                    <Typography variant="body2">
                      The entered password is incorrect; try again or send an{" "}
                      <Link
                        href="mailto:design.moexls@gmail.com"
                        fontWeight={600}
                        color="error"
                      >
                        email me
                      </Link>{" "}
                      for access.
                    </Typography>
                  ) : (
                    ""
                  )
                }
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" type="submit">
                        <ArrowRightAlt
                          fontSize="large"
                          color={authError ? "error" : undefined}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      {isAuthenticated && <Content />}
    </ThemeProvider>
  );
};
