import React from 'react';
import DonationCard from '../DonationCard/DonationCard';
import { useLoaderData } from 'react-router-dom';

const DonationContainer = () => {
  const donations = useLoaderData();
  const donationsArray = donations.data;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-11/12 mx-auto">
      {donationsArray?.map((donate) => (
        <DonationCard key={donate.id} donate={donate} />
      ))}
    </div>
  );
};

export default DonationContainer;
