import React, { useEffect, useState } from 'react';
import Hero from '../../component/Header/Hero/Hero';
import HomeCard from '../../component/HomeCard/HomeCard';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
  const { data } = useLoaderData();

  const [donateData, setDonateData] = useState(data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length) {
      let searchedData = donateData.filter((d) => {
        let regx = new RegExp(search, 'i');
        return d.category.match(regx) || d.title.match(regx);
      });
      setDonateData([...searchedData]);
    } else {
      setDonateData([...data]);
    }
  }, [search, setDonateData, donateData]);

  return (
    <div>
      <Hero search={search} setSearch={setSearch} />
      <div className=" border-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
        {donateData?.map((donate) => (
          <HomeCard key={donate.id} donate={donate} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
