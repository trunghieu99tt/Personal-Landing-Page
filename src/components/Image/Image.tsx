import React, { useCallback, useEffect, useState } from "react";
import { SCREEN_MOBILE, SCREEN_TABLET } from "../../variables";

type Props = {
    screenWidth: number;
    desktopWidth: number;
    tabletWidth: number;
    mobileWidth: number;
    image: any;
    className: any;
    alt: string;
};

const Image = ({
    desktopWidth,
    tabletWidth,
    mobileWidth,
    image,
    className,
    alt,
}: Props) => {
    const [src, setSrc] = useState<any>(null);

    const getSrc = useCallback(() => {
        const screenWidth = window.innerWidth;
        const widthImage = switchImageFromScreen(
            screenWidth,
            desktopWidth,
            tabletWidth,
            mobileWidth
        );
        const url = widthImage ? `${image}=w${widthImage}` : image;
        setSrc(url);
    }, [desktopWidth, image, mobileWidth, tabletWidth]);

    useEffect(() => {
        getSrc();
    }, [getSrc]);

    const switchImageFromScreen = (
        screenWidth: number,
        desktopWidth: number,
        tabletWidth: number,
        mobileWidth: number
    ) => {
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

    return <img className={className} alt={alt} src={src} />;
};

export default Image;
