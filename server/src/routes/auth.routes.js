const express = require("express");

const {
    register,
    login,
    profile,
    logout,
} = require("../controllers/auth.controller");

const validate = require("../middleware/validate.middleware");
const { requireAuth, requireRole } = require("../middleware/auth.middleware");

const {
    registerSchema,
    loginSchema,
} = require("../validators/auth.validator");

const router = express.Router();



router.post(
    "/register",
    validate(registerSchema),
    register
);


router.post(
    "/login",
    validate(loginSchema),
    login
);


router.get(
    "/profile",
    requireAuth,
    profile
);

router.post(
    "/logout",
    requireAuth,
    logout
);



router.get(
    "/admin/dashboard",
    requireAuth,
    requireRole("ADMIN"),
    (req, res)=>{
        res.status(200).json({
            success: true,
            message: "welcome to the admin dashboard",
            user: req.user,
        })
    }
)

module.exports = router;