import React from "react";
import {
  Box,
  ButtonBase,
  Card,
  Container,
  Divider,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDropDown, LockOpen, Lock, OpenInNew } from "@mui/icons-material";
import { Twirl as Hamburger } from "hamburger-react";
import {
  getCookie,
  ACCESS_COOKIE_KEY,
  AFC2_ACCESS_COOKIE_KEY,
  HOMEZ_ACCESS_COOKIE,
  EA_ACCESS_COOKIE,
} from "@/hooks";
import { usePortfolioTheme } from "@/theme";
import { keyframes } from "@emotion/react";

export const DarkLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="64"
    viewBox="0 0 82 66"
    fill="none"
  >
    <g id="logo">
      <g id="outlines">
        <g id="Group">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.2977 4.50385C29.6539 -1.42244 16.6979 1.07825 20.5631 5.30894C31.1026 16.8452 31.018 23.4096 27.7012 27.8328C23.9601 32.8218 36.4868 36.8835 41.7749 29.0946C47.8115 20.2029 43.3973 10.8365 36.2977 4.50385Z"
            fill="#F7F7F7"
            stroke="#333333"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_2">
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1101 26.7073C11.1101 26.7073 12.2259 39.3907 6.81935 38.1951C1.4128 36.9995 -1.90785 19.9514 4.55032 10.4679C11.0085 0.98429 11.7192 18.8521 11.7192 18.8521C11.7192 18.8521 12.529 3.99991 16.2801 5.40252C20.0312 6.80522 28.9994 20.2549 26.7912 25.0932C24.583 29.9315 18.0428 17.0747 18.0428 17.0747C18.0428 17.0747 22.5225 34.9979 18.2776 35.0076C14.0327 35.0173 11.1101 26.7073 11.1101 26.7073Z"
            fill="#F7F7F7"
            stroke="#333333"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_3">
          <path
            id="Vector_3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.3394 9.66687C43.3394 9.66687 53.2582 20.3627 40.7095 34.1258C41.3732 38.1367 51.5973 52.057 55.6868 46.7878C59.7764 41.5185 54.399 35.5118 49.9162 32.602C51.6464 32.366 63.0439 37.9063 65.0101 30.6709C66.9761 23.4355 53.0301 20.5425 53.0301 20.5425C53.0301 20.5425 67.9556 20.2054 65.5962 12.4194C63.2368 4.6335 50.4962 5.65587 43.3394 9.66687Z"
            fill="#F7F7F7"
            stroke="#333333"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_4">
          <path
            id="Vector_4"
            d="M14.0686 43.8064C15.7626 43.8064 17.1358 42.4332 17.1358 40.7393C17.1358 39.0453 15.7626 37.6721 14.0686 37.6721C12.3747 37.6721 11.0015 39.0453 11.0015 40.7393C11.0015 42.4332 12.3747 43.8064 14.0686 43.8064Z"
            fill="#4A4B4D"
            stroke="#333333"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_5">
          <path
            id="Vector_5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.3023 35.0077C21.3023 35.0077 22.5606 28.8713 24.2908 30.8375C26.021 32.8036 29.5688 39.0953 29.5688 39.0953C29.5688 39.0953 36.9528 34.2232 38.4471 35.0077C39.9413 35.7922 41.3202 39.7783 40.7094 41.2456C40.0986 42.713 32.2824 45.0993 32.2824 45.0993C32.2824 45.0993 41.8289 57.0266 39.7054 58.8355C37.582 60.6443 33.9823 61.5094 32.2824 60.6443C30.5824 59.7792 27.1359 47.9639 27.1359 47.9639C27.1359 47.9639 20.0754 55.4065 17.9519 54.3841C15.8285 53.3617 13.3905 50.9655 13.5478 49.0964C13.7051 47.2273 24.6841 42.6344 24.6841 42.6344L21.3023 35.0077Z"
            fill="#A1A2A4"
            stroke="#333333"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_6">
          <path
            id="Vector_6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.0571 46.4278L43.0148 44.1519L52.1187 59.0799C52.1187 59.0799 63.6994 54.8623 64.7704 57.0713C65.8415 59.2803 67.2472 64.9033 62.6953 64.9703C58.1434 65.0372 46.4288 64.9703 46.4288 64.9703L37.0571 46.4278Z"
            fill="#A1A2A4"
            stroke="#333333"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_7">
          <path
            id="Vector_7"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.1878 42.0341C90.225 43.7242 75.7564 31.8974 62.7234 36.4195C57.4901 38.2353 72.3784 47.8242 72.3784 47.8242C72.3784 47.8242 57.607 43.8027 57.2204 48.9937C56.8338 54.1848 74.9682 59.227 78.3181 55.1214C81.6681 51.0159 77.7178 44.9601 72.1878 42.0341Z"
            fill="#A1A2A4"
            stroke="#333333"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const LightLogo = () => (
  <svg
    width="80"
    height="64"
    viewBox="0 0 83 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="logo">
      <g id="outlines">
        <g id="Group">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.7979 4.50385C30.1541 -1.42244 17.1982 1.07825 21.0633 5.30894C31.6029 16.8452 31.5182 23.4096 28.2015 27.8328C24.4603 32.8218 36.9871 36.8835 42.2751 29.0946C48.3117 20.2029 43.8975 10.8365 36.7979 4.50385Z"
            fill="#2A9D8F"
            stroke="#264653"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_2">
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6101 26.7073C11.6101 26.7073 12.7259 39.3907 7.31935 38.1951C1.9128 36.9995 -1.40785 19.9514 5.05032 10.4679C11.5085 0.98429 12.2192 18.8521 12.2192 18.8521C12.2192 18.8521 13.029 3.99991 16.7801 5.40252C20.5312 6.80522 29.4994 20.2549 27.2912 25.0932C25.083 29.9315 18.5428 17.0747 18.5428 17.0747C18.5428 17.0747 23.0225 34.9979 18.7776 35.0076C14.5327 35.0173 11.6101 26.7073 11.6101 26.7073Z"
            fill="#2A9D8F"
            stroke="#264653"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_3">
          <path
            id="Vector_3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.8393 9.66687C43.8393 9.66687 53.7581 20.3627 41.2094 34.1258C41.8731 38.1367 52.0972 52.057 56.1867 46.7878C60.2763 41.5185 54.8989 35.5118 50.4161 32.602C52.1463 32.366 63.5438 37.9063 65.51 30.6709C67.4761 23.4355 53.53 20.5425 53.53 20.5425C53.53 20.5425 68.4555 20.2054 66.0961 12.4194C63.7367 4.6335 50.9961 5.65587 43.8393 9.66687Z"
            fill="#2A9D8F"
            stroke="#264653"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_4">
          <path
            id="Vector_4"
            d="M14.5687 43.8064C16.2626 43.8064 17.6359 42.4332 17.6359 40.7393C17.6359 39.0453 16.2626 37.6721 14.5687 37.6721C12.8747 37.6721 11.5015 39.0453 11.5015 40.7393C11.5015 42.4332 12.8747 43.8064 14.5687 43.8064Z"
            fill="#E76F51"
            stroke="#264653"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_5">
          <path
            id="Vector_5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.8021 35.0077C21.8021 35.0077 23.0605 28.8713 24.7906 30.8375C26.5209 32.8036 30.0686 39.0953 30.0686 39.0953C30.0686 39.0953 37.4526 34.2232 38.9469 35.0077C40.4412 35.7922 41.8201 39.7783 41.2093 41.2456C40.5985 42.713 32.7822 45.0993 32.7822 45.0993C32.7822 45.0993 42.3287 57.0266 40.2053 58.8355C38.0818 60.6443 34.4821 61.5094 32.7822 60.6443C31.0823 59.7792 27.6358 47.9639 27.6358 47.9639C27.6358 47.9639 20.5752 55.4065 18.4518 54.3841C16.3284 53.3617 13.8903 50.9655 14.0476 49.0964C14.2049 47.2273 25.1839 42.6344 25.1839 42.6344L21.8021 35.0077Z"
            fill="#E9C46A"
            stroke="#264653"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_6">
          <path
            id="Vector_6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.5573 46.4278L43.515 44.1519L52.6189 59.0799C52.6189 59.0799 64.1996 54.8623 65.2706 57.0713C66.3417 59.2803 67.7475 64.9033 63.1955 64.9703C58.6436 65.0372 46.929 64.9703 46.929 64.9703L37.5573 46.4278Z"
            fill="#E9C46A"
            stroke="#264653"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <g id="Group_7">
          <path
            id="Vector_7"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.6879 42.0341C90.7252 43.7242 76.2566 31.8974 63.2236 36.4195C57.9903 38.2353 72.8786 47.8242 72.8786 47.8242C72.8786 47.8242 58.1072 43.8027 57.7206 48.9937C57.334 54.1848 75.4684 59.227 78.8183 55.1214C82.1683 51.0159 78.218 44.9601 72.6879 42.0341Z"
            fill="#E9C46A"
            stroke="#264653"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
);

