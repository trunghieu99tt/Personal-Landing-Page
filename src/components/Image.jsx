import React, { Component } from 'react';
import { SCREEN_MOBILE, SCREEN_TABLET } from '../variables';


export default class Image extends Component {
    state = {
        src: null
    }

    componentDidMount() {
        const { desktopWidth, tabletWidth, mobileWidth, image } = this.props;
        const screenWidth = window.innerWidth;

        const widthImage = this.switchImageFromScreen(
            screenWidth,
            desktopWidth,
            tabletWidth,
            mobileWidth
        );

        const url = widthImage ? `${image}=w${widthImage}` : image;

        this.setState({
            src: url,
        });
    }
    switchImageFromScreen = (screenWidth, desktopWidth, tabletWidth, mobileWidth) => {
        if (Number(screenWidth) >= Number(SCREEN_TABLET)) {
            return desktopWidth;
        }
        if (
            Number(screenWidth) < Number(SCREEN_TABLET) &&
            Number(screenWidth) > Number(SCREEN_MOBILE)
        ) {
            return tabletWidth;
        }
        return mobileWidth;
    };


    render() {

        const { alt, className } = this.props;
        const { src } = this.state;
        return (
            <img className={className} alt={alt} src={src} />
        )
    }
}
