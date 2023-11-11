import React from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";

export const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}