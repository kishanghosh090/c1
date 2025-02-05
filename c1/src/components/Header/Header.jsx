import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" flex justify-around items-center  py-4">
      <h1 className="text-3xl flex font-bold justify-center items-center cursor-pointer">
        <span>
          {" "}
          <NavLink to="/">
            <img src={logo} alt="" color="red" />
          </NavLink>
        </span>
      </h1>
      <ul className="flex gap-12 text-xl fonr-bold z-40 cursor-pointer">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/">Blog</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/">Pages</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/">Pricing</NavLink>
        </li>
      </ul>
      <div className="flex gap-5 z-40 cursor-pointer">
        <button className="text-black text-xl">Cart(3)</button>
        <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 hover:scale-110 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Header;
