import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../until/data";

export const Planet = () => {
    const {object} = useParams();
    const {destinations} = data;

    return (
        <>
            <h2>{object}</h2>
            <p className="description planet-description">{destinations[object].description}</p>
            <div className="travel-statistic">
                <div className="statistic-container">
                    <p className="label">AVG. DISTANCE</p>
                    <p className="info">{destinations[object].distance}</p>
                </div>
                <div className="statistic-container">
                    <p className="label">EST. TRAVEL TIME</p>
                    <p className="info">{destinations[object].travel}</p>
                </div>
            </div>
        </>
    );
}