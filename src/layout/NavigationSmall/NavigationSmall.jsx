import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { menuData } from "../navigation.data";
import { MenuButton } from "./MenuButton";
import { useDimensions } from "../../hooks/useDimention";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};
const NavigationSmall = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <React.Fragment>
            <div
                className="navigationSmall-mask"
                onClick={() => toggleOpen()}
                style={{
                    display: `${isOpen ? "block" : "none"}`,
                }}
            ></div>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className="navigationSmall-nav"
            >
                <motion.div
                    className="navigationSmall-background"
                    variants={sidebar}
                />
                <motion.ul variants={variants}>
                    {menuData.map((data, idx) => (
                        <MenuItem
                            data={data}
                            key={idx}
                            toggle={() => toggleOpen()}
                        />
                    ))}
                </motion.ul>
                <MenuButton toggle={() => toggleOpen()} />
            </motion.nav>
        </React.Fragment>
    );
};

export default NavigationSmall;
