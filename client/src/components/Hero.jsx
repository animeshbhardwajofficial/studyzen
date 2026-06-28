import { useNavigate } from "react-router-dom";

import Button from "./ui/Button";

import "./Hero.css";

function Hero() {
    const navigate =
        useNavigate();

    return (
        <section className="hero">
            <div className="container hero-content">

                <span className="hero-badge">
                    🚀 Learn • Build • Get Hired
                </span>

                <h1>
                    Learn Without
                    <br />
                    Limits.
                </h1>

                <p>
                    Master industry-ready skills through
                    beautifully crafted courses, practical
                    projects, and a distraction-free learning
                    experience.
                </p>

                <div className="hero-actions">

                    <Button
                        size="lg"
                        onClick={() =>
                            navigate("/courses")
                        }
                    >
                        Explore Courses
                    </Button>

                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() =>
                            navigate("/signup")
                        }
                    >
                        Get Started
                    </Button>

                </div>

            </div>
        </section>
    );
}

export default Hero;