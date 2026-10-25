"use client";

import { useMemo } from "react";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { nunito, stack_sana } from "@/lib/fonts";
import Antigravity from "@/components/background/Antigravity";
import AtmosphereGlow from "@/components/landing/AtmosphereGlow";
import PlanetHorizon from "@/components/landing/PlanetHorizon";
import EarlyAccessBadge from "@/components/landing/EarlyAccessBadge";
import HeroHeading from "@/components/landing/HeroHeading";
import HeroSubtitle from "@/components/landing/HeroSubtitle";
import WaitlistForm from "@/components/landing/WaitlistForm";

export default function Home() {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: {
            default: "#060913",
            paper: "rgba(30, 41, 59, 0.45)",
          },
          text: {
            primary: "#ffffff",
            secondary: "#94a3b8",
          },
        },
        typography: {
          fontFamily: nunito.style.fontFamily,
          h1: {
            fontFamily: stack_sana.style.fontFamily,
          },
          button: {
            fontFamily: stack_sana.style.fontFamily,
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 50% 25%, #0c1222 0%, #070b16 45%, #04060c 85%, #020306 100%)",
          px: { xs: 2, sm: 3 },
          py: 4,
          userSelect: "none",
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "auto",
          }}
        >
          <Antigravity
            count={1100}
            particleShape="sphere"
            particleSize={0.32}
            colors={[
              "#fef3c7",
              "#fed7aa",
              "#fce7f3",
              "#f3e8ff",
              "#e0e7ff",
              "#e0f2fe",
            ]}
            colorMode="vertical"
            ambient={0.25}
            ringRadius={3.5}
            magnetRadius={5.0}
            waveSpeed={0.35}
            waveAmplitude={0.5}
            rotationSpeed={0.05}
            depthFactor={1.3}
            pulseSpeed={2.2}
            particleVariance={1.1}
            autoAnimate={true}
            interactive={true}
            clickBurst={true}
            opacity={0.52}
          />
        </Box>

        <AtmosphereGlow />
        <PlanetHorizon />

        <Box
          component="section"
          sx={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 960,
            width: "100%",
            mt: { xs: -2, md: -6 },
            pointerEvents: "auto",
          }}
        >
          <EarlyAccessBadge />
          <HeroHeading />
          <HeroSubtitle />
          <WaitlistForm />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
