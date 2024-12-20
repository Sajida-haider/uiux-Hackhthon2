import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-auto md:h-[1000px] bg-[#FBEBB5] flex items-center justify-between px-4 md:px-[160px]">
      {/* Text Section */}
      <div className="w-full md:w-[55%] text-center md:text-left">
        <h1 className="text-[30px] md:text-[50px] font-semibold leading-none px-4 md:px-12 py-4">
          Rocket single
          <br />
          <span className="block py-4">seater</span>
        </h1>

        <h6 className="font-medium text-[18px] md:text-[22px] underline px-4 md:px-12">
          Shop Now
        </h6>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center md:justify-end mt-8 md:mt-0">
        <Image
          src="/images/Rocket seater.jpg" // Image in the public folder
          alt="Rocket Single Seater"
          width={853}
          height={1000}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
