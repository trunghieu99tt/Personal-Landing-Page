import React, { Component } from "react";
import ServiceCard from "./Cards/ServiceCard";

export default class Services extends Component {
	render() {
		const cardsData = [
			{
				image: require("../images/img3.jpg"),
				title: "Web Design",
				description:
					"Strategy develop customer in organisational knowledge and market perspectives that inform and provoke."
			},
			{
				image: require("../images/img3.jpg"),
				title: "Web Design",
				description:
					"Strategy develop customer in organisational knowledge and market perspectives that inform and provoke."
			},
			{
				image: require("../images/img3.jpg"),
				title: "Web Design",
				description:
					"Strategy develop customer in organisational knowledge and market perspectives that inform and provoke."
			},
			{
				image: require("../images/img3.jpg"),
				title: "Web Design",
				description:
					"Strategy develop customer in organisational knowledge and market perspectives that inform and provoke."
			}
		];

		return (
			<div
				className="services introduction-item grid grid--2"
				data="services"
			>
				{cardsData &&
					cardsData.length > 0 &&
					cardsData.map(item => <ServiceCard {...item} />)}
			</div>
		);
	}
}
