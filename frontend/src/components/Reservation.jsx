import React from 'react';
import img1 from '../assets/cappu.png';

const Reservation = () => {
  return (
    <div className='mt-6 py-8 md:py-16 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-7xl mx-auto'>
      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12'>
        <div className='flex-1 text-left lg:pt-24'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6'>Book Your Table Now</h1>
          <p className='text-base md:text-lg lg:text-xl mb-4 md:mb-6'>
            Experience the perfect blend of flavors and aesthetics at Coffee.
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8">
            Reserve your spot to indulge in our unique menu offerings and immerse
            yourself in the authentic cafe ambience.
          </p>
        </div>
        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 lg:-mr-12'>
          <img
            src={img1}
            alt='Cafe Ambience'
            className='w-full h-auto rounded-lg shadow-lg max-w-lg object-cover mx-auto lg:mx-0'
          />
        </div>
      </div>
        
        {/* Reservation Guidelines Section with Features Grid to the right */}
        <div className="mt-12 md:mt-16 mb-8 md:mb-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Guidelines on the left */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Reservation Guidelines</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8">
              To ensure a seamless experience, kindly adhere to our reservation policy. We
              recommend booking in advance to secure your table. Please review our
              terms and conditions before confirming your reservation.
            </p>
            <button className="px-5 py-2 md:px-6 md:py-3 border border-gray-800 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        
            <div className="p-4 md:p-6 border rounded-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-800">
                  <span className="text-lg md:text-xl">★</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-3 md:ml-4">Conditions</h3>
              </div>
              <p className="text-sm md:text-base lg:text-lg">
                Share your feature information here to attract new clients. Provide a brief
                summary to help visitors understand the benefits.
              </p>
              <button className="mt-3 md:mt-4 text-base md:text-lg font-medium hover:underline">
                Show More
              </button>
            </div>
            
            <div className="p-4 md:p-6 border rounded-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-800">
                  <span className="text-lg md:text-xl">@</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-3 md:ml-4">Book</h3>
              </div>
              <p className="text-sm md:text-base lg:text-lg">
                Share your feature information here to attract new clients. Provide a brief
                summary to help visitors understand the benefits.
              </p>
              <button className="mt-3 md:mt-4 text-base md:text-lg font-medium hover:underline">
                Show More
              </button>
            </div>
            
            <div className="p-4 md:p-6 border rounded-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-800">
                  <span className="text-lg md:text-xl">○</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-3 md:ml-4">Confirm</h3>
              </div>
              <p className="text-sm md:text-base lg:text-lg">
                Share your feature information here to attract new clients. Provide a brief
                summary to help visitors understand the benefits.
              </p>
              <button className="mt-3 md:mt-4 text-base md:text-lg font-medium hover:underline">
                Show More
              </button>
            </div>
            
            <div className="p-4 md:p-6 border rounded-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-800">
                  <span className="text-lg md:text-xl">✉</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-3 md:ml-4">Secure</h3>
              </div>
              <p className="text-sm md:text-base lg:text-lg">
                Share your feature information here to attract new clients. Provide a brief
                summary to help visitors understand the benefits.
              </p>
              <button className="mt-3 md:mt-4 text-base md:text-lg font-medium hover:underline">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;