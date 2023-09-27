import React from 'react';
import HomeCard from '../HomeCard/HomeCard';

const HomeCardContainer = () => {
  const homeCardContainer = useLoaderData();
  console.log(homeCardContainer);
  return (
    <div>
      <HomeCard />
    </div>
  );
};

export default HomeCardContainer;
