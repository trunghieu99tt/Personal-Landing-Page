import React, { useState } from "react";
import cn from "classnames";

// components
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Awards from "./Awards";

const Introduction = () => {
    const [activeIdx, setActiveIdx] = useState<number>(0);

    const headers = [
        {
            name: "About me",
        },
        {
            name: "Skills",
        },
        {
            name: "Awards",
        },
    ];

    const activeComponent = [
        <AboutMe />,
        <Skills key={Math.random()} />,
        <Awards />,
    ][activeIdx];

    return (
        <section className="introduction" id="about">
            <div className="container">
                <div className="introduction__heading">
                    {headers &&
                        headers.length > 0 &&
                        headers.map((item: any, idx: number) => {
                            const { name } = item;
                            return (
                                <div
                                    className={cn(
                                        "text-wrapper introduction__heading-item",
                                        {
                                            "introduction-item-active":
                                                idx === activeIdx,
                                        }
                                    )}
                                    onClick={() => setActiveIdx(idx)}
                                >
                                    <p className="introduction__heading-item__title">
                                        {name}
                                    </p>
                                </div>
                            );
                        })}
                </div>

                <div className="introduction__content">{activeComponent}</div>
            </div>
        </section>
    );
};

export default Introduction;
