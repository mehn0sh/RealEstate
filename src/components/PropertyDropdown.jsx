import React, { useContext, useEffect, useState } from "react";
import { RiHome5Line, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";

const PropertyDropdown = () => {
  const { property, setproperty, properties } = useContext(HouseContext);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown-btn">
        <div className="flex justify-evenly items-center w-full">
          <div>
            <RiHome5Line className="dropdown-icon-primary" />
          </div>
          <div className="text-right ">
            <div className="text-[15px] font-medium">{property}</div>
            <div className="text-[12px] ">نوع ملک مورد نظر را انتخاب کنید</div>
          </div>
          <div>
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          </div>
        </div>
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((item, index) => (
          <Menu.Item
            as="li"
            key={index}
            onClick={() => setproperty(item)}
            className="hover:text-secondary transition-all mb-3"
          >
            {item}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
