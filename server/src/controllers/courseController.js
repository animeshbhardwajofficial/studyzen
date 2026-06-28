const prisma = require("../config/prisma");

exports.getCourses = async (req, res) => {
    try {
        const courses =
            await prisma.course.findMany();

        res.status(200).json({
            success: true,
            data: courses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch courses",
        });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const courseId = Number(req.params.id);

        const course =
            await prisma.course.findUnique({
                where: {
                    id: courseId,
                },
                include: {
                    lessons: true,
                },
            });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        res.status(200).json({
            success: true,
            data: course,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch course",
        });
    }
};