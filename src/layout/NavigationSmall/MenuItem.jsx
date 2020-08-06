import * as React from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        display: "block",
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        display: "none",
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

export const MenuItem = ({ data, toggle }) => {
    const { name, url } = data;

    return (
        <motion.li
            className="navigationSmall-item"
            variants={variants}
            onClick={toggle}
        >
            <a href={url}>{name}</a>
        </motion.li>
    );
};
