import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import HomeContent from "../components/HomeContent/HomeContent.jsx";
import JobPage from "../pages/JobPage/JobPage.jsx";
import RecruiterSignUpPage from "../pages/SignUpPage/SignUp.recruiter.jsx";
import RecruiterLoginPage from "../pages/LoginPage/RecruiterLoginPage.jsx"

export default function HomeRoutes() {
    return (
        <Router>
            <Routes>
                {/* Wrap routes under layout */}
                <Route path="/" element={<HomePage />}>
                    <Route index element={<HomeContent />} />
                    <Route path="job" element={<JobPage />} />
                </Route>

                {/* Standalone pages */}
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/recruiter/signup" element={<RecruiterSignUpPage />} />
                <Route path="/recruiter/login" element={ <RecruiterLoginPage  /> } />
            </Routes>
        </Router>
    );
}
