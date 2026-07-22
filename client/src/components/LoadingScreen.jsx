"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingScreen({ message = "Loading..." }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <CircularProgress size={50} />

      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}
