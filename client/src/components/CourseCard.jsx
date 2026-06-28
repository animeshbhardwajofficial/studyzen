import { useNavigate } from "react-router-dom";

import {
    Star,
    Users,
    Clock,
} from "lucide-react";

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

    return (
        <Card className="course-card">

            <img
                src={thumbnail}
                alt={title}
                className="course-card-image"
            />

            <div className="course-card-content">

                <span className="course-category">
                    {category}
                </span>

                <h3>{title}</h3>

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

                <div className="course-footer">

                    <h3 className="course-price">
                        ₹{price}
                    </h3>

                    <div className="course-actions">

                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() =>
                                navigate(
                                    `/course/${id}`
                                )
                            }
                        >
                            Details
                        </Button>

                        <Button
                            size="sm"
                            onClick={() =>
                                navigate(
                                    `/course/${id}/lesson/1`
                                )
                            }
                        >
                            Learn
                        </Button>

                    </div>

                </div>

            </div>

        </Card>
    );
}

export default CourseCard;