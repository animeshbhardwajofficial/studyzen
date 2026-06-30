import {
    useContext,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import {
    Star,
    Users,
    Clock,
    CheckCircle2,
} from "lucide-react";

import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

import Card from "./ui/Card";
import Button from "./ui/Button";

import "./CourseCard.css";

function CourseCard({
    id,
    title,
    instructor,
    price,
    rating,
    thumbnail,
    students,
    duration,
    category,
}) {
    const navigate =
        useNavigate();

    const {
        enrolledCourses,
    } = useContext(
        EnrollmentContext
    );

    const enrolledCourse =
        enrolledCourses.find(
            (
                course
            ) =>
                course.id === id
        );

    const isEnrolled =
        Boolean(
            enrolledCourse
        );

    const progress =
        enrolledCourse
            ?.courseProgress ??
        0;

    return (
        <Card
            className="course-card"
            onClick={() =>
                navigate(`/course/${id}`)
            }
        >
            <img
                src={thumbnail}
                alt={title}
                className="course-card-image"
            />

            <div className="course-card-content">

                <div className="course-card-top">

                    <span className="course-category">

                        {category}

                    </span>

                    {isEnrolled && (

                        <span className="course-enrolled">

                            <CheckCircle2
                                size={14}
                            />

                            Enrolled

                        </span>

                    )}

                </div>

                <h3>

                    {title}

                </h3>

                <p className="course-instructor">

                    {instructor}

                </p>

                <div className="course-meta">

                    <span>

                        <Star
                            size={16}
                            fill="currentColor"
                        />

                        {rating}

                    </span>

                    <span>

                        <Users
                            size={16}
                        />

                        {students}

                    </span>

                    <span>

                        <Clock
                            size={16}
                        />

                        {duration}

                    </span>

                </div>

                {isEnrolled && (

                    <div className="course-progress">

                        <div className="course-progress-header">

                            <span>

                                Progress

                            </span>

                            <span>

                                {progress}%

                            </span>

                        </div>

                        <div className="course-progress-track">

                            <div
                                className="course-progress-fill"
                                style={{
                                    width:
                                        `${progress}%`,
                                }}
                            />

                        </div>

                    </div>

                )}

                <div className="course-footer">

                    <h3 className="course-price">

                        ₹{price}

                    </h3>

                    <div className="course-actions">

                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={(e) => {

                                e.stopPropagation();

                                navigate(
                                    `/course/${id}`
                                );

                            }}
                        >
                            Details
                        </Button>

                        <Button
                            size="sm"
                            onClick={(e) => {

                                e.stopPropagation();

                                navigate(

                                    isEnrolled
                                        ? `/course/${id}/lesson/1`
                                        : `/course/${id}`

                                );

                            }}
                        >
                            {isEnrolled
                                ? "Continue"
                                : "Learn"}
                        </Button>

                    </div>

                </div>

            </div>

        </Card>
    );
}

export default CourseCard;