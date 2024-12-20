"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Import from next/navigation
import Sidebar from "@/app/cartsidebar/page"; // Sidebar component
import Image from 'next/image';
const SingleProductPage = () => {
  const searchParams = useSearchParams(); // Hook to access query parameters
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar

  useEffect(() => {
    const openSidebar = searchParams.get("openSidebar"); // Get the query parameter
    if (openSidebar === "true") {
      setSidebarOpen(true); // Open sidebar if the query parameter is "true"
    }
  }, [searchParams]); // Dependency on searchParams so it reruns when query changes

  const handleCloseSidebar = () => {
    setSidebarOpen(false); // Close sidebar
  };

  const navigateToProductPage = () => {
    // Navigate to the same page with the query parameter to open the sidebar
    window.location.href = "/singleproductpage?openSidebar=true";
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button
        onClick={navigateToProductPage} // Navigate with query param to open the sidebar
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Product View
      </button>

      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Content Section */}
      <div className="flex justify-between items-center w-full h-auto bg-[#FFF9E5] px-20">
        {/* Left Section */}
        <div className="flex flex-col items-center w-full max-w-[900px]">
        <Image
  src="/Asghersofa.jpg"
  alt="Left Image"
  className="object-cover"
  width={500}   // Set an appropriate width for the image
  height={300}  // Set the height or calculate based on the aspect ratio
/>
        </div>

        {/* Right Image */}
        <Image
  src="/Asghertext.jpg"
  alt="Right Image"
  className="object-cover"
  width={331}   // Set the specific width for the image
  height={108}  // Set the specific height for the image
/>
      </div>
    </div>
  );
};

export default SingleProductPage;
