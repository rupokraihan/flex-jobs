import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState({});

  useEffect(() => {
    fetch("/featuredJobs.json")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.find((job) => job.id === id);
        setJob(jobData);
      });
  }, [id]);

  return (
    <div className="my-container">
      <div>
        <h1 className="mb-20 text-3xl font-extrabold text-center tracking-wide text-gray-800">
          Job Details
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-24">
        <div className="col-span-2 ">
          <p>Job Description: {job.description}</p>
          <p>Job Responsibility: {job.responsibility}</p>
          <p>
            Educational Requirements: <br />
            {job.educationalRequirements}
          </p>
          <p>
            Experiences: <br />
            {job.experiences}
          </p>
        </div>

        <div className="">
          <div>
            <h1>Job Details</h1>

            <p>Salary: {job.salary} (Per Month)</p>
            <p>Job Title : {job.title}</p>

            <h3>Contact Information</h3>

            <p>Phone: {job.phone}</p>
            <p>Email: {job.email}</p>
            <p>Address :{job.location}</p>
          </div>
          <button className="my-button mt-8 ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
