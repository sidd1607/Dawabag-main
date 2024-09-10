import React from "react";

import l1 from "../Assets/Link → product66-300x300.jpg.png";
import l2 from "../Assets/Link → product76-300x300.jpg.png";
import l3 from "../Assets/Item.png";
import l4 from "../Assets/Item (1).png";
import l5 from "../Assets/Item (2).png";

import cart from "../Assets/icons8-cart-50.png";

const GridTwo = () => {
  return (
    <>
      <div className="flex justify-center py-12">
        <h1 className="font-poppins font-extrabold text-[#184363] text-3xl ">
          Best Selling Products
        </h1>
      </div>
      <div className="flex flex-row justify-around items-center ">
        <div
          className=" rounded-xl hover:shadow-2xl cursor-pointer transition duration-300 transform hover:scale-110"
          id="One"
        >
          <div className="flex justify-center">
            <img className="pt-4 rounded-xl shadow-lg" src={l1} alt="" />
          </div>
          <h2 className="font-poppins text-[#15A9E3] font-semibold px-2">
            Protein
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-lg px-2">
            Nutren Diabetes Vanilla
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $34.50
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
            <img className="pt-4 rounded-xl shadow-lg" src={l2} alt="" />
          </div>

          <h2 className="font-poppins text-[#15A9E3] font-semibold px-2">
            Herbs
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-lg px-2">
            Henry Blooms One Night
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $44.00 - $39.00
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
            Pets
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-base px-2">
            Spring Leaf Kids Fish Oil 750mg
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $24.95
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
            Pets
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-lg px-2">
            Nordic Naturals Arctic-D Cod
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
            <img className="pt-4 rounded-xl shadow-lg" src={l5} alt="" />
          </div>

          <h2 className="font-poppins text-[#15A9E3] font-semibold px-2">
            Beauty
          </h2>
          <h1 className="font-poppins text-[#184363] font-bold text-lg px-2">
            Nair Precision Facial Hair
          </h1>
          <h1 className="font-poppins text-[#184363] font-bold text-xl py-2 px-2">
            $4.40
          </h1>
          <button className="flex flex-row items-center bg-[#E7FAFF] px-16 py-3 rounded-2xl gap-3 font-poppins font-semibold text-[#184363] hover:text-[#15A9E3] active:opacity-70 mb-6 mt-3">
            <img className="h-6 " src={cart} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default GridTwo;
