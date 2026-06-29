import {
    useContext,
    useState,
} from "react";

import {
    Link,
    useNavigate,
} from "react-router-dom";

import {
    login as loginApi,
} from "../api/authApi";

import {
    AuthContext,
} from "../context/AuthContext";

import useToast from "../hooks/useToast";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login() {
    const navigate =
        useNavigate();

    const toast =
        useToast();

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

    async function handleSubmit(
        e
    ) {
        e.preventDefault();

        if (
            !email ||
            !password
        ) {
            toast.error(
                "Please fill all fields."
            );
            return;
        }

        try {
            setLoading(true);

            const response =
                await loginApi({
                    email,
                    password,
                });

            login(
                response.user,
                response.token
            );

            toast.success(
                "Welcome back!"
            );

            navigate(
                "/dashboard"
            );
        } catch (error) {
            toast.error(
                error.response?.data
                    ?.message ||
                "Login failed."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="auth-page">

            <Card
                hover={false}
                className="auth-card"
            >

                <h1>
                    Welcome Back
                </h1>

                <p>
                    Continue your
                    learning journey.
                </p>

                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    <Input
                        label="Email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                    />

                    <Button
                        type="submit"
                        fullWidth
                        loading={loading}
                    >
                        Login
                    </Button>

                </form>

                <p
                    style={{
                        marginTop:
                            "24px",
                        textAlign:
                            "center",
                    }}
                >
                    Don't have an
                    account?{" "}
                    <Link
                        to="/signup"
                    >
                        Create one
                    </Link>
                </p>

            </Card>

        </main>
    );
}

export default Login;