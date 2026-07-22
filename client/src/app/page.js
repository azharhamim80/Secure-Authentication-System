"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { useAuth } from "@/context/AuthContext";


export default function HomePage() {

    const router = useRouter();

    const {
        user,
        loading,
    } = useAuth();

    useEffect(() => {
        if (!loading) {
            if (user) {
                if (user.role === "ADMIN") {
                    router.replace("/admin");
                } else {
                    router.replace("/dashboard");
                }
            } else {
                router.replace("/login");
            }
        }
    }, [user, loading, router]);



    return (

        <Container maxWidth="md">

            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <Paper
                    elevation={6}
                    sx={{
                        width: "100%",
                        p: 6,
                        textAlign: "center",
                        borderRadius: 3,
                    }}
                >

                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        gutterBottom
                    >
                        Authentication System
                    </Typography>



                    <Typography
                        color="text.secondary"
                        sx={{
                            mb: 4,
                        }}
                    >
                        Next.js + Material UI + Express + Prisma + JWT
                    </Typography>



                    {user ? (

                        <Stack
                            spacing={2}
                            alignItems="center"
                        >

                            <Typography
                                variant="h6"
                            >
                                Welcome back, {user.name}
                            </Typography>


                            <Button
                                variant="contained"
                                component={Link}
                                href="/dashboard"
                            >
                                Go to Dashboard
                            </Button>


                        </Stack>


                    ) : (


                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            spacing={2}
                            justifyContent="center"
                        >

                            <Button
                                variant="contained"
                                size="large"
                                component={Link}
                                href="/login"
                            >
                                Login
                            </Button>


                            <Button
                                variant="outlined"
                                size="large"
                                component={Link}
                                href="/register"
                            >
                                Register
                            </Button>


                        </Stack>


                    )}



                </Paper>


            </Box>


        </Container>

    );

}