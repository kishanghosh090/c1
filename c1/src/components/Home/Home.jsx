import React from "react";
import Header from "../Header/Header.jsx";
import HomeG from "../../assets/homeg.png";
import HeroImg from "../../assets/heroImg.png";
import app from "../../assets/app.svg";
import bus from "../../assets/bus.svg";
import com from "../../assets/com.svg";
import ent from "../../assets/ent.svg";
function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="absolute top-0 left-0  w-full z-[-1] h-screen">
        <img src={HomeG} className="w-full" alt="" />
      </div>
      <div className="flex flex-wrap z-50 justify-evenly items-end pt-40 ">
        <div className="flex flex-col w-[50%] gap-6 pb-80">
          <h2 className="text-[90px] font-bold ">
            Buy growing crypto right from your phone
          </h2>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor
            sit
          </p>
          <div className="z-50 cursor-pointer mt-6 flex gap-6">
            <button className="bg-black text-white px-10 py-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 hover:scale-110 cursor-pointer  hover:-translate-y-3 ">
              Get Started
            </button>
            <button className="bg-white text-black border-1 px-10 py-6 rounded-full hover:bg-black hover:text-white transition duration-300 hover:scale-110 hover:-translate-y-3 cursor-pointer">
              Browse features
            </button>
          </div>
        </div>
        <div className="z-50  ">
          <img
            src={HeroImg}
            alt=""
            className="h-[900px] w-[500px] object-bottom bg-cover"
          />
        </div>
      </div>
      <div className="z-50 bg-white px-4 py-20 shadow-2xl ">
        <ul className="flex justify-evenly flex-wrap">
          <li>
            <img src={app} alt="" />
          </li>
          <li>
            {" "}
            <img src={bus} alt="" />
          </li>
          <li>
            {" "}
            <img src={ent} alt="" />
          </li>
          <li>
            {" "}
            <img src={com} alt="" />
          </li>
        </ul>
      </div>
      <div className="py-10 mt-64">
        <div className="flex  justify-between  px-5 flex-wrap">
          <h2 className="text-[60px] font-extrabold w-[40%]">
            Fully featured to buy, trade and invest in crypto
          </h2>
          <p className="text-[18px] w-[30%] mt-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor
            sit
          </p>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
