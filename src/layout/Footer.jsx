import React from "react";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-top grid grid--3">
                    <div className="footer-logo-container">
                        <img
                            src={require("../images/logo.png")}
                            alt=""
                            className="footer-logo lazyload"
                        />
                    </div>
                    <div className="d-flex align-items-center justify-content-cente footer-link-heading-container">
                        <h1 className="footer-link-heading">Let's Talk</h1>
                    </div>

                    <div className="d-flex align-items-center">
                        <a
                            href="https://www.facebook.com/rikikudo99"
                            className="button button--2 ml-auto"
                        >
                            Let's chat
                        </a>
                    </div>
                    <div className="footer-link-container">
                        <p className="footer-copy-right">
                            Copyright By@Rikikudo - 2020
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
