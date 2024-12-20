import React from "react";
import Image from "next/image";
const instagram = () => {
  return (
    <div
      className="relative w-full h-[450px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/insta.jpg')" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/instatex.jpg" // Image path
          alt="Centered Image"
          className="object-cover"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default instagram;
