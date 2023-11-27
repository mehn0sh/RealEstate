import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "./Search";
const Banner = () => {
  return (
    <section className="max-h-[640px] mb-8 xl:mb-24 ">
      <div className="flex flex-col lg:flex-row ">
        <div className="flex-1 hidden lg:flex justify-start items-start">
          <img src={Image} alt="" />
        </div>
        <div
          className="flex flex-col items-center text-center flex-1
        lg:text-right lg:items-start lg:mr-3 xl:mr-[135px]  justify-center px-2 lg:px-3"
        >
          <h1 className="text-4xl  font-semibold mb-6 leading-loose ">
            خانه رویایی خود را <span className="text-secondary">اینجا</span>{" "}
            پیدا کنید.
          </h1>
          <p className="mb-8">
            ﺳﺎﻣﺎﻧﻪ ﻫﻮﺷﻤﻨﺪ و ﺟﺎﻣﻊ مسکن؛اینجا آﮔﺎﻫﺎﻧﻪ و ﻫﻮﺷﻤﻨﺪاﻧﻪ ﺟﺴﺖ و ﺟﻮ ﮐﻨﯿﺪ
          </p>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
