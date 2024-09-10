import React from "react";
import span from "../Assets/span.icon.png";
import search from "../Assets/icons8-search-50.png";

const Search = () => {
  return (
    <div className=" flex flex-row justify-center items-center bg-[#EDF4F6] h-16 gap-2">
      <button className=" flex flex-row rounded-3xl bg-white pl-4 pr-4 pt-2 pb-2 gap-2 text-[#184363] font-poppins font-semibold">
        <img className="pt-1" src={span} alt="" />
        All Categories
      </button>
      <div className="flex items-center">
        <input
          type="text"
          className=" px-4 py-2 w-[1200px] border border-gray-300 rounded-l-2xl focus:outline-none focus:border-blue-500 text-[#184363] font-poppins font-semibold"
          placeholder="What are you looking for?"
        />
        <button className="px-4 py-2 bg-[#F2971F] text-white rounded-r-xl hover:bg-[#f0cf61] focus:outline-none">
          <img className="h-6 w-6" src={search} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Search;
