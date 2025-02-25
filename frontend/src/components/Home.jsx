import React, { useEffect, useRef, useState, memo } from 'react';
import img1 from '../assets/pic-1.svg';
import img2 from '../assets/pic-2.svg';
import img3 from '../assets/pic-3.svg';
import img4 from '../assets/pic-4.svg';
import img from '../assets/pic-5.svg';
import TiltedCard from '../ui/TitleCard.jsx';

// Memoize TiltedCard for better performance
const MemoizedTiltedCard = memo(TiltedCard);

const Home = () => {
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const images = [img1, img2, img3, img4];
  
  const products = [
    { name: "Coffee Kala", price: "$85.00", imageSrc: img },
    { name: "Coffee Kala", price: "$20.00", imageSrc: img },
    { name: "Coffee Kala", price: "$10.00", imageSrc: img },
    { name: "Coffee Kala", price: "$25.00", imageSrc: img },
  ];

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
        : Math.min(images.length - 1, currentImageIndex + 1);
      
      containerRef.current.scrollTo({
        left: newIndex * containerRef.current.clientWidth,
        behavior: 'smooth'
      });
      setCurrentImageIndex(newIndex);
    }
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlayEnabled) return;

    const interval = setInterval(() => {
      if (containerRef.current) {
        const isLastImage = currentImageIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        
        containerRef.current.scrollTo({
          left: newIndex * containerRef.current.clientWidth,
          behavior: 'smooth'
        });
        setCurrentImageIndex(newIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length, isAutoPlayEnabled]);

  return (
    <div id="home" className="min-h-screen w-full py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          {/* Image Slider */}
          <div className="w-full lg:w-3/5 relative">
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
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Coffee Kala ${index + 1}`}
                    className="flex-none w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover snap-start"
                    style={{ minWidth: '100%' }}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    onClick={() => {
                      containerRef.current?.scrollTo({
                        left: index * containerRef.current.clientWidth,
                        behavior: 'smooth'
                      });
                      setCurrentImageIndex(index);
                    }}
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
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-2/5 text-center lg:text-left bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg relative z-10 lg:-ml-16 -mt-10 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Coffee Kala is more than just a cafe; it's an aesthetic experience. We are dedicated to showcasing authenticity in every aspect, 
              from our menu to the ambiance. Join us to savor the perfect blend of flavors and creativity.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium">Discover</h2>
              <button className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Explore Now
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-20">
              {products.map((product, index) => (
                <MemoizedTiltedCard
                  key={index}
                  className="mx-auto sm:mx-0"
                  imageSrc={product.imageSrc}
                  altText={product.name}
                  captionText={product.name}
                  containerHeight="450px"
                  containerWidth="100%"
                  imageHeight="400px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text">
                      {product.name} - {product.price}
                    </p>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;