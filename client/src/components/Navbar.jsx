import { useContext } from "react";
import {
    NavLink,
    useNavigate,
} from "react-router-dom";

import {
    AuthContext,
} from "../context/AuthContext";

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
        <nav>
            <div className="nav-logo">
                StudyZen
            </div>

            <div className="nav-links">
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive
                            ? "#0071e3"
                            : "#1d1d1f",
                    })}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/courses"
                    style={({ isActive }) => ({
                        color: isActive
                            ? "#0071e3"
                            : "#1d1d1f",
                    })}
                >
                    Courses
                </NavLink>

                {!isLoggedIn && (
                    <>
                        <NavLink
                            to="/login"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "#0071e3"
                                    : "#1d1d1f",
                            })}
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/signup"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "#0071e3"
                                    : "#1d1d1f",
                            })}
                        >
                            Signup
                        </NavLink>
                    </>
                )}
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    alignItems:
                        "center",
                }}
            >
                {isLoggedIn && (
                    <>
                        <NavLink
                            to="/dashboard"
                            className="dashboard-btn"
                        >
                            Dashboard
                        </NavLink>

                        <button
                            onClick={
                                handleLogout
                            }
                            className="dashboard-btn"
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;