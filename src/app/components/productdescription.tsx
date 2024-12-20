import React from "react";
import Image from 'next/image';

const ProductDescription = () => {
  return (
    <div className="product-description flex flex-col items-center p-10">
      {/* Text Section */}
      <div className="text-section mb-8 max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look
          and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of
          the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts
          a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to
          fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Images Section - Horizontal with Background */}
      <div className="images-section flex flex-row gap-6 bg-gray p-6 rounded-lg">
        <div className="image-container w-[605px] h-[348px] bg-[#FAF4F4] rounded-lg flex justify-center items-center">
        <Image
    src="/images/description.jpg"
    alt="Product Image 1"
    className="object-cover rounded-lg"
    width={605}   
    height={348}  
  />
        </div>
        <div className="image-container w-[605px] h-[348px] bg-[#FAF4F4] rounded-lg flex justify-center items-center">
  <Image
    src="/images/description.jpg"
    alt="Product Image 2"
    className="object-cover rounded-lg"
    width={605}   
    height={348}  
  />
</div>
      </div>
    </div>
  );
};

export default ProductDescription;
