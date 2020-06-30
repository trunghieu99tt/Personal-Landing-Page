import React, { Component } from "react";
import ContactCard from "./Cards/ContactCard";
import { Waypoint } from "react-waypoint";

export default class Contact extends Component {
	activeNavbar = id => {
		const navlinks = document.querySelectorAll(".menu-item__link");
		navlinks.forEach(item => {
			const href = item.getAttribute("href");
			if (href === id) {
				item.classList.add("active-link");
			} else {
				item.classList.remove("active-link");
			}
		});
	};

	unactiveNavbar = id => {
		const navlinks = document.querySelectorAll(".menu-item__link");
		navlinks.forEach(item => {
			const href = item.getAttribute("href");
			if (href === id) {
				item.classList.remove("active-link");
			}
		});
	};

	render() {
		const contactInfor = [
			{
				title: "Facebook",
				name: "facebook",
				description: "",
				url: "https://www.facebook.com/LostBoyFromNeverLand99"
			},
			{
				title: "Instagram",
				name: "instagram",
				description: "",
				url:
					"https://www.instagram.com/lostboyfromneverland99/?hl=pt-br"
			},
			{
				title: "Github",
				name: "github",
				description: "",
				url: "https://github.com/trunghieu99tt"
			},
			{
				title: "Email",
				name: "envelope",
				description: "trunghieu99tt@gmail.com"
			},
			{
				title: "Codepen",
				name: "codepen",
				url: "https://codepen.io/lostBoyFromNeverland"
			}
		];

		return (
			<Waypoint
				onEnter={() => this.activeNavbar("#contact")}
				onLeave={() => this.unactiveNavbar("#contact")}
			>
				<section className="contact" id="contact">
					<div className="container">
						<div className="section-heading-container">
							<div className="text-wrapper">
								<h3 className="section-subheading">
									Social Media
								</h3>
							</div>
							<div className="text-wrapper">
								<h2 className="section-heading">
									Let's Be Friends
								</h2>
							</div>
						</div>

						<div className="contact__content grid grid--3">
							{contactInfor &&
								contactInfor.length > 0 &&
								contactInfor.map(item => (
									<ContactCard {...item} />
								))}
						</div>
					</div>
				</section>
			</Waypoint>
		);
	}
}
