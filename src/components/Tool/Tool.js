import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../until/data";

export const Tool = () => {
    const {tool} = useParams();
    const {technology} = data;

    return (
        <>
            <h3>{technology[tool].name}</h3>
            <p className="description tool-description">{technology[tool].description}</p>
        </>
    );
}