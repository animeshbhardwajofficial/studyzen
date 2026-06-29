import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    AuthContext,
} from "./AuthContext";

import {
    enrollCourse as enrollCourseApi,
    getEnrollments,
    getLessonProgress,
    updateLessonProgress as updateLessonProgressApi,
} from "../api/enrollmentApi";

import useToast from "../hooks/useToast";

export const EnrollmentContext =
    createContext();

function EnrollmentProvider({
    children,
}) {
    const toast =
        useToast();

    const {
        token,
    } = useContext(
        AuthContext
    );

    const [
        enrolledCourses,
        setEnrolledCourses,
    ] = useState([]);

    const [
        lessonProgress,
        setLessonProgress,
    ] = useState([]);

    const [
        loading,
        setLoading,
    ] = useState(true);

    async function refreshEnrollments() {
        if (!token) {
            setEnrolledCourses([]);
            setLessonProgress([]);
            setLoading(false);
            return;
        }

        try {
            setLoading(true);

            const [
                enrollmentResponse,
                progressResponse,
            ] = await Promise.all([
                getEnrollments(),
                getLessonProgress(),
            ]);

            const courses =
                enrollmentResponse.data.map(
                    (
                        enrollment
                    ) =>
                        enrollment.course
                );

            setEnrolledCourses(
                courses
            );

            setLessonProgress(
                progressResponse.data
            );
        } catch (error) {
            console.error(error);

            toast.error(
                "Failed to load your learning data."
            );
        } finally {
            setLoading(false);
        }
    }

    async function enrollCourse(
        course
    ) {
        if (!token) {
            toast.info(
                "Please login first."
            );
            return;
        }

        try {
            await enrollCourseApi(
                course.id
            );

            await refreshEnrollments();

            toast.success(
                "Course enrolled successfully!"
            );
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data
                    ?.message ||
                "Enrollment failed."
            );
        }
    }

    async function updateLessonProgress(
        lessonId,
        progressPercent
    ) {
        if (!token) {
            return;
        }

        try {
            await updateLessonProgressApi(
                lessonId,
                progressPercent
            );

            await refreshEnrollments();
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data
                    ?.message ||
                "Failed to update lesson progress."
            );
        }
    }

    useEffect(() => {
        refreshEnrollments();
    }, [token]);

    return (
        <EnrollmentContext.Provider
            value={{
                enrolledCourses,
                lessonProgress,
                loading,
                enrollCourse,
                refreshEnrollments,
                updateLessonProgress,
            }}
        >
            {children}
        </EnrollmentContext.Provider>
    );
}

export default EnrollmentProvider;