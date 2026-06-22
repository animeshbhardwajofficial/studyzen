import { useParams } from "react-router-dom";

import courses from "../data/courses";

function Lesson() {
    const { courseId, lessonId } = useParams();

    const course = courses.find(
        (course) => course.id === Number(courseId)
    );

    if (!course) {
        return <h1>Course Not Found</h1>;
    }

    const lesson = course.lessons.find(
        (lesson) => lesson.id === Number(lessonId)
    );

    if (!lesson) {
        return <h1>Lesson Not Found</h1>;
    }

    return (
        <div className="lesson-page">
            <h1>{lesson.title}</h1>

            <div className="video-container">
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/dGcsHMXbSOA"
                    title="Lesson Video"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="lesson-notes">
                <h2>Lesson Notes</h2>

                <textarea
                    placeholder="Write your notes here..."
                    rows="10"
                ></textarea>
            </div>

            <button>
                Mark Complete
            </button>
        </div>
    );
}

export default Lesson;