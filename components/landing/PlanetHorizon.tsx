"use client";

import { Box } from "@mui/material";

export default function PlanetHorizon() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: { xs: 220, md: 280 },
        pointerEvents: "none",
        zIndex: 3,
      }}
    >
      <svg
        style={{ width: "100%", height: "100%", display: "block" }}
        viewBox="0 0 1600 360"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rimStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="15%" stopColor="#93c5fd" stopOpacity="0.08" />
            <stop offset="35%" stopColor="#bfdbfe" stopOpacity="0.45" />
            <stop offset="47%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="53%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#bfdbfe" stopOpacity="0.45" />
            <stop offset="85%" stopColor="#93c5fd" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="planetBody" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#04060d" />
            <stop offset="30%" stopColor="#020307" />
            <stop offset="100%" stopColor="#010204" />
          </linearGradient>

          <filter id="rimGlow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 0,220 Q 800,80 1600,220 L 1600,360 L 0,360 Z"
          fill="url(#planetBody)"
        />
        <path
          d="M 0,220 Q 800,80 1600,220"
          stroke="url(#rimStroke)"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.35"
          filter="url(#rimGlow)"
        />
        <path
          d="M 0,220 Q 800,80 1600,220"
          stroke="url(#rimStroke)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M 0,220 Q 800,80 1600,220"
          stroke="url(#rimStroke)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="1"
        />
      </svg>
    </Box>
  );
}
