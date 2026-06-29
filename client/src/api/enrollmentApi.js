import api from "./axios";

export async function getEnrollments() {
    const response =
        await api.get(
            "/enrollments"
        );

    return response.data;
}

export async function enrollCourse(
    courseId
) {
    const response =
        await api.post(
            "/enrollments",
            {
                courseId,
            }
        );

    return response.data;
}

export async function getLessonProgress() {
    const response =
        await api.get(
            "/lesson-progress"
        );

    return response.data;
}

export async function updateLessonProgress(
    lessonId,
    progressPercent
) {
    const response =
        await api.patch(
            `/lesson-progress/${lessonId}`,
            {
                progressPercent,
            }
        );

    return response.data;
}