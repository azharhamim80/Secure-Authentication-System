"use client";

import { createTheme } from "@mui/material/styles";


const theme = createTheme({

    palette: {

        primary: {
            main: "#1976d2",
        },


        secondary: {
            main: "#9c27b0",
        },


        error: {
            main: "#d32f2f",
        },


        background: {

            default: "#f5f5f5",

            paper: "#ffffff",

        },

    },


    typography: {

        fontFamily: "Arial, sans-serif",


        h4: {

            fontWeight: 700,

        },


        h5: {

            fontWeight: 600,

        },

    },


    shape: {

        borderRadius: 12,

    },


});


export default theme;