import React, { Component } from "react";
import SkillBar from "./SkillBar";

export default class Skills extends Component {
    render() {
        const skills = [
            { title: "HTML5", percent: "90" },
            { title: "CSS3", percent: "80" },
            { title: "JS", percent: "60" },
            { title: "ReactJS", percent: "60" },
            { title: "C++", percent: "60" },
            { title: "NodeJS", percent: "65" },
            { title: "Java", percent: "65" },
            { title: "Python", percent: "65" },
            { title: "Redux", percent: "65" },
            { title: "Typescript", percent: "65" },
            { title: "MySQL", percent: "65" },
            { title: "MongoDB", percent: "65" },
            { title: "Competitive Programing", percent: "65" },
        ];
        return (
            <div
                className="skills introduction-item grid grid--3"
                data="skills"
            >
                {skills?.map((skill) => {
                    return (
                        <div
                            className="skill-item"
                            style={{
                                fontSize: "1.5rem",
                            }}
                        >
                            + {skill.title}
                        </div>
                    );
                })}

                {/* {skills &&
                    skills.length > 0 &&
                    skills.map((item) => {
                        return <SkillBar {...item} />;
                    })} */}
            </div>
        );
    }
}
