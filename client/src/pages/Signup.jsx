import {
    useState,
} from "react";

import {
    Link,
    useNavigate,
} from "react-router-dom";

import {
    signup,
} from "../api/authApi";

import useToast from "../hooks/useToast";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Signup() {
    const navigate =
        useNavigate();

    const toast =
        useToast();

    const [name, setName] =
        useState("");

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
            !name ||
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

            await signup({
                name,
                email,
                password,
            });

            toast.success(
                "Account created successfully."
            );

            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data
                    ?.message ||
                "Signup failed."
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
                    Create Account
                </h1>

                <p>
                    Start your
                    learning journey
                    with StudyZen.
                </p>

                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    <Input
                        label="Full Name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) =>
                            setName(
                                e.target.value
                            )
                        }
                    />

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
                        Create Account
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
                    Already have an
                    account?{" "}
                    <Link
                        to="/login"
                    >
                        Login
                    </Link>
                </p>

            </Card>

        </main>
    );
}

export default Signup;