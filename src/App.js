/* eslint-disable no-restricted-globals */
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
import ChangeCursor from "./components/ChangeCursor/ChangeCursor";
import MyProjectv2 from "./components/MyProjectv2";
import { NavigationSmall } from "./layout/NavigationSmall/NavigationSmall";

export default class App extends Component {
    state = {
        myProjectsData: [],
        isDesktop: true,
    };

    componentDidMount() {
        const width = screen.width;
        if (width < 1200) this.setState({ isDesktop: false });

        window.addEventListener("resize", () => {
            const width = screen.width;
            if (width < 1200) this.setState({ isDesktop: false });
        });
    }

    render() {
        const { isDesktop } = this.state;

        console.log("isDesktop", isDesktop);

        return (
            <React.Fragment>
                <ChangeCursor />
                {(isDesktop && <Navigation />) || <NavigationSmall />}
                <Banner />
                <Introduction />
                <TimeLine />
                {/* <MyProjects myProjectsData={myProjectsData} /> */}
                <MyProjectsv1 />
                {/* <MyProjectsv1 /> */}
                {/* <MyProjectv2 /> */}
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}
