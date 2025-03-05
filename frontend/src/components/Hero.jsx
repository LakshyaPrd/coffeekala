import React from 'react';
import coffeekala from '../assets/coffeekala.png';
import coffeemug from '../assets/cup.png';
import l1 from '../assets/l1.svg';
import l2 from '../assets/l2.svg';
import l3 from '../assets/l3.svg';
import r1 from '../assets/r1.svg';
import r2 from '../assets/r2.svg';
import r3 from '../assets/r3.svg';

const Hero = () => {
  return (
    <div 
      id="hero-section"
      className="flex flex-col items-center justify-center text-center pb-[10vh] max-md:pb-6 max-md:text-4xl mt-8 relative"
    >
      <img
        className="object-contain max-w-[650px] mt-1.5 aspect-[7.52] max-md:max-w-[330px] max-md:max-h-[100px]"
        src={coffeekala}
        alt="Coffee Kala Logo"
        loading="eager"
      />
      
      <div className="relative flex items-center justify-center mt-4">
        <span className="absolute left-0 -translate-x-15 pt-8 text-4xl font-semibold text-gray-700 max-md:text-sm max-md:-translate-x-2 tracking-widest">
          ~ESTD
        </span>
        <img
          className="object-contain mx-auto max-w-[385px] max-h-[514px] -mt-6 max-md:max-w-[250px] max-md:max-h-[300px] max-md:-mt-4 drop-shadow-lg"
          src={coffeemug}
          alt="Steaming Coffee Mug"
          loading="eager"
        />
        {/* Left Side Coffee Beans */}
        <img 
          className="absolute left-[-20vw] top-[-5vh] h-[125px] max-md:w-10 max-md:h-10 max-md:left-[-35px] max-md:top-[15px] opacity-80"
          src={l1} 
          alt="Coffee Bean Decoration Left Top" 
          loading="lazy"
        />
        <img 
          className="absolute left-[-25vw] bottom-[5vh] h-[75px] max-md:w-10 max-md:h-10 max-md:left-[-50px] opacity-80"
          src={l2} 
          alt="Coffee Bean Decoration Left Bottom" 
          loading="lazy"
        />
        <img 
          className="absolute left-[-10vw] bottom-[-10vh] h-[92px] max-md:w-10 max-md:h-10 max-md:bottom-[-23px] max-md:left-[-5px] opacity-80"
          src={l3} 
          alt="Coffee Bean Decoration Left Bottom" 
          loading="lazy"
        />
        {/* Right Side Coffee Beans */}
        <img 
          className="absolute right-[-20vw] top-[-5vh] h-[125px] max-md:w-10 max-md:h-10 max-md:right-[-35px] max-md:top-[30px] opacity-80"
          src={r1} 
          alt="Coffee Bean Decoration Right Top" 
          loading="lazy"
        />
        <img 
          className="absolute right-[-25vw] bottom-[5vh] h-[90px] max-md:w-10 max-md:h-10 max-md:right-[-50px] max-md:bottom-[3vh] opacity-80"
          src={r2} 
          alt="Coffee Bean Decoration Right Bottom" 
          loading="lazy"
        />
        <img 
          className="absolute right-[-10vw] bottom-[-10vh] h-[92px] max-md:w-10 max-md:h-10 max-md:bottom-[-23px] max-md:right-[-5px] opacity-80"
          src={r3} 
          alt="Coffee Bean Decoration Right Bottom" 
          loading="lazy"
        />
        <span className="absolute right-0 translate-x-16 pt-8 text-4xl font-semibold text-gray-700 max-md:text-sm max-md:translate-x-2 tracking-widest">
          2024~
        </span>
      </div>
    </div>
  );
}

export default Hero;