import React, { Component } from "react";
import ServiceCard from "./Cards/ServiceCard";

export default class Services extends Component {
	render() {
		const cardsData = [
			{
				image: require("../images/convert.jpg"),
				title: "Convert PSD To HTML,CSS,JS",
				description: "Convert PSD file to HTML webpage"
			},
			{
				image: require("../images/img3.jpg"),
				title: "Build web page",
				description:
					"Design, build a website from scratch with HTML, CSS, JS, ReactJS"
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
