import React from "react";
import { useLoaderData } from "react-router-dom";

const JobList = () => {
  const jobList = useLoaderData();

  return (
    <div>
      <div className="lg:flex mt-12 ">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="lg:h-[240px] lg:w-[300px]  w-full h-auto  rounded-lg bg-purple-100 mb-6 lg:ml-4 p-10 "
          >
            <img
              className="bg-purple-200 p-2 mb-8"
              src={job.categoryLogo}
              alt=""
            />
            <p className="font-bold text-lg mb-2">{job.categoryName}</p>
            <p className="text-sm text-[#757575]">
              {job.jobsAvailable} Jobs Available{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
