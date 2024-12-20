import Image from "next/image";

const BlogSection = () => {
  return (
    <section className="text-center py-10 px-4">
      {/* Title Section */}
      <h2 className="text-3xl font-bold mb-2">Our Blogs</h2>
      <p className="text-gray-500 mb-8">
        Find a bright ideal to suit your taste with our great selection.
      </p>

      {/* Blog Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Blog Card 1 */}
        <div className="w-[353px] h-[554px] bg-white shadow-md rounded-md overflow-hidden text-center">
          <Image
            src="/images/blog1.jpg"
            alt="Blog 1"
            width={353}
            height={277} // Half of 554px
            className="object-cover"
          />
          <h3 className="text-lg font-semibold my-4">
            Going all-in with millennial design
          </h3>
          <p className="text-teal-500 font-bold cursor-pointer mb-4">
            Read More
          </p>
          <div className="flex justify-between px-6 text-gray-500 text-sm">
            <span>5 min</span>
            <span>12 Oct 2022</span>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="w-[353px] h-[554px] bg-white shadow-md rounded-md overflow-hidden text-center">
          <Image
            src="/images/blog2.jpg"
            alt="Blog 2"
            width={353}
            height={277}
            className="object-cover"
          />
          <h3 className="text-lg font-semibold my-4">
            Going all-in with millennial design
          </h3>
          <p className="text-teal-500 font-bold cursor-pointer mb-4">
            Read More
          </p>
          <div className="flex justify-between px-6 text-gray-500 text-sm">
            <span>5 min</span>
            <span>12 Oct 2022</span>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="w-[353px] h-[554px] bg-white shadow-md rounded-md overflow-hidden text-center">
          <Image
            src="/images/blog3.jpg"
            alt="Blog 3"
            width={353}
            height={277}
            className="object-cover"
          />
          <h3 className="text-lg font-semibold my-4">
            Going all-in with millennial design
          </h3>
          <p className="text-teal-500 font-bold cursor-pointer mb-4">
            Read More
          </p>
          <div className="flex justify-between px-6 text-gray-500 text-sm">
            <span>5 min</span>
            <span>12 Oct 2022</span>
          </div>
        </div>
      </div>

      {/* View All Post */}
      <p className="mt-6 text-teal-500 font-bold cursor-pointer">
        View All Post
      </p>
    </section>
  );
};

export default BlogSection;
