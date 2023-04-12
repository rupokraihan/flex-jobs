import React from "react";
import { Link } from "react-router-dom";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const AppliedJobsDetails = ({ job }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:pl-8 lg:py-4">
      <div className="lg:flex justify-between items-center border-solid border-2 border-gray-200 p-8">
        <div className="lg:flex items-center gap-20">
          <div>
            <img
              className="h-[200px] w-[280px] bg-gray-100 p-12 rounded-lg"
              src={job.logo}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-bold mb-2">{job.title}</h1>
            <h3 className="text-lg font-medium">{job.companyName}</h3>
            <div className="flex gap-4 my-2">
              <p className="border border-indigo-600 rounded-md px-3 py-1">
                {job.workStatus}
              </p>
              <p className="border border-indigo-600 rounded-md px-3 py-1">
                {job.jobType}
              </p>
            </div>

            <div className="flex gap-6">
              <p className="flex gap-2 ">
                <MapPinIcon className="w-6 text-gray-500" />
                {job.location}
              </p>
              <p className="flex gap-2">
                <CurrencyDollarIcon className="w-6 text-gray-500" />
                Salary : {job.salary}
              </p>
            </div>
          </div>
        </div>

        <div>
          <Link to={`/jobDetails/${job.id}`}>
            <button className="my-button mt-8 ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsDetails;
