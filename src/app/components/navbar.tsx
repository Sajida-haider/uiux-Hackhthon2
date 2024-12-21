"use client"; // Add this line to enable client-side rendering

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdTrolley } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger Icon
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Initialize useRouter for page navigation
  const router = useRouter();

  // Toggle the dropdown menu when hamburger icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the state of the menu
  };

  // Close the dropdown menu after navigating to a page
  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false); // Close the dropdown menu
    router.push(path); // Navigate to the selected page
  };

  // Effect to prevent dropdown from auto-opening on page load (only for small screens)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close dropdown on larger screens
      }
    };

    // Add event listener for resizing the window
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="text-gray-600 body-font w-full bg-[#FBEBB5]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-full relative">
        {/* Small Screen: Hamburger and Icons */}
        <div className="flex w-full md:hidden items-center justify-between">
          {/* Hamburger Icon */}
          <GiHamburgerMenu
            size={30}
            color="black"
            className="cursor-pointer"
            onClick={toggleMenu}
          />

          {/* Small Screen Icons */}
          <div className="flex gap-6 items-center">
            <Link href="/account">
              <IoPersonOutline size={24} color="black" />
            </Link>
            <GoSearch size={24} color="black" />
            <Link href="/wishlist">
              <FaRegHeart size={24} color="black" />
            </Link>
            <Link href="/cart">
              <MdTrolley size={24} color="black" />
            </Link>
          </div>
        </div>

        {/* Large Screen: Navbar Links */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center justify-center space-x-6 md:space-x-12">
          <Link href="/" className="font-bold text-black">
            Home
          </Link>
          <Link href="/shop" className="font-bold text-black">
            Shop
          </Link>
          <Link href="/about" className="font-bold text-black">
            About
          </Link>
          <Link href="/contact" className="font-bold text-black">
            Contact
          </Link>
        </nav>

        {/* Large Screen: Icons */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/account">
            <IoPersonOutline size={24} color="black" />
          </Link>
          <GoSearch size={24} color="black" />
          <Link href="/wishlist">
            <FaRegHeart size={24} color="black" />
          </Link>
          <Link href="/cart">
            <MdTrolley size={24} color="black" />
          </Link>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <div
            id="dropdownMenu"
            className="absolute top-16 left-0 w-full bg-[#FBEBB5] md:hidden shadow-lg transition-all duration-300 ease-in-out"
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              <div
                className="font-bold text-black cursor-pointer"
                onClick={() => handleLinkClick("/")}
              >
                Home
              </div>
              <div
                className="font-bold text-black cursor-pointer"
                onClick={() => handleLinkClick("/shop")}
              >
                Shop
              </div>
              <div
                className="font-bold text-black cursor-pointer"
                onClick={() => handleLinkClick("/about")}
              >
                About
              </div>
              <div
                className="font-bold text-black cursor-pointer"
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
