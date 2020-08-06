import React, { useEffect, useState } from "react";
import { TweenMax } from "gsap";
import "./style.css";

const ChangeCursor = () => {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const follower = document.querySelector(".cursor-follower");
        const screen = document.body.getBoundingClientRect();
        var posX = 0,
            posY = 0,
            mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 3;
                posY += (mouseY - posY) / 3;

                TweenMax.set(follower, {
                    css: {
                        left: posX - 10,
                        top: posY - 10,
                    },
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY,
                    },
                });
            },
        });

        document.addEventListener("mousemove", (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
            mouseX = Math.min(mouseX, screen.width - 35);
        });
    }, []);

    return (
        <React.Fragment>
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
        </React.Fragment>
    );
};

export default ChangeCursor;
