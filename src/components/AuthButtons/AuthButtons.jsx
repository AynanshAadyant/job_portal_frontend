import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function AuthButtons( {user, loggedIn} ) {

    const navigate = useNavigate();
    const logOut = () => {
        axios.post( "http://localhost:8800/api/v1/user/logout",{},  {withCredentials: true})
       .then( () => {
        console.log("Log out successful" );
       }
       ) 
       .catch( (e) => {
        console.log("Logout failure", e );
       } )
       .finally( () => {
            navigate( "/" );
       })
    }

    if( !loggedIn )
    return(
        <>
            <div className="login"> 
                <Link 
                className="login-button border-blue-500 border-1 rounded-lg px-5 py-1 text-blue-600 font-bold text-lg hover:bg-blue-600 hover:text-white"
                to='/login'> Login </Link>
            </div>
            <div className="candidateSignUp">
                <Link
                className="rounded-lg bg-blue-600 text-white px-5 py-2 hover:bg-blue-700"
                to='/signup'> Candidate Sign-up </Link>
            </div>
            <div className="recruiterLogin"> 
                <Link 
                className="login-button border-blue-500 border-1 rounded-lg px-5 py-1 text-blue-600 font-bold text-lg hover:bg-blue-600 hover:text-white"
                to='/recruiter/login'> RecruiterLogin </Link>
            </div>
            <div className="recruiterSignUp"> 
                <Link 
                className="rounded-lg bg-blue-600 text-white px-5 py-2 hover:bg-blue-700"
                to='/recruiter/signup'> Recruiter-Sign-up</Link>
            </div>
        </>
    )
    else
        return( 
            <div className="flex flex-row gap-2 items-center">
                <h1 className="text-white bg-blue-500 p-2 w-10 h-10 rounded-full text-center select-none hover:bg-blue-700" > {user.name[0].toUpperCase() } </h1>
                <div className="">
                    <button className="logout p-2 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={ (e) => {
                        e.preventDefault();
                        logOut();
                        navigate( "/" );
                    }}> Log Out</button>
                </div>
            </div>
        )
    
}