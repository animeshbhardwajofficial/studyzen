const courses =
    require("../data/courses");

exports.getCourses = (
    req,
    res
) => {
    res.status(200).json({
        success: true,
        data: courses,
    });
};

exports.getCourseById = (
    req,
    res
) => {
    const courseId =
        Number(req.params.id);

    const course =
        courses.find(
            (course) =>
                course.id === courseId
        );

    if (!course) {
        return res
            .status(404)
            .json({
                success: false,
                message:
                    "Course not found",
            });
    }

    res.status(200).json({
        success: true,
        data: course,
    });
};