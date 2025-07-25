import React from 'react';
import logo from './logo.jpg'; // Adjust the path as necessary

const Contact_image = () => {
  return (
    <div className="flex w-full bg-green-50">
      {/* Left side light green */}
      <div className="w-1/6 bg-[#f3f9f6] hidden md:block"></div>

      {/* Center content (white background) */}
      <div className="flex-1 bg-white flex flex-col items-center text-center py-10 px-4 ">
        {/* Logo and Title */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={logo}
            alt="Siddhanath Logo"
            className="h-20 w-20 object-contain"
          />
          <h1 className="text-3xl font-semibold text-green-700 drop-shadow-md">
            Siddhanath Krushi Kendra
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-xl text-gray-700 text-lg leading-relaxed">
          Based in the heart of <span className="text-green-800 font-semibold">Mangalwedha</span>,
          Siddhanath Krushi Kendra is recognized as one of the top agricultural stores in the region.
          Trusted by thousands of farmers, we take pride in offering the best quality products and expert guidance for all farming needs.
        </p>
      </div>

      {/* Right side light green */}
      <div className="w-1/6 bg-[#f3f9f6] hidden md:block"></div>
    </div>
  );
};

export default Contact_image;
