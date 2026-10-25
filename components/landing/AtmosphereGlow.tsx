"use client";

import { Box } from "@mui/material";

export default function AtmosphereGlow() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "95vw", md: "850px" },
          height: 420,
          background:
            "radial-gradient(ellipse 60% 45% at 50% 80%, rgba(215, 235, 255, 0.28) 0%, rgba(165, 205, 255, 0.16) 28%, rgba(125, 170, 255, 0.08) 50%, rgba(99, 102, 241, 0.03) 70%, transparent 85%)",
          filter: "blur(28px)",
          animation: "pulseGlow 7s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 220,
          height: 380,
          background:
            "linear-gradient(to top, rgba(255, 255, 255, 0.15) 0%, rgba(191, 219, 254, 0.08) 45%, transparent 100%)",
          filter: "blur(26px)",
          animation: "pillarBreathe 6s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 70,
          left: "14%",
          width: 90,
          height: 260,
          background:
            "linear-gradient(to top, rgba(147, 197, 253, 0.09) 0%, rgba(147, 197, 253, 0.03) 55%, transparent 100%)",
          filter: "blur(22px)",
          animation: "pillarBreathe 8s ease-in-out infinite",
          animationDelay: "1.5s",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 70,
          right: "18%",
          width: 110,
          height: 280,
          background:
            "linear-gradient(to top, rgba(147, 197, 253, 0.09) 0%, rgba(147, 197, 253, 0.03) 55%, transparent 100%)",
          filter: "blur(22px)",
          animation: "pillarBreathe 7.5s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />
    </Box>
  );
}
