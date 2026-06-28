import {
    createContext,
    useEffect,
    useMemo,
    useState,
} from "react";

export const AuthContext =
    createContext();

function AuthProvider({
    children,
}) {
    const [user, setUser] =
        useState(null);

    const [token, setToken] =
        useState(null);

    useEffect(() => {
        const savedToken =
            localStorage.getItem(
                "token"
            );

        const savedUser =
            localStorage.getItem(
                "user"
            );

        if (
            savedToken &&
            savedUser
        ) {
            setToken(savedToken);

            setUser(
                JSON.parse(
                    savedUser
                )
            );
        }
    }, []);

    function login(
        userData,
        jwt
    ) {
        localStorage.setItem(
            "token",
            jwt
        );

        localStorage.setItem(
            "user",
            JSON.stringify(
                userData
            )
        );

        setUser(userData);

        setToken(jwt);
    }

    function logout() {
        localStorage.removeItem(
            "token"
        );

        localStorage.removeItem(
            "user"
        );

        setUser(null);

        setToken(null);
    }

    const value = useMemo(
        () => ({
            user,
            token,
            login,
            logout,
            isLoggedIn:
                !!token,
        }),
        [user, token]
    );

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;