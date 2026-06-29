const prisma = require("../config/prisma");

exports.getLessonProgress = async (
    req,
    res
) => {
    try {
        const userId =
            req.user.id;

        const progress =
            await prisma.lessonProgress.findMany({
                where: {
                    userId,
                },
                include: {
                    lesson: {
                        select: {
                            id: true,
                            title: true,
                            courseId: true,
                        },
                    },
                },
            });

        return res.status(200).json({
            success: true,
            data: progress,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message:
                "Failed to fetch lesson progress.",
        });
    }
};

exports.updateLessonProgress =
    async (
        req,
        res
    ) => {
        try {
            const userId =
                req.user.id;

            const lessonId =
                Number(
                    req.params.lessonId
                );

            const {
                progressPercent,
            } = req.body;

            if (
                Number.isNaN(
                    lessonId
                )
            ) {
                return res
                    .status(400)
                    .json({
                        success: false,
                        message:
                            "Invalid lesson id.",
                    });
            }

            if (
                progressPercent <
                0 ||
                progressPercent >
                100
            ) {
                return res
                    .status(400)
                    .json({
                        success: false,
                        message:
                            "Progress must be between 0 and 100.",
                    });
            }

            const lesson =
                await prisma.lesson.findUnique(
                    {
                        where: {
                            id: lessonId,
                        },
                    }
                );

            if (!lesson) {
                return res
                    .status(404)
                    .json({
                        success: false,
                        message:
                            "Lesson not found.",
                    });
            }

            const progress =
                await prisma.lessonProgress.upsert(
                    {
                        where: {
                            userId_lessonId:
                            {
                                userId,
                                lessonId,
                            },
                        },

                        create: {
                            userId,
                            lessonId,
                            progressPercent,
                            completedAt:
                                progressPercent ===
                                    100
                                    ? new Date()
                                    : null,
                            lastOpenedAt:
                                new Date(),
                        },

                        update: {
                            progressPercent,

                            completedAt:
                                progressPercent ===
                                    100
                                    ? new Date()
                                    : null,

                            lastOpenedAt:
                                new Date(),
                        },
                    }
                );

            return res.status(200).json(
                {
                    success: true,
                    data: progress,
                }
            );
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message:
                    "Failed to update lesson progress.",
            });
        }
    };