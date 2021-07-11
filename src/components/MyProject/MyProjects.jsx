import Isotope from "isotope-layout";
import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import ProjectCard from "../Cards/ProjectCard";
import { encodeString } from "../../utils/Helper";
import { myProjectsData } from "../../data/myproject.data";

// TODO: Change to carousel in small devides

export default class MyProjects extends Component {
    componentDidMount() {
        const grid = document.querySelector(".my-projects-showcase");
        var iso = new Isotope(grid, {
            // options...
            layoutMode: "masonry",
            filter: "*",
            animationOptions: {
                duration: 1500,
                easing: "linear",
                queue: false,
            },
            // itemSelector: ".portfolio-item"
            // masonry: {
            // 	columnWidth: 200
            // }
        });
        const links = document.querySelectorAll(".my-projects__filter-button");
        links.forEach((item) => {
            item.addEventListener("click", () => {
                const activeButton = document.querySelector(".filter-active");
                activeButton.classList.remove("filter-active");
                item.classList.add("filter-active");
                const selector = item.getAttribute("data-filter");
                if (selector === "*") {
                    iso.arrange({ filter: "*" });
                } else iso.arrange({ filter: `.${selector}` });
            });
        });
    }

    activeNavbar = (id) => {
        const navlinks = document.querySelectorAll(".menu-item__link");
        navlinks.forEach((item) => {
            const href = item.getAttribute("href");
            if (href === id) {
                item.classList.add("active-link");
            } else {
                item.classList.remove("active-link");
            }
        });
    };

    inactiveNavbar = (id) => {
        const navlinks = document.querySelectorAll(".menu-item__link");
        navlinks.forEach((item) => {
            const href = item.getAttribute("href");
            if (href === id) {
                item.classList.remove("active-link");
            }
        });
    };

    render() {
        const categories = [
            ...new Set(
                myProjectsData &&
                    myProjectsData.length > 0 &&
                    myProjectsData.map((item) => item.category)
            ),
        ];

        return (
            <Waypoint
                onEnter={() => this.activeNavbar("#projects")}
                onLeave={() => this.inactiveNavbar("#projects")}
            >
                <section className="my-projects margin-top-7" id="projects">
                    <div className="container">
                        <div className="section-heading-container">
                            <div className="text-wrapper">
                                <h3 className="section-subheading">
                                    My Projects
                                </h3>
                            </div>
                            <div className="text-wrapper">
                                <h2 className="section-heading">
                                    All Project I've made
                                </h2>
                            </div>
                        </div>
                        <ul className="my-projects__filter-buttons">
                            <li
                                className="my-projects__filter-button filter-active"
                                data-filter="*"
                            >
                                All Categories
                            </li>
                            {categories &&
                                categories.length > 0 &&
                                categories.map((item) => (
                                    <li
                                        className="my-projects__filter-button"
                                        data-filter={encodeString(item)}
                                    >
                                        {item}
                                    </li>
                                ))}
                        </ul>
                        <div className="my-projects-showcase">
                            {myProjectsData &&
                                myProjectsData.length > 0 &&
                                myProjectsData.map((item) => {
                                    return <ProjectCard {...item} />;
                                })}
                        </div>
                    </div>
                </section>
            </Waypoint>
        );
    }
}
