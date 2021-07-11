import React, { useCallback, useEffect, useState } from "react";
import { AnimateSharedLayout } from "framer-motion";

// talons
import { useData } from "../../talons/useData";

// components
import ContactCard from "../Cards/ContactCard";

const Contact = () => {
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const [data, setData] = useState<any>(null);

    const { fetchData } = useData({
        endpoint: "contact.json",
    });

    const getContactInfo = useCallback(async () => {
        const response = await fetchData();
        setData(response);
    }, [fetchData]);

    useEffect(() => {
        getContactInfo();
    }, [getContactInfo]);

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
                        {data &&
                            data.length > 0 &&
                            data.map((item: any, idx: number) => (
                                <ContactCard
                                    key={`contact-card-${idx}`}
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
