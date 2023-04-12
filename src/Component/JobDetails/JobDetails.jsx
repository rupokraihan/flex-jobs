import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../Utilities/fakedb";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [applyJob, setApplyJob] = useState([]);

  const handleApplyJob = (job) => {
    const exist = applyJob.find((d) => d.id === job.id);
    if (exist) {
      toast.error(
        `you already applied this job . Go to Applied job page !!`,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      )
    } else {
      setApplyJob([...applyJob, job]);
      addToDb(job.id);
      toast.success("Application successfully submitted !"),
        {
          position: toast.POSITION.TOP_RIGHT,
        };
    }
  };
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
        <h1 className="mb-28 text-3xl font-extrabold text-center tracking-wide text-gray-800">
          Job Details
        </h1>
      </div>
      <div className="lg:grid grid-cols-3 gap-24  ">
        <div className="col-span-2 text-xl ">
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            {job.description}
          </p>
          <p className="mt-8">
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job.responsibility}
          </p>
          <p className="mt-8">
            <span className="font-bold">Educational Requirements:</span> <br />
            {job.educationalRequirements}
          </p>
          <p className="mt-8">
            <span className="font-bold">Experiences:</span> <br />
            {job.experiences}
          </p>
        </div>

        <div>
          <div className="bg-violet-100 rounded-xl p-8 divide-y divide-gray-300">
            <div>
              <h1 className="mt-5 mb-4 text-lg font-bold">Job Details</h1>
            </div>
            <div>
              <p className="mt-5 flex gap-1">
                <span className="text-purple-500">
                  <CurrencyDollarIcon className="w-6" />
                </span>
                <span className="font-bold">Salary:</span>
                {job.salary} (Per Month)
              </p>

              <p className="mt-5 flex gap-1">
                <span className="text-purple-500">
                  <CalendarDaysIcon className="w-6" />
                </span>
                <span className="font-bold">Title:</span>
                {job.title}
              </p>
              <h3 className="mt-6 mb-4 font-bold">Contact Information</h3>
            </div>
            <div>
              <p className="mt-5 flex gap-1">
                <span className="text-purple-500">
                  <PhoneIcon className="w-6" />
                </span>
                <span className="font-bold">Phone:</span> {job.phone}
              </p>
              <p className="mt-5 flex gap-1">
                <span className="text-purple-500">
                  <EnvelopeIcon className="w-6" />
                </span>
                <span className="font-bold">Email:</span> {job.email}
              </p>
              <p className="mt-5 flex gap-1">
                <span className="text-purple-500">
                  <MapPinIcon className="w-6" />
                </span>
                <span className="font-bold">Address:</span> {job.location}
              </p>
            </div>
          </div>
          <Link>
            <button
              onClick={() => handleApplyJob(job)}
              className="my-button w-full flex justify-center mt-5 "
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
