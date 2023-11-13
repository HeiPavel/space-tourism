import React from "react";
import humburger from '../../media/icons/icon-hamburger.svg';

export const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <div className="humburger">
                <img src={humburger} alt="button" />
            </div>
            <div className="sidebar"></div>
        </div>
    );
}