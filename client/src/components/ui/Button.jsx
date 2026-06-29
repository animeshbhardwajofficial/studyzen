import Spinner from "./Spinner";

import "./Button.css";

function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    disabled = false,
    loading = false,
    onClick,
    type = "button",
}) {
    return (
        <button
            type={type}
            disabled={
                disabled ||
                loading
            }
            onClick={onClick}
            className={`
                btn
                btn-${variant}
                btn-${size}
                ${fullWidth
                    ? "btn-full"
                    : ""
                }
                ${loading
                    ? "btn-loading"
                    : ""
                }
            `}
        >
            <span
                className={`
                    btn-content
                    ${loading
                        ? "btn-content-hidden"
                        : ""
                    }
                `}
            >
                {children}
            </span>

            {loading && (
                <span className="btn-spinner">

                    <Spinner
                        size={
                            size ===
                                "sm"
                                ? "sm"
                                : "md"
                        }
                    />

                </span>
            )}
        </button>
    );
}

export default Button;