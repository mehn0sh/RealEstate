import React, { useContext,useState } from "react";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropDown from "./PriceRangeDropDown";
import CountryDropdown from "./CountryDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
const Search = () => {
 let{handleClick}= useContext(HouseContext)
  return (
    <div className="flex flex-col-reverse lg:flex-row items-end lg:items-start justify-between px-3 mx-auto max-w-[1170px] 
    gap-4 lg:gap-x-3 relative -top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur py-6">
      <button className="w-full bg-secondary lg:max-w-[150px] hover:bg-violet-800 text-white text-xl 
      flex justify-center items-center p-4 rounded-lg" onClick={handleClick}>
        <RiSearch2Line />
      </button>
      <PriceRangeDropDown />
      <PropertyDropdown />
      <CountryDropdown />
    </div>
  );
};

export default Search;
