import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <BannerContainer mt={3}>
        <Box>
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
        </Box>
        <Box display="flex" gap={3} alignItems="center">
          <Box px={2}>
            <Typography color={theme.palette.primary.main}>About</Typography>
          </Box>
          <Box px={2}>
            <Typography color={theme.palette.primary.main}>Work</Typography>
          </Box>
          <IconButton>
            <WbSunnyOutlinedIcon />
          </IconButton>
          <Button
            variant="contained"
            LinkComponent={Link}
            href="/resume_2024.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
        </Box>
      </BannerContainer>
    </Container>
  );
};

const BannerContainer = styled(Box)`
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  display: flex;
  width: 100%;
`;
