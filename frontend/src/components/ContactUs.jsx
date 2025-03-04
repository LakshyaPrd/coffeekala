import React, { useState } from "react";

const ContactUs = () => {
  // State to manage the visibility of the "Visit Us" details
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle the visibility of the details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto p-8">
        {/* Grid Container */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Get in Touch and Visit Us */}
          <div className="lg:w-1/2 space-y-8">
            {/* Get in Touch Section */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4 lg:mt-4">
                Get in Touch with Us
              </h1>
              <p className="text-lg text-gray-600">
                Have a question or feedback? We'd love to hear from you! Reach out to us via phone or email, or visit us at our cafe in Jalpur for a memorable experience.
              </p>
            </div>

            {/* Visit Us Section */}
            <div className="rounded-lg">
              <button
                className=" bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={toggleDetails}
              >
                Visit Us
              </button>
              {showDetails && (
                <div className="space-y-4 lg:mt-6 max-md:mt-6">
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-700">Address</h3>
                    <p className="text-gray-600">
                        86, New Sanganer Rd,<br />
                        Saraswati Enclave, Mansarovar,<br />
                        Jaipur, Rajasthan 
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-700">Call</h3>
                    <p className="text-gray-600">+91 99292 49696</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-700">Email</h3>
                    <p className="text-gray-600">coffeekalainfo@gmail.com</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Us
            </h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="mt-1 block  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="mt-1 block  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 w-full block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className=" bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;