import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/pic-1.svg';
import ContactUs from './ContactUs';

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

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* First section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInVariant}
        >
          {/* Image Section - Left side */}
          <motion.div 
            className="w-full md:w-3/4 mb-6 md:mb-0 relative"
            variants={slideInLeftVariant}
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={img1}
                alt="Coffee Kala"
                className="rounded-2xl shadow-xl w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>

          {/* Text Section - Right side */}
          <motion.div 
            className="w-full md:w-3/4 text-center md:text-left"
            variants={slideInRightVariant}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent"
              variants={fadeInVariant}
            >
              The Coffee Kala
            </motion.h1>
            <motion.h1 
              className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent mb-8"
              variants={fadeInVariant}
            >
              Journey
            </motion.h1>

            <motion.p 
              className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed"
              variants={fadeInVariant}
            >
              Embark on a sensory adventure with Coffee Kala, where every sip tells a story of passion and perfection. From our carefully curated blends 
              to the essence of our cozy ambiance, discover a harmonious blend of flavors and aesthetics that define the Coffee Kala experience.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Second section */}
        <motion.div 
          className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInVariant}
        >
          {/* Image Section - Right side in this layout */}
          <motion.div 
            className="w-full md:w-3/4 mb-6 md:mb-0 relative"
            variants={slideInRightVariant}
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={img1}
                alt="Coffee Kala"
                className="rounded-2xl shadow-xl w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>

          {/* Additional Text Section - Left side in this layout */}
          <motion.div 
            className="w-full md:w-3/4 text-center md:text-left"
            variants={slideInLeftVariant}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent"
              variants={fadeInVariant}
            >
              The Coffee Kala
            </motion.h1>
            <motion.h1 
              className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent mb-8"
              variants={fadeInVariant}
            >
              Experience
            </motion.h1>

            <motion.p 
              className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed"
              variants={fadeInVariant}
            >
              At Coffee Kala, we take pride in our dedication to perfection. Every cup is a masterpiece, meticulously crafted to deliver a symphony of rich flavors and unique blends. 
              Our commitment to quality ensures that each visit is a journey of taste and satisfaction.
            </motion.p>
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
    </section>
  );
};

export default About;
