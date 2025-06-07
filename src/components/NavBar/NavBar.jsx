import React from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import { Link } from "react-router-dom";

export default function NavBar( {user, loggedIn} ) 
{
    return(
        <nav className="navBar flex flex-row justify-around  p-5 items-center border-b-2 border-gray-200 shadow-md">
            <div className="left flex flex-row justify-between gap-4">
                <div className="logo">
                    <Link to='/'> <img src="default.jpeg" alt="Logo" /> </Link>
                </div>
                <div className="internship px-4">
                    {/* <ul className="group relative">
                        Internships<ArrowDropDownIcon /> 
                    </ul> */}
                    <Link to = '/'> Home </Link>
                </div>
                <div className="job">
                    {/* <ul>
                        Jobs<ArrowDropDownIcon /> 
                    </ul> */}
                   <Link to="/job"> Jobs </Link>
                </div>
            </div>

            <div className="right flex flex-row justfy-between items-center gap-5">
                <AuthButtons user={user} loggedIn={loggedIn} />
            </div>
        </nav>
    )
}