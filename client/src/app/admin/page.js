"use client";

import {
    Box,
    Card,
    CardContent,
    Container,
    Typography,
    Stack,
    Avatar,
} from "@mui/material";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";


export default function AdminPage() {

    const {
        user,
    } = useAuth();



    return (

        <ProtectedRoute role="ADMIN">

            <Navbar />

            <Container maxWidth="md">

                <Box
                    sx={{
                        minHeight: "calc(100vh - 64px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >

                    <Card
                        elevation={6}
                        sx={{
                            width: "100%",
                            borderRadius: 3,
                        }}
                    >

                        <CardContent
                            sx={{
                                p: 5,
                            }}
                        >

                            <Stack
                                spacing={3}
                                alignItems="center"
                            >

                                <Avatar
                                    sx={{
                                        width: 90,
                                        height: 90,
                                    }}
                                >

                                    <AdminPanelSettingsIcon
                                        sx={{
                                            fontSize: 55,
                                        }}
                                    />

                                </Avatar>



                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                >
                                    Admin Dashboard
                                </Typography>



                                <Typography
                                    color="text.secondary"
                                >
                                    Welcome, {user?.name}
                                </Typography>


                            </Stack>



                            <Box
                                sx={{
                                    mt: 4,
                                }}
                            >

                                <Typography>
                                    <strong>User ID:</strong>{" "}
                                    {user?.id}
                                </Typography>


                                <Typography>
                                    <strong>Email:</strong>{" "}
                                    {user?.email}
                                </Typography>


                                <Typography>
                                    <strong>Role:</strong>{" "}
                                    {user?.role}
                                </Typography>


                                <Typography
                                    sx={{
                                        mt: 3,
                                    }}
                                >
                                    You have administrator access.
                                </Typography>

                            </Box>


                        </CardContent>

                    </Card>


                </Box>


            </Container>


        </ProtectedRoute>

    );

}