const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const lessonProgressRoutes = require("./routes/lessonProgressRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/courses",
    courseRoutes
);

app.use(
    "/api/enrollments",
    enrollmentRoutes
);

app.use(
    "/api/lesson-progress",
    lessonProgressRoutes
);

app.get(
    "/",
    (req, res) => {
        res.json({
            success: true,
            message:
                "StudyZen API is running 🚀",
        });
    }
);

module.exports = app;