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
                    "Already enrolled",
            });
        }

        const enrollment =
            await prisma.enrollment.create({
                data: {
                    userId,
                    courseId,
                },
            });

        res.status(201).json({
            success: true,
            data: enrollment,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
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
                                lessons: true,
                            },
                        },
                    },
                });

            res.status(200).json({
                success: true,
                data: enrollments,
            });
        } catch (error) {
            console.log(error);

            res.status(500).json({
                success: false,
                message:
                    "Internal Server Error",
            });
        }
    };