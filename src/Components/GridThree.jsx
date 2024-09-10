import React from "react";

import p1 from "../Assets/Link → product42-600x600.jpg.png";
import p2 from "../Assets/Link → product74-600x600.jpg.png";

import right from "../Assets/icons8-correct-64.png";
import cart from "../Assets/icons8-cart-50.png";

const GridThree = () => {
  return (
    <>
      <div className="flex justify-center py-12">
        <h1 className="font-poppins font-extrabold text-[#184363] text-3xl ">
          Deal Of The Week
        </h1>
      </div>

      <div className="flex flex-row justify-center items-center gap-10 ">
        <div
          className="flex flex-row justify-center items-center border-2 rounded-xl cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-110"
          id="Ramesh"
        >
          <div>
            <img src={p1} alt="" />
          </div>
          <div>
            <h1 className="font-poppins text-[#184363] font-bold text-3xl px-4 py-4">
              Vitamin C 500mg <br />
              Sugarless
            </h1>
            <h1 className="font-poppins text-[#184363] font-semibold text-xl px-4 pb-4">
              $16.00 - $35.00
            </h1>
            <div className="flex flex-row gap-2 items-center px-2">
              <img className="h-5" src={right} alt="" />
              <h2 className="font-poppins text-[#15A9E3]">
                3 cleaning programs
              </h2>
            </div>
            <div className="flex flex-row gap-2 items-center px-2">
              <img className="h-5" src={right} alt="" />
              <h2 className="font-poppins text-[#15A9E3]">Digital display</h2>
            </div>
            <div className="flex flex-row gap-2 items-center px-2">
              <img className="h-5" src={right} alt="" />
              <h2 className="font-poppins text-[#15A9E3]">Memory for 1 user</h2>
            </div>
            <button className="flex flex-row items-center bg-[#E7FAFF] px-5 py-3 rounded-xl gap-3 font-poppins font-semibold text-[#184363] hover:text-[#15A9E3] active:opacity-70 mt-4 ml-4">
              <img className="h-6" src={cart} alt="" />
              Select options
            </button>
          </div>
        </div>
        <div
          className="flex flex-row justify-center items-center border-2 rounded-xl cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-110"
          id="Suresh"
        >
          <div>
            <img src={p2} alt="" />
          </div>
          <div>
            <h1 className="font-poppins text-[#184363] font-bold text-3xl px-4 py-4">
              Insulin Lispro <br /> Kwikpen
            </h1>
            <h1 className="font-poppins text-[#184363] font-semibold text-xl px-4 pb-4">
              $18.88 - $32.88
            </h1>
            <div className="flex flex-row gap-2 items-center px-2">
              <img className="h-5" src={right} alt="" />
              <h2 className="font-poppins text-[#15A9E3]">
                3 cleaning programs
              </h2>
            </div>
            <div className="flex flex-row gap-2 items-center px-2">
              <img className="h-5" src={right} alt="" />
              <h2 className="font-poppins text-[#15A9E3]">Digital display</h2>
            </div>
            <div className="flex flex-row gap-2 items-center px-2">
              <img className="h-5" src={right} alt="" />
              <h2 className="font-poppins text-[#15A9E3]">Memory for 1 user</h2>
            </div>
            <button className="flex flex-row items-center bg-[#E7FAFF] px-5 py-3 rounded-xl gap-3 font-poppins font-semibold text-[#184363] hover:text-[#15A9E3] active:opacity-70 mt-4 ml-4">
              <img className="h-6" src={cart} alt="" />
              Select options
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridThree;
