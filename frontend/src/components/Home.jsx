import React, { useEffect, useRef, useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../assets/pic-1.svg';
import img2 from '../assets/pic-2.svg';
import img3 from '../assets/pic-3.svg';
import img4 from '../assets/pic-4.svg';
import cappu from '../assets/cappu.png';
import frap from '../assets/frappe.png';
import mint from '../assets/mint.png';
import straw from '../assets/strawberry.png';
import p1 from '../assets/person-1.png';
import p2 from '../assets/person-2.png';
import p3 from '../assets/person-3.png';
import TiltedCard from '../ui/TitleCard.jsx';
import Testimonial from '../ui/Testimonial.jsx';
import ContactUs from './ContactUs.jsx';

// Memoize TiltedCard for better performance
const MemoizedTiltedCard = memo(TiltedCard);

// Constants
const IMAGES = [img1, img2, img3, img4];
const PRODUCTS = [
  { name: "Cappuccino", imageSrc: cappu },
  { name: "Cold Frappe", imageSrc: frap },
  { name: "Mint Blue Crush Mojito", imageSrc: mint },
  { name: "Strawberry Margaritta", imageSrc: straw },
];
const TESTIMONIALS = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Lakshya Pradhan",
    src: p1,
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Sachin Sharma",
    src: p2,
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Abhijeet Gulati",
    src: p3,
  },
];

const AUTO_PLAY_INTERVAL = 3000;

// Define animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    } 
  }
};

// Left-side animation variant
const slideInLeftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7,
      ease: "easeOut" 
    } 
  }
};

// Right-side animation variant
const slideInRightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7,
      ease: "easeOut" 
    } 
  }
};

const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Enhanced product card variant
const productCardVariant = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    } 
  }
};

// Hover animation for product cards
const cardHoverAnimation = {
  scale: 1.03,
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
};

const MobileScrollMessage = () => {
  // Only show this on mobile devices
  return (
    <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 mb-4 fixed bottom-0 left-0 right-0 z-50 text-center md:hidden">
      <p className="font-medium">Please scroll from empty spaces, not images</p>
      <button 
        className="text-xs underline mt-1"
        onClick={() => document.querySelector('.mobile-scroll-message')?.remove()}
      >
        Got it
      </button>
    </div>
  );
};

const Home = () => {
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll
  const handleScroll = () => {
    if (containerRef.current) {
      const index = Math.round(
        containerRef.current.scrollLeft / containerRef.current.clientWidth
      );
      setCurrentImageIndex(index);
    }
  };

  // Scroll left/right
  const scroll = (direction) => {
    if (containerRef.current) {
      const newIndex = direction === 'left' 
        ? Math.max(0, currentImageIndex - 1)
        : Math.min(IMAGES.length - 1, currentImageIndex + 1);
      
      scrollToIndex(newIndex);
    }
  };

  // Scroll to specific index
  const scrollToIndex = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * containerRef.current.clientWidth,
        behavior: 'smooth'
      });
      setCurrentImageIndex(index);
    }
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlayEnabled) return;

    const interval = setInterval(() => {
      if (containerRef.current) {
        const isLastImage = currentImageIndex === IMAGES.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        
        scrollToIndex(newIndex);
      }
    }, AUTO_PLAY_INTERVAL);
    
    return () => clearInterval(interval);
  }, [currentImageIndex, isAutoPlayEnabled]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      console.log("Touch started on:", e.target);
    };
    
    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div id="home" className="flex flex-col min-h-screen w-full mt-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex-grow">
        {/* Hero Section with Slider and Text */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInVariant}
        >
          {/* Image Slider - Left side */}
          <motion.div 
            className="w-full lg:w-3/5 relative"
            variants={slideInLeftVariant}
          >
            <div 
              className="relative w-full overflow-hidden rounded-xl shadow-xl group"
              onMouseEnter={() => setIsAutoPlayEnabled(false)}
              onMouseLeave={() => setIsAutoPlayEnabled(true)}
            >
              {/* Images container */}
              <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex overflow-x-hidden snap-x snap-mandatory touch-pan-x"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {IMAGES.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Coffee Kala ${index + 1}`}
                    className="flex-none w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover snap-start touch-pan-y"
                    style={{ minWidth: '100%', touchAction: "pan-y", userSelect: "none" }}
                    loading={index === 0 ? "eager" : "lazy" }
                    drag={false}
                  />
                ))}
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {IMAGES.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <button
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/75 p-3 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/75 p-3 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </motion.div>

          {/* Text Section - Right side */}
          <motion.div 
            className="w-full lg:w-2/5 text-left bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg relative z-10 lg:-ml-16 -mt-10 lg:mt-0 max-md:mt-6"
            variants={slideInRightVariant}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 sm:mb-6"
              variants={fadeInVariant}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed"
              variants={fadeInVariant}
            >
              Coffee Kala is more than just a cafe; it's an aesthetic experience. We are dedicated to showcasing authenticity in every aspect, 
              from our menu to the ambiance. Join us to savor the perfect blend of flavors and creativity.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Products Section */}
        <motion.div 
          id="menu" 
          className="sm:mt-16 lg:mt-20 p-4 sm:p-6 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-col sm:flex-row items-left justify-between gap-4 mb-6 sm:mb-8"
              variants={fadeInVariant}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-medium"
                variants={slideInLeftVariant}
              >
                Discover
              </motion.h2>
              <motion.button 
                onClick={() => navigate('/menu')}
                className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors max-md:w-[150px]"
                variants={slideInRightVariant}
              >
                Explore More
              </motion.button>
            </motion.div>
            <motion.h2 
              className="text-xl sm:text-xl lg:text-2xl font-light mb-12 max-md:mb-8"
              variants={slideInLeftVariant}
            >
              Best Sellers
            </motion.h2>

            {/* Product Grid - Parent container with staggered children animation */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-20 lg:mt-4"
              variants={staggerChildrenVariant}
            >
              {PRODUCTS.map((product, index) => (
                <motion.div
                  key={index}
                  variants={productCardVariant}
                  whileHover={cardHoverAnimation}
                  className="transform-gpu"
                >
                  <MemoizedTiltedCard
                    className="mx-auto sm:mx-0"
                    imageSrc={product.imageSrc}
                    altText={product.name}
                    captionText={product.name}
                    containerHeight="475px"
                    containerWidth="100%"
                    imageHeight="460px"
                    imageWidth="100%"
                    rotateAmplitude={8}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <motion.p 
                        className="tilted-card-demo-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.1 } }}
                      >
                        {product.name}
                      </motion.p>
                    }
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Customer Stories Section */}
            <motion.div 
              className="mt-20 sm:mt-28 lg:mt-36 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInVariant}
            > 
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 mb-6 sm:mb-8"
                variants={fadeInVariant}
              >
                Customer Stories
              </motion.h2>
              <motion.div 
                className="flex flex-wrap justify-center mt-8"
                variants={staggerChildrenVariant}
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    variants={productCardVariant}
                  >
                    <Testimonial
                      quote={testimonial.quote}
                      name={testimonial.name}
                      src={testimonial.src}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Us Section */}
            <motion.div 
              className='mt-16 sm:mt-20 lg:mt-24'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInVariant}
            >
              <ContactUs/>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mobile-scroll-message md:hidden">
        <MobileScrollMessage />
      </div>
    </div>
  );
};

export default Home;