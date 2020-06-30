import React, { Component } from "react";
import SkillBar from "./SkillBar";

export default class Skills extends Component {
	render() {
		const skills = [
			{ title: "HTML", percent: "90" },
			{ title: "CSS", percent: "80" },
			{ title: "JS", percent: "60" },
			{ title: "ReactJS", percent: "60" },
			{ title: "C++", percent: "60" },
			{ title: "Competitive Programing", percent: "65" }
		];
		return (
			<div
				className="skills introduction-item grid grid--2"
				data="skills"
			>
				{skills &&
					skills.length > 0 &&
					skills.map(item => {
						return <SkillBar {...item} />;
					})}
			</div>
		);
	}
}
