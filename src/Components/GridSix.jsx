import React from "react";

import l1 from "../Assets/List1.png";
import l2 from "../Assets/List2.png";
import l3 from "../Assets/List3.png";
import l4 from "../Assets/List4.png";
import l5 from "../Assets/List5.png";

import cart from "../Assets/icons8-cart-50.png";

const GridSix = () => {
  return (
    <div>
      <div className="flex flex-row justify-around items-center">
        <div
          className=" rounded-xl hover:shadow-2xl cursor-pointer transition duration-300 transform hover:scale-110"
          id="One"
        >
          <div className="flex justify-center">
            <img className="pt-4 rounded-xl shadow-lg" src={l1} alt="" />
          </div>
          <h2 className="font-poppins text-[#15A9E3] font-semibold px-2">
            Vitamins
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-lg px-2">
            Gastro Soothe Tab 10mg X 20
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $5.95
          </h1>
          <button className="flex flex-row items-center bg-[#E7FAFF] px-16 py-3 rounded-2xl gap-3 font-poppins font-semibold text-[#184363] hover:text-[#15A9E3] active:opacity-70 mb-6 mt-3">
            <img className="h-6" src={cart} alt="" />
            Add to cart
          </button>
        </div>
        <div
          className=" rounded-xl hover:shadow-2xl cursor-pointer transition duration-300 transform hover:scale-110"
          id="Two"
        >
          <div className="flex justify-center">
            <img className="pt-4 " src={l2} alt="" />
          </div>

          <h2 className="font-poppins text-[#15A9E3] font-semibold px-2">
            Protein
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-lg px-2">
            Tropeaka Lean Protein Salted
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $34.15
          </h1>
          <button className="flex flex-row items-center bg-[#E7FAFF] px-16 py-3 rounded-2xl gap-3 font-poppins font-semibold text-[#184363] hover:text-[#15A9E3] active:opacity-70 mb-6 mt-3">
            <img className="h-6 " src={cart} alt="" />
            Add to cart
          </button>
        </div>
        <div
          className=" rounded-xl hover:shadow-2xl cursor-pointer transition duration-300 transform hover:scale-110"
          id="Three"
        >
          <div className="flex justify-center">
            <img className="pt-4 rounded-xl shadow-lg" src={l3} alt="" />
          </div>

          <h2 className="font-poppins text-[#15A9E3] font-semibold px-2">
            Supplements
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-base px-2">
            Protein Supplies Australia
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $24.18
          </h1>
          <button className="flex flex-row items-center bg-[#E7FAFF] px-20 py-3 rounded-2xl gap-3 font-poppins font-semibold text-[#184363] hover:text-[#15A9E3] active:opacity-70 mb-6 mt-3">
            <img className="h-6" src={cart} alt="" />
            Add to cart
          </button>
        </div>
        <div
          className=" rounded-xl hover:shadow-2xl cursor-pointer transition duration-300 transform hover:scale-110"
          id="Four"
        >
          <div className="flex justify-center">
            <img className="pt-4 rounded-xl shadow-lg" src={l4} alt="" />
          </div>

          <h2 className="font-poppins text-[#15A9E3] font-semibold px-2">
            Sports Nutrition
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-lg px-2">
            Vital Protein Strawberry
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $37.45
          </h1>
          <button className="flex flex-row items-center bg-[#E7FAFF] px-20 py-3 rounded-2xl gap-3 font-poppins font-semibold text-[#184363] hover:text-[#15A9E3] active:opacity-70 mb-6 mt-3">
            <img className="h-6 " src={cart} alt="" />
            Add to cart
          </button>
        </div>
        <div
          className="rounded-xl hover:shadow-2xl cursor-pointer transition duration-300 transform hover:scale-110"
          id="Five"
        >
          <div className="flex justify-center">
            <img className="pt-4 " src={l5} alt="" />
          </div>

          <h2 className="font-poppins text-[#15A9E3] font-semibold px-2">
            Sports Nutrition
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-lg px-2">
            Musashi 100% Whey Vanilla
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $39.95
          </h1>
          <button className="flex flex-row items-center bg-[#E7FAFF] px-16 py-3 rounded-2xl gap-3 font-poppins font-semibold text-[#184363] hover:text-[#15A9E3] active:opacity-70 mb-6 mt-3">
            <img className="h-6 " src={cart} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridSix;
