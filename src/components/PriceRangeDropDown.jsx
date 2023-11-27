import React, { useContext, useEffect, useState } from "react";
import {
  RiWallet3Line,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiWallet3Fill,
} from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";

const PriceRangeDropdown = () => {
  const { price, setprice, properties } = useContext(HouseContext);
  let prices = [
    { value: "لیست قیمت " },
    { value: "100000 - 130000" },
    { value: "130000 - 160000" },
    { value: "160000 - 190000" },
    { value: "190000 - 220000" },
    { value: "10000 - 30000" },
    { value: "30000 - 40000" },
  ];
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown-btn">
        <div className="flex justify-evenly items-center w-full">
          <div>
            <RiWallet3Line className="dropdown-icon-primary" />
          </div>
          <div className="text-right ">
            <div className="text-[15px] font-medium">{price}</div>
            <div className="text-[12px] ">
              محدوده قیمت مورد نظر را انتخاب کنید
            </div>
          </div>
          <div>
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          </div>
        </div>
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((item, index) => (
          <Menu.Item
            as="li"
            key={index}
            onClick={() => setprice(item.value)}
            className="hover:text-secondary transition-all mb-3"
          >
            {item.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
