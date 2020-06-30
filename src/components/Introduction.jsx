import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Services from "./Services";
import Awards from "./Awards";
import { Waypoint } from "react-waypoint";

export default class Introduction extends Component {
	componentDidMount() {
		const introductionHeading = document.querySelectorAll(
			".introduction__heading-item"
		);
		const introductionItems = document.querySelectorAll(
			".introduction-item"
		);

		if (introductionHeading && introductionHeading.length > 0) {
			introductionHeading.forEach(item =>
				item.addEventListener("click", () => {
					introductionHeading.forEach(e =>
						e.classList.remove("introduction-item-active")
					);
					const data = item.getAttribute("data");
					item.classList.add("introduction-item-active");
					if (introductionItems && introductionItems.length > 0) {
						introductionItems.forEach(item1 => {
							const dataItem =
								item1 && item1.getAttribute("data");
							console.log("dataItem", dataItem);
							console.log("data", data);
							if (dataItem === data) {
								item1.classList.add(
									"introduction-item--active"
								);
							} else {
								item1.classList.remove(
									"introduction-item--active"
								);
							}
						});
					}
				})
			);
		}
	}

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
		const headers = [
			{
				name: "About me",
				data: "about"
			},
			{
				name: "Skills",
				data: "skills"
			},
			{
				name: "Services",
				data: "services"
			},
			{
				name: "Awards",
				data: "awards"
			}
		];

		return (
			<Waypoint
				onEnter={() => this.activeNavbar("#about")}
				onLeave={() => this.unactiveNavbar("#about")}
			>
				<section className="introduction" id="about">
					<div className="container">
						<div className="introduction__heading">
							{headers &&
								headers.length > 0 &&
								headers.map((item, index) => {
									const { name, data } = item;
									return (
										<div
											className={`text-wrapper introduction__heading-item ${
												index === 0
													? "introduction-item-active"
													: ""
											}`}
											data={data}
										>
											<p className="introduction__heading-item__title">
												{name}
											</p>
										</div>
									);
								})}
						</div>

						<div className="introduction__content">
							<AboutMe />
							<Skills />
							<Services />
							<Awards />
						</div>
					</div>
				</section>
			</Waypoint>
		);
	}
}
