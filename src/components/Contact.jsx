import React, { Component, useState } from "react";
import ContactCard from "./Cards/ContactCard";
import { AnimateSharedLayout } from "framer-motion";

const Contact = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const contactInfor = [
        {
            title: "Facebook",
            name: "facebook",
            description: "",
            url: "https://www.facebook.com/LostBoyFromNeverLand99",
        },
        {
            title: "Instagram",
            name: "instagram",
            description: "",
            url: "https://www.instagram.com/lostboyfromneverland99/?hl=pt-br",
        },
        {
            title: "Github",
            name: "github",
            description: "",
            url: "https://github.com/trunghieu99tt",
        },
        {
            title: "Email",
            name: "envelope",
            description: "trunghieu99tt@gmail.com",
        },
        {
            title: "Codepen",
            name: "codepen",
            url: "https://codepen.io/lostBoyFromNeverland",
        },
        {
            title: "Linkedin",
            name: "linkedin-in",
            url: "https://www.linkedin.com/in/rikikudo/",
        },
    ];

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-heading-container">
                    <div className="text-wrapper">
                        <h3 className="section-subheading">Social Media</h3>
                    </div>
                    <div className="text-wrapper">
                        <h2 className="section-heading">Let's Be Friends</h2>
                    </div>
                </div>

                <AnimateSharedLayout>
                    <ul className="contact__content grid grid--3">
                        {contactInfor &&
                            contactInfor.length > 0 &&
                            contactInfor.map((item, idx) => (
                                <ContactCard
                                    {...item}
                                    isSelectedItem={idx === selectedItem}
                                    onHover={() => setSelectedItem(idx)}
                                />
                            ))}
                    </ul>
                </AnimateSharedLayout>
            </div>
        </section>
    );
};

export default Contact;
