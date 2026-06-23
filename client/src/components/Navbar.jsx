import { NavLink } from "react-router-dom";

function Navbar() {
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
            </div>

            <NavLink
                to="/dashboard"
                className="dashboard-btn"
            >
                Dashboard
            </NavLink>
        </nav>
    );
}

export default Navbar;