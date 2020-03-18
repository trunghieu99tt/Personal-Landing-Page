import React, { Component } from "react";
import Particles from "react-particles-js";

export default class Banner extends Component {
	render() {
		return (
			<section className="banner">
				<Particles />

				<div className="container">
					<div className="row align-items-center banner-content">
						<div className="col-md-6">
							<div className="banner-content">
								<div className="banner-text">
									<h3 className="banner-title--1">
										Hello, I'm{" "}
									</h3>
									<h1 className="banner-title--2">
										Nguyen Trung Hieu
									</h1>
									<p className="banner-title--3">
										Front-end Developer
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<img
								src={require("../images/img1.jpg")}
								alt="Me 1"
								className="banner-image--1"
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
