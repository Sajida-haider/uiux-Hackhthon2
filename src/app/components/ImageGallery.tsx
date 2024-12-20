import Image from "next/image";

const images = [
  {
    src: "/images/Mas1.jpg",
    name: "Trenton Modular Sofa",
    price: "Rs. 25,000.00",
  },
  {
    src: "/images/Mas2.jpg",
    name: "Granite dining table with dining chair",
    price: "Rs. 26,500.00",
  },
  {
    src: "/images/Mas3.jpg",
    name: "Outdoor bar table and stool",
    price: "Rs. 27,000.00",
  },
  {
    src: "/images/Mas4.jpg",
    name: "Plain console with teak mirror",
    price: "Rs. 24,500.00",
  },
  {
    src: "/images/Mas5.jpg",
    name: "Grain coffee table",
    price: "Rs. 25,000.00",
  },
  {
    src: "/images/Mas6.jpg",
    name: "Kent coffee table",
    price: "Rs. 26,500.00",
  },
  {
    src: "/images/Mas7.jpg",
    name: "Round coffee table_color ",
    price: "Rs. 27,000.00",
  },
  {
    src: "/images/Mas8.jpg",
    name: "Reclaimed teak coffee table",
    price: "Rs. 24,500.00",
  },
  { src: "/images/Mas9.jpg", name: "Plain console", price: "Rs. 25,000.00" },
  {
    src: "/images/Mas10.jpg",
    name: "Reclaimed teak Sideboard",
    price: "Rs. 26,500.00",
  },
  {
    src: "/images/Mas11.jpg",
    name: "Reclaimed teak Sideboard",
    price: "Rs. 27,000.00",
  },
  { src: "/images/Mas12.jpg", name: "Plain console", price: "Rs. 24,500.00" },
  {
    src: "/images/Mas13.jpg",
    name: "Reclaimed teak Sideboard",
    price: "Rs. 25,000.00",
  },
  {
    src: "/images/Mas14.jpg",
    name: "Granite square side table",
    price: "Rs. 26,500.00",
  },
  { src: "/images/Mas15.jpg", name: "Asgaard sofa", price: "Rs. 27,000.00" },
  {
    src: "/images/Mas16.jpg",
    name: "Maya sofa three seater",
    price: "Rs. 24,500.00",
  },
];
const ImageGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-6 w-[1440px] mx-auto mt-10">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-[255px] h-[285px] overflow-hidden mx-auto"
        >
          {/* Image */}
          <Image
            src={image.src}
            alt={`Gallery Image ${index + 1}`}
            className="object-cover rounded-t-lg"
            width={500} // Replace with appropriate width based on your layout
            height={185} // Replace with the corresponding height of the image
          />

          {/* Name and Price */}
          <div className="bg-white text-center p-2 shadow-lg rounded-b-lg">
            <h3 className="text-lg font-semibold">{image.name}</h3>
            {/* Price with custom golden color */}
            <p className="text-[#B88E2F] font-bold">{image.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
