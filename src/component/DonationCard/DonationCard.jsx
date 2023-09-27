import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationContainer from '../DonationContainer/DonationContainer';

const DonationCard = ({ donate }) => {
  const { data } = useLoaderData();
  // console.log(donate);
  const { picture, title, category, category_bg } = donate || {};
  return (
    <div
      style={{ backgroundColor: category_bg }}
      className="flex rounded-lg bg-[#0052FF26] "
    >
      <div>
        <img src={picture} alt="" />
      </div>
      <div className=" p-5">
        <span className=" bg-[#0052FF33]  text-[#0052FF] text-sm font-normal mt-7 rounded-md px-2 ">
          {category}
        </span>
        <h2 className="text-[#0B0B0B] text-xl font-semibold pt-3 mb-2">
          {title}
        </h2>
        <p className="text-[#0052FF] text-lg font-semibold pt-2">$290.00</p>
        <button className="py-2 px-4 bg-[#0052FF] items-center text-[#fff] mt-7 rounded-md text-center">
          View Details
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
