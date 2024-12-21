import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="gallery-container w-full max-w-screen-xl mx-auto p-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8 mt-8 text-center">Top Picks For You</h2>
      
      {/* Description */}
      <p className="text-lg text-gray-600 text-center mb-6">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </p>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Image 1 */}
        <div className="text-center">
          <Image
            src="/images/topsofa1.jpg" // Ensure your image path is correct (relative to the public folder)
            alt="Modern Lamp"
            width={287}
            height={397}
            className="rounded-md"
          />
          
        </div>

        {/* Image 2 */}
        <div className="text-center">
          <Image
            src="/images/topsofa2.jpg" // Ensure your image path is correct
            alt="Elegant Chandelier"
            width={287}
            height={397}
            className="rounded-md"
          />
         </div>

        {/* Image 3 */}
        <div className="text-center ">
          <Image
            src="/images/topsofa3.jpg" // Ensure your image path is correct
            alt="Stylish Floor Lamp"
            width={287}
            height={397}
            className="rounded-md"
          />
          
        </div>

        {/* Image 4 */}
        <div className="text-center">
          <Image
            src="/images/topsofa4.jpg" // Ensure your image path is correct
            alt="Table Light"
            width={287}
            height={397}
            className="rounded-md"
          />
        
        </div>
      </div>

      {/* View More Text */}
      <div className="w-full flex justify-center">
        <p className="text-center mt-16 py-2 text-2xl font-medium text-black inline-block border-b-2 border-black pb-2">
          View More
        </p>
      </div>
    </div>
  );
};

export default Gallery;
