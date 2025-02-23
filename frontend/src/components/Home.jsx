import React, { useEffect, useRef } from 'react';
import img1 from '../assets/pic-1.svg';
import img2 from '../assets/pic-2.svg';
import img3 from '../assets/pic-3.svg';
import img4 from '../assets/pic-4.svg';

const Home = () => {
  const images = [img1, img2, img3, img4];
  const containerRef = useRef(null);

  // Scroll Left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  // Scroll Right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  // Infinite Slideshow Effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        // Check if it's the last image
        if (
          containerRef.current.scrollLeft + containerRef.current.clientWidth >=
          containerRef.current.scrollWidth
        ) {
          containerRef.current.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to first image
        } else {
          containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Auto-slide every 3s

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div id="home" className="flex items-center justify-center min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Slider Section */}
          <div className="w-full md:w-3/5 mb-6 md:mb-0 relative order-1">
            <div className="relative w-full overflow-hidden">
              {/* Image Container */}
              <div
                ref={containerRef}
                id="image-container"
                className="flex overflow-x-auto snap-x snap-mandatory"
                style={{
                  scrollbarWidth: 'none', // Firefox
                  msOverflowStyle: 'none', // IE & Edge
                  WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                  scrollBehavior: 'smooth',
                }}
              >
                {/* Hide scrollbar for Webkit browsers */}
                <style>
                  {`
                    #image-container::-webkit-scrollbar {
                      display: none; /* Hide scrollbar for Chrome, Safari */
                    }
                  `}
                </style>
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Coffee Kala ${index + 1}`}
                    className="rounded-2xl shadow-xl flex-none w-full h-[498px] object-cover snap-start md:h-[650px]"
                    style={{ minWidth: '100%' }}
                  />
                ))}
              </div>
            </div>

            {/* Scroll Buttons */}
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

          {/* Text Section */}
          <div className="w-full md:w-2/4 text-center md:text-left order-2 bg-white p-10 rounded-lg shadow-lg relative z-10 md:-ml-20 -mt-20 md:mt-0 md:top-1.5">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed pt-1.5">
              Coffee Kala is more than just a cafe; it's an aesthetic experience. We are dedicated to showcasing authenticity in every aspect, 
              from our menu to the ambiance. 
              Join us to savor the perfect blend of flavors and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;