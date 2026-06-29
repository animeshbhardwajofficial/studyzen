import { useNavigate } from "react-router-dom";

import Button from "./ui/Button";
import Card from "./ui/Card";
import ProgressBar from "./ProgressBar";

import "./DashboardCourseCard.css";

function DashboardCourseCard({
    course,
}) {
    const navigate =
        useNavigate();

    // Placeholder until lesson progress
    // is connected to backend.
    const progress = 35;

    return (
        <Card
            className="dashboard-course-card"
        >
            <div className="dashboard-course-info">

                <h3>
                    {course.title}
                </h3>

                <p>
                    {course.instructor}
                </p>

                <ProgressBar
                    value={progress}
                />

                <span className="progress-text">
                    {progress}% Complete
                </span>

            </div>

            <Button
                onClick={() =>
                    navigate(
                        `/course/${course.id}/lesson/1`
                    )
                }
            >
                Continue
            </Button>
        </Card>
    );
}

export default DashboardCourseCard;