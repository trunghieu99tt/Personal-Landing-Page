import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/swiper.css";
import React, { Component } from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import MyProjects from "./components/MyProjects";
import TimeLine from "./components/TimeLine";
import "./css/main.min.css";
import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";
import MyProjectsv1 from "./components/MyProjectsv1";

export default class App extends Component {
	state = {
		myProjectsData: [],
	};

	componentDidMount() {}

	render() {
		const { myProjectsData } = this.state;

		return (
			<React.Fragment>
				{/* <CustomCursor /> */}
				<Navigation />
				<Banner />
				<Introduction />
				<TimeLine />
				{/* <MyProjects myProjectsData={myProjectsData} /> */}
				{/* <MyProjectsv1 /> */}
				<MyProjectsv1 />
				<Contact />
				<Footer />
			</React.Fragment>
		);
	}
}
