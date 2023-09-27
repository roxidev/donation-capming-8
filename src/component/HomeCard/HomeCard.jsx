import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ donate }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
  } = donate || {};

  return (
    <Link to={`/donation/${id}`}>
      <div style={{ backgroundColor: card_bg }} className=" rounded-lg  ">
        <img className="w-full" src={picture} alt="" />
        <div className="  space-y-3 p-5">
          <span
            style={{ color: text_button_bg, backgroundColor: category_bg }}
            className=" text-[#0052FF] text-base  font-normal p-2  bg-slate-50"
          >
            {category}
          </span>
          <h2
            style={{ color: text_button_bg }}
            className="text-lg font-semibold "
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
