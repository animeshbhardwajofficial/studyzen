import { useNavigate } from "react-router-dom";

function CourseCard({
    title,
    instructor,
    price,
    rating,
}) {

    const navigate = useNavigate();
    
    return (
        <div className="course-card">
            <h2>{title}</h2>

            <p>By {instructor}</p>

            <p>⭐ {rating}</p>

            <p>₹{price}</p>

            <button
                onClick={() => navigate(`/course/${id}`)}
            >
                View Details
            </button>

        </div>
    );
}

export default CourseCard;