import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../Utilities/fakedb";
import AppliedJobsDetails from "./AppliedJobsDetails";

const AppliedJobs = () => {
  const applyJob = useLoaderData();
  const [jobs, setJobs] = useState([]);
  const [remoteJob, setRemoteJob] = useState(applyJob)
  const [onSet, setOnSet] = useState(applyJob);
  const [filter, setFilter] = useState(applyJob);

  const handleOnset = () => {
    const onSetJobs = onSet.filter((onS) => onS.workStatus === "Onsite");
    setOnSet(onSetJobs);
    setFilter(onSetJobs);
  }
  const handleRemote = () => {
    const remoteJobs = remoteJob.filter((onR) => onR.workStatus === "Remote");
    setRemoteJob(remoteJobs);
    setFilter(remoteJobs);
  }
  
  useEffect(() => {
    const storedCart = getShoppingCart()
    const savedCart = [];
    for (const id in storedCart) {
      const addedJob = applyJob.find(job => job.id === id)
      savedCart.push(addedJob);
    }
    setJobs(savedCart);
  },[])

  
  return (
    <div>
      <div className="my-container flex gap-8 ">
        <button onClick={handleOnset}>On set</button>
        <button onClick={handleRemote}>Remote</button>
      </div>
      {filter
        ? filter.map((job) => <AppliedJobsDetails key={job.id} job={job} />)
        : jobs.map((job) => <AppliedJobsDetails key={job.id} job={job} />)}
    </div>
  );
};

export default AppliedJobs;
