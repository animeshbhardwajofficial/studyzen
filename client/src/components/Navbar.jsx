import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                })}
            >
                Home
            </NavLink>

            {" | "}

            <NavLink
                to="/courses"
                style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                })}
            >
                Courses
            </NavLink>

            {" | "}

            <NavLink
                to="/login"
                style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                })}
            >
                Login
            </NavLink>

            {" | "}

            <NavLink
                to="/signup"
                style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                })}
            >
                Signup
            </NavLink>

            <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                    color: isActive ? "black" : "#666",
                })}
            >
                Dashboard
            </NavLink>
        </nav>
    );
}

export default Navbar;