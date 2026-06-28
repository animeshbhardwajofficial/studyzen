import api from "./axios";

export async function signup(
    userData
) {
    const response =
        await api.post(
            "/auth/signup",
            userData
        );

    return response.data;
}

export async function login(
    userData
) {
    const response =
        await api.post(
            "/auth/login",
            userData
        );

    return response.data;
}