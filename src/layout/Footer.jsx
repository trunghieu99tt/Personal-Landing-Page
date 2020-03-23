import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		const footerLinks = [
			{ name: "About", url: "#about" },
			{ name: "Timeline", url: "#timeline" },
			{ name: "Projects", url: "#projects" },
			{ name: "Contact", url: "#contact" }
		].map(item => {
			const { name, url } = item;
			return (
				<li className="footer-link-item">
					<a href={url} className="footer-link">
						{name}
					</a>
				</li>
			);
		});

		return (
			<footer className="footer" id="footer">
				<div className="container">
					<div className="footer-top grid grid--3">
						<div className="footer-logo-container">
							<img
								src={require("../images/logo.png")}
								alt=""
								className="footer-logo lazyload"
							/>
						</div>
						<div className="d-flex align-items-center justify-content-cente footer-link-heading-container">
							<h1 className="footer-link-heading">Let's Talk</h1>
						</div>

						<div className="d-flex align-items-center">
							<a
								href="https://www.facebook.com/LostBoyFromNeverLand99"
								className="button button--2 ml-auto"
							>
								Let's chat
							</a>
						</div>
						<div className="footer-link-container">
							<ul className="footer-link-items">{footerLinks}</ul>
							<p className="footer-copy-right">
								Copyright By@Rikikudo - 2020
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
