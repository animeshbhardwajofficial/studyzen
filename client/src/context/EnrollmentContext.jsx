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
} from "../api/enrollmentApi";

export const EnrollmentContext =
    createContext();

function EnrollmentProvider({
    children,
}) {
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
        loading,
        setLoading,
    ] = useState(true);

    async function refreshEnrollments() {
        if (!token) {
            setEnrolledCourses([]);
            setLoading(false);
            return;
        }

        try {
            setLoading(true);

            const response =
                await getEnrollments();

            const courses =
                response.data.map(
                    (
                        enrollment
                    ) =>
                        enrollment.course
                );

            setEnrolledCourses(
                courses
            );
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    async function enrollCourse(
        course
    ) {
        if (!token) {
            alert(
                "Please login first."
            );
            return;
        }

        try {
            await enrollCourseApi(
                course.id
            );

            await refreshEnrollments();
        } catch (error) {
            console.log(error);

            alert(
                error.response?.data
                    ?.message ||
                "Enrollment Failed"
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
                loading,
                enrollCourse,
                refreshEnrollments,
            }}
        >
            {children}
        </EnrollmentContext.Provider>
    );
}

export default EnrollmentProvider;