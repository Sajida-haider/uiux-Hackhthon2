"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Topimagesection from "@/app/components/topimagesection";
import Pinkbox from "@/app/components/pinkbox";

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  townCity: string;
  postalCode: string;
  phone: string;
  email: string;
  additionalInfo: string;
}

const Checkout = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    postalCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const router = useRouter();

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Order placed successfully!");

    // Redirect after submission
    router.push("/order-confirmation");

    // Optionally reset form
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      streetAddress: "",
      townCity: "",
      postalCode: "",
      phone: "",
      email: "",
      additionalInfo: "",
    });
  };

  return (
    <>
      <Topimagesection />
      <div className="py-8 px-4 font-sans">
        <div className="flex justify-center space-x-8">
          {/* Billing Details Form */}
          <form
            className="w-1/3 p-6 rounded-lg bg-white"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>

            {/* First Name */}
            <div className="mb-4">
              <label className="block font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Company Name (Optional) */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Country/Region */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Country/Region</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select a country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Town/City */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Town/City</label>
              <input
                type="text"
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Postal Code */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Additional Information */}
            <div className="mb-4">
              <label className="block font-medium mb-2">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>

          {/* Order Summary */}
          <div className="w-1/3 p-6 rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            <div className="mb-4">
              <p>Asgher sofa x 1</p>
              <p>Subtotal: Rs. 250,000.00</p>
              <p>
                Total: <strong className="text-[#B88E2F]">Rs. 250,000.00</strong>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Direct Bank Transfer</h3>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Cash On Delivery</h3>
              <p>Pay when the order is delivered to your address.</p>
            </div>
            <div className="mb-4">
              <h4 className="font-medium text-sm">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </h4>
            </div>
            <div className="flex justify-center mt-6">
              <button className="w-1/2 py-2 bg-white text-black border-2 border-black rounded-md hover:bg-gray-100">
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Pink Box Component */}
        <div className="mt-8">
          <Pinkbox />
        </div>
      </div>
    </>
  );
};

export default Checkout;
