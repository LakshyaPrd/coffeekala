import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactUs from './ContactUs';

// Import your cafe images here
import img1 from '../assets/pic-1.svg';
import img2 from '../assets/pic-2.svg';
import img3 from '../assets/pic-3.svg';
import img4 from '../assets/pic-4.svg';
// Add more cafe images as needed

// Define gallery images array
const GALLERY_IMAGES = [
  { src: img1, alt: "Cafe Interior", category: "interior" },
  { src: img2, alt: "Coffee Art", category: "drinks" },
  { src: img3, alt: "Outdoor Seating", category: "space" },
  { src: img4, alt: "Coffee Beans", category: "ingredients" },
  { src: img1, alt: "Cafe Corner", category: "interior" },
  { src: img2, alt: "Specialty Coffee", category: "drinks" },
  { src: img3, alt: "Coffee Brewing", category: "process" },
  { src: img4, alt: "Cafe Ambiance", category: "space" },
  { src: img1, alt: "Pastries Display", category: "food" },
  { src: img2, alt: "Coffee Preparation", category: "process" },
  { src: img3, alt: "Tea Selection", category: "drinks" },
  { src: img4, alt: "Coffee Packaging", category: "products" },
];

// Update the container variant to be simpler
const containerVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.08
    }
  }
};

// Simplified image variant that clearly animates from bottom to top
const imageVariant = {
  hidden: { opacity: 0, y: 100 },  // Start from 100px below
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3
    }
  }
};

// Title animation from top
const titleVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Animation for the bottom section
const bottomSectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Gallery = () => {
  // State for expanded image view on mobile
  const [expandedImage, setExpandedImage] = useState(null);

  // Handle image click - expand on mobile, do nothing on desktop
  const handleImageClick = (image) => {
    // Only activate for mobile/tablet sizes
    if (window.innerWidth < 768) {
      setExpandedImage(image);
    }
  };

  // Close expanded image
  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent mb-4"
            variants={titleVariant}
          >
            Coffee Kala Gallery
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
            variants={titleVariant}
          >
            Explore the visual journey through our cafe space, specialty drinks, and delightful moments captured in time.
          </motion.p>
        </motion.div>

        {/* Gallery Grid - Bottom to Top animation */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05, margin: "100px 0px" }}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer group"
              variants={imageVariant}
              whileHover="hover"
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Caption overlay */}
              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 w-full text-white bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-medium text-xs sm:text-sm drop-shadow-md">{image.alt}</p>
                  <p className="text-xs text-gray-200 capitalize drop-shadow-md hidden sm:block">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile expanded image view */}
        {expandedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center p-4 md:hidden"
            onClick={closeExpandedImage}
          >
            <div className="relative max-h-[80vh] overflow-hidden">
              <img 
                src={expandedImage.src} 
                alt={expandedImage.alt} 
                className="w-full h-auto object-contain mx-auto" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium text-lg">{expandedImage.alt}</p>
                <p className="text-gray-200 text-sm capitalize">{expandedImage.category}</p>
              </div>
            </div>
            <button 
              className="mt-4 bg-white/20 text-white py-2 px-6 rounded-full self-center"
              onClick={closeExpandedImage}
            >
              Close
            </button>
          </div>
        )}

        {/* Category explanation */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={bottomSectionVariant}
        >
          <h3 className="text-xl sm:text-2xl font-medium mb-4 text-amber-800">Our Captured Moments</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Every image tells a story of passion, craftsmanship, and the unique atmosphere of Coffee Kala.
            From our carefully designed interior to our meticulously crafted beverages,
            we invite you to experience the essence of our cafe through these visual snippets.
          </p>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div 
          className='mt-16 sm:mt-20 lg:mt-24'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "100px 0px" }}
          variants={bottomSectionVariant}
        >
          <ContactUs/>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;