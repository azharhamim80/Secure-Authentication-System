const { PrismaClient, Role } = require("@prisma/client");
const bcrypt = require("bcrypt");
require("dotenv").config();

const prisma = new PrismaClient();

async function main() {

    const existingAdmin = await prisma.user.findUnique({
        where: {
            email: process.env.ADMIN_EMAIL,
        },
    });

    if (existingAdmin) {
        console.log("Admin already exists.");
        return;
    }

    const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_PASSWORD,
        10
    );

    await prisma.user.create({
        data: {
            name: process.env.ADMIN_NAME,
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: Role.ADMIN,
        },
    });

    console.log("Admin created successfully.");
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });