import React, { useState } from "react";
import RecruiterLoginCard from "../../components/LoginCard/RecruiterLoginCard";

export default function LoginPage() {
    
    return (
        <div className="screen min-h-screen flex flex-row justify-center items-center bg-blue-300 h-full w-full pb-32">
            <RecruiterLoginCard />
        </div>
    )
}