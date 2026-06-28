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