import {
    useContext,
    useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

function Dashboard() {
    const navigate =
        useNavigate();

    const {
        enrolledCourses,
        fetchEnrollments,
    } = useContext(
        EnrollmentContext
    );

    useEffect(() => {
        fetchEnrollments();
    }, []);

    return (
        <div className="dashboard">
            <h1>
                My Learning Dashboard
            </h1>

            {enrolledCourses.length ===
                0 ? (
                <p>
                    No enrolled courses
                    yet.
                </p>
            ) : (
                enrolledCourses.map(
                    (course) => (
                        <div
                            key={course.id}
                            className="course-card"
                        >
                            <img
                                src={
                                    course.thumbnail
                                }
                                alt={
                                    course.title
                                }
                                className="course-card-image"
                            />

                            <h2>
                                {
                                    course.title
                                }
                            </h2>

                            <p>
                                By{" "}
                                {
                                    course.instructor
                                }
                            </p>

                            <p>
                                ⭐{" "}
                                {
                                    course.rating
                                }
                            </p>

                            <p>
                                👨‍🎓{" "}
                                {
                                    course.students
                                }
                            </p>

                            <p>
                                ⏱{" "}
                                {
                                    course.duration
                                }
                            </p>

                            <div className="course-card-actions">
                                <button
                                    onClick={() =>
                                        navigate(
                                            `/course/${course.id}`
                                        )
                                    }
                                >
                                    View
                                </button>

                                <button
                                    onClick={() =>
                                        navigate(
                                            `/course/${course.id}/lesson/1`
                                        )
                                    }
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    )
                )
            )}
        </div>
    );
}

export default Dashboard;