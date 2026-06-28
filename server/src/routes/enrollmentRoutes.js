const express = require("express");

const {
    enrollCourse,
    getUserEnrollments,
} = require("../controllers/enrollmentController");

const {
    auth,
} = require("../middlewares/authMiddleware");

const router =
    express.Router();

router.post(
    "/",
    auth,
    enrollCourse
);

router.get(
    "/",
    auth,
    getUserEnrollments
);

module.exports =
    router;