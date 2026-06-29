import {
    useContext,
    useEffect,
    useState,
} from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    BookOpen,
    Clock3,
    Star,
    Users,
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

import "./CourseDetails.css";

function CourseDetails() {
    const { id } =
        useParams();

    const navigate =
        useNavigate();

    const [course, setCourse] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const {
        enrollCourse,
        enrolledCourses,
    } = useContext(
        EnrollmentContext
    );

    useEffect(() => {
        async function fetchCourse() {
            try {
                const response =
                    await getCourseById(id);

                setCourse(
                    response.data
                );
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCourse();
    }, [id]);

    if (loading) {
        return (
            <main className="course-details-page">

                <div className="container">

                    <div className="course-details-grid">

                        <Skeleton
                            height="420px"
                            radius="28px"
                        />

                        <div className="course-content">

                            <Skeleton
                                width="120px"
                                height="34px"
                                radius="999px"
                            />

                            <Skeleton
                                width="80%"
                                height="52px"
                            />

                            <Skeleton
                                width="100%"
                                height="18px"
                            />

                            <Skeleton
                                width="85%"
                                height="18px"
                            />

                            <div className="course-meta">

                                {Array.from({
                                    length: 4,
                                }).map(
                                    (
                                        _,
                                        index
                                    ) => (
                                        <Skeleton
                                            key={
                                                index
                                            }
                                            height="80px"
                                        />
                                    )
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </main>
        );
    }

    if (!course) {
        return (
            <main className="course-details-page">

                <div className="container">

                    <Card hover={false}>

                        <h2>
                            Course not found
                        </h2>

                    </Card>

                </div>

            </main>
        );
    }

    const isEnrolled =
        enrolledCourses.some(
            (
                enrolledCourse
            ) =>
                enrolledCourse.id ===
                course.id
        );

    return (
        <main className="course-details-page">

            <div className="container">

                <div className="course-details-grid">

                    <img
                        src={
                            course.thumbnail
                        }
                        alt={
                            course.title
                        }
                        className="course-image"
                    />

                    <div className="course-content">

                        <span className="course-category">

                            {course.category}

                        </span>

                        <h1 className="course-title">

                            {course.title}

                        </h1>

                        <p className="course-description">

                            {course.description}

                        </p>

                        <div className="course-meta">

                            <Card className="course-meta-card">

                                <Star
                                    size={22}
                                />

                                <h3>

                                    {course.rating}

                                </h3>

                                <p>

                                    Rating

                                </p>

                            </Card>

                            <Card className="course-meta-card">

                                <Users
                                    size={22}
                                />

                                <h3>

                                    {course.students}

                                </h3>

                                <p>

                                    Students

                                </p>

                            </Card>

                            <Card className="course-meta-card">

                                <Clock3
                                    size={22}
                                />

                                <h3>

                                    {course.duration}

                                </h3>

                                <p>

                                    Duration

                                </p>

                            </Card>

                            <Card className="course-meta-card">

                                <BookOpen
                                    size={22}
                                />

                                <h3>

                                    {
                                        course
                                            .lessons
                                            .length
                                    }

                                </h3>

                                <p>

                                    Lessons

                                </p>

                            </Card>

                        </div>

                        <div className="course-actions">

                            {!isEnrolled ? (

                                <Button
                                    onClick={() =>
                                        enrollCourse(
                                            course
                                        )
                                    }
                                >
                                    Enroll Now
                                </Button>

                            ) : (

                                <Button
                                    disabled
                                >
                                    Enrolled
                                </Button>

                            )}

                            <Button
                                variant="secondary"
                                onClick={() =>
                                    navigate(
                                        `/course/${course.id}/lesson/1`
                                    )
                                }
                            >
                                Continue Learning
                            </Button>

                        </div>

                    </div>

                </div>

                <section className="curriculum">

                    <h2>

                        Curriculum

                    </h2>

                    <div className="curriculum-list">

                        {course.lessons.map(
                            (
                                lesson,
                                index
                            ) => (

                                <Card
                                    key={
                                        lesson.id
                                    }
                                    className="lesson-card"
                                >

                                    <div>

                                        <span className="lesson-index">

                                            Lesson {index + 1}

                                        </span>

                                        <h3 className="lesson-title">

                                            {lesson.title}

                                        </h3>

                                    </div>

                                    <Button
                                        variant="ghost"
                                        onClick={() =>
                                            navigate(
                                                `/course/${course.id}/lesson/${lesson.id}`
                                            )
                                        }
                                    >

                                        <PlayCircle
                                            size={18}
                                        />

                                        Start

                                    </Button>

                                </Card>

                            )
                        )}

                    </div>

                </section>

            </div>

        </main>
    );
}

export default CourseDetails;