import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  Search,
} from "lucide-react";

import CourseCard from "../components/CourseCard";
import CategoryFilter from "../components/CategoryFilter";

import "./Courses.css";

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
        console.error(
          error
        );
      }
    }

    fetchCourses();
  }, []);

  const filteredCourses =
    courses.filter(
      (course) => {
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
      }
    );

  return (
    <main className="courses-page">

      <section className="courses-hero">

        <h1>
          Explore Courses
        </h1>

        <p>
          Discover beautifully
          crafted courses and
          continue your learning
          journey with StudyZen.
        </p>

      </section>

      <section className="courses-toolbar">

        <div className="courses-search">

          <Search
            className="courses-search-icon"
            size={20}
          />

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <CategoryFilter
          selectedCategory={
            selectedCategory
          }
          setSelectedCategory={
            setSelectedCategory
          }
        />

      </section>

      <section className="course-grid">

        {filteredCourses.map(
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

      </section>

    </main>
  );
}

export default Courses;