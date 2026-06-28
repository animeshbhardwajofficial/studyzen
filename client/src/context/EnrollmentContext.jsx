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

    async function fetchEnrollments() {
        if (!token) {
            setEnrolledCourses(
                []
            );
            return;
        }

        try {
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

            await fetchEnrollments();
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
        fetchEnrollments();
    }, [token]);

    return (
        <EnrollmentContext.Provider
            value={{
                enrolledCourses,
                enrollCourse,
                fetchEnrollments,
            }}
        >
            {children}
        </EnrollmentContext.Provider>
    );
}

export default EnrollmentProvider;