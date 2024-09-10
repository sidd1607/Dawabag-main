import React from "react";

import Bc from "../Assets/bannerBack.png";
import bi from "../Assets/banner-image-23.png.png";

import bi2 from "../Assets/banner-image-22.png.png";

import bi3 from "../Assets/banner-image-21.png.png";

const GridOne = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="d1 flex flex-row py-12 px-20 transition duration-300 transform hover:scale-110">
        <img className="rounded-xl absolute  " src={Bc} alt="" />
        <div className="relative pt-20 pl-12">
          <h1 className="font-poppins font-bold pb-2">Vitamins</h1>
          <h2 className="font-poppins">• Analgesics</h2>
          <h2 className="font-poppins">• Antimal Drugs</h2>

          <h2 className="font-poppins pb-2">• Antipyretics</h2>

          <button className="bg-[#F2971F] px-3 py-1 rounded-xl font-poppins font-bold mt-5 ">
            View All »
          </button>
        </div>
        <img className="relative h-64 w-44 pt-16" src={bi} alt="" />
      </div>
      <div className="d2 flex flex-row transition duration-300 transfor{m hover:scale-110 ">
        <img
          className="rounded-xl hover:shadow-2xl absolute  "
          src={Bc}
          alt=""
        />
        <div className="relative pt-20 pl-12">
          <h1 className="font-poppins font-bold pb-2">Baby Accessories</h1>
          <h2 className="font-poppins">• Meal Replacements</h2>
          <h2 className="font-poppins">• Protein powder</h2>

          <h2 className="font-poppins pb-2">• Muscle building</h2>

          <button className="bg-[#F2971F] px-3 py-1 rounded-xl font-poppins font-bold mt-5">
            View All »
          </button>
        </div>
        <img className="relative h-64 w-52 pt-16 pr-16" src={bi2} alt="" />
      </div>
      <div className="d3 flex flex-row pr-32 transition duration-300 transform hover:scale-110">
        <img
          className="rounded-xl hover:shadow-2xl absolute  "
          src={Bc}
          alt=""
        />
        <div className="relative pt-20 pl-12">
          <h1 className="font-poppins font-bold pb-2">Herbs</h1>

          <h2 className="font-poppins">• Gluten Free</h2>
          <h2 className="font-poppins">• Sun Care</h2>
          <h2 className="font-poppins pb-2">• Sugar Free</h2>

          <button className="bg-[#F2971F] px-3 py-1 rounded-xl font-poppins font-bold mt-5">
            View All »
          </button>
        </div>
        <img className="relative h-64 w-44 pt-16" src={bi3} alt="" />
      </div>
    </div>
  );
};

export default GridOne;
