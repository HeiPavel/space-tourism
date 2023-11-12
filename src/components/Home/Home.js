import React, {useState, useEffect} from "react";
import { loadImage } from "../../until/loadImage";

export const Home = () => {
    const [screenType, setScreenType] = useState(null);
    const [image, setImage] = useState(null);

    if (screenType) loadImage('media/home/', screenType, 'background-home-', setImage);

    useEffect(() => {
        const root = document.getElementById('root');
        if (image) root.style.backgroundImage = `url(${image})`;

        let timeoutId = false;
        const checkScreenWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 820 && screenWidth > 480 && screenType !== 'tablet') setScreenType('tablet');
            if (screenWidth <= 480 && screenType !== 'mobile') setScreenType('mobile');
            if (screenWidth > 820 && screenType !== 'desktop') setScreenType('desktop');
        };

        if (!screenType) checkScreenWidth();

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkScreenWidth, 50);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [screenType, image]);

    return (
        <>
        </>
    );
}