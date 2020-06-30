import React, { Component } from "react";

export default class Navigation extends Component {
	render() {
		const menu = [
			{ name: "About", url: "#about" },
			{ name: "Timeline", url: "#timeline" },
			{ name: "Projects", url: "#projects" },
			{ name: "Contact", url: "#contact" }
		].map(item => {
			const { name, url } = item;
			return (
				<li className="menu-item">
					<a href={url} className="menu-item__link">
						<p>{name}</p>
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
