import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { housesData } from "../../data";
import { BiBed, BiArea, BiBath } from "react-icons/bi";

const PropertyDetail = () => {
  const { id } = useParams();
  let house = housesData.find((house) => house.id == parseInt(id));
  return (
    <section>
      <div className="container mx-auto  mb-14  min-h-[800px]">
        <div
          className="flex flex-col lg:flex-row
    lg:items-center lg:justify-between "
        >
          <div>
            <h2 className="2xl font-semibold mb-2">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div>{house.country}</div>
          </div>
          <div className="text-xl text-secondary font-semibold">
            ${house.price}
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div>
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-4 text-violet-800 my-4 ">
              <div className="flex items-center gap-2">
                <div>{house.bedrooms}</div>
                <div>
                  <BiBed />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>{house.bathrooms}</div>
                <div>
                  <BiBath />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>{house.surface}</div>
                <div>
                  <BiArea />
                </div>
              </div>
            </div>
            <div className="text-justify">{house.description}</div>
          </div>
          <div
            className="border mb-8 w-full flex-1 border-gray-300
px-2 py-6 rounded-lg "
          >
            <div className=" flex items-center gap-x-2">
              <div className="w-20 h-20 p-1 border rounded-full border-gray-300">
                <img src={house.agent.image} alt="" />
              </div>
              <div className="text-xl ">{house.agent.name}</div>
            </div>
            <form className="flex flex-col gap-y-5 mt-5">
              <input
                type="text"
                className="border border-gray-300 text-sm focus:border-violet-700 outline-none w-full
              rounded-lg h-18 p-3 "
                placeholder="Name*"
              />
              <input
                type="text"
                className="border border-gray-300 text-sm focus:border-violet-700 outline-none w-full
              rounded-lg h-18 p-3 "
                placeholder="Email*"
              />
              <input
                type="text"
                className="border border-gray-300 text-sm focus:border-violet-700 outline-none w-full
              rounded-lg h-18 p-3 "
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 resize-none w-full rounded-xl p-4 h-36
              text-sm outline-none focus:border-violet-700 text-gray-500"
                defaultValue={` سلام، من به [ ${house.name} ] علاقه مند ام`}
                placeholder="Message*"
              ></textarea>
              <div className="flex gap-x-2">
                <button className=" transition-alltext-sm w-full rounded bg-violet-700 hover:bg-violet-800 text-white p-4">
                  send message
                </button>
                <button
                  className=" text-violet-700 hover:border-violet-500 text-sm p-4 hover:text-violet-500 border border-violet-700 w-full
                rounded "
                >
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;
