import React from "react";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  ScopedCssBaseline,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";

export interface ChartDataPoint {
  title: string;
  data: [number, number];
}

export interface ChartCardItem {
  title: string;
  body: string;
}

export interface ProjectDataChartProps {
  colors: [string, string];
  backgroundColor?: string;
  data: ChartDataPoint[];
  subtitle: string;
  caption: string;
  cardColumns?: [ChartCardItem[], ChartCardItem[]];
}

export const ProjectDataChart: React.FC<ProjectDataChartProps> = ({
  colors,
  data,
  subtitle,
  caption,
  cardColumns,
  backgroundColor,
}) => {
  const theme = useTheme();

  const height = 260;
  const maxDataValue = data
    .map(({ data }) => data)
    .flat()
    .sort()
    .reverse()[0];

  const isDark = theme.palette.mode === "dark";
  const border = isDark ? "none" : `1px solid ${theme.palette.neutral[100]}`;
  return (
    <Box width="1392px" display="flex" flexDirection="column" gap={2}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          p: 6,
          backgroundColor: backgroundColor,
        }}
      >
        <Box width="100%" position="relative" mb={8}>
          <Typography variant="body1" fontWeight={700} width="520px">
            {subtitle}
          </Typography>
          <Typography variant="body2" width="520px">
            {caption}
          </Typography>
          <Box
            position="absolute"
            top={0}
            right={0}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            gap={1}
          >
            <Box
              display="flex"
              gap={1}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography variant="body2">Mobile</Typography>
              <Box
                width="24px"
                height="24px"
                sx={{ background: colors[0], borderRadius: "50%" }}
              />
            </Box>
            <Box
              display="flex"
              gap={1}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography variant="body2">Web</Typography>
              <Box
                width="24px"
                height="24px"
                sx={{ background: colors[1], borderRadius: "50%" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          alignSelf="stretch"
          gap={8}
          height={height}
        >
          {data.map(({ title, data: itemData }, index) => (
            <Box
              display="flex"
              flex={1}
              alignItems="flex-end"
              justifyContent="flex-end"
              gap={1}
              height={height}
              key={index}
            >
              <Box
                display="flex"
                width="16px"
                height="16px"
                sx={{
                  transformOrigin: "top left",
                  transform: "rotate(-90deg) translateX(-16px)",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={600}
                  width={height}
                  whiteSpace="nowrap"
                >
                  {title}
                </Typography>
              </Box>
              <Box
                flex={1}
                display="flex"
                alignItems="flex-end"
                height={height}
              >
                {colors.map((color, cIndex) => (
                  <Box
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    height={height}
                    key={cIndex}
                  >
                    <Typography variant="body2" textAlign="center">
                      {itemData[cIndex]}
                    </Typography>
                    <Box
                      width="100%"
                      minHeight={40}
                      height={height * (itemData[cIndex] / maxDataValue) - 18}
                      sx={{ background: color }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {cardColumns && (
        <Box display="flex" gap={2} width="1440px">
          {cardColumns.map((column, index) => (
            <Box
              display="flex"
              flex={1}
              flexDirection="column"
              gap={3}
              key={index}
              sx={{
                whiteSpace: "wrap",
              }}
            >
              {column.map(({ title, body }, cIndex) => (
                <Card
                  key={cIndex}
                  sx={{
                    p: 3,
                    border,
                    flex: 1,
                    whiteSpace: "wrap",
                  }}
                >
                  <Typography
                    variant="body1"
                    color={colors[0]}
                    fontWeight={500}
                    mb={1.5}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1">{body}</Typography>
                </Card>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
