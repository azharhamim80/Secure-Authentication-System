"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const router = useRouter();

  const { user, logoutUser } = useAuth();

  const handleLogout = async () => {
    await logoutUser();

    router.replace("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          Authentication System
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {!user && (
            <>
              <Button color="inherit" component={Link} href="/login">
                Login
              </Button>

              <Button color="inherit" component={Link} href="/register">
                Register
              </Button>
            </>
          )}

          {user && (
            <>
              <Button color="inherit" component={Link} href="/dashboard">
                Dashboard
              </Button>

              {user.role === "ADMIN" && (
                <Button color="inherit" component={Link} href="/admin">
                  Admin
                </Button>
              )}

              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
