import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { myProjectsData } from "../data/myproject.data";
import { TweenMax } from "gsap";

const MyProjectv2 = () => {
    const handleHover = (idx) => {
        const images = document.querySelectorAll(".myProjectv2-item__image");
        const image = images[idx];

        if (image && image.style) {
            image.style.display = "block";
            let posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 5;
                    posY += (mouseY - posY) / 5;

                    TweenMax.set(image, {
                        css: {
                            left: posX,
                            top: posY,
                            y: "-50%",
                        },
                    });
                },
            });

            document.addEventListener("mousemove", (e) => {
                const rect = e.target.getBoundingClientRect();
                mouseX = e.clientX - rect.left;
                mouseY = e.clientY - rect.top / 2;
            });
        }
    };

    const handleEndHover = (idx) => {
        const images = document.querySelectorAll(".hoverList-item__image");
        const image = images[idx];

        if (image && image.style) {
            image.style.display = "none";
            document.removeEventListener("mousemove", (e) => {});
        }
    };

    const variants = {
        open: {
            opacity: 1,
            transform: "scale(1)",
        },
        hide: {
            opacity: 0,
            transform: "scale(1.5)",
        },
    };

    return (
        <section className="myProjectv2-container">
            <div className="container">
                <AnimatePresence className="myProjectv2">
                    {myProjectsData.map(({ name, image }, idx) => (
                        <motion.li
                            whileHover={() => handleHover(idx)}
                            onHoverEnd={() => handleEndHover(idx)}
                            className="myProjectv2-item"
                        >
                            <h3 className="myProjectv2-item__title">{name}</h3>
                            <motion.figure className="myProjectv2-item__image-container">
                                <motion.img
                                    src={image}
                                    alt="Something"
                                    className="myProjectv2-item__image"
                                />
                            </motion.figure>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MyProjectv2;
