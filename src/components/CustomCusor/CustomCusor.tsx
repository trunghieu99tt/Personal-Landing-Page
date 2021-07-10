import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (cursorRef?.current) {
            document.addEventListener("mousemove", (e) => {
                cursorRef.current.setAttribute(
                    "style",
                    `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px`
                );
            });

            document.addEventListener("click", () => {
                cursorRef.current.classList.add("expand");
                setTimeout(() => {
                    cursorRef.current.classList.remove("expand");
                }, 500);
            });
        }
    }, [cursorRef]);

    return <div className="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
