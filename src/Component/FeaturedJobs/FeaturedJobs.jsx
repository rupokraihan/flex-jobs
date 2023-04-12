import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const numJobsToShow = showAll ? jobs.length : 4;

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`/featuredJobs.json`);
      const data = await res.json();
      setJobs(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-2 mt-12">
        {jobs.slice(0, numJobsToShow).map((job) => (
          <div key={job.id} className=" border border-gray-200 rounded-xl">
            <div className="ml-10 mb-7">
              <img className="h-16 mt-8" src={job.logo} alt="" />
              <h2 className="text-xl font-bold mt-10">{job.title}</h2>
              <p className="text-[#757575] font-semibold mt-1">
                {job.companyName}
              </p>
              <div className="flex gap-4 mt-2">
                <p className="border border-indigo-600 rounded-md px-3 py-1">
                  {job.workStatus}
                </p>
                <p className="border border-indigo-600 rounded-md px-3 py-1">
                  {job.jobType}
                </p>
              </div>
              <div className="lg:flex gap-16 mt-4">
                <p className="flex font-semibold text-[#757575] gap-1">
                  <MapPinIcon className="w-6" />
                  {job.location}
                </p>
                <p className="flex font-semibold text-[#757575] gap-1">
                  <CurrencyDollarIcon className="w-6" />
                  Salary: {job.salary}
                </p>
              </div>
              <Link to={`/jobDetails/${job.id}`}>
                <button className="my-button mt-8 ">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {jobs.length > numJobsToShow && (
        <div className="flex justify-center">
          <button
            className="my-button mt-12"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See All Jobs"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
