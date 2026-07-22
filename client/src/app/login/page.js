"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    InputAdornment,
    IconButton,
    Alert,
    CircularProgress,
} from "@mui/material";

import {
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

import { login } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";


export default function LoginPage() {

    const router = useRouter();

    const {
        setUser,
    } = useAuth();


    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        try {

            setLoading(true);


            const result = await login({
                email,
                password,
            });



            setUser(result.user);



            if (result.user.role === "ADMIN") {

                router.push("/admin");

            } else {

                router.push("/dashboard");

            }


        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Login failed."
            );

        } finally {

            setLoading(false);

        }

    };



    return (

        <Container maxWidth="sm">

            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

                <Paper
                    elevation={6}
                    sx={{
                        width: "100%",
                        p: 4,
                        borderRadius: 3,
                    }}
                >


                    <Typography
                        variant="h4"
                        textAlign="center"
                        fontWeight="bold"
                    >
                        Login
                    </Typography>



                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{
                            mt: 1,
                            mb: 4,
                        }}
                    >
                        Login to your account
                    </Typography>



                    {error && (

                        <Alert
                            severity="error"
                            sx={{
                                mb: 2,
                            }}
                        >
                            {error}
                        </Alert>

                    )}



                    <Box
                        component="form"
                        onSubmit={handleLogin}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >


                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            fullWidth
                            required
                        />



                        <TextField
                            label="Password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            fullWidth
                            required

                            InputProps={{
                                endAdornment: (

                                    <InputAdornment
                                        position="end"
                                    >

                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(
                                                    !showPassword
                                                )
                                            }
                                        >

                                            {
                                                showPassword
                                                    ?
                                                    <VisibilityOff />
                                                    :
                                                    <Visibility />
                                            }

                                        </IconButton>


                                    </InputAdornment>

                                ),
                            }}

                        />



                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={loading}
                        >

                            {
                                loading
                                    ?
                                    <CircularProgress
                                        size={25}
                                    />
                                    :
                                    "Login"
                            }


                        </Button>


                    </Box>

                    <Typography
                        textAlign="center"
                        sx={{ mt: 3 }}
                    >
                        {"Don't have an account?"}{" "}
                        <Link
                            href="/register"
                            style={{
                                color: "#1976d2",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                        >
                            Register
                        </Link>
                    </Typography>


                </Paper>


            </Box>


        </Container>

    );

}