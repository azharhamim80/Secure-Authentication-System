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
    Alert,
    CircularProgress,
    InputAdornment,
    IconButton,
} from "@mui/material";

import {
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

import { register } from "@/services/auth";



export default function RegisterPage() {

    const router = useRouter();


    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");



    const handleRegister = async (e) => {

        e.preventDefault();

        setError("");

        setSuccess("");


        try {

            setLoading(true);


            const result = await register({
                name,
                email,
                password,
            });


            setSuccess(result.message);


            setTimeout(() => {

                router.push("/login");

            }, 1500);



        } catch (error) {


            setError(
                error.response?.data?.message ||
                "Registration failed."
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
                        Register
                    </Typography>



                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{
                            mt: 1,
                            mb: 4,
                        }}
                    >
                        Create your account
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



                    {success && (

                        <Alert
                            severity="success"
                            sx={{
                                mb: 2,
                            }}
                        >
                            {success}
                        </Alert>

                    )}



                    <Box
                        component="form"
                        onSubmit={handleRegister}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >


                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            fullWidth
                            required
                        />



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
                                    "Register"
                            }


                        </Button>


                    </Box>

                    <Typography
                        textAlign="center"
                        sx={{ mt: 3 }}
                    >
                        {"Already have an account?"}{" "}
                        <Link
                            href="/login"
                            style={{
                                color: "#1976d2",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                        >
                            Login
                        </Link>
                    </Typography>


                </Paper>


            </Box>


        </Container>

    );

}