import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomeContent from "../../components/HomeContent/HomeContent";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function HomePage() {

    const [user, setUser ] = useState( {} );
    const [userPresent, setUserPresent ] = useState( false );

    //fetch user
    const getUser = () => {
        axios.get( "http://localhost:8800/api/v1/user/current", { withCredentials: true} )
        .then( (payload ) => {
            if( payload.data.success ) {
                setUser( payload.data.body );
                setUserPresent( true );
            }
            else 
                console.log( "User not logged in" );
        })
        .catch( ( err ) => {
            console.error( "ERROR IN FETCHING CURRENT USER DATA", err );
        })
    }

    useEffect( getUser, [] );

    return (
        <div className="screen max-h-full ">
            <NavBar user={user} loggedIn = {userPresent} />
            <div className="content flex flex-col justify-center items-center py-20">
                <Outlet />
            </div>
        </div> 
    )
}