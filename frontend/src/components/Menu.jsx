import React from "react";
import { motion } from "framer-motion";
import ExpandableCardDemo from "../ui/ExpandableCardDemo";
import cards from "../data/Cards.jsx"; 
import ContactUs from "./ContactUs.jsx";

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
      delay: 0.1,
      duration: 0.7,
      ease: "easeOut" 
    } 
  }
};

// Immediate fade in variant (no delay)
const immediateVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren" // Ensures parent becomes visible before children animate
    } 
  }
};

const Menu = () => {
  return (
    <motion.div 
      className="mt-12 px-4 sm:px-6 md:px-8"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="min-h-[200px]"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-8"
          variants={slideInLeftVariant}
        >
          Our Menu
        </motion.h2>
        
        {/* Using immediate variant for cards with no staggering delay */}
        <motion.div 
          variants={immediateVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-4"
        >
          <ExpandableCardDemo cards={cards} /> 
        </motion.div>
      </motion.div>
      
      <motion.div 
        className='mt-10 sm:mt-12 lg:mt-24 max-w-6xl mx-auto mb-12'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "100px 0px"}}
        variants={slideInRightVariant}
      >
        <ContactUs/>
      </motion.div>
    </motion.div>
  );
};

export default Menu;