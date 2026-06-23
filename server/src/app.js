const express =
    require("express");

const cors =
    require("cors");

const courseRoutes =
    require("./routes/courseRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    "/api/courses",
    courseRoutes
);

module.exports = app;