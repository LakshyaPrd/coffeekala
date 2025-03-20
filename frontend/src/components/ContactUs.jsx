import React from "react";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col">
      {/* Main Content */}
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto p-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Section */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 lg:mt-4 max-md:text-2xl">
                  Get in Touch with Us
                </h1>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 lg:mt-10">Call</h3>
                  <p className="text-gray-600 lg:mb-8 font-sans">+91 99292 49696</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Email</h3>
                  <p className="text-gray-600">coffeekalainfo@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-8 sm:gap-16">
              {/* Company Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => navigate("/about")} className="text-gray-500 hover:text-gray-700">
                      About Us
                    </button>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      Media
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => window.open("https://maps.app.goo.gl/9FX5v7SMFYoXG9Uy5", "_blank")}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Cafe Location
                    </button>
                  </li>
                </ul>
              </div>

              {/* Our Policies Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Policies</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      Return Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow us:</h3>
                <div className="">
                  <a
                    href="https://www.instagram.com/coffeekalajaipur/"
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

      {/* Copyright Rectangle */}
      <div className="w-full bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 py-4 mt-auto rounded-2xl">
        <div className="max-w-6xl mx-auto text-center text-neutral-900">
          &copy; {new Date().getFullYear()} Coffee Kala. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;