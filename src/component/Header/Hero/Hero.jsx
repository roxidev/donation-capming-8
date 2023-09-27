import React from 'react';

const Hero = ({ setSearch }) => {
  return (
    <div className="w-11/12 bg-[#FFFFFFF2] mt-28 h-[350px] justify-center items-center flex-col">
      <h2 className="text-center text-5xl font-normal text-[#0B0B0B] mb-10">
        I Grow By Helping People In Need
      </h2>
      <div className="flex justify-center">
        <div className="border-2 rounded-s-lg border-[#DEDEDE] px-6 py-2 md:px-12 md:py-3 lg:px-16 lg:py-4">
          <input
            type="text"
            placeholder="Search here...."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="rounded-e-lg py-2 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 bg-[#FF444A] text-[#FFF] font-semibold text-sm text-center ">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
