import React from "react";
import { MdShoppingCart } from "react-icons/md"; // Shopping cart icon import
import { FaTrash } from "react-icons/fa"; // Trash icon import
import Link from "next/link";
import Pinkbox from "@/app/components/pinkbox";
import Image from 'next/image';

const CartPage = () => {
  return (
    <>
        <section
        className="relative"
        style={{
          backgroundImage: "url('/images/shope.jpg')", // Background image
          height: "316px", // Set the height
          width: "100%", // Make it full width
          backgroundSize: "cover", // Cover the full section
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repetition
          margin: "0", // Remove any margin
          padding: "0", // Remove any padding
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
          {/* Logo */}
          <div className="mb-1  ">
          <Image
        src="/images/logo.jpg" // Path to your image
        alt="Logo"
        width={77} // Width of the image (adjust to your needs)
        height={77} // Height of the image (adjust to your needs)
        className="w-77 h-77" // Optional: Use your Tailwind classes for styling
      />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold text-black">Cart</h2>
          
          {/* Subheading */}
          <p className="text-black">Home /Cart</p>
        </div>
      </section>
      {/* Cart Section */}
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg relative">
        <div className="flex justify-center items-center space-x-8">
          {" "}
          {/* Align items horizontally with no gap */}
          {/* Cart Items Table */}
          <div className="w-[817px] p-4 bg-white shadow rounded-lg border-[1px] border-gray-300">
            <table className="w-full bg-white shadow rounded-lg">
              <thead>
                <tr className="bg-yellow-100 text-left">
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 flex items-center gap-4">
                  <Image
  src="/images/cartsofa.jpg"
  alt="Asgaard Sofa"
  className="object-cover rounded"
  width={96}   // Width of the image (w-24 equivalent to 96px)
  height={96}  // Height of the image (h-24 equivalent to 96px)
/>
                    <span>Asgaard Sofa</span>
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      min="1"
                      value="1"
                      className="w-12 text-center border rounded"
                    />
                  </td>
                  <td className="p-4 text-[#B88E2F]">Rs. 250,000.00</td>
                  <td className="p-4 text-red-500 cursor-pointer">
                    <FaTrash className="inline" /> {/* Trash icon */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Cart Totals */}
          <div className="w-[393px] p-4 bg-[#FFF9E5] rounded shadow border-[1px] border-gray-300">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
            </div>

            {/* Link to Checkout Page */}
            <Link href="/checkout">
              <button className="w-full mt-6 p-3   text-black px-4 py-2 border rounded-lg-black ">
                <MdShoppingCart className="inline mr-2" />{" "}
                {/* Shopping cart icon */}
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pinkbox Section */}
      <Pinkbox />
    </>
  );
};

export default CartPage;
