import {
    useContext,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import {
    BookOpen,
    Clock3,
    Star,
} from "lucide-react";

import {
    EnrollmentContext,
} from "../context/EnrollmentContext";

import {
    AuthContext,
} from "../context/AuthContext";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Skeleton from "../components/ui/Skeleton";
import DashboardCourseCard from "../components/DashboardCourseCard";

import "./Dashboard.css";

function Dashboard() {
    const navigate =
        useNavigate();

    const {
        user,
    } = useContext(
        AuthContext
    );

    const {
        enrolledCourses,
        loading,
    } = useContext(
        EnrollmentContext
    );

    return (
        <main className="dashboard-page">

            <div className="container">

                <section className="dashboard-hero">

                    <h1>
                        Welcome back,
                        <br />
                        {user?.name ||
                            "Learner"}
                    </h1>

                    <p>
                        Continue learning
                        where you left off.
                    </p>

                </section>

                <section className="dashboard-stats">

                    <Card>

                        <BookOpen
                            size={28}
                        />

                        <h2>
                            {
                                enrolledCourses.length
                            }
                        </h2>

                        <p>
                            Courses
                        </p>

                    </Card>

                    <Card>

                        <Clock3
                            size={28}
                        />

                        <h2>
                            32
                        </h2>

                        <p>
                            Hours
                        </p>

                    </Card>

                    <Card>

                        <Star
                            size={28}
                        />

                        <h2>
                            4.9
                        </h2>

                        <p>
                            Average
                        </p>

                    </Card>

                </section>

                <section>

                    <h2 className="dashboard-title">
                        Continue Learning
                    </h2>

                    {loading ? (

                        <div className="dashboard-grid">

                            {Array.from({
                                length: 3,
                            }).map(
                                (
                                    _,
                                    index
                                ) => (

                                    <Card
                                        key={
                                            index
                                        }
                                    >

                                        <Skeleton
                                            width="45%"
                                            height="28px"
                                        />

                                        <div
                                            style={{
                                                height: 12,
                                            }}
                                        />

                                        <Skeleton
                                            width="30%"
                                        />

                                        <div
                                            style={{
                                                height: 24,
                                            }}
                                        />

                                        <Skeleton
                                            height="10px"
                                            radius="999px"
                                        />

                                        <div
                                            style={{
                                                height: 8,
                                            }}
                                        />

                                        <Skeleton
                                            width="90px"
                                        />

                                        <div
                                            style={{
                                                height: 28,
                                            }}
                                        />

                                        <Skeleton
                                            width="140px"
                                            height="42px"
                                            radius="999px"
                                        />

                                    </Card>

                                )
                            )}

                        </div>

                    ) : enrolledCourses.length ===
                        0 ? (

                        <Card
                            hover={false}
                        >

                            <h3>
                                No enrolled
                                courses
                            </h3>

                            <p>
                                Explore our
                                catalog and
                                begin your
                                learning
                                journey.
                            </p>

                            <Button
                                onClick={() =>
                                    navigate(
                                        "/courses"
                                    )
                                }
                            >
                                Browse Courses
                            </Button>

                        </Card>

                    ) : (

                        <div className="dashboard-grid">

                            {enrolledCourses.map(
                                (
                                    course
                                ) => (

                                    <DashboardCourseCard
                                        key={
                                            course.id
                                        }
                                        course={
                                            course
                                        }
                                    />

                                )
                            )}

                        </div>

                    )}

                </section>

            </div>

        </main>
    );
}

export default Dashboard;