const preventDefault = (e: any) => {
  e.preventDefault();
};

const disableScroll = () => {
  document.body.addEventListener("touchmove", preventDefault, {
    passive: false,
  });
};
const enableScroll = () => {
  document.body.removeEventListener("touchmove", preventDefault);
};

const useProjectFromURL = (): string => {
  const pathname = usePathname();
  if (pathname.includes("shiba-inu")) return "Shiba Inu";
  if (pathname.includes("hashmatrix-sharpstakes")) return "SharpStakes";
  if (pathname.includes("afc")) return "AFC";
  if (pathname.includes("sohs")) return "SOHS";
  if (pathname.includes("IArt")) return "IArt";
  if (pathname.includes("homezai")) return "HomezAI";
  if (pathname.includes("easyaudit")) return "EasyAudit";
  if (pathname.includes("openlane")) return "Openlane";
  return "Work";
};

const useIsOnAbout = (): boolean => {
  const pathname = usePathname();
  return pathname.includes("about-me");
};

interface NavbarProps {
  colorMode?: "light" | "dark";
}
export const Navbar: React.FC<NavbarProps> = ({ colorMode }) => {
  const { activeTheme: theme } = usePortfolioTheme();
  const isOnAboutMe = useIsOnAbout();
  const projectDropDownText = useProjectFromURL();
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  React.useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
    if (open) {
      window.scrollTo(0, 0);
      disableScroll();
    } else {
      enableScroll();
    }
  }, [open, isMobile]);

  const isDark = colorMode
    ? colorMode === "dark"
    : theme.palette.mode === "dark";
  const textColor = isDark
    ? theme.palette.neutral[200]
    : theme.palette.primary.main;
  const icon = isDark ? <DarkLogo /> : <LightLogo />;
  const isOnProjectPage = projectDropDownText !== "Work";
  const mobileClipOffset = !isOnProjectPage ? "129px" : "62px";
  return (
    <Container maxWidth="lg">
      <BannerContainer mt={3}>
        <ButtonBase
          LinkComponent={Link}
          sx={{
            borderRadius: 2,
            p: 1,
            mx: -1,
            my: -1,
            "&:hover": {
              animation: `${shakeAnimation} 0.82s cubic-bezier(.36,.07,.19,.97) both`,
            },
          }}
          href="/"
        >
          {icon}
        </ButtonBase>
        <Box display={{ xs: "none", md: "flex" }} gap={3} alignItems="center">
          <Box
            px={2}
            display="flex"
            flexDirection="row"
            alignItems="center"
            sx={{
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                borderBottom: `2px solid ${textColor}`,
                transform: "translateY(1px)",
              },
              "#project-popover": {
                display: "none",
              },
              "&:hover > #project-popover": {
                display: "block",
              },
              transform: isOnProjectPage ? "translateY(1px)" : "",
              borderBottom: isOnProjectPage ? `2px solid ${textColor}` : "",
            }}
          >
            <Typography
              color={textColor}
              fontWeight={isOnProjectPage ? 700 : 400}
            >
              {projectDropDownText}
            </Typography>
            <ArrowDropDown sx={{ color: textColor, ml: 1 }} />
            <Card
              id="project-popover"
              sx={{
                position: "absolute",
                top: "24px",
                right: "0px",
                boxShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              <Box
                component={Link}
                href="/projects/afc"
                sx={{
                  p: 1,
                  minWidth: "165px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  "&:hover": {
                    borderLeft: `2px solid ${textColor}`,
                  },
                }}
              >
                <Typography>AFC</Typography>
                {getCookie(ACCESS_COOKIE_KEY) !== "true" ? (
                  <Lock sx={{ color: textColor }} />
                ) : (
                  <LockOpen sx={{ color: textColor }} />
                )}
              </Box>
              <Box
                component={Link}
                href="/projects/openlane"
                sx={{
                  p: 1,
                  minWidth: "165px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  "&:hover": {
                    borderLeft: `2px solid ${textColor}`,
                  },
                }}
              >
                <Typography>Openlane</Typography>
                {getCookie(AFC2_ACCESS_COOKIE_KEY) !== "true" ? (
                  <Lock sx={{ color: textColor }} />
                ) : (
                  <LockOpen sx={{ color: textColor }} />
                )}
              </Box>
              <Box
                component={Link}
                href="/projects/homezai"
                sx={{
                  p: 1,
                  minWidth: "165px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  "&:hover": {
                    borderLeft: `2px solid ${textColor}`,
                  },
                }}
              >
                <Typography>HomezAI</Typography>
                {getCookie(HOMEZ_ACCESS_COOKIE) !== "true" ? (
                  <Lock sx={{ color: textColor }} />
                ) : (
                  <LockOpen sx={{ color: textColor }} />
                )}
              </Box>
              <Box
                component={Link}
                href="/projects/easyaudit"
                sx={{
                  p: 1,
                  minWidth: "165px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  "&:hover": {
                    borderLeft: `2px solid ${textColor}`,
                  },
                }}
              >
                <Typography>EasyAudit</Typography>
                {getCookie(EA_ACCESS_COOKIE) !== "true" ? (
                  <Lock sx={{ color: textColor }} />
                ) : (
                  <LockOpen sx={{ color: textColor }} />
                )}
              </Box>
              <Box
                component={Link}
                href="/projects/IArt"
                sx={{
                  p: 1,
                  minWidth: "165px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  "&:hover": {
                    borderLeft: `2px solid ${textColor}`,
                  },
                }}
              >
                <Typography>IArt</Typography>
              </Box>
              <Box
                component={Link}
                href="/projects/sohs"
                sx={{
                  p: 1,
                  minWidth: "165px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  "&:hover": {
                    borderLeft: `2px solid ${textColor}`,
                  },
                }}
              >
                <Typography>SOHS</Typography>
              </Box>
              <Box
                component={Link}
                href="/projects/hashmatrix-sharpstakes"
                sx={{
                  p: 1,
                  minWidth: "165px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  "&:hover": {
                    borderLeft: `2px solid ${textColor}`,
                  },
                }}
              >
                <Typography>SharpStakes</Typography>
              </Box>
              <Box
                component={Link}
                href="/projects/shiba-inu"
                sx={{
                  p: 1,
                  minWidth: "165px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  "&:hover": {
                    borderLeft: `2px solid ${textColor}`,
                  },
                }}
              >
                <Typography>Shiba Inu</Typography>
              </Box>
            </Card>
          </Box>
          <Box
            px={2}
            component={Link}
            href="/about-me"
            sx={{
              borderBottom: isOnAboutMe ? `2px solid ${textColor}` : "",
              transform: isOnAboutMe ? "translateY(1px)" : "",
              textDecoration: "none",
              "&:hover": {
                borderBottom: `2px solid ${textColor}`,
                transform: "translateY(1px)",
              },
            }}
          >
            <Typography color={textColor} fontWeight={isOnAboutMe ? 700 : 400}>
              About
            </Typography>
          </Box>
          <Box
            px={2}
            component={Link}
            href="/MoeAls_SeniorProductDesigner.pdf"
            target="_blank"
            sx={{
              textDecoration: "none",
              "&:hover": {
                borderBottom: `2px solid ${textColor}`,
                transform: "translateY(1px)",
              },
            }}
          >
            <Typography color={textColor} fontWeight={400}>
              Resume <OpenInNew sx={{ fontSize: "16px", mb: -0.4, ml: 0.2 }} />
            </Typography>
          </Box>
        </Box>
        <Box display={{ xs: "block", md: "none" }}>
          {/* @ts-ignore */}
          <MobileNavLinkContainer
            sx={{
              clipPath: open
                ? `circle(150% at calc(100% - 32px) ${mobileClipOffset})`
                : `circle(0% at calc(100% - 32px) ${mobileClipOffset})`,
            }}
          >
            <Box p={2} mt={1}>
              <ButtonBase
                LinkComponent={Link}
                sx={{ borderRadius: 2, p: 1, mx: -1, my: -1 }}
                href="/"
              >
                {icon}
              </ButtonBase>
            </Box>
            <Box position="absolute" top={24} right={16}>
              <NavLinkContainer
                sx={{
                  top: "-6px",
                }}
              >
                <Hamburger toggled={open} toggle={setOpen} color={textColor} />
              </NavLinkContainer>
            </Box>
            <Box p={1} px={2}>
              <ButtonBase
                component={Link}
                href="/projects/afc"
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  mb: 1,
                }}
              >
                <Box
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography mr={1}>AFC</Typography>
                  {getCookie(ACCESS_COOKIE_KEY) !== "true" ? (
                    <Lock sx={{ color: textColor, fontSize: "16px" }} />
                  ) : (
                    <LockOpen sx={{ color: textColor, fontSize: "16px" }} />
                  )}
                </Box>
              </ButtonBase>
              <ButtonBase
                component={Link}
                href="/projects/openlane"
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  mb: 1,
                }}
              >
                <Box
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography mr={1}>Openlane</Typography>
                  {getCookie(AFC2_ACCESS_COOKIE_KEY) !== "true" ? (
                    <Lock sx={{ color: textColor, fontSize: "16px" }} />
                  ) : (
                    <LockOpen sx={{ color: textColor, fontSize: "16px" }} />
                  )}
                </Box>
              </ButtonBase>
              <ButtonBase
                component={Link}
                href="/projects/homezai"
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  mb: 1,
                }}
              >
                <Box
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography mr={1}>HomezAI</Typography>
                  {getCookie(HOMEZ_ACCESS_COOKIE) !== "true" ? (
                    <Lock sx={{ color: textColor, fontSize: "16px" }} />
                  ) : (
                    <LockOpen sx={{ color: textColor, fontSize: "16px" }} />
                  )}
                </Box>
              </ButtonBase>
              <ButtonBase
                component={Link}
                href="/projects/easyaudit"
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  mb: 1,
                }}
              >
                <Box
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography mr={1}>EasyAudit</Typography>
                  {getCookie(EA_ACCESS_COOKIE) !== "true" ? (
                    <Lock sx={{ color: textColor, fontSize: "16px" }} />
                  ) : (
                    <LockOpen sx={{ color: textColor, fontSize: "16px" }} />
                  )}
                </Box>
              </ButtonBase>
              <ButtonBase
                component={Link}
                href="/projects/shiba-inu"
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                  mt: 1,
                }}
              >
                <Typography>Shiba Inu</Typography>
              </ButtonBase>
              <ButtonBase
                component={Link}
                href="/projects/hashmatrix-sharpstakes"
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                }}
              >
                <Typography>SharpStakes</Typography>
              </ButtonBase>
              <ButtonBase
                component={Link}
                href="/projects/sohs"
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                }}
              >
                <Typography>SOHS</Typography>
              </ButtonBase>
              <ButtonBase
                component={Link}
                href="/projects/IArt"
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                  color: textColor,
                }}
              >
                <Typography>IArt</Typography>
              </ButtonBase>

              <Divider />
              <Box mt={2}>
                <ButtonBase
                  component={Link}
                  href="/about-me"
                  sx={{
                    p: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textDecoration: "none",
                    color: textColor,
                    mb: 1,
                  }}
                >
                  <Typography>About Me</Typography>
                </ButtonBase>
                <ButtonBase
                  component={Link}
                  href="/MoeAls_SeniorProductDesigner.pdf"
                  target="_blank"
                  sx={{
                    p: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textDecoration: "none",
                    color: textColor,
                    mb: 1,
                  }}
                >
                  <Box
                    display="flex"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography mr={1}>Download Resume</Typography>
                    <OpenInNew
                      sx={{
                        fontSize: "16px",
                        color: textColor,
                      }}
                    />
                  </Box>
                </ButtonBase>
              </Box>
            </Box>
          </MobileNavLinkContainer>
          <NavLinkContainer
            sx={{
              right: "-4px",
            }}
          >
            <Hamburger toggled={open} toggle={setOpen} color={textColor} />
          </NavLinkContainer>
        </Box>
      </BannerContainer>
    </Container>
  );
};

const BannerContainer = styled(Box)`
  position: relative;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  display: flex;
  width: 100%;
`;

interface MobileNavLinkContainerProps {
  $open: boolean;
}
const MobileNavLinkContainer = styled(Card)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 10;
  transition: all 0.75s ease-in-out;
`;

const NavLinkContainer = styled(Box)`
  position: absolute;
  top: 0px;
  right: -8px;
  height: 80px;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;

  & > .hamburger-react {
    -webkit-tap-highlight-color: transparent !important;
  }
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(2.5px); }
  50% { transform: translateX(-2.5px); }
  75% { transform: translateX(2.5px); }
  100% { transform: translateX(0); }
`;
