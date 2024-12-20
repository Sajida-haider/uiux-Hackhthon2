"use client";
import React from "react";
import { FiFilter, FiGrid, FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#9F9F9F] text-black px-6 py-4 my-4 border-t border-b">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <FiFilter size={20} />
          <span>Filter</span>
        </div>
        <div className="border-l h-6"></div>
        <div className="flex items-center gap-2">
          <FiGrid size={20} />
          <FiMenu size={20} />
        </div>
        <div className="border-l h-6"></div>
        <span>Showing 1–16 of 32 results</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <input
            type="number"
            defaultValue={16}
            className="w-14 h-8 px-2 text-center border rounded-md focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <span>Short by</span>
          <select className="border rounded-md h-8 px-2 focus:outline-none bg-white">
            <option value="default">Default</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
