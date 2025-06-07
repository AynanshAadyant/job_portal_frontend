import React, { useState, useEffect } from "react";
import JobCard from "../cards/JobCard";
import axios from "axios";

function JobCarousel( { jobs, loading, message, error } ) {
    if( !error ){
        {
            jobs.map( job => (
                <JobCard job = {job} />
            ))
        }
    }
}

export default function HomeContent() {
    const [ jobs, setJobs ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ message, setMessage ] = useState( "Loading" );
    const [ error, setError ] = useState( false );

    //fetch jobs
    useEffect( () => {
         axios.get( 'http://localhost:8800/api/v1/jobs/get')
        .then( (payload ) => {
            setMessage( "" );
            setJobs( payload.data );
            setLoading( false );
        })
        .catch( (err ) => {
            setError( true );
            setLoading( false );
            setMessage( "Error loading jobs " );
        })
    })

    return(
        <div className="content w-2/3">
            <div className="title-section">
                <h1 className="text-6xl font-extrabold text-center"> Make your dream career a reality </h1>
            </div>
            <div className="job-carousel p-10">
                <h1 className="text-3xl font-bold text-center"> Latest Jobs : </h1>
                <div className="job-carousel">
                </div>
            </div>
        </div>
    )
}