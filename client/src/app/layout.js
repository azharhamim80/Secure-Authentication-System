import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import ThemeRegistry from "@/theme/ThemeRegistry";
import { AuthProvider } from "@/context/AuthContext";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});


const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});



export const metadata = {
    title: "Authentication System",
    description: "Full stack authentication system",
};



export default function RootLayout({
    children,
}) {

    return (

        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >

            <body>

                <ThemeRegistry>

                    <AuthProvider>

                        {children}

                    </AuthProvider>

                </ThemeRegistry>


            </body>

        </html>

    );

}