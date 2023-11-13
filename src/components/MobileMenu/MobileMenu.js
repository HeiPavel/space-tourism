import React, {useEffect} from "react";
import humburger from '../../media/icons/icon-hamburger.svg';

export const MobileMenu = () => {

    useEffect(() => {
        const menuButton = document.getElementById('humburger');
        const closeButton = document.getElementById('close-button');
        const menu = document.getElementById('general-navigation-menu');

        const handleClick = () => {
            menu.classList.toggle('show');
            menuButton.classList.toggle('hide');
        }

        menuButton.addEventListener('click', handleClick);
        closeButton.addEventListener('click', handleClick);

        return () => {
            menuButton.removeEventListener('click', handleClick);
            closeButton.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <div className="mobile-menu">
            <div id="humburger">
                <img src={humburger} alt="button" />
            </div>
        </div>
    );
}