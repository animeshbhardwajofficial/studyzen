const prisma = require("../config/prisma");

exports.enrollCourse = async (
    req,
    res
) => {
    try {
        const userId =
            req.user.id;

        const { courseId } =
            req.body;

        const existingEnrollment =
            await prisma.enrollment.findUnique({
                where: {
                    userId_courseId: {
                        userId,
                        courseId,
                    },
                },
            });

        if (existingEnrollment) {
            return res.status(400).json({
                success: false,
                message:
                    "Already enrolled.",
            });
        }

        const enrollment =
            await prisma.enrollment.create({
                data: {
                    userId,
                    courseId,
                },
            });

        return res.status(201).json({
            success: true,
            data: enrollment,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message:
                "Internal Server Error",
        });
    }
};

exports.getUserEnrollments =
    async (
        req,
        res
    ) => {
        try {
            const userId =
                req.user.id;

            const enrollments =
                await prisma.enrollment.findMany({
                    where: {
                        userId,
                    },

                    include: {
                        course: {
                            include: {
                                lessons: {
                                    orderBy:
                                    {
                                        order:
                                            "asc",
                                    },
                                },
                            },
                        },
                    },
                });

            const progress =
                await prisma.lessonProgress.findMany({
                    where: {
                        userId,
                    },
                });

            const progressMap =
                new Map();

            progress.forEach(
                (item) => {
                    progressMap.set(
                        item.lessonId,
                        item
                    );
                }
            );

            const result =
                enrollments.map(
                    (
                        enrollment
                    ) => {
                        const totalLessons =
                            enrollment
                                .course
                                .lessons
                                .length;

                        let completedLessons = 0;

                        const lessons =
                            enrollment.course.lessons.map(
                                (
                                    lesson
                                ) => {
                                    const lessonProgress =
                                        progressMap.get(
                                            lesson.id
                                        );

                                    if (
                                        lessonProgress?.progressPercent ===
                                        100
                                    ) {
                                        completedLessons++;
                                    }

                                    return {
                                        ...lesson,

                                        progress:
                                            lessonProgress ||
                                            {
                                                progressPercent: 0,
                                                completedAt: null,
                                            },
                                    };
                                }
                            );

                        const courseProgress =
                            totalLessons ===
                                0
                                ? 0
                                : Math.round(
                                    (completedLessons /
                                        totalLessons) *
                                    100
                                );

                        return {
                            ...enrollment,

                            course: {
                                ...enrollment.course,

                                lessons,

                                totalLessons,

                                completedLessons,

                                courseProgress,
                            },
                        };
                    }
                );

            return res.status(200).json({
                success: true,
                data: result,
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message:
                    "Internal Server Error",
            });
        }
    };