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