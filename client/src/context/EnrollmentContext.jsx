import {
    createContext,
    useEffect,
    useState,
} from "react";

export const EnrollmentContext =
    createContext();

function EnrollmentProvider({
    children,
}) {
    const [enrolledCourses,
        setEnrolledCourses] =
        useState(() => {
            const savedCourses =
                localStorage.getItem(
                    "enrolledCourses"
                );

            return savedCourses
                ? JSON.parse(savedCourses)
                : [];
        });

    useEffect(() => {
        localStorage.setItem(
            "enrolledCourses",
            JSON.stringify(
                enrolledCourses
            )
        );
    }, [enrolledCourses]);

    const enrollCourse = (
        course
    ) => {
        setEnrolledCourses(
            (prev) => {
                const exists =
                    prev.find(
                        (c) =>
                            c.id === course.id
                    );

                if (exists)
                    return prev;

                return [
                    ...prev,
                    {
                        ...course,
                        progress: 0,
                        completedLessons: [],
                    },
                ];
            }
        );
    };

    const updateProgress = (
        courseId,
        value
    ) => {
        setEnrolledCourses(
            (prev) =>
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

    const completeLesson = (
        courseId,
        lessonId
    ) => {
        setEnrolledCourses(
            (prev) =>
                prev.map((course) => {
                    if (
                        course.id !== courseId
                    ) {
                        return course;
                    }

                    if (
                        course.completedLessons?.includes(
                            lessonId
                        )
                    ) {
                        return course;
                    }

                    const updatedLessons =
                        [
                            ...(course.completedLessons ||
                                []),
                            lessonId,
                        ];

                    const progress =
                        Math.round(
                            (updatedLessons.length /
                                course.lessons.length) *
                            100
                        );

                    return {
                        ...course,
                        completedLessons:
                            updatedLessons,
                        progress,
                    };
                })
        );
    };

    return (
        <EnrollmentContext.Provider
            value={{
                enrolledCourses,
                enrollCourse,
                updateProgress,
                completeLesson,
            }}
        >
            {children}
        </EnrollmentContext.Provider>
    );
}

export default EnrollmentProvider;