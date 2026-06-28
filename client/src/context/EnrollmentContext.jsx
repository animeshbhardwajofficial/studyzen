import {
    createContext,
    useEffect,
    useState,
} from "react";

import axios from "axios";

export const EnrollmentContext =
    createContext();

function EnrollmentProvider({
    children,
}) {
    const [
        enrolledCourses,
        setEnrolledCourses,
    ] = useState([]);

    async function fetchEnrollments() {
        try {
            const token =
                localStorage.getItem(
                    "token"
                );

            if (!token) {
                setEnrolledCourses(
                    []
                );
                return;
            }

            const response =
                await axios.get(
                    "http://localhost:5000/api/enrollments",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

            const courses =
                response.data.data.map(
                    (enrollment) =>
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
        try {
            const token =
                localStorage.getItem(
                    "token"
                );

            if (!token) {
                alert(
                    "Please login first."
                );
                return;
            }

            await axios.post(
                "http://localhost:5000/api/enrollments",
                {
                    courseId:
                        course.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
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
    }, []);

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