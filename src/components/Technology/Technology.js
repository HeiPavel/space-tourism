import React, {useState, useContext} from "react";
import { useParams, Navigate, Outlet, NavLink } from "react-router-dom";
import {ScreenTypeContext} from '../ScreenTypeContext/ScreenTypeContext';
import {loadImage} from '../../until/loadImage';
import { navigation } from "../../until/data";

export const Technology = () => {
    const [image, setImgae] = useState(null);
    const screenType = useContext(ScreenTypeContext);
    const {tool} = useParams();
    const {technology} = navigation;

    if (!tool) return <Navigate to='launch-vehicle' />

    loadImage('technology', `${screenType === 'desktop' ? 'portrait' : 'landscape'}`, `image-${tool}-`, setImgae, image, 'jpg');

    return (
        <section className="technology">
            <div className="section-content">
                <h5 className="page-title"><span>03</span>SPACE LAUNCH 101</h5>
                <article className="technology-card">
                    <div className="technology-text-content">
                        <nav>
                            {technology.map((link, index) => (<NavLink key={index} to={link.path}>{index + 1}</NavLink>))}
                        </nav>
                        <div className="tool-text-content">
                            <p className="terminology">THE TERMINOLOGY…</p>
                            <Outlet/>
                        </div>
                    </div>
                    <div className="tool-image">
                        <img src={image} alt="space tool" />
                    </div>
                </article>
            </div>
        </section>
    );
}