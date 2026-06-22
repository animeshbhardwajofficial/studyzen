import { createContext, useState } from "react";

export const EnrollmentContext = createContext();

function EnrollmentProvider({ children }) {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const enrollCourse = (course) => {
        setEnrolledCourses((prev) => {
            const alreadyEnrolled = prev.find(
                (c) => c.id === course.id
            );

            if (alreadyEnrolled) {
                return prev;
            }

            // Step 1: Initializing progress to 0 for newly enrolled courses
            return [
                ...prev,
                {
                    ...course,
                    progress: 0,
                },
            ];
        });
    };

    // Step 2: Function to update the progress value of a specific course
    const updateProgress = (courseId, value) => {
        setEnrolledCourses((prev) =>
            prev.map((course) =>
                course.id === courseId
                    ? {
                        ...course,
                        progress: value,
                    }
                    : course
            )
        );
    };

    return (
        // Step 3: Providing enrolledCourses, enrollCourse, and updateProgress to the application context
        <EnrollmentContext.Provider
            value={{
                enrolledCourses,
                enrollCourse,
                updateProgress,
            }}
        >
            {children}
        </EnrollmentContext.Provider>
    );
}

export default EnrollmentProvider;