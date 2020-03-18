import React, { Component } from "react";

export default class Navigation extends Component {
	render() {
		const menu = ["About", "Work", "Project", "Contact"].map(item => {
			return (
				<li className="menu-item">
					<a href="#" className="menu-item__link">
						<p>{item}</p>
					</a>
				</li>
			);
		});

		return (
			<section className="navigation">
				<div className="container">
					<div className="row align-items-center">
						<div className="logo-wrapper">
							<img
								src={require("../images/logo.png")}
								alt="Logo"
								className="logo"
							/>
						</div>

						<ul className="menu">{menu}</ul>
					</div>
				</div>
			</section>
		);
	}
}
