import React from "react";
import ban from "../Assets/Main (2).png";

const Banner = () => {
  return (
    <div className=" flex justify-center p-12">
      <img className="absolute" src={ban} alt="" />
      <div className="relative pt-32 text-center">
        <h2 className="font-poppins text-[#184363] px-3 py-1">
          Pyridoxine Vitamin B6
        </h2>
        <h1 className="font-poppins text-[#184363] text-3xl pb-3 ">
          Vitamins & Supplements
        </h1>
        <button className="bg-[#39CB74] text-white px-4 py-1 rounded-2xl font-poppins font-semibold h-10 transition duration-300 transform hover:scale-110 active:opacity-80">
          View more »
        </button>
      </div>
    </div>
  );
};

export default Banner;
