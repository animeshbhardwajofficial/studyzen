import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

function Dashboard() {
    const navigate = useNavigate();

    const {
        enrolledCourses,
        updateProgress,
    } = useContext(
        EnrollmentContext
    );

    return (
        <div className="dashboard">
            <h1>My Learning Dashboard</h1>

            {enrolledCourses.length === 0 ? (
                <p>
                    No enrolled courses yet.
                </p>
            ) : (
                enrolledCourses.map(
                    (course) => (
                        <div
                            key={course.id}
                            className="course-card"
                        >
                            <h2>
                                {course.title}
                            </h2>

                            <p>
                                By {course.instructor}
                            </p>

                            <p>
                                Progress:
                                {" "}
                                {course.progress}%
                            </p>

                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={course.progress}
                                onChange={(e) =>
                                    updateProgress(
                                        course.id,
                                        Number(
                                            e.target.value
                                        )
                                    )
                                }
                            />

                            <br />

                            <button
                                onClick={() =>
                                    navigate(
                                        `/course/${course.id}`
                                    )
                                }
                            >
                                View Course
                            </button>

                            <button
                                onClick={() =>
                                    navigate(
                                        `/course/${course.id}/lesson/1`
                                    )
                                }
                            >
                                Continue Learning
                            </button>

                            {course.progress ===
                                100 && (
                                    <p>
                                        ✅ Completed
                                    </p>
                                )}
                        </div>
                    )
                )
            )}
        </div>
    );
}

export default Dashboard;