"use client";

import { Typography } from "@mui/material";
import { nunito } from "@/lib/fonts";

export default function HeroSubtitle() {
  return (
    <Typography
      variant="body1"
      sx={{
        fontFamily: nunito.style.fontFamily,
        fontSize: { xs: "14.5px", sm: "16px", md: "17.5px" },
        fontWeight: 400,
        lineHeight: 1.62,
        color: "#94a3b8",
        maxWidth: 540,
        mb: { xs: 3.5, sm: 4.25 },
        textWrap: "balance",
      }}
    >
      Be the first to know when we launch. Join our community of
      <br />
      early supporters and get exclusive updates.
    </Typography>
  );
}
