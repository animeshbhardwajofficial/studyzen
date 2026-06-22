import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import courses from "../data/courses";

import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

function Lesson() {
    const { courseId, lessonId } = useParams();

    const {
        completeLesson,
        enrolledCourses,
    } = useContext(
        EnrollmentContext
    );

    const course = courses.find(
        (course) =>
            course.id === Number(courseId)
    );

    if (!course) {
        return <h1>Course Not Found</h1>;
    }

    const lesson = course.lessons.find(
        (lesson) =>
            lesson.id === Number(lessonId)
    );

    if (!lesson) {
        return <h1>Lesson Not Found</h1>;
    }

    const storageKey =
        `notes-${courseId}-${lessonId}`;

    const [notes, setNotes] =
        useState(() => {
            return (
                localStorage.getItem(
                    storageKey
                ) || ""
            );
        });

    useEffect(() => {
        localStorage.setItem(
            storageKey,
            notes
        );
    }, [notes, storageKey]);

    const enrolledCourse =
        enrolledCourses.find(
            (course) =>
                course.id === Number(courseId)
        );

    const isCompleted =
        enrolledCourse?.completedLessons?.includes(
            Number(lessonId)
        );

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
                <h2>My Notes</h2>

                <textarea
                    value={notes}
                    onChange={(e) =>
                        setNotes(
                            e.target.value
                        )
                    }
                    placeholder="Write your notes here..."
                    rows="10"
                ></textarea>
            </div>

            <button
                onClick={() =>
                    completeLesson(
                        Number(courseId),
                        Number(lessonId)
                    )
                }
            >
                Mark Complete
            </button>

            {isCompleted && (
                <p>
                    ✅ Lesson Completed
                </p>
            )}
        </div>
    );
}

export default Lesson;