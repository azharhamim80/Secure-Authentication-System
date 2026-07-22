"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

import {
    getProfile,
    logout,
} from "@/services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);



    const loadUser = async () => {

        try {

            const response = await getProfile();

            setUser(response.user);

            return response.user;

        } catch (error) {

            setUser(null);

            return null;

        } finally {

            setLoading(false);

        }

    };



    const logoutUser = async () => {

        try {

            await logout();

        } catch (error) {

            console.error(error);

        }

        setUser(null);

    };



    useEffect(() => {

        loadUser();

    }, []);



    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                loadUser,
                logoutUser,
                setUser,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}



export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {

        throw new Error(
            "useAuth must be used inside AuthProvider."
        );

    }

    return context;

}