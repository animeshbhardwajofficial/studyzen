import "./Card.css";

function Card({
    children,
    hover = true,
    className = "",
    onClick,
}) {
    return (
        <div
            onClick={onClick}
            className={`
                card
                ${hover
                    ? "card-hover"
                    : ""
                }
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Card;