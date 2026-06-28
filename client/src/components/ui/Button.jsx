import "./Button.css";

function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    disabled = false,
    onClick,
    type = "button",
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
                btn
                btn-${variant}
                btn-${size}
                ${fullWidth
                    ? "btn-full"
                    : ""
                }
            `}
        >
            {children}
        </button>
    );
}

export default Button;