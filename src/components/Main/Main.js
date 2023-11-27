import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import { ScreenTypeContext } from "../ScreenTypeContext/ScreenTypeContext";
import { Background } from "../Background/Background"; 
export const Main = () => {
    const [screenType, setScreenType] = useState(null);

    useEffect(() => {
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
    }, [screenType]);

    return (
        <main>
            <Background screenType={screenType} />
            <ScreenTypeContext.Provider value={screenType}>
                <Outlet />
            </ScreenTypeContext.Provider>
        </main>
    )
}