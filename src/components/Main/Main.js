import React, {useState, useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ScreenTypeContext } from "../ScreenTypeContext/ScreenTypeContext";
import { loadImage } from "../../until/loadImage";

export const Main = () => {
    const [screenType, setScreenType] = useState(null);
    const [image, setImage] = useState(null);
    const {pathname} = useLocation();
    let baseUrl = pathname.split('/')[1];
    baseUrl = baseUrl ? baseUrl : 'home';

    if (screenType) loadImage(baseUrl, screenType, `background-${baseUrl}-`, setImage, image, 'jpg');

    useEffect(() => {
        const root = document.getElementById('root');
        if (image) root.style.backgroundImage = `url(${image})`;

        let timeoutId = false;
        const checkScreenWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 1024 && screenWidth > 480 && screenType !== 'tablet') setScreenType('tablet');
            if (screenWidth <= 480 && screenType !== 'mobile') setScreenType('mobile');
            if (screenWidth > 1024 && screenType !== 'desktop') setScreenType('desktop');
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
        <main>
            <ScreenTypeContext.Provider value={screenType}>
                <Outlet />
            </ScreenTypeContext.Provider>
        </main>
    )
}