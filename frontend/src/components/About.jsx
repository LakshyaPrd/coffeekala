import React from 'react';
import img1 from '../assets/pic-1.svg';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-3/4 mb-6 md:mb-0 relative">
            <div className="relative w-full overflow-hidden">
              <img
                src={img1}
                alt="Coffee Kala"
                className="rounded-2xl shadow-xl w-full h-[550px] object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent ">
              The Coffee Kala
            </h1>
            <h1 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent mb-8">
              Journey
            </h1>

            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            Embark on a sensory adventure with Coffee Kala, where every sip tells a story of passion and perfection. From our carefully curated blends 
            to the essence of our cozy ambiance, discover a harmonious blend of flavors and aesthetics that define the Coffee Kala experience.
            </p>
            
          </div>
        </div>

        {/* New Text and Image Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 mt-20">
          {/* Image Section */}
          <div className="w-full md:w-3/4 mb-6 md:mb-0 relative">
            <div className="relative w-full overflow-hidden">
              <img
                src={img1}
                alt="Coffee Kala"
                className="rounded-2xl shadow-xl w-full h-[550px] object-cover"
              />
            </div>
          </div>

          {/* Additional Text Section */}
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent ">
              The Coffee Kala
            </h1>
            <h1 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent mb-8">
              Experience
            </h1>

            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            At Coffee Kala, we take pride in our dedication to perfection. Every cup is a masterpiece, meticulously crafted to deliver a symphony of rich flavors and unique blends. 
            Our commitment to quality ensures that each visit is a journey of taste and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
