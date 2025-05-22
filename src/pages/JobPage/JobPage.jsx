import React from "react";
import JobCard from "../../components/JobCard/JobCard";

export default function JobPage() {
    return (
        <div className="job-content flex flex-col items-center gap-4 ">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
    </div>
    )
}