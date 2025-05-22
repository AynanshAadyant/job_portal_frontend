import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomeContent from "../../components/HomeContent/HomeContent";
import { Outlet } from "react-router-dom";

export default function HomePage() {

    return (
        <div className="screen max-h-full ">
            <NavBar />
            <div className="content flex flex-col justify-center items-center py-20">
                <Outlet />
            </div>
        </div> 
    )
}