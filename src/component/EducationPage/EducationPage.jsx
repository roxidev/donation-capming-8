import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';

const EducationPage = () => {
  const [donate, setDonate] = useState({});

  const { data } = useLoaderData();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const findDonate = data.find((donate) => donate.id === id);
    setDonate(findDonate);
    console.log(id);
  }, []);

  return (
    <div className="bg-[#fff] w-11/12 mx-auto ">
      <div className="relative">
        <img src="/images/Food.png" className="h-auto w-full " alt="" />

        <div className="bg-[#0B0B0B80] p-7 absolute bottom-0 w-full ">
          <button className="bg-[#FF444A] rounded-md text-[#fff] py-3 px-6 items-center ">
            price
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-[ #0B0B0B] font-bold mt-11 mb-6">
          Good Education
        </h2>
        <p className="text-[#0B0B0BB2] font-sm font-normal">description</p>
      </div>
    </div>
  );
};

export default EducationPage;
