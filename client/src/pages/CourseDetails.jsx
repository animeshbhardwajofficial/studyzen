import { useParams } from "react-router-dom";
import courses from "../data/courses";

import { useContext } from "react";
import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

function CourseDetails() {

    const { enrollCourse } =
        useContext(EnrollmentContext);


    const { id } = useParams();

    const course = courses.find(
        (course) => course.id === Number(id)
    );

    if (!course) {
        return <h1>Course Not Found</h1>;
    }

    return (
        <section className="course-details">
            <img
                src={course.thumbnail}
                alt={course.title}
                className="course-thumbnail"
            />

            <div className="course-info">
                <h1>{course.title}</h1>

                <p>
                    By {course.instructor}
                </p>

                <p>
                    ⭐ {course.rating}
                </p>

                <p>
                    👨‍🎓 {course.students} Students
                </p>

                <p>
                    ⏱ {course.duration}
                </p>

                <p>
                    {course.description}
                </p>

                <button
                    onClick={() => enrollCourse(course)}
                >
                    Enroll Now
                </button>

                <h2>Curriculum</h2>

                <ul>
                    {course.curriculum && course.curriculum.map(
                        (item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
}

export default CourseDetails;