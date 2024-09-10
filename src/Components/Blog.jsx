import React from "react";

import b1 from "../Assets/Blog1.png";
import b2 from "../Assets/Blog2.png";
import b3 from "../Assets/Blog3.png";

const Blog = () => {
  return (
    <div id="blog">
      <div className="flex justify-center py-12">
        <h1 className="font-poppins font-extrabold text-[#184363] text-3xl ">
          Blogs
        </h1>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <div className="cursor-pointer">
          <img
            className="transition duration-300 transform hover:scale-110 "
            src={b1}
            alt=""
          />
        </div>

        <img
          className="transition duration-300 transform hover:scale-110 "
          src={b2}
          alt=""
        />
        <img
          className="transition duration-300 transform hover:scale-110 "
          src={b3}
          alt=""
        />
      </div>
      <div className="flex justify-center my-10">
        <button className="bg-[#39CB74] text-white px-4 py-1 rounded-2xl font-poppins font-semibold h-10">
          View more »
        </button>
      </div>
    </div>
  );
};

export default Blog;
