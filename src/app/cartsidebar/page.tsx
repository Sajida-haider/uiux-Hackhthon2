"use client";



import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sidebarTitle"
      aria-describedby="sidebarDescription"
      className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50 transition-all duration-300 ease-in-out"
    >
      <div className="w-80 sm:w-72 md:w-96 h-full bg-white shadow-lg p-6 relative overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          title="Close Sidebar"
          aria-label="Close Sidebar"
          className="text-red-600 absolute top-4 right-4 text-2xl font-bold hover:text-red-700 transition-colors duration-200"
        >
          &times;
        </button>

        {/* Sidebar Title */}
        <h2 id="sidebarTitle" className="text-2xl font-bold mb-4 text-gray-800">
          Shopping Cart
        </h2>

        {/* Cart Item */}
        <div className="flex items-center border-b pb-4 mb-4">
          <Image
            src="/images/sidebarsofa.jpg"
            alt="Cart Item"
            width={64} // Setting the width and height
            height={64}
            className="rounded-lg"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold text-gray-800">
              Asgaard Sofa
            </h3>
            <p className="text-sm text-gray-600">Rs. 250,000.00</p>
          </div>
        </div>

        {/* Subtotal */}
        <div className="flex justify-between items-center mt-80 text-gray-700">
          <span className="text-lg">Subtotal:</span>
          <span className="text-xl font-semibold text-[#B88E2F]">
            Rs. 250,000.00
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-8">
          <button className="w-1/2 border border-gray-300 rounded-3xl py-3 text-center text-sm hover:bg-gray-100 transition-all duration-200">
            View Cart
          </button>
          <button className="w-1/2 bg-black text-white rounded-3xl py-3 text-center text-sm hover:bg-gray-800 active:bg-gray-900 transition-all duration-200">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
