const {z, email} = require("zod");

const registerSchema = z.object({
    name: z.string()
    .trim()
    .min(4, "name must be atleast 4 characters")
    .max(50, "name must within 50 characters"),
    email: z.string()
    .trim()
    .email("please enter a valid email address"),
    password: z.string()
    .min(8, "password must be atlest 8 characters")
    .max(100, "password cannot exceed 100 characters"),
});


const loginSchema = z.object({
    email: z.string()
        .trim()
        .email("Please enter a valid email address."),

    password: z.string()
        .min(8, "Password must be at least 8 characters."),
    
})

module.exports = {
    registerSchema,
    loginSchema
};