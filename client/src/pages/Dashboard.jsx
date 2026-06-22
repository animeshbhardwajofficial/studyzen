import { useContext } from "react";

import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

function Dashboard() {
    const {
        enrolledCourses,
        updateProgress,
    } = useContext(
        EnrollmentContext
    );

    return (
        <div>
            <h1>
                My Dashboard
            </h1>

            {enrolledCourses.length === 0 ? (
                <p>
                    No enrolled courses.
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
                                Progress:
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
                        </div>
                    )
                )
            )}
        </div>
    );
}

export default Dashboard;