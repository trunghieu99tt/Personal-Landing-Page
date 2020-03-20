import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

import Navigation from "./layout/Navigation";
import Banner from "./components/Banner";
import Introduction from "./components/Introduction";
import TimeLine from "./components/TimeLine";

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Banner />
				<Introduction />
				<TimeLine />
			</React.Fragment>
		);
	}
}
