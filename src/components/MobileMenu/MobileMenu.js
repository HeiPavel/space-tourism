import React, {useEffect} from "react";
import { NavLinks } from "../NavLinks/NavLinks";
import close from "../../media/icons/icon-close.svg";

export const MobileMenu = () => {

    useEffect(() => {
        const menuButton = document.getElementById('humburger');
        const closeButton = document.getElementById('close-button');
        const menu = document.getElementById('mobile-menu');
        const links = menu.querySelectorAll('a');

        const handleClick = () => {
            menu.classList.toggle('show');
            menuButton.classList.toggle('hide');
        }

        menuButton.addEventListener('click', handleClick);
        closeButton.addEventListener('click', handleClick);
        links.forEach(link => link.addEventListener('click', handleClick));

        return () => {
            menuButton.removeEventListener('click', handleClick);
            closeButton.removeEventListener('click', handleClick);
            links.forEach(link => link.removeEventListener('click', handleClick));
        }
    }, []);

    return (
        <nav id="mobile-menu" className="blur">
            <div id="close-button">
                <img src={close} alt="close button" />
            </div>
            <NavLinks />
        </nav>
    );
}