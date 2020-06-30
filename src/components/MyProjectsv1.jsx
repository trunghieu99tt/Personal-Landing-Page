import React from "react";
import Swiper from "react-id-swiper";
import { myProjectsData } from "../data/myproject.data";
import ProjectCard from "./Cards/ProjectCard";
import Image from "./Image";

const MyProjectsv1 = () => {
    const params = {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        spaceBetween: 50,
    };

    const innerElements =
        myProjectsData &&
        myProjectsData.length > 0 &&
        myProjectsData.map((item) => {
            return <ProjectCard {...item} />;
        });

    return (
        <section className="myProject-v1">
            <div className="container">
                <div className="section-heading-container">
                    <div className="text-wrapper">
                        <h3 className="section-subheading">My Projects</h3>
                    </div>
                    <div className="text-wrapper">
                        <h2 className="section-heading">
                            All Project I've made
                        </h2>
                    </div>
                </div>

                <Swiper {...params} key={Math.random()}>
                    {myProjectsData &&
                        myProjectsData.length > 0 &&
                        myProjectsData.map((item) => (
                            <div className={`project-card`}>
                                <div className="project-card__image-container">
                                    <Image
                                        image={item.image}
                                        alt={item.name}
                                        className="project-card__image lazyload"
                                    />
                                </div>

                                <div className="project-card__infor">
                                    <a
                                        className="project-card__name"
                                        href={item.url}
                                        target="_blank"
                                    >
                                        {item.name}
                                    </a>
                                </div>
                            </div>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default MyProjectsv1;
