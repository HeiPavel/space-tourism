import React, {useState} from "react";
import { useParams, NavLink, Outlet, Navigate } from "react-router-dom";
import { loadImage } from "../../until/loadImage";
import { navigation } from "../../until/data";

export const Crew = () => {
    const [image, setImage] = useState(null);
    const {person} = useParams();
    const {crew} = navigation;

    if (!person) return <Navigate to='douglas-hurley'/>

    loadImage('crew', '', `image-${person}`, setImage, image, 'webp');

    return (
        <section className="crew">
            <div className="section-content">
                <h5 className="page-title"><span>02</span>MEET YOUR CREW</h5>
                <article className="crew-card">
                    <div className="crew-description">
                        <Outlet />
                        <nav>
                            {crew.map((link, index) => (<NavLink key={index} to={link.path} />))}
                        </nav>
                    </div>
                    <div className="person-image">
                        <img src={image} alt="crew member" />
                    </div>
                </article>
            </div>
        </section>
    );
}