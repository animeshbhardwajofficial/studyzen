import { useNavigate } from "react-router-dom";

function CourseCard({
    id,
    title,
    instructor,
    price,
    rating,
}) {
    const navigate = useNavigate();

    return (
        <div className="course-card">
            <h2>{title}</h2>

            <p>
                By {instructor}
            </p>

            <p>
                ⭐ {rating}
            </p>

            <p>
                ₹{price}
            </p>

            <div className="course-card-actions">
                <button
                    onClick={() =>
                        navigate(
                            `/course/${id}`
                        )
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
    );
}

export default CourseCard;