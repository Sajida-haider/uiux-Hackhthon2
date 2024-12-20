import React from "react";

const pinkbox = () => {
  return (
    <div className="bg-[#FAF4F4] py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Free Delivery */}
        <div className="p-4">
          <h3 className="text-lg font-bold">Free Delivery</h3>
          <p className="text-gray-600">
            For all orders over $50, consectetur adipsicing elit.
          </p>
        </div>

        {/* 90 Days Return */}
        <div className="p-4">
          <h3 className="text-lg font-bold">90 Days Return</h3>
          <p className="text-gray-600">
            If goods have problems, consectetur adipsicing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="p-4">
          <h3 className="text-lg font-bold">Secure Payment</h3>
          <p className="text-gray-600">
            100% secure payment, consectetur adipsicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};
export default pinkbox;
