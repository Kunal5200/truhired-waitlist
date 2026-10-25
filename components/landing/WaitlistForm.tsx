"use client";

import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  InputBase,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlined";
import { nunito, stack_sana } from "@/lib/fonts";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const handleReset = () => {
    setEmail("");
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 480, position: "relative" }}>
      {status === "success" ? (
        <Box
          sx={{
            bgcolor: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            color: "#6ee7b7",
            py: 2,
            px: 2.5,
            borderRadius: "12px",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.75,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 18, color: "#34d399" }} />
            <Typography
              sx={{
                fontFamily: nunito.style.fontFamily,
                fontSize: "14.5px",
                color: "#6ee7b7",
              }}
            >
              You&apos;re on the list! We&apos;ll notify you when we launch.
            </Typography>
          </Box>
          <Button
            variant="text"
            onClick={handleReset}
            sx={{
              color: "#a7f3d0",
              textTransform: "none",
              textDecoration: "underline",
              fontSize: "13px",
              fontFamily: nunito.style.fontFamily,
              minWidth: 0,
              p: 0.5,
              "&:hover": {
                color: "#ffffff",
                bgcolor: "transparent",
                textDecoration: "underline",
              },
            }}
          >
            Sign up another email
          </Button>
        </Box>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            bgcolor: "rgba(30, 41, 59, 0.45)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "12px",
            p: { xs: 1, sm: "6px 6px 6px 18px" },
            gap: { xs: 1, sm: 0 },
            boxShadow:
              "0 12px 36px -4px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
            transition: "all 0.25s ease",
            "&:focus-within": {
              borderColor: "rgba(255, 255, 255, 0.28)",
              boxShadow:
                "0 12px 40px -4px rgba(0, 0, 0, 0.65), 0 0 20px rgba(255, 255, 255, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.18)",
            },
          }}
        >
          <InputBase
            id="email-input"
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setErrorMessage("");
            }}
            disabled={status === "loading"}
            aria-label="Your Email Address"
            required
            sx={{
              flex: 1,
              width: "100%",
              color: "#ffffff",
              fontSize: "15px",
              fontFamily: nunito.style.fontFamily,
              px: { xs: 1, sm: 0.5 },
              py: 0.8,
              "& input": {
                textAlign: { xs: "center", sm: "left" },
              },
              "& input::placeholder": {
                color: "#64748b",
                opacity: 1,
                fontWeight: 400,
              },
            }}
          />
          <Button
            id="notify-button"
            type="submit"
            variant="contained"
            disabled={status === "loading"}
            sx={{
              bgcolor: "#ffffff",
              color: "#0b0f19",
              fontWeight: 600,
              fontSize: "14px",
              fontFamily: stack_sana.style.fontFamily,
              textTransform: "none",
              px: 2.75,
              py: 1.3,
              borderRadius: "8px",
              width: { xs: "100%", sm: "auto" },
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                bgcolor: "#f1f5f9",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 16px rgba(255, 255, 255, 0.25)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
              "&.Mui-disabled": {
                bgcolor: "rgba(255, 255, 255, 0.75)",
                color: "#0b0f19",
              },
            }}
          >
            {status === "loading" ? (
              <>
                <CircularProgress
                  size={15}
                  sx={{ color: "#0b0f19", mr: 1 }}
                />
                <span>Sending...</span>
              </>
            ) : (
              "Notify me"
            )}
          </Button>
        </Box>
      )}

      <Collapse in={status === "error" && !!errorMessage}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.75,
            mt: 1.5,
            color: "#f87171",
          }}
        >
          <ErrorOutlineIcon sx={{ fontSize: 16 }} />
          <Typography
            sx={{
              fontSize: "13.5px",
              fontFamily: nunito.style.fontFamily,
            }}
          >
            {errorMessage}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
