"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Next.js router for navigation
import Image from "next/image";

const Asgher = () => {
  const router = useRouter();

  const navigateToProductPage = () => {
    // Navigate to the single product page and pass a query parameter
    router.push("/singleproductpage?openSidebar=true");
  };

  return (
    <div className="flex justify-between items-center w-full h-auto bg-[#FFF9E5] px-20">
      {/* Left Section */}
      <div className="flex flex-col items-center w-full max-w-[900px]">
        <Image
          src="/images/Asghersofa.jpg"
          alt="Asgaard Sofa"
          className="object-cover rounded"
          width={700}
          height={600}
        />
        {/* Add to Cart Button */}
        <button
          onClick={navigateToProductPage} // Navigate to Single Product Page
          className="bg-[#d7dbdb] text-gray-800 font-poppins py-2 px-6 rounded-md hover:bg-[#888888] transition-all mt-2 mb-16 ml-auto"
        >
          Product View
        </button>
      </div>

      {/* Right Image */}
      <Image
        src="/images/Asghertext.jpg" // Image path
        alt="Right Image displaying text"
        width={331}
        height={108}
        className="object-cover"
      />
    </div>
  );
};

export default Asgher;
