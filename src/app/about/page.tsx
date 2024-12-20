import Image from "next/image";
import Topblogimagesection from '@/app/components/topblogimagesection';
import { RiSearchLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa"; // Icon for Admin
import { HiCalendar } from "react-icons/hi"; // Icon for Date
import { MdWork } from "react-icons/md"; // Icon for Category (Wood)
import Gallerybtn from "@/app/components/gallerybtn"
const BlogPage = () => {
  return (
    <div>
      {/* Top Section with Background Image */}
      <Topblogimagesection />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-[20px] lg:px-[97px] pt-[50px] lg:pt-[137px] gap-10">
        {/* Blog Section */}
        <div className="w-full lg:w-2/3 space-y-10">
          {/* Blog Post 1 */}
          <div className="flex flex-col">
            <Image
              src="/images/vlog1.jpg"
              alt="Blog 1"
              width={800}
              height={100}
              className="rounded-lg object-cover mb-4"
            />
            {/* Meta Information - Icons above heading */}
            <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
              <FaUserAlt className="text-gray-400" />
              <span>Admin</span>
              <span className="mx-2">|</span>
              <HiCalendar className="text-gray-400" />
              <span>14 Oct 2022</span>
              <span className="mx-2">|</span>
              <MdWork className="text-gray-400" />
              <span>Wood</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Going all-in with millennial design
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <span className="text-teal-500 font-medium cursor-pointer">
              Read more
            </span>
          </div>

          {/* Blog Post 2 */}
          <div className="flex flex-col">
            <Image
              src="/images/vlog2.jpg"
              alt="Blog 2"
              width={800}
              height={100}
              className="rounded-lg object-cover mb-4"
            />
            {/* Meta Information - Icons above heading */}
            <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
              <FaUserAlt className="text-gray-400" />
              <span>Admin</span>
              <span className="mx-2">|</span>
              <HiCalendar className="text-gray-400" />
              <span>15 Oct 2022</span>
              <span className="mx-2">|</span>
              <MdWork className="text-gray-400" />
              <span>Design</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Exploring new ways of decorating
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <span className="text-teal-500 font-medium cursor-pointer">
              Read more
            </span>
          </div>

          {/* Blog Post 3 */}
          <div className="flex flex-col">
            <Image
              src="/images/vlog3.jpg"
              alt="Blog 3"
              width={800}
              height={100}
              className="rounded-lg object-cover mb-4"
            />
            {/* Meta Information - Icons above heading */}
            <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
              <FaUserAlt className="text-gray-400" />
              <span>Admin</span>
              <span className="mx-2">|</span>
              <HiCalendar className="text-gray-400" />
              <span>16 Oct 2022</span>
              <span className="mx-2">|</span>
              <MdWork className="text-gray-400" />
              <span>Handmade</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Handmade pieces that took time to make
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <span className="text-teal-500 font-medium cursor-pointer">
              Read more
            </span>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 pl-10 border rounded-lg black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <RiSearchLine className="absolute left-3 top-3 text-gray-400 text-xl" />
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-teal-500">Crafts</li>
              <li className="cursor-pointer hover:text-teal-500">Design</li>
              <li className="cursor-pointer hover:text-teal-500">Handmade</li>
              <li className="cursor-pointer hover:text-teal-500">Lifestyle</li>
              <li className="cursor-pointer hover:text-teal-500">Wood</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/vlog1.jpg"
                  alt="Recent Post 1"
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <span className="text-gray-600 hover:text-teal-500 cursor-pointer">
                  Going all-in with millennial design
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/vlog2.jpg"
                  alt="Recent Post 2"
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <span className="text-gray-600 hover:text-teal-500 cursor-pointer">
                  Exploring new ways of decorating
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/vlog3.jpg"
                  alt="Recent Post 3"
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <span className="text-gray-600 hover:text-teal-500 cursor-pointer">
                  Handmade pieces that took time to make
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Gallerybtn/>
      </div>
  );
};

export default BlogPage;
