import React, { useState } from "react";
import UserLoginCard from "../../components/LoginCard/CandidateLoginCard";

export default function LoginPage() {
    
    return (
        <div className="screen min-h-screen flex flex-row justify-center items-center bg-blue-300 h-full w-full pb-32">
            <UserLoginCard />
        </div>
    )
}