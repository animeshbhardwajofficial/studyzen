const express = require("express");

const {
    auth,
} = require("../middlewares/authMiddleware");

const {
    getLessonProgress,
    updateLessonProgress,
} = require("../controllers/lessonProgressController");

const router =
    express.Router();

router.get(
    "/",
    auth,
    getLessonProgress
);

router.patch(
    "/:lessonId",
    auth,
    updateLessonProgress
);

module.exports =
    router;