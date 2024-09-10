import React from "react";
import drp from "../Assets/arrow-select.svg.png";

const Dropdown = () => {
  return (
    <div className="flex flex-row justify-evenly py-6 items-center">
      <h1 className="font-poppins font-bold text-2xl text-[#184363] ">
        Select a product
      </h1>
      <button className="flex flex-row bg-[#EDF4F6] rounded-xl px-4 py-2 gap-3 items-center justify-center text-base font-poppins hover:shadow-lg transition duration-300 transform hover:scale-110">
        Category
        <img className="pl-44" src={drp} alt="" />
      </button>
      <button className="flex flex-row bg-[#EDF4F6] rounded-xl px-4 py-2 gap-3 items-center justify-center text-base font-poppins hover:shadow-lg transition duration-300 transform hover:scale-110 ">
        Brand
        <img className="pl-44" src={drp} alt="" />
      </button>
      <h1 className="font-poppins font-bold text-xl text-[#184363]">OR</h1>
      <button className="flex flex-row bg-[#EDF4F6] rounded-xl px-4 py-2 gap-3 items-center justify-center text-base font-poppins hover:shadow-lg pr-44 transition duration-300 transform hover:scale-110">
        Enter SKU
      </button>
      <button className="px-16 py-2 bg-[#F2971F] rounded-xl font-poppins font-semibold hover:shadow-lg active:opacity-80 transition duration-300 transform hover:scale-110">
        Shop now
      </button>
    </div>
  );
};

export default Dropdown;
