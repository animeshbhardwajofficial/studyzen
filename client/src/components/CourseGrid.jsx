import {
    useEffect,
    useState,
} from "react";

import {
    getCourses,
} from "../api/courseApi";

import CourseCard from "./CourseCard";
import Skeleton from "./ui/Skeleton";

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

                <div className="course-grid">

                    {loading
                        ? Array.from({
                            length: 6,
                        }).map(
                            (_, index) => (
                                <div
                                    key={
                                        index
                                    }
                                    className="course-card"
                                >
                                    <Skeleton
                                        height="220px"
                                        radius="24px"
                                    />

                                    <div
                                        style={{
                                            padding:
                                                "24px",
                                        }}
                                    >
                                        <Skeleton
                                            width="90px"
                                            height="28px"
                                            radius="999px"
                                        />

                                        <div
                                            style={{
                                                height:
                                                    "18px",
                                            }}
                                        />

                                        <Skeleton
                                            width="75%"
                                            height="34px"
                                        />

                                        <div
                                            style={{
                                                height:
                                                    "14px",
                                            }}
                                        />

                                        <Skeleton
                                            width="45%"
                                        />

                                        <div
                                            style={{
                                                height:
                                                    "22px",
                                            }}
                                        />

                                        <Skeleton
                                            width="100%"
                                            height="14px"
                                        />

                                        <div
                                            style={{
                                                height:
                                                    "10px",
                                            }}
                                        />

                                        <Skeleton
                                            width="80%"
                                            height="14px"
                                        />

                                        <div
                                            style={{
                                                height:
                                                    "28px",
                                            }}
                                        />

                                        <Skeleton
                                            width="120px"
                                            height="42px"
                                            radius="999px"
                                        />

                                    </div>

                                </div>
                            )
                        )
                        : courses.map(
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

            </div>

        </section>
    );
}

export default CourseGrid;