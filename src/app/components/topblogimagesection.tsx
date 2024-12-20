import React from 'react';
import Image from 'next/image'; // Correct import

const TopImageSection = () => {
  return (
    <div>
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
          <div className="mb-1">
            <Image
              src="/images/logo.jpg" // Path to your image
              alt="Logo"
              width={77} // Width of the image
              height={77} // Height of the image
              className="w-[77px] h-[77px]" // Tailwind class with custom width/height
            />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold text-black">Blog</h2>

          {/* Subheading */}
          <p className="text-black">Home / Blog</p>
        </div>
      </section>
    </div>
  );
};

export default TopImageSection;
