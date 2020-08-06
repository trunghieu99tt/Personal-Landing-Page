/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { motion } from "framer-motion";

const ContactCard = (props) => {
    const { title, name, description, url, isSelectedItem, onHover } = props;

    return (
        <motion.div className="contact-card" onHoverStart={onHover}>
            <div className="contact-card-infor">
                <div className="text-wrapper">
                    <a
                        className="contact-card__title"
                        href={
                            url || "https://facebook.com/LostBoyFromNeverLand99"
                        }
                        target="_blank"
                    >
                        {title}
                    </a>
                </div>

                <div className="text-wrapper">
                    <p className="contact-card__description">{description}</p>
                </div>
            </div>

            <div className="contact-card__icon">
                <i
                    class={`${name !== "envelope" ? "fab" : "fas"} fa-${name}`}
                ></i>
            </div>

            {isSelectedItem && (
                <motion.div
                    layoutId="contactCard-outline"
                    className="contactCard-outline"
                    initial={false}
                    animate={{ borderColor: "#fec576" }}
                    transition={spring}
                ></motion.div>
            )}
        </motion.div>
    );
};

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
};

export default ContactCard;
