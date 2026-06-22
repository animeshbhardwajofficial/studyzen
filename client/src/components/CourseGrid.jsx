import courses from "../data/courses";
import CourseCard from "./CourseCard";

function CourseGrid() {
    return (
        <section>
            <h2>Featured Courses</h2>

            <div className="course-grid">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        instructor={course.instructor}
                        price={course.price}
                        rating={course.rating}
                    />
                ))}
            </div>
        </section>
    );
}

export default CourseGrid;