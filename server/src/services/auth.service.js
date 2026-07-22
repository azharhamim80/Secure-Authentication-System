const bcrypt = require("bcrypt");
const prisma = require("../config/prisma");
const { Role } = require("@prisma/client");

const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
    const { name, email, password } = userData;


    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        throw new Error("Email already exists.");
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role: Role.USER,
        },
    });

    
    const { password: _, ...safeUser } = user;

    return {
        success: true,
        message: "User registered successfully.",
        user: safeUser,
    };
};


const loginUser = async (loginData) =>{
    const {email,password} = loginData;

    const user = await prisma.user.findUnique({
        where:{
            email,
        },
    });
    
    if(!user){
        throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );

     if (!isPasswordValid) {
        throw new Error("Invalid email or password.");
    }




    const token = jwt.sign(
        {
        userId: user.id,
        role: user.role,
    },

    process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_IN,
    }

    );

    const {password: _, ...safeUser} = user;

    return {
        success: true,
        message: "login successful.",
        token,
        user: safeUser,
    };

};

const logoutUser = async () => {
    return {
        success: true,
        message: "Logout successful.",
    };
};


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
};