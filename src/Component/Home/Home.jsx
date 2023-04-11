import React from "react";
import MyImage from "../../assets/P3OLGJ1 copy 1.png";
import JobList from "../JobList/JobList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="my-container">
      <div className=" flex flex-col items-center justify-between lg:flex-row">
        <div>
          <h1 className="text-[80px] font-extrabold">
            One Step
            <br /> Closer To Your <br />{" "}
            <span className="text-purple-500">Dream Job</span>
          </h1>
          <p className="text-[#757575] ">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all your
            job application from start to finish.
          </p>
          <button className="my-button mt-8">Get Started</button>
        </div>
        <div>
          <img src={MyImage} alt="" />
        </div>
      </div>

      {/* Job Category List section */}
      <section>
        <div className="text-center mt-32">
          <h2 className="text-5xl font-extrabold mb-4">Job Category List</h2>
          <p className="text-[#757575] ">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <JobList />
      </section>

      <section>
        <div className="text-center mt-20">
          <h2 className="text-5xl font-extrabold mb-4">Featured Jobs</h2>
          <p className="text-[#757575] ">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </section>
      <FeaturedJobs/>
    </div>
  );
};

export default Home;
