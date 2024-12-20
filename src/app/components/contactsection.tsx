import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa"; // Adding the new clock icon
import Image from "next/image"; // Correct import for Image from next/image

const ContactSection = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
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
          <div className="mb-1  ">
          <Image 
  src="/images/logo.jpg" 
  alt="Logo" 
  width={77} // Width of the image
  height={77} // Height of the image
  className="w-[77px] h-[77px]" // Tailwind class with custom width/height
/>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold text-black">Contact</h2>
          
          {/* Subheading */}
          <p className="text-black">Home /Contact</p>
        </div>
      </section>

      {/* Main Section */}
      <div className="text-center py-6">
        <h2 className="text-4xl font-bold font-poppins text-gray-900 mt-6">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 mt-2">
          For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
        </p>
      </div>

      {/* Contact Form Section */}
      <section className="bg-white py-8">
        <div className="px-6 mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section: Contact Info */}
          <div className="flex flex-col space-y-6 items-start justify-center">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="w-6 h-6 text-primary-600" />
              <p className="text-gray-600">+92 300 1234567</p>
            </div>

            <div className="flex items-center space-x-4">
              <IoLocationSharp className="w-6 h-6 text-primary-600" />
              <p className="text-gray-600">123 Main Street, Karachi</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-primary-600" />
              <p className="text-gray-600">info@example.com</p>
            </div>

            {/* New Clock Icon and Working Time */}
            <div className="flex items-center space-x-4">
              <FaRegClock className="w-6 h-6 text-primary-600" />
              <p className="text-gray-600">Working Time: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-md w-full">
              <form action="#" className="space-y-6">
                {/* Name input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full p-3 bg-white border border-gray-300 text-gray-900 rounded-lg"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full p-3 bg-white border border-gray-300 text-gray-900 rounded-lg"
                    placeholder="name@domain.com"
                    required
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block w-full p-3 bg-white border border-gray-300 text-gray-900 rounded-lg"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="block w-full p-3 bg-white border border-gray-300 text-gray-900 rounded-lg"
                    placeholder="Leave a comment..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="w-32 py-2 px-2 bg-white text-black border border-black rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
