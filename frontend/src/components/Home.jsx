import React from 'react';
import img1 from '../assets/pic-1.svg'; // Ensure this path is correct
import img2 from '../assets/l1.svg'; // Add more images as needed
import img3 from '../assets/r3.svg';
import img4 from '../assets/r2.svg';

const Home = () => {
  const images = [img1, img2, img3, img4]; // Array of images

  const scrollLeft = () => {
    const container = document.getElementById('image-container');
    container.scrollBy({ left: -498, behavior: 'smooth' }); // Scroll left by image width
  };

  const scrollRight = () => {
    const container = document.getElementById('image-container');
    container.scrollBy({ left: 498, behavior: 'smooth' }); // Scroll right by image width
  };

  return (
    <div id='home' className="flex items-center justify-center min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Flex container that will stack on mobile but be side-by-side on larger screens */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Content on the left for larger screens */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Welcome to <span className="text-brown-600">Coffee Kala</span> – Your Cozy Retreat
            </h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
              At Coffee Kala, we blend comfort with quality, creating the perfect space for coffee lovers. Join us for a unique experience that warms your heart and delights your senses.
            </p>
          </div>

          {/* Image gallery on the right for larger screens, above content on mobile */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0 order-1 md:order-2 relative">
            {/* Image container with scroll snapping and hidden scrollbar */}
            <div
              id="image-container"
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Coffee Kala ${index + 1}`}
                  className="rounded-2xl shadow-xl flex-none w-[498px] h-[550px] object-cover snap-start"
                />
              ))}
            </div>
            {/* Scroll buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition"
            >
              &lt;
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;