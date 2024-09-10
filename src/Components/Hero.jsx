import React from "react";

const Hero = () => {
  return (
    <div className="Hero flex items-start flex-col full-screen-bg">
      <div className="py-44 px-44 ">
        <h2 className="font-poppins text-[#184363]">Pyridoxine Vitamin B6</h2>
        <h1 className="font-poppins text-[#184363] font-extrabold text-5xl pb-5">
          Vitamins & <br />
          Supplements
        </h1>
        <button className="rounded-2xl bg-white px-4 py-2 font-poppins text-xl text-[#184363] transition duration-300 transform hover:scale-110 hover:shadow-lg active:opacity-80">
          Buy it now{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
