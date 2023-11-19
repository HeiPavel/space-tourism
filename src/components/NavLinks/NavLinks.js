import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../until/data";

export const NavLinks = () => {
    const {main} = navigation;

    return (
        <>
            {main.map((link, index) => (<NavLink key={index} to={`/${link.path}`}><span>{`0${index}`}</span>{link.path ? link.path.toUpperCase() : 'HOME'}</NavLink>))}
        </>
    );
}