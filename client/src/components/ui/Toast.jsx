import {
    useEffect,
    useState,
} from "react";

import {
    CheckCircle2,
    CircleAlert,
    Info,
    X,
} from "lucide-react";

import "./Toast.css";

const icons = {
    success: CheckCircle2,
    error: CircleAlert,
    info: Info,
};

function Toast({
    type,
    message,
    onClose,
}) {
    const [
        leaving,
        setLeaving,
    ] = useState(false);

    const Icon =
        icons[type] || Info;

    useEffect(() => {
        const timer =
            setTimeout(() => {
                handleClose();
            }, 3500);

        return () =>
            clearTimeout(timer);
    }, []);

    function handleClose() {
        setLeaving(true);

        setTimeout(() => {
            onClose();
        }, 220);
    }

    return (
        <div
            className={`
                toast
                toast-${type}
                ${leaving
                    ? "toast-leaving"
                    : ""
                }
            `}
        >
            <Icon
                size={18}
            />

            <span>
                {message}
            </span>

            <button
                className="toast-close"
                onClick={
                    handleClose
                }
                aria-label="Close notification"
            >
                <X
                    size={16}
                />
            </button>
        </div>
    );
}

export default Toast;