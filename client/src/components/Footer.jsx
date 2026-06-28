import {
    Link,
} from "react-router-dom";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-top">

                    <div className="footer-brand">

                        <h2>
                            StudyZen
                        </h2>

                        <p>
                            Learn modern
                            technology through
                            beautifully crafted
                            courses.
                        </p>

                    </div>

                    <div className="footer-links">

                        <Link to="/">
                            Home
                        </Link>

                        <Link to="/courses">
                            Courses
                        </Link>

                        <Link to="/login">
                            Login
                        </Link>

                        <Link to="/signup">
                            Signup
                        </Link>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2026 StudyZen.
                        All rights reserved.
                    </p>

                    <p>
                        Built with React,
                        Node.js &
                        PostgreSQL
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;