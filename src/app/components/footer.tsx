import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
        {/* Address Section */}
        <div>
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-bold mb-2">Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="font-bold mb-2">Help</h4>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="text-center mt-4">
        <h4 className="font-bold mb-2">Newsletter</h4>
        <form className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border border-gray-300 p-2 w-72"
          />
          <button type="submit" className="bg-black text-white px-4 py-2 ml-2">
            SUBSCRIBE
          </button>
        </form>
        <div className="mt-2 border-b-2 border-gray-400 w-72 mx-auto"></div>{" "}
        {/* Underline */}
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        © 2022 Mxubel House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
