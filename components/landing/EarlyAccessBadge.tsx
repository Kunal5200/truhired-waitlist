"use client";

import { Box, Typography } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { nunito } from "@/lib/fonts";

export default function EarlyAccessBadge() {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: { xs: 1.75, sm: 2.25 },
        py: 0.85,
        borderRadius: "9999px",
        bgcolor: "rgba(255, 255, 255, 0.045)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow:
          "0 4px 20px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        mb: { xs: 2.5, sm: 3.5 },
        animation: "floatBadge 5s ease-in-out infinite",
        transition: "all 0.25s ease",
        cursor: "default",
        "&:hover": {
          borderColor: "rgba(255, 255, 255, 0.22)",
          bgcolor: "rgba(255, 255, 255, 0.065)",
        },
      }}
    >
      <ElectricBoltIcon
        sx={{
          fontSize: 15,
          color: "#f59e0b",
          display: "flex",
          alignItems: "center",
        }}
      />
      <Typography
        component="span"
        sx={{
          fontFamily: nunito.style.fontFamily,
          fontSize: { xs: "12.5px", sm: "13.5px" },
          fontWeight: 500,
          color: "#d1d5db",
          letterSpacing: "0.25px",
          lineHeight: 1,
        }}
      >
        Early Access — Be First
      </Typography>
    </Box>
  );
}
