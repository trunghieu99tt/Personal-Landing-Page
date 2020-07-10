import React from "react";
import Swiper from "react-id-swiper";
import { myProjectsData } from "../data/myproject.data";
// import ProjectCard from "./Cards/ProjectCard";
// import Image from "./Image";

const MyProjectsv1 = () => {
    const params = {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        spaceBetween: 50,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,
            },
        },
    };

    return (
        <section className="myProject-v1" id="projects">
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
                                    <img
                                        src={item.image}
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
