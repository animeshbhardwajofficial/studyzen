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

    const progress =
        course.courseProgress ??
        0;

    const completedLessons =
        course.completedLessons ??
        0;

    const totalLessons =
        course.totalLessons ??
        course.lessons?.length ??
        0;

    const resumeLesson =
        course.lessons?.find(
            (
                lesson
            ) =>
                lesson.progress
                    ?.progressPercent <
                100
        ) ||
        course.lessons?.[0];

    function handleContinue() {
        if (!resumeLesson) {
            return;
        }

        navigate(
            `/course/${course.id}/lesson/${resumeLesson.id}`
        );
    }

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

                    {" • "}

                    {completedLessons}

                    /

                    {totalLessons}

                    {" Lessons"}

                </span>

            </div>

            <Button
                onClick={
                    handleContinue
                }
            >
                Continue
            </Button>

        </Card>
    );
}

export default DashboardCourseCard;