/* eslint-disable no-restricted-globals */
import React from "react";

// talons
import { useWindowSize } from "./hooks/useWindowsize";

// layout
import Footer from "./layout/Footer";
import NavigationSmall from "./layout/NavigationSmall";
import Navigation from "./layout/Navigation";

// components
import ScrollBar from "./components/ScrollBar/ScrollBar";
import Banner from "./components/Banner/Banner";
import Timeline from "./components/Timeline";
import MyProject from "./components/MyProject";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact/Contact";
import ChangeCursor from "./components/ChangeCursor/ChangeCursor";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/swiper.css";
import "./css/main.min.css";

const App = () => {
    const size = useWindowSize();

    const width = size.width || 1920;

    const isDesktop = width >= 1200;

    return (
        <React.Fragment>
            <ScrollBar />
            <ChangeCursor />
            {(isDesktop && <Navigation />) || <NavigationSmall />}
            <Banner />
            <Introduction />
            <Timeline />
            <MyProject />
            <Contact />
            <Footer />
        </React.Fragment>
    );
};

export default App;
