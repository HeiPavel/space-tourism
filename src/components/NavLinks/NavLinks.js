import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinks = () => {
    return (
        <>
            <NavLink to="/"><span>00</span>HOME</NavLink>
            <NavLink to="/destination"><span>01</span>DESTINATION</NavLink>
            <NavLink to="/crew"><span>02</span>CREW</NavLink>
            <NavLink to="/technology"><span>03</span>TECHNOLOGY</NavLink>
        </>
    );
}