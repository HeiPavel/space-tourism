import React, {useState} from "react";
import { useParams, NavLink, Navigate, Outlet } from "react-router-dom";
import { loadImage } from "../../until/loadImage";
import { navigation } from "../../until/data";

export const Destination = () => {
    const [image, setImage] = useState(null);
    const {object} = useParams();
    const {destination} = navigation;

    if (!object) return <Navigate to='moon'/>

    loadImage('destination', '', `image-${object}`, setImage, image, 'webp');
    
    return (
        <section className="destination">
            <div className="section-content">
                <h5 className="page-title"><span>01</span>PICK YOUR DESTINATION</h5>
                <article className="destination-card">
                    <div className="object-image">
                        <img src={image} alt="object" />
                    </div>
                    <div className="object-description">
                        <nav className="navigation">
                            {destination.map((link, index) => (<NavLink key={index} to={link.path}>{link.content}</NavLink>))}
                        </nav>
                        <Outlet />
                    </div>
                </article>
            </div>
        </section>
    );
}