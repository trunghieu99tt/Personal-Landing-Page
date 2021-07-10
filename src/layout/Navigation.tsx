import React from "react";
import { menuData } from "./navigation.data";

const Navigation = () => {
    const menu = menuData.map((item: any, idx: number) => {
        const { name, url } = item;
        return (
            <li className="menu-item" key={`menu-item-link-${idx}`}>
                <a href={url} className="menu-item__link">
                    <p>{name}</p>
                </a>
            </li>
        );
    });

    return (
        <section className="navigation">
            <div className="container">
                <div className="row align-items-center">
                    <div className="logo-wrapper">
                        <img
                            src={require("../images/logo.png")}
                            alt="Logo"
                            className="logo"
                        />
                    </div>

                    <ul className="menu">{menu}</ul>
                </div>
            </div>
        </section>
    );
};

export default Navigation;
