import React from 'react';
import Image from 'next/image';

export const SideTable = () => {
  return (
    <div className="w-full flex flex-col items-center p-4  py-20 bg-[#FAF4F4]">
      {/* Images and Text Section */}
      <div className="w-[90%] flex justify-between items-start gap-8"> {/* Adjusted gap */}
        {/* Left Image and Text */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/images/sidetableleft.jpg" // Replace with your left image path
            alt="Side Table Left"
            width={605}
            height={562}
            className="object-cover"
          />
        
        </div>

        {/* Right Image and Text */}
        <div className="flex flex-col items-center space-y-4"> {/* Same layout as left */}
          <Image
            src="/images/sidetaberight.jpg" // Replace with your right image path
            alt="Side Table Right"
            width={605}
            height={562}
            className="object-cover"
          />
        
        </div>
      </div>
    </div>
  );
};

export default SideTable;
