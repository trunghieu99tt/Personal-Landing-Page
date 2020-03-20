import React, { Component } from "react";

export default class AboutMe extends Component {
	render() {
		return (
			<div
				className="aboutme introduction-item introduction-item--active"
				data="about"
			>
				<div className="row">
					<div className="col-md-5">
						<div className="aboutme__image">
							<img
								src={require("../images/img2.jpg")}
								alt="aboutme"
							/>
						</div>
					</div>
					<div className="col-md-6 aboutme__main">
						<div className="text-wrapper">
							<h1 className="aboutme__title">
								Why hire me for your next project?
							</h1>
						</div>
						<div className="text-wrapper">
							<p className="aboutme__description">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Voluptas libero dolore ut
								error illum? Est deserunt molestiae eum? Nihil
								officiis optio enim culpa quas debitis sint illo
								perspiciatis nesciunt! Vero.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
