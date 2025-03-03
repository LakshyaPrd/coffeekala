import React from 'react';
import img1 from '../assets/cappu.png';

const Reservation = () => {
  return (
    <div className='mt-6 py-18 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          
          <div className='flex-1 text-left lg:pt-20'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-6'>Book Your Table Now</h1>
            <p className='text-lg sm:text-xl mb-6'>
              Experience the perfect blend of flavors and aesthetics at Coffee.
            </p>
            <p className="text-lg sm:text-xl mb-8">
              Reserve your spot to indulge in our unique menu offerings and immerse
              yourself in the authentic cafe ambience.
            </p>
          </div>

          <div className='flex-1 w-full lg:w-auto'>
            <img
              src={img1} 
              alt='Cafe Ambience'
              className='w-full h-auto rounded-lg shadow-lg lg:h-[450px] lg:w-[500px] object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;