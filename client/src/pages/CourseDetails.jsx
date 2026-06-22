import { useParams } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
    const { id } = useParams();

    const course = courses.find(
        (course) => course.id === Number(id)
    );

    if (!course) {
        return <h1>Course Not Found</h1>;
    }

    return (
        <div>
            <h1>{course.title}</h1>

            <p>By {course.instructor}</p>

            <p>⭐ {course.rating}</p>

            <p>₹{course.price}</p>

            <p>{course.description}</p>

            <h2>Curriculum</h2>

            <ul>
                {course.curriculum.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <button>Enroll Now</button>
        </div>
    );
}

export default CourseDetails;