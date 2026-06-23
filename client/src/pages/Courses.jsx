import { useEffect, useState } from "react";
import axios from "axios";

import CourseCard from "../components/CourseCard";
import CategoryFilter from "../components/CategoryFilter";

function Courses() {
  const [courses, setCourses] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  useEffect(() => {
    const fetchCourses =
      async () => {
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
      };

    fetchCourses();
  }, []);

  const filteredCourses =
    courses.filter((course) => {
      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory ===
          "All" ||
        course.category ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        All Courses
      </h1>

      <input
        type="text"
        placeholder="Search Courses..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <CategoryFilter
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <div className="course-grid">
        {filteredCourses.map(
          (course) => (
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
              category={
                course.category
              }
              students={
                course.students
              }
              duration={
                course.duration
              }
              thumbnail={
                course.thumbnail
              }
            />
          )
        )}
      </div>
    </>
  );
}

export default Courses;