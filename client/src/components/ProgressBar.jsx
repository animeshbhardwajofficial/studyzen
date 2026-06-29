import "./ProgressBar.css";

function ProgressBar({
    value = 0,
    showValue = false,
    height = 8,
    animated = true,
}) {
    const progress =
        Math.min(
            100,
            Math.max(
                0,
                value
            )
        );

    return (
        <div className="progress-wrapper">

            <div
                className="progress"
                role="progressbar"
                aria-valuenow={
                    progress
                }
                aria-valuemin={0}
                aria-valuemax={100}
                style={{
                    height,
                }}
            >

                <div
                    className={`progress-fill ${animated
                            ? "progress-animated"
                            : ""
                        }`}
                    style={{
                        width: `${progress}%`,
                    }}
                />

            </div>

            {showValue && (

                <span className="progress-label">

                    {progress}%

                </span>

            )}

        </div>
    );
}

export default ProgressBar;