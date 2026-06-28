import {
    useEffect,
    useState,
} from "react";

import CourseCard from "./CourseCard";

import {
    getCourses,
} from "../api/courseApi";

function CourseGrid() {
    const [courses, setCourses] =
        useState([]);

    const [
        loading,
        setLoading,
    ] = useState(true);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response =
                    await getCourses();

                setCourses(
                    response.data
                );
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCourses();
    }, []);

    if (loading) {
        return (
            <h2>
                Loading
                courses...
            </h2>
        );
    }

    return (
        <section className="course-grid">
            {courses.map(
                (course) => (
                    <CourseCard
                        key={
                            course.id
                        }
                        id={
                            course.id
                        }
                        title={
                            course.title
                        }
                        instructor={
                            course.instructor
                        }
                        price={
                            course.price
                        }
                        rating={
                            course.rating
                        }
                        thumbnail={
                            course.thumbnail
                        }
                        students={
                            course.students
                        }
                        duration={
                            course.duration
                        }
                        category={
                            course.category
                        }
                    />
                )
            )}
        </section>
    );
}

export default CourseGrid;