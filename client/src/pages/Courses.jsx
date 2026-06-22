import { useState } from "react";

import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import CategoryFilter from "../components/CategoryFilter";

function Courses() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            course.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <h1>Courses</h1>

            <input
                type="text"
                placeholder="Search Courses..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <div className="course-grid">
                {filteredCourses.map((course) => (
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
        </>
    );
}

export default Courses;