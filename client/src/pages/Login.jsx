import {
    useContext,
    useState,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import axios from "axios";

import {
    AuthContext,
} from "../context/AuthContext";

function Login() {
    const navigate =
        useNavigate();

    const {
        login,
    } = useContext(
        AuthContext
    );

    const [email, setEmail] =
        useState("");

    const [
        password,
        setPassword,
    ] = useState("");

    const [
        loading,
        setLoading,
    ] = useState(false);

    const handleSubmit =
        async (e) => {
            e.preventDefault();

            try {
                setLoading(true);

                const response =
                    await axios.post(
                        "http://localhost:5000/api/auth/login",
                        {
                            email,
                            password,
                        }
                    );

                login(
                    response.data.user,
                    response.data.token
                );

                alert(
                    "Login Successful"
                );

                navigate(
                    "/dashboard"
                );
            } catch (error) {
                alert(
                    error.response?.data
                        ?.message ||
                    "Login Failed"
                );
            } finally {
                setLoading(false);
            }
        };

    return (
        <div>
            <h1>Login</h1>

            <form
                onSubmit={
                    handleSubmit
                }
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Logging in..."
                        : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login;