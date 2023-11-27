import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="border-b mb-12 py-6 px-2 ">
      <div className="flex justify-around items-center ">
        <div className="flex gap-1 items-center text-sm md:gap-6 md:text-base ">
          <Link className=" bg-secondary text-white py-2 px-2 rounded-lg text-center transition-all hover:bg-purple-700">
            ثبت نام
          </Link>
          <Link className="hover:text-purple-700  transition-all">ورود</Link>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
