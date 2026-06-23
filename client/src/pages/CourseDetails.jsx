import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import courses from "../data/courses";

import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

function CourseDetails() {
    const { id } = useParams();

    const navigate = useNavigate();

    const {
        enrollCourse,
        enrolledCourses,
    } = useContext(
        EnrollmentContext
    );

    const course = courses.find(
        (course) =>
            course.id === Number(id)
    );

    if (!course) {
        return <h1>Course Not Found</h1>;
    }

    const isEnrolled =
        enrolledCourses.some(
            (enrolledCourse) =>
                enrolledCourse.id ===
                course.id
        );

    return (
        <section className="course-details">
            <img
                src={course.thumbnail}
                alt={course.title}
                className="course-thumbnail"
            />

            <div className="course-info">
                <h1>{course.title}</h1>

                <p>
                    By {course.instructor}
                </p>

                <p>
                    ⭐ {course.rating}
                </p>

                <p>
                    👨‍🎓 {course.students}
                    {" "}
                    Students
                </p>

                <p>
                    ⏱ {course.duration}
                </p>

                <p>
                    📚
                    {" "}
                    {
                        course.lessons.length
                    }
                    {" "}
                    Lessons
                </p>

                <p>
                    {course.description}
                </p>

                {!isEnrolled ? (
                    <button
                        onClick={() =>
                            enrollCourse(course)
                        }
                    >
                        Enroll Now
                    </button>
                ) : (
                    <button disabled>
                        ✅ Enrolled
                    </button>
                )}

                <button
                    onClick={() =>
                        navigate(
                            `/course/${course.id}/lesson/1`
                        )
                    }
                >
                    Continue Learning
                </button>

                <h2>Curriculum</h2>

                <ul>
                    {course.lessons.map(
                        (lesson) => (
                            <li
                                key={lesson.id}
                                onClick={() =>
                                    navigate(
                                        `/course/${course.id}/lesson/${lesson.id}`
                                    )
                                }
                                style={{
                                    cursor:
                                        "pointer",
                                }}
                            >
                                {lesson.title}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
}

export default CourseDetails;