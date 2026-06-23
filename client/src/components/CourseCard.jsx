import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    return (
        <div className="course-card">
            <img
                src={thumbnail}
                alt={title}
                className="course-card-image"
            />

            <div className="course-card-content">
                <span className="course-category">
                    {category}
                </span>

                <h2>{title}</h2>

                <p>
                    By {instructor}
                </p>

                <p>
                    ⭐ {rating}
                </p>

                <p>
                    👨‍🎓 {students}
                </p>

                <p>
                    ⏱ {duration}
                </p>

                <p className="course-price">
                    ₹{price}
                </p>

                <div className="course-card-actions">
                    <button
                        onClick={() =>
                            navigate(`/course/${id}`)
                        }
                    >
                        View Details
                    </button>

                    <button
                        onClick={() =>
                            navigate(
                                `/course/${id}/lesson/1`
                            )
                        }
                    >
                        Start Learning
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;