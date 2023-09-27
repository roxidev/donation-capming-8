import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  return (
    <div className="bg-[#FFFFFFF2]">
      <div className="navbar bg-base-100 flex-wrap  lg:flex lg:justify-between  w-11/12 mx-auto ">
        <div className="">
          <img src="./Logo.png" alt="" />
        </div>
        <div className="flex gap-12 text-lg font-normal text-[#0B0B0B]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/donations">Donation</NavLink>
          <NavLink to="/static">Statistics</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navber;
