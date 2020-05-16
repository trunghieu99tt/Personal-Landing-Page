import React, { Component } from "react";
// import "./custom-cursor.scss";

export default class CustomCursor extends Component {
	componentDidMount() {
		const cursor = document.querySelector(".cursor");

		document.addEventListener("mousemove", (e) => {
			cursor.setAttribute(
				"style",
				"top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
			);
		});

		document.addEventListener("click", () => {
			cursor.classList.add("expand");

			setTimeout(() => {
				cursor.classList.remove("expand");
			}, 500);
		});
	}
	render() {
		return <div className="cursor"></div>;
	}
}
