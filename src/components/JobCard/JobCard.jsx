import React from "react";
import {Link} from "react-router-dom"

export default function JobCard() {
    return(
        <Link>
            <div className="job-card flex flex-col border-1 border-gray-200 rounded-md w-[50vw] p-5 hover:scale-105 shadow-md transition-transform duration-300 ease-in-out">
                <div className="title">
                    <h1> Title : </h1>
                </div>
                <div className="company flex flex-row gap-10">
                    <h1> Company : </h1>
                    <h1> Hired : </h1>
                </div>
                <div className="details"> Details :  </div>
            </div>
        </Link>
    )
}