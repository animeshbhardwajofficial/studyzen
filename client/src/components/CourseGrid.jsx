import {
    useEffect,
    useState,
} from "react";

import {
    getCourses,
} from "../api/courseApi";

import CourseCard from "./CourseCard";

import "./CourseGrid.css";

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

    return (
        <section className="courses-section">

            <div className="container">

                <div className="section-header">

                    <h2>
                        Featured Courses
                    </h2>

                    <p>
                        Learn from
                        industry experts
                        with beautifully
                        crafted courses.
                    </p>

                </div>

                {loading ? (
                    <h3>
                        Loading
                        courses...
                    </h3>
                ) : (
                    <div className="course-grid">

                        {courses.map(
                            (
                                course
                            ) => (
                                <CourseCard
                                    key={
                                        course.id
                                    }
                                    {...course}
                                />
                            )
                        )}

                    </div>
                )}

            </div>

        </section>
    );
}

export default CourseGrid;