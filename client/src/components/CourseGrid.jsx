import courses from "../data/courses";
import CourseCard from "./CourseCard";

function CourseGrid() {
    return (
        <>
            <h2
                style={{
                    textAlign: "center",
                    marginTop: "4rem",
                }}
            >
                Featured Courses
            </h2>

            <div className="course-grid">
                {courses
                    .slice(0, 3)
                    .map((course) => (
                        <CourseCard
                            key={course.id}
                            id={course.id}
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
                    ))}
            </div>
        </>
    );
}

export default CourseGrid;