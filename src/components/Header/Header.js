import React from "react";
import logo from '../../media/icons/logo.svg';
import humburger from '../../media/icons/icon-hamburger.svg';
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { NavLinks } from "../NavLinks/NavLinks";

export const Header = () => {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="navigation blur desktop">
                    <NavLinks />
                </nav>
                <div className="mobile-button">
                    <div id="humburger">
                        <img src={humburger} alt="button" />
                    </div>
                </div>
            </header>
            <MobileMenu />
        </>
    );
}