import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cartsidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sidebarTitle"
      className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50"
    >
      <div className="w-80 h-full bg-white shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 text-2xl"
        >
          &times;
        </button>
        <h2 id="sidebarTitle" className="text-2xl font-bold mb-4">
          Shopping Cart
        </h2>
        {/* Add content here */}
      </div>
    </div>
  );
};
