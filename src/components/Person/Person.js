import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../until/data";

export const Person = () => {
    const {person} = useParams();
    const {crew} = data;

    return (
        <div className="person-info">
            <p className="crew-role">{crew[person].role}</p>
            <p className="crew-name">{crew[person].name}</p>
            <p className="crew-bio">{crew[person].bio}</p>
        </div>
    );
}