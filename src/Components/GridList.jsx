import React from "react";

import sm1 from "../Assets/smallpic1.png";
import sm2 from "../Assets/smallpic2.png";
import sm3 from "../Assets/Smallpic3.png";

import sm4 from "../Assets/smallpic4.png";
import sm5 from "../Assets/smallpic5.png";
import sm6 from "../Assets/smallpic6.png";

import sm7 from "../Assets/smallpic7.png";
import sm8 from "../Assets/smallpic8.png";
import sm9 from "../Assets/smallpic9.png";

const GridList = () => {
  return (
    <div className=" py-9">
      {/* this is  heading */}
      <div className="flex justify-center ">
        <h1 className="font-poppins font-extrabold text-[#184363] text-2xl px-24 py-16">
          More Products
        </h1>
      </div>
      {/* this is  heading end */}
      <div className="flex flex-row justify-center items-centers">
        {" "}
        {/*main - A */}
        <div className="flex flex-row gap-3 justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer">
          <img src={sm1} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Henry Blooms One Night Collagen
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$44.00</span> $39.00
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer">
          <img src={sm2} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Nair Precision Facial Hair Removal
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$5.50 </span> $4.40
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer">
          <img src={sm3} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Musashi 100% Whey Vanilla
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$45.95 </span>$40.15
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center ml-16">
        {/*main - B */}
        <div className="flex flex-row justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer mr-10">
          <img src={sm4} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Spring Leaf Kids Fish Oil 750mg
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$44.00</span>$24.95
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer mr-3">
          <img src={sm5} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Pain Away Forte + Arthritis Cream
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$22.95 </span>{" "}
              $20.95
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer">
          <img src={sm6} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Nature's Goodness Manuka Honey
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$45.95 </span>$36.95
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        {/*main - A */}
        <div className="flex flex-row gap-3 justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer">
          <img src={sm7} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Henry Blooms One Night Collagen
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$44.00</span> $39.00
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer">
          <img src={sm8} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Nair Precision Facial Hair Removal
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$5.50 </span> $4.40
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center px-5 hover:shadow-2xl p-2 cursor-pointer">
          <img src={sm9} alt="" />
          <div>
            <h1 className="font-poppins font-semibold text-[#184363]">
              Musashi 100% Whey Vanilla
            </h1>
            <h2 className="font-poppins font-medium">
              <span className="line-through text-[#575d61]">$45.95 </span>$40.15
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridList;
