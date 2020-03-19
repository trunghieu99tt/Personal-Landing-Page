import React, { Component } from "react";
import SkillBar from "./SkillBar";

export default class WhyHireMe extends Component {
	render() {
		const skills = [
			{ title: "HTML", percent: "90" },
			{ title: "CSS", percent: "80" },
			{ title: "JS", percent: "60" },
			{ title: "ReactJS", percent: "60" },
			{ title: "C++", percent: "60" }
		];

		return (
			<section className="hireme">
				<div className="container">
					<div className="hireme__heading-container">
						<div className="text-wrapper">
							<h1 className="hireme__heading">About me</h1>
						</div>
					</div>

					<div className="hireme__content">
						<div className="row">
							<div className="col-md-5">
								<div className="hireme__image">
									<img
										src={require("../images/img2.jpg")}
										alt="hireme"
									/>
								</div>
							</div>
							<div className="col-md-6 hireme__main">
								<div className="text-wrapper">
									<h1 className="hireme__title">
										Why hire me for your next project?
									</h1>
								</div>
								<div className="text-wrapper">
									<div className="hireme__description"></div>
								</div>

								<div className="skillbar-container">
									{skills &&
										skills.map(item => (
											<SkillBar {...item} />
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
