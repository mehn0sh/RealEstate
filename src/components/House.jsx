import React from "react";
import {BiBed,BiArea,BiBath}from 'react-icons/bi'
const House = ({ house }) => {
  let { type, bedrooms, bathrooms, image, country, surface, price,address } = house;
  return (
    <div >
      <div
        className="bg-white shadow-1 max-w-[340px] p-3 rounded-lg
      rounded-tl-[90px] cursor-pointer mx-auto transition-all hover:shadow-2xl "
      >
        <div>
          <img src={image} alt="" className="mb-10" />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex mb-4 gap-x-2">
            <div className="bg-green-300 text-white px-3 rounded-full">{type}</div>
            <div className="bg-secondary text-white px-3 rounded-full">{country}</div>
          </div>
          <div className="max-w-[260px] font-semibold text-sm ">{address}</div>
          <div className="flex gap-2 text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <div>{bedrooms}</div>
              <div><BiBed/></div>
            </div>
            <div className="flex items-center gap-1">
              <div>{bathrooms}</div>
              <div><BiBath/></div>
            </div>
            <div className="flex items-center gap-1">
              <div>{surface}</div>
              <div><BiArea/></div>
            </div>

          </div>
          <div className="text-secondary font-semibold">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
