import React from "react";

export default function JobCard( {job} ) {
    return( 
        <div className="card" id={job.id}>
            <div className="title">
                <h1> {job.title} </h1>
            </div>
            <div className="details">
                
            </div>
            <div className="links"></div>
        </div>
    )
}