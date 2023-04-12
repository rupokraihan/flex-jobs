import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../Utilities/fakedb";
import AppliedJobsDetails from "./AppliedJobsDetails";

const AppliedJobs = () => {
  const applyJob = useLoaderData();
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedJob = applyJob.find((job) => job.id === id);
      savedCart.push(addedJob);
    }
    setJobs(savedCart);
    setFilter(savedCart);
  }, [applyJob]);

  const handleOnset = () => {
    const onSiteJobs = jobs.filter((job) => job.workStatus === "Onsite");
    setFilter(onSiteJobs);
  };

  const handleRemote = () => {
    const remoteJobs = jobs.filter((job) => job.workStatus === "Remote");
    setFilter(remoteJobs);
  };

  return (
    <div>
      <div className="my-container justify-end flex gap-6">
        <p className="text-xl font-bold">Filter By:</p>
        <button
          className="inline-flex items-center h-8 px-4 mb-3 font-medium text-white transition duration-200 rounded-lg shadow-md  md:mb-0 bg-orange-500 hover:bg-yellow-700"
          onClick={handleOnset}
        >
          On Site
        </button>
        <button
          className="inline-flex items-center h-8 px-4 mb-3 font-medium text-white transition duration-200 rounded-lg shadow-md  md:mb-0 bg-orange-500 hover:bg-yellow-700"
          onClick={handleRemote}
        >
          Remote
        </button>
      </div>
      {filter.map((job) => (
        <AppliedJobsDetails key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
