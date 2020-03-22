import React, { Component } from "react";
import ContactCard from "./Cards/ContactCard";

export default class Contact extends Component {
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
			<section className="contact" id="contact">
				<div className="container">
					<div className="section-heading-container">
						<div className="text-wrapper">
							<h3 className="section-subheading">Social Media</h3>
						</div>
						<div className="text-wrapper">
							<h2 className="section-heading">Let's Be Friend</h2>
						</div>
					</div>

					<div className="contact__content grid grid--3">
						{contactInfor &&
							contactInfor.length > 0 &&
							contactInfor.map(item => <ContactCard {...item} />)}
					</div>
				</div>
			</section>
		);
	}
}
