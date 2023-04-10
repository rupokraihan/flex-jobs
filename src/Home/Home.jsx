import React from 'react';
import MyImage from '../assets/P3OLGJ1 copy 1.png'

const Home = () => {
  return (
    <div className="my-container flex flex-col items-center justify-between lg:flex-row">
      <div>
        <h1 className="text-[80px] font-extrabold">
          One Step
          <br /> Closer To Your <br /> <span className='text-purple-500'>Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the <br/> information you
          need. Its your future. Come find it. Manage all  your job application
          from start to finish.
        </p>
        <button className="my-button mt-8">Get Started</button>
      </div>
      <div>
        <img src={MyImage} alt="" />
      </div>
    </div>
  );
};

export default Home;