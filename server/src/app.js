const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/courses", courseRoutes);

app.use(
    "/api/enrollments",
    enrollmentRoutes
);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "StudyZen API is running 🚀",
    });
});

module.exports = app;