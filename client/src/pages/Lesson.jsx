import {
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock3,
    PlayCircle,
} from "lucide-react";

import {
    getCourseById,
} from "../api/courseApi";

import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Skeleton from "../components/ui/Skeleton";
import ProgressBar from "../components/ProgressBar";

import useToast from "../hooks/useToast";

import "./Lesson.css";

function Lesson() {
    const navigate =
        useNavigate();

    const toast =
        useToast();

    const {
        courseId,
        lessonId,
    } = useParams();

    const {
        enrolledCourses,
        updateLessonProgress,
    } = useContext(
        EnrollmentContext
    );

    const [
        course,
        setCourse,
    ] = useState(null);

    const [
        loading,
        setLoading,
    ] = useState(true);

    const [
        notes,
        setNotes,
    ] = useState("");

    const storageKey =
        `notes-${courseId}-${lessonId}`;

    useEffect(() => {
        setNotes(
            localStorage.getItem(
                storageKey
            ) || ""
        );
    }, [storageKey]);

    useEffect(() => {
        localStorage.setItem(
            storageKey,
            notes
        );
    }, [
        notes,
        storageKey,
    ]);

    useEffect(() => {
        async function loadCourse() {
            try {
                setLoading(true);

                const response =
                    await getCourseById(
                        courseId
                    );

                setCourse(
                    response.data
                );
            } catch (error) {
                console.error(
                    error
                );

                toast.error(
                    "Failed to load lesson."
                );
            } finally {
                setLoading(false);
            }
        }

        loadCourse();
    }, [
        courseId,
    ]);

    const enrolledCourse =
        useMemo(() => {
            return enrolledCourses.find(
                (
                    item
                ) =>
                    item.id ===
                    Number(
                        courseId
                    )
            );
        }, [
            enrolledCourses,
            courseId,
        ]);

    const lessons =
        enrolledCourse?.lessons ||
        course?.lessons ||
        [];

    const lesson =
        lessons.find(
            (
                lesson
            ) =>
                lesson.id ===
                Number(
                    lessonId
                )
        );

    const lessonIndex =
        lessons.findIndex(
            (
                lesson
            ) =>
                lesson.id ===
                Number(
                    lessonId
                )
        );

    const previousLesson =
        lessonIndex > 0
            ? lessons[
            lessonIndex -
            1
            ]
            : null;

    const nextLesson =
        lessonIndex <
            lessons.length - 1
            ? lessons[
            lessonIndex +
            1
            ]
            : null;

    if (loading) {
        return (
            <main className="lesson-page">

                <div className="container">

                    <Skeleton
                        width="220px"
                        height="34px"
                    />

                    <div
                        style={{
                            height: 24,
                        }}
                    />

                    <Skeleton
                        height="480px"
                        radius="24px"
                    />

                    <div
                        style={{
                            height: 24,
                        }}
                    />

                    <Skeleton
                        height="180px"
                        radius="24px"
                    />

                </div>

            </main>
        );
    }

    if (
        !course ||
        !lesson
    ) {
        return (
            <main className="lesson-page">

                <div className="container lesson-empty">

                    <h2>
                        Lesson not found
                    </h2>

                    <Button
                        onClick={() =>
                            navigate(
                                "/courses"
                            )
                        }
                    >
                        Back to Courses
                    </Button>

                </div>

            </main>
        );
    }

    const progress =
        lesson.progress
            ?.progressPercent ??
        0;

    const completed =
        progress === 100;

    async function handleComplete() {
        try {
            await updateLessonProgress(
                lesson.id,
                100
            );

            toast.success(
                "Lesson completed!"
            );
        } catch (error) {
            console.error(
                error
            );
        }
    }
    return (
        <main className="lesson-page">

            <div className="container">

                <div className="lesson-layout">

                    <section className="lesson-main">

                        <div className="lesson-header">

                            <span className="lesson-badge">

                                Lesson {lesson.order}

                            </span>

                            <h1>

                                {lesson.title}

                            </h1>

                            <div className="lesson-meta">

                                <span>

                                    <Clock3
                                        size={16}
                                    />

                                    {" "}

                                    {lesson.duration ||
                                        "Video Lesson"}

                                </span>

                            </div>

                        </div>

                        <Card
                            className="lesson-video"
                        >

                            <iframe
                                src={
                                    lesson.videoUrl
                                }
                                title={
                                    lesson.title
                                }
                                allowFullScreen
                            />

                        </Card>

                        <Card>

                            <div className="lesson-progress">

                                <div className="lesson-progress-top">

                                    <h3>

                                        Lesson Progress

                                    </h3>

                                    <span className="lesson-progress-value">

                                        {progress}%

                                    </span>

                                </div>

                                <ProgressBar
                                    value={
                                        progress
                                    }
                                />

                            </div>

                        </Card>

                        <Card>

                            <h3>

                                About this lesson

                            </h3>

                            <p className="lesson-description">

                                {lesson.description ||
                                    "No description available."}

                            </p>

                        </Card>

                        <Card
                            className="lesson-notes"
                        >

                            <h3>

                                My Notes

                            </h3>

                            <textarea
                                value={
                                    notes
                                }
                                onChange={(
                                    e
                                ) =>
                                    setNotes(
                                        e.target
                                            .value
                                    )
                                }
                                placeholder="Write your notes here..."
                            />

                        </Card>

                        <div className="lesson-actions">

                            <Button
                                variant="secondary"
                                disabled={
                                    !previousLesson
                                }
                                onClick={() =>
                                    navigate(
                                        `/course/${course.id}/lesson/${previousLesson.id}`
                                    )
                                }
                            >

                                <ArrowLeft
                                    size={
                                        18
                                    }
                                />

                                Previous

                            </Button>

                            {!completed ? (

                                <Button
                                    onClick={
                                        handleComplete
                                    }
                                >

                                    <CheckCircle2
                                        size={
                                            18
                                        }
                                    />

                                    Mark Complete

                                </Button>

                            ) : (

                                <Button
                                    disabled
                                >

                                    <CheckCircle2
                                        size={
                                            18
                                        }
                                    />

                                    Completed

                                </Button>

                            )}

                            <Button
                                disabled={
                                    !nextLesson
                                }
                                onClick={() =>
                                    navigate(
                                        `/course/${course.id}/lesson/${nextLesson.id}`
                                    )
                                }
                            >

                                Next

                                <ArrowRight
                                    size={
                                        18
                                    }
                                />

                            </Button>

                        </div>

                    </section>

                    <aside className="lesson-sidebar">

                        <Card>

                            <h3>

                                Curriculum

                            </h3>

                            <div className="curriculum-list">

                                {lessons.map(
                                    (
                                        item
                                    ) => {

                                        const itemProgress =
                                            item
                                                .progress
                                                ?.progressPercent ||
                                            0;

                                        return (

                                            <div
                                                key={
                                                    item.id
                                                }
                                                className={`curriculum-item ${item.id ===
                                                        lesson.id
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                onClick={() =>
                                                    navigate(
                                                        `/course/${course.id}/lesson/${item.id}`
                                                    )
                                                }
                                            >

                                                <div className="curriculum-left">

                                                    {itemProgress ===
                                                        100 ? (

                                                        <CheckCircle2
                                                            size={
                                                                18
                                                            }
                                                        />

                                                    ) : (

                                                        <PlayCircle
                                                            size={
                                                                18
                                                            }
                                                        />

                                                    )}

                                                    <span>

                                                        {
                                                            item.title
                                                        }

                                                    </span>

                                                </div>

                                                <span>

                                                    {itemProgress}%

                                                </span>

                                            </div>

                                        );
                                    }
                                )}

                            </div>

                        </Card>

                    </aside>

                </div>

            </div>

        </main>
    );
}

export default Lesson;