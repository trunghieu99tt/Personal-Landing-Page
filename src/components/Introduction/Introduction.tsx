import React, { useState } from "react";
import cn from "classnames";
import { AnimateSharedLayout } from "framer-motion";

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

                <div className="introduction__content">
                    <AnimateSharedLayout>
                        {[<AboutMe />, <Skills />, <Awards />].map(
                            (e: any, idx: number) => {
                                return <div>{e}</div>;
                            }
                        )}
                    </AnimateSharedLayout>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
