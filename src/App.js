import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "./axios";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import MyProjects from "./components/MyProjects";
import TimeLine from "./components/TimeLine";
import "./css/main.css";
import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";

export default class App extends Component {
	state = {
		myProjectsData: [],
	};

	componentDidMount() {
		axios.get("/Projects.json").then((response) => {
			const { data } = response;
			console.log("MyProjects -> componentDidMount -> data", data);
			const projects = Object.keys(data).map((k) => data[k]);
			console.log(
				"MyProjects -> componentDidMount -> projects",
				projects,
				projects.length
			);
			this.setState({ myProjectsData: projects });
		});
	}

	render() {
		const { myProjectsData } = this.state;

		return (
			<React.Fragment>
				<Navigation />
				<Banner />
				<Introduction />
				<TimeLine />
				<MyProjects myProjectsData={myProjectsData} />
				<Contact />
				<Footer />
			</React.Fragment>
		);
	}
}
