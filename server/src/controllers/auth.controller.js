const prisma = require("../config/prisma");

const {
    registerUser,
    loginUser,
    logoutUser,
} = require("../services/auth.service");



const register = async (req, res) => {
    try {

        const result = await registerUser(req.body);

        return res.status(201).json(result);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};



const login = async (req, res) => {
    try {

        const result = await loginUser(req.body);

        res.cookie("token", result.token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: result.message,
            user: result.user,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};



const profile = async (req, res) => {

    try {

        const user = await prisma.user.findUnique({
            where: {
                id: req.user.userId,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully.",
            user,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};



const logout = async (req, res) => {

    try {

        await logoutUser();

        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful.",
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};



module.exports = {
    register,
    login,
    profile,
    logout,
};