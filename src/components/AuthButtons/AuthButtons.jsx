import React from "react";
import { Link } from "react-router-dom";

export default function AuthButtons() {
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
            <div className="recruiterSignUp"> 
                <h1 className="rounded-lg bg-blue-600 text-white px-5 py-2 hover:bg-blue-700"> Recruiter-Sign-up</h1>
            </div>
        </>
    )
}