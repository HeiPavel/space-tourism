import React, {useState} from "react";
import { useParams, NavLink, Navigate, Outlet } from "react-router-dom";
import { loadImage } from "../../until/loadImage";

export const Destination = () => {
    const [image, setImage] = useState(null);
    const {object} = useParams();

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
                            <NavLink to='/destination/moon'>MOON</NavLink>
                            <NavLink to='/destination/mars'>MARS</NavLink>
                            <NavLink to='/destination/europa'>EUROPA</NavLink>
                            <NavLink to='/destination/titan'>TITAN</NavLink>
                        </nav>
                        <Outlet />
                    </div>
                </article>
            </div>
        </section>
    );
}