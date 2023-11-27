import React, { useContext } from "react";
import { Link } from "react-router-dom";
import House from "./House";
import { HouseContext } from "./HouseContext";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  let { Housesdata, loading } = useContext(HouseContext);
  if (loading) {
    return (
      <ImSpinner2 className="text-secondary mx-auto mt-[200px] text-4xl animate-spin" />
    );
  }
  if (Housesdata.length < 1) {
    return (
      <div className="text-center text-gray-400 mt-[50px] text-3xl">
        Sorry,nothing Found
      </div>
    );
  }
  return (
    <section className="mb-20 mx-auto w-fit ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 ">
          {Housesdata.map((house, index) => (
            <div className="w-fit ">
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
