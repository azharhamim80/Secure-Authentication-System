"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Box, CircularProgress } from "@mui/material";

import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const router = useRouter();

  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");

        return;
      }

      if (role && user.role !== role) {
        router.replace("/dashboard");
      }
    }
  }, [loading, user]);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return null;
  }

  if (role && user.role !== role) {
    return null;
  }

  return children;
}
