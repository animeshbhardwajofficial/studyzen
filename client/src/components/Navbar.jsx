import {
    useContext,
} from "react";

import {
    NavLink,
    useNavigate,
} from "react-router-dom";

import {
    AuthContext,
} from "../context/AuthContext";

import "./Navbar.css";

function Navbar() {
    const navigate =
        useNavigate();

    const {
        isLoggedIn,
        logout,
    } = useContext(
        AuthContext
    );

    function handleLogout() {
        logout();

        navigate("/");
    }

    return (
        <header className="navbar-wrapper">
            <nav className="navbar container">

                <NavLink
                    to="/"
                    className="navbar-logo"
                >
                    StudyZen
                </NavLink>

                <div className="navbar-links">

                    <NavLink
                        to="/"
                        className="nav-link"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/courses"
                        className="nav-link"
                    >
                        Courses
                    </NavLink>

                    {!isLoggedIn && (
                        <>
                            <NavLink
                                to="/login"
                                className="nav-link"
                            >
                                Login
                            </NavLink>

                            <NavLink
                                to="/signup"
                                className="nav-link"
                            >
                                Signup
                            </NavLink>
                        </>
                    )}

                </div>

                <div className="navbar-actions">

                    {isLoggedIn && (
                        <>
                            <NavLink
                                to="/dashboard"
                                className="dashboard-link"
                            >
                                Dashboard
                            </NavLink>

                            <button
                                onClick={
                                    handleLogout
                                }
                                className="logout-btn"
                            >
                                Logout
                            </button>
                        </>
                    )}

                </div>

            </nav>
        </header>
    );
}

export default Navbar;