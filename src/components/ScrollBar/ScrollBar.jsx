import React, { useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";

const ScrollBar = () => {
    const [currentWidth, setCurrentWidth] = useState(0);
    const { scrollYProgress } = useViewportScroll();
    useEffect(() => {
        scrollYProgress.onChange((v) => setCurrentWidth(v * 100));
    }, []);

    return (
        <div className="scrollbar">
            <div
                className="scrollbar-progressBar"
                style={{
                    width: `${currentWidth}%`,
                }}
            ></div>
        </div>
    );
};

export default ScrollBar;
