import React, { useEffect, useState, useRef } from 'react';

import coffeekala from '../assets/coffeekala.png';
import coffeemug from '../assets/cup.png';
import l1 from '../assets/l1.svg';
import l2 from '../assets/l2.svg';
import l3 from '../assets/l3.svg';
import r1 from '../assets/r1.svg';
import r2 from '../assets/r2.svg';
import r3 from '../assets/r3.svg';
import { motion, useAnimate } from 'framer-motion';

const Hero = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Delay the animation start to ensure it begins after component is fully mounted
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);
    
    // Setup intersection observer to detect when hero section is in viewport
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        // When hero section comes into view, trigger animations
        setAnimationStarted(true);
      } else {
        // When hero section is out of view, reset animations
        setAnimationStarted(false);
      }
    }, {
      threshold: 0.3, // Trigger when 30% of the element is visible
      rootMargin: '0px'
    });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      clearTimeout(timer);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="hero-section"
      ref={heroRef}
      className="flex flex-col items-center justify-center text-center pb-[10vh] max-md:pb-6 max-md:text-4xl mt-8 relative"
    >
      <motion.img
        initial={{ y: -10, opacity: 0 }}
        animate={animationStarted ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2
        }}
        className="object-contain max-w-[650px] mt-1.5 aspect-[7.52] max-md:max-w-[330px] max-md:max-h-[100px]"
        src={coffeekala}
        alt="Coffee Kala Logo"
        loading="eager"
      />
      
      <div className="relative flex items-center justify-center mt-4">
        <motion.span 
        initial={{ x: -10, opacity: 0 }}
        animate={animationStarted ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="absolute left-0 -translate-x-15 pt-8 text-4xl font-semibold text-gray-700 max-md:text-sm max-md:-translate-x-2 tracking-widest">
          ~ESTD
        </motion.span>
        <motion.img
        initial={{ y: 10, opacity: 0 }}
        animate={animationStarted ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
          className="object-contain mx-auto max-w-[385px] max-h-[514px] -mt-6 max-md:max-w-[250px] max-md:max-h-[300px] max-md:-mt-4 drop-shadow-lg"
          src={coffeemug}
          alt="Steaming Coffee Mug"
          loading="eager"
        />
        {/* Left Side Coffee Beans */}
        <motion.img 
        initial={{ x: -70, opacity: 0 }}
        animate={animationStarted ? { x: 0, opacity: 0.8 } : { x: -50, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.6
        }}
          className="absolute left-[-20vw] top-[-5vh] h-[125px] max-md:w-10 max-md:h-10 max-md:left-[-35px] max-md:top-[15px] max-md:opacity-0 md:opacity-80"
          src={l1} 
          alt="Coffee Bean Decoration Left Top" 
          loading="lazy"
        />
        <motion.img 
        initial={{ x: -70, opacity: 0 }}
        animate={animationStarted ? { x: 0, opacity: 0.8 } : { x: -50, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.7
        }}
          className="absolute left-[-25vw] bottom-[5vh] h-[75px] max-md:w-10 max-md:h-10 max-md:left-[-50px] max-md:opacity-0 md:opacity-80"
          src={l2} 
          alt="Coffee Bean Decoration Left Bottom" 
          loading="lazy"
        />
        <motion.img 
        initial={{ x: -70, opacity: 0 }}
        animate={animationStarted ? { x: 0, opacity: 0.8 } : { x: -50, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.8
        }}
          className="absolute left-[-10vw] bottom-[-10vh] h-[92px] max-md:w-10 max-md:h-10 max-md:bottom-[-23px] max-md:left-[-5px] max-md:opacity-80"
          src={l3} 
          alt="Coffee Bean Decoration Left Bottom" 
          loading="lazy"
        />
        {/* Right Side Coffee Beans */}
        <motion.img 
        initial={{ x: 70, opacity: 0 }}
        animate={animationStarted ? { x: 0, opacity: 0.8 } : { x: 50, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.6
        }}
          className="absolute right-[-20vw] top-[-5vh] h-[125px] max-md:w-10 max-md:h-10 max-md:right-[-35px] max-md:top-[30px] max-md:opacity-0 md:opacity-80"
          src={r1} 
          alt="Coffee Bean Decoration Right Top" 
          loading="lazy"
        />
        <motion.img 
        initial={{ x: 70, opacity: 0 }}
        animate={animationStarted ? { x: 0, opacity: 0.8 } : { x: 50, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.7
        }}
          className="absolute right-[-25vw] bottom-[5vh] h-[90px] max-md:w-10 max-md:h-10 max-md:right-[-50px] max-md:bottom-[3vh] max-md:opacity-0 md:opacity-80"
          src={r2} 
          alt="Coffee Bean Decoration Right Bottom" 
          loading="lazy"
        />
        <motion.img 
        initial={{ x: 70, opacity: 0 }}
        animate={animationStarted ? { x: 0, opacity: 0.8 } : { x: 50, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.8
        }}
          className="absolute right-[-10vw] bottom-[-10vh] h-[92px] max-md:w-10 max-md:h-10 max-md:bottom-[-23px] max-md:right-[-5px] max-md:opacity-80"
          src={r3} 
          alt="Coffee Bean Decoration Right Bottom" 
          loading="lazy"
        />
        <motion.span 
        initial={{ x: 10, opacity: 0 }}
        animate={animationStarted ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="absolute right-0 translate-x-16 pt-8 text-4xl font-semibold text-gray-700 max-md:text-sm max-md:translate-x-2 tracking-widest">
          2024~
        </motion.span>
      </div>
    </div>
  );
}

export default Hero;