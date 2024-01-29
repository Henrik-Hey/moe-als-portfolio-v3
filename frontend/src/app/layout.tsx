"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { open_sans, raleway } from "@/fonts";
import { PortfolioThemeProvider } from "@/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <PortfolioThemeProvider>
          <body className={[open_sans.className, raleway.className].join(" ")}>
            {children}
          </body>
        </PortfolioThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
