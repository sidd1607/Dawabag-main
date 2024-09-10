import React from "react";
import logo from "../Assets/dawabagpng 2.png";
import img1 from "../Assets/iconamoon_profile-circle-light.png";
import img2 from "../Assets/SVG.png";
import img3 from "../Assets/Vector.png";

const Header = () => {
  return (
    <div className="flex shadow-lg h-24 flex-row justify-between items-center ">
      <div className="pl-10">
        <img src={logo} alt="" />
      </div>
      <div className="p-7">
        <ul className="cursor-pointer flex gap-16 text-[#184363] font-bold font-poppins ">
          <li className="hover:text-[#15A9E3] transition duration-300 transform hover:scale-110">
            Home
          </li>
          <li className="hover:text-[#15A9E3] transition duration-300 transform hover:scale-110">
            Shop by Brand
          </li>
          <li className="hover:text-[#15A9E3] transition duration-300 transform hover:scale-110 scroll-smooth">
            <div
              onClick={() =>
                window.scrollTo({ top: 10000, behavior: "smooth" })
              }
            >
              Blog
            </div>
          </li>
          <li className="hover:text-[#15A9E3] transition duration-300 transform hover:scale-110">
            <div
              onClick={() => window.scrollTo({ top: 1115, behavior: "smooth" })}
            >
              Shop
            </div>
          </li>
          <li className="hover:text-[#15A9E3] transition duration-300 transform hover:scale-110">
            Elements
          </li>
          <li className="hover:text-[#15A9E3] transition duration-300 transform hover:scale-110">
            Features
          </li>
        </ul>
      </div>
      <div className="flex flex-row h-7 gap-4 pr-2">
        <img
          className="cursor-pointer w-6 transition duration-300 transform hover:scale-110"
          src={img1}
          alt=""
        />
        <img
          className="cursor-pointer w-6 transition duration-300 transform hover:scale-110"
          src={img2}
          alt=""
        />
        <img
          className="cursor-pointer w-6 transition duration-300 transform hover:scale-110"
          src={img3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
