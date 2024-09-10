import React from "react";

// import b1 from "../Assets/bannerOne.png";
// import b2 from "../Assets/BannerTwo.png";

const GridFour = () => {
  return (
    <div>
      <div className="flex justify-center py-12">
        <h1 className="font-poppins font-extrabold text-[#184363] text-3xl ">
          Special offers
        </h1>
      </div>
      <div className="Main flex flex-row justify-center mx-44 items-center">
        <div className="pahilawala bg-h1 w-1/2 h-96 bg-no-repeat transition duration-300 transform hover:scale-110">
          <div className="mx-16 my-12 cursor-pointer">
            <button id="b1" className="rounded-2xl bg-[#F2971F] px-2 mb-10 ">
              From $0.99
            </button>
            <h1 className="font-poppins font-bold text-2xl text-[#184363] p-2">
              Breathable <br /> <span className="font-medium">Face Mask</span>
            </h1>
            <button className="bg-[#184363] text-white font-poppins px-4 py-1 rounded-2xl hover:opacity-85 active:shadow-xl">
              Show now »
            </button>
          </div>
        </div>
        <div className="dusrawala bg-h2 w-1/2 h-96 bg-no-repeat ml-10 rounded-xl transition duration-300 transform hover:scale-110">
          <div className="mx-16 my-12">
            <button className="rounded-2xl bg-[#F2971F] px-2 mb-10">
              From $9.99
            </button>
            <h1 className="font-poppins font-bold text-2xl text-[#184363] p-2">
              Covid 19 pack <br />{" "}
              <span className="font-medium">Get it now 45% Off</span>
            </h1>
            <button className="bg-[#184363] text-white font-poppins px-4 py-1 rounded-2xl hover:opacity-85 active:shadow-xl">
              Show now »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridFour;
