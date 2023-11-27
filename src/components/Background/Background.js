import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { loadImage } from "../../until/loadImage";

export const Background = ({screenType}) => {
    const [image, setImage] = useState(null);
    const {pathname} = useLocation();
    let baseUrl = pathname.split('/')[1];
    baseUrl = baseUrl ? baseUrl : 'home';

    if (screenType) loadImage(baseUrl, screenType, `background-${baseUrl}-`, setImage, image, 'jpg');

    useEffect(() => {
        const root = document.getElementById('root');
        if (image) root.style.backgroundImage = `url(${image})`;
    }, [image]);
}