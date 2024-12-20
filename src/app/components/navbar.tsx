import React from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdTrolley } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font w-full bg-[#FBEBB5]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-full">
        {/* Navbar Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-6 md:space-x-12 flex-col md:flex-row">
          <Link href="/" className="font-bold mr-5 text-black">
            Home
          </Link>
          <Link href="/shop" className="font-bold mr-5 text-black">
            Shop
          </Link>
          <Link href="/about" className="font-bold mr-5 text-black">
            About
          </Link>
          <Link href="/contact" className="font-bold mr-5 text-black">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex flex-wrap gap-6 items-center justify-center md:ml-auto md:flex-row flex-col md:space-x-6">
          {/* Person Icon for My Account */}
          <Link href="/account">
            <IoPersonOutline
              size={24}
              color="black"
              className="cursor-pointer"
            />
          </Link>

          {/* Search Icon */}
          <GoSearch size={24} color="black" />

          {/* Heart Icon with Link */}
          <Link href="/wishlist">
            <FaRegHeart size={24} color="black" className="cursor-pointer" />
          </Link>

          {/* Cart Icon with Link */}
          <Link href="/cart">
            <MdTrolley size={24} color="black" className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
