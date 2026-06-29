import "./Spinner.css";

function Spinner({
    size = "md",
}) {
    return (
        <span
            className={`spinner spinner-${size}`}
            aria-hidden="true"
        >
            {Array.from({
                length: 12,
            }).map((_, index) => (
                <span
                    key={index}
                    className="spinner-blade"
                    style={{
                        "--i": index,
                    }}
                />
            ))}
        </span>
    );
}

export default Spinner;