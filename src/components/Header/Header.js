import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../media/icons/logo.svg';

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <NavLink to="/"><span>00</span>HOME</NavLink>
                <NavLink to="/destination"><span>01</span>DESTINATION</NavLink>
                <NavLink to="/crew"><span>02</span>CREW</NavLink>
                <NavLink to="/technology"><span>03</span>TECHNOLOGY</NavLink>
            </nav>
        </header>
    );
}