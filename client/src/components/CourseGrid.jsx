import { useEffect, useState } from "react";
import axios from "axios";

import CourseCard from "./CourseCard";

function CourseGrid() {
    const [courses, setCourses] =
        useState([]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response =
                    await axios.get(
                        "http://localhost:5000/api/courses"
                    );

                setCourses(
                    response.data.data
                );
            } catch (error) {
                console.log(error);
            }
        }

        fetchCourses();
    }, []);

    return (
        <section className="course-grid">
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    instructor={course.instructor}
                    price={course.price}
                    rating={course.rating}
                    thumbnail={course.thumbnail}
                    students={course.students}
                    duration={course.duration}
                    category={course.category}
                />
            ))}
        </section>
    );
}

export default CourseGrid;