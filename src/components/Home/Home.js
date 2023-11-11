import React, {useEffect} from "react";
import bgImage from '../../media/home/background-home-desktop.jpg';

export const Home = () => {
    useEffect(() => {
        const root = document.getElementById('root');
        root.style.backgroundImage = `url(${bgImage})`;
    }, []);

    return (
        <>
        </>
    );
}