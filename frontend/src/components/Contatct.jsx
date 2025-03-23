import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    emailjs
      .send(
        'service_1iomxkw',
        'template_4s8v94j',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        'qZ-nJGKhcqsiaFh4z'
      )
      .then(() => {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setFormStatus('Error occurred while sending the message.');
      });
  };

  return (
    <div className="w-full flex justify-center items-center mt-10" id="contact">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Content */}
        <div className="w-full py-12 px-4 sm:px-6">
          <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 justify-center">
              {/* Left Section - Contact Info */}
              <motion.div 
                className="lg:w-1/2 space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <motion.h1 
                    className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 lg:mt-4 max-md:text-2xl"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Get in Touch with Us
                  </motion.h1>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-700">Email</h3>
                    <p className="text-gray-600">coffeekalainfo@gmail.com</p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-700">Visit Us</h3>
                    <p className="text-gray-600">Coffee Kala, Jaipur</p>
                    <button
                      onClick={() => window.open("https://maps.app.goo.gl/9FX5v7SMFYoXG9Uy5", "_blank")}
                      className="text-amber-700 hover:text-amber-900 mt-2 flex items-center gap-1"
                    >
                      Get Directions
                    </button>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-700">Follow us:</h3>
                    <div className="mt-2">
                      <button
                        className="text-amber-700 hover:text-amber-900 flex items-center gap-2"
                        onClick={() => window.open("https://www.instagram.com/coffeekalajaipur/", "_blank")}
                      >
                        <FaInstagram size={24} /> @coffeekalajaipur
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Section - Contact Form */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What would you like to tell us?"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-3 px-4 rounded-md hover:from-amber-800 hover:to-amber-900 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                    
                    {formStatus && (
                      <motion.div 
                        className={`text-center mt-4 p-2 rounded ${
                          formStatus.includes('success') 
                            ? 'bg-green-100 text-green-800' 
                            : formStatus === 'Sending...' 
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-red-100 text-red-800'
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {formStatus}
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright Rectangle */}
        <div className="w-full bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 py-4 mt-4 mb-8 rounded-2xl">
          <div className="text-center text-neutral-900">
            &copy; {new Date().getFullYear()} Coffee Kala. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;