"use client";

import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Stack,
    Typography,
    Avatar,
    Button,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";


export default function DashboardPage() {

    const router = useRouter();

    const {
        user,
        logoutUser,
    } = useAuth();



    const handleLogout = async () => {

        await logoutUser();

        router.replace("/login");

    };



    return (

        <ProtectedRoute>

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
                                alignItems="center"
                                spacing={3}
                            >

                                <Avatar
                                    sx={{
                                        width: 90,
                                        height: 90,
                                    }}
                                >

                                    <PersonIcon
                                        sx={{
                                            fontSize: 50,
                                        }}
                                    />

                                </Avatar>



                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                >
                                    Welcome, {user?.name}
                                </Typography>



                                <Typography
                                    color="text.secondary"
                                >
                                    You are successfully authenticated.
                                </Typography>


                            </Stack>



                            <Divider
                                sx={{
                                    my: 4,
                                }}
                            />



                            <Stack
                                spacing={2}
                            >

                                <Typography>
                                    <strong>User ID:</strong>{" "}
                                    {user?.id}
                                </Typography>


                                <Typography>
                                    <strong>Name:</strong>{" "}
                                    {user?.name}
                                </Typography>


                                <Typography>
                                    <strong>Email:</strong>{" "}
                                    {user?.email}
                                </Typography>


                                <Typography>
                                    <strong>Role:</strong>{" "}
                                    {user?.role}
                                </Typography>


                                <Typography>
                                    <strong>Created:</strong>{" "}
                                    {
                                        user?.createdAt
                                            ? new Date(
                                                user.createdAt
                                            ).toLocaleString()
                                            : ""
                                    }
                                </Typography>


                            </Stack>



                            <Button
                                fullWidth
                                variant="contained"
                                color="error"
                                size="large"
                                startIcon={<LogoutIcon />}
                                sx={{
                                    mt: 5,
                                }}
                                onClick={handleLogout}
                            >

                                Logout

                            </Button>



                        </CardContent>

                    </Card>


                </Box>


            </Container>


        </ProtectedRoute>

    );

}