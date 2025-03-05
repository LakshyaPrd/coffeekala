import React, { useState } from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ContactUs = () => {


  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto p-8">
        {/* Grid Container */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Get in Touch and Visit Us */}
          <div className="lg:w-1/2 space-y-8">
            {/* Get in Touch Section */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 lg:mt-4 max-md:text-2xl">
                Get in Touch with Us
              </h1>
                <div>
                    <h3 className="text-lg font-medium text-gray-700 lg:mt-10 ">Call</h3>
                    <p className="text-gray-600 lg:mb-8">+91 99292 49696</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-gray-700">Email</h3>
                    <p className="text-gray-600">coffeekalainfo@gmail.com</p>
                  </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-8 sm:gap-16">
            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Media</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Cafe Locations</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Brew Guide</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Contact us</a></li>
              </ul>
            </div>

            {/* Our Policies Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Policies</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">TERMS & CONDITIONS</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">PRIVACY POLICY</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">SHIPPING POLICY</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">RETURN POLICY</a></li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow us:</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={(event) => event.preventDefault()}
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={(event) => event.preventDefault()}
                >
                  <FaYoutube size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={(event) => event.preventDefault()}
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;