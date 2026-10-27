"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { nunito } from "@/lib/fonts";

export default function Navbar() {
  return (
    <Box
      component="header"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2.5, sm: 4, md: 6 },
        py: { xs: 2.5, sm: 3.5 },
        pointerEvents: "auto",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
        }}
        aria-label="TruHired Home"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "opacity 0.25s ease, transform 0.25s ease",
            "&:hover": {
              opacity: 0.92,
              transform: "scale(1.02)",
            },
          }}
        >
          <Image
            src="/truhired-logo-white.png"
            alt="TruHired Logo"
            width={436}
            height={183}
            priority
            unoptimized
            style={{
              height: "auto",
              width: "auto",
              maxHeight: "36px",
              display: "block",
              filter: "drop-shadow(0 2px 10px rgba(255, 255, 255, 0.08))",
            }}
          />
        </Box>
      </Link>

      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1.25,
          px: { xs: 1.5, sm: 2 },
          py: 0.65,
          borderRadius: "9999px",
          bgcolor: "rgba(255, 255, 255, 0.035)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "all 0.25s ease",
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.18)",
            bgcolor: "rgba(255, 255, 255, 0.055)",
          },
        }}
      >
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            bgcolor: "#10b981",
            boxShadow: "0 0 10px #10b981, 0 0 4px #10b981",
            animation: "pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "@keyframes pulseDot": {
              "0%, 100%": {
                opacity: 1,
                transform: "scale(1)",
              },
              "50%": {
                opacity: 0.4,
                transform: "scale(0.85)",
              },
            },
          }}
        />
        <Typography
          component="span"
          sx={{
            fontFamily: nunito.style.fontFamily,
            fontSize: { xs: "12px", sm: "13px" },
            fontWeight: 500,
            color: "#cbd5e1",
            letterSpacing: "0.2px",
            lineHeight: 1,
          }}
        >
          Launching Soon
        </Typography>
      </Box>
    </Box>
  );
}
