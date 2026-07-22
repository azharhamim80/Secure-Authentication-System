const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");


const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));




app.use("/api/auth", authRoutes);

app.get("/api/health", (req,res)=>{
    res.status(200).json({
        success:true,
        message: "server is running successfully."
    });
});



module.exports = app;