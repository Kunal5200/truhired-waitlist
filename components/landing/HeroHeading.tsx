"use client";

import { Box, Typography } from "@mui/material";
import { stack_sana } from "@/lib/fonts";

export default function HeroHeading() {
  return (
    <Typography
      component="h1"
      variant="h1"
      sx={{
        fontFamily: stack_sana.style.fontFamily,
        fontSize: { xs: "32px", sm: "46px", md: "64px" },
        fontWeight: 400,
        lineHeight: 1.18,
        letterSpacing: "-0.015em",
        color: "#ffffff",
        mb: 2.5,
        textWrap: "balance",
      }}
    >
      Something{" "}
      <Box
        component="span"
        sx={{
          fontStyle: "italic",
          fontWeight: 300,
          background:
            "linear-gradient(180deg, #f8fafc 0%, #cbd5e1 55%, #94a3b8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          px: "2px",
        }}
      >
        Extraordinary
      </Box>{" "}
      Is
      <br />
      Coming Soon
    </Typography>
  );
}
