const prisma = require("../config/prisma");

exports.getCourses = async (
    req,
    res
) => {
    try {
        const courses =
            await prisma.course.findMany({
                orderBy: {
                    id: "asc",
                },
            });

        return res.status(200).json({
            success: true,
            data: courses,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message:
                "Failed to fetch courses.",
        });
    }
};

exports.getCourseById =
    async (
        req,
        res
    ) => {
        try {
            const courseId =
                Number(
                    req.params.id
                );

            if (
                Number.isNaN(
                    courseId
                )
            ) {
                return res
                    .status(400)
                    .json({
                        success: false,
                        message:
                            "Invalid course id.",
                    });
            }

            const course =
                await prisma.course.findUnique(
                    {
                        where: {
                            id: courseId,
                        },

                        include: {
                            lessons: {
                                orderBy:
                                {
                                    order:
                                        "asc",
                                },
                            },
                        },
                    }
                );

            if (!course) {
                return res
                    .status(404)
                    .json({
                        success: false,
                        message:
                            "Course not found.",
                    });
            }

            return res.status(200).json({
                success: true,
                data: course,
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message:
                    "Failed to fetch course.",
            });
        }
    };