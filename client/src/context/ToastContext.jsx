import {
    createContext,
    useCallback,
    useState,
} from "react";

import Toast from "../components/ui/Toast";

export const ToastContext =
    createContext();

function ToastProvider({
    children,
}) {
    const [toasts, setToasts] =
        useState([]);

    const removeToast =
        useCallback((id) => {
            setToasts((prev) =>
                prev.filter(
                    (toast) =>
                        toast.id !== id
                )
            );
        }, []);

    const show =
        useCallback(
            (
                message,
                type = "info"
            ) => {
                const id =
                    crypto.randomUUID();

                setToasts((prev) => [
                    ...prev,
                    {
                        id,
                        message,
                        type,
                    },
                ]);

                setTimeout(() => {
                    removeToast(id);
                }, 3500);
            },
            [removeToast]
        );

    const value = {
        success: (
            message
        ) =>
            show(
                message,
                "success"
            ),

        error: (
            message
        ) =>
            show(
                message,
                "error"
            ),

        info: (
            message
        ) =>
            show(
                message,
                "info"
            ),
    };

    return (
        <ToastContext.Provider
            value={value}
        >
            {children}

            <div className="toast-container">

                {toasts.map(
                    (toast) => (
                        <Toast
                            key={
                                toast.id
                            }
                            {...toast}
                        />
                    )
                )}

            </div>

        </ToastContext.Provider>
    );
}

export default ToastProvider;