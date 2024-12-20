 "use client";
 import Image from "next/image";
 import React, { useState } from 'react';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Asgaard Sofa", price: "Rs. 250,000.00", img: "/images/sidebarsofa.jpg" },
    { id: 2, name: "table", price: "Rs. 35,000.00", img: "/images/Mas2.jpg" }
  ]);

  const removeItem = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
      <h2 className="text-3xl font-semibold text-center">Wishlist</h2>
      <div className="flex flex-wrap justify-between">
        {wishlist.map((item) => (
          <div key={item.id} className="w-full lg:w-1/3 p-4">
            <div className="bg-white shadow rounded-lg p-4">
            <Image
         src={item.img}     
         alt={item.name}      
          width={96}          
          height={96}          
        className="object-cover rounded"  
            />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-[#B88E2F]">{item.price}</p>
              <button 
                onClick={() => removeItem(item.id)} 
                className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
