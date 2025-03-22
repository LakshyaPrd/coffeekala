import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';

// Preload images
import coffeekala from './assets/coffeekala.png';
import coffeemug from './assets/cup.png';
import l1 from './assets/l1.svg';
import l2 from './assets/l2.svg';
import l3 from './assets/l3.svg';
import r1 from './assets/r1.svg';
import r2 from './assets/r2.svg';
import r3 from './assets/r3.svg';

// Import Framer Motion for better animation control
import { AnimatePresence } from "framer-motion";

const Navigation = React.lazy(() => import('./components/Navigation'));
const Hero = React.lazy(() => import('./components/Hero'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Menu = React.lazy(() => import('./components/Menu'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [animationsReady, setAnimationsReady] = useState(false);

  // Handle image preloading
  useEffect(() => {
    const images = [coffeekala, coffeemug, l1, l2, l3, r1, r2, r3];
    let loadedCount = 0;
    
    const loadImages = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          // If all images have loaded, set flag to true
          if (loadedCount === images.length) {
            setAllImagesLoaded(true);
          }
          resolve(src);
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          loadedCount++;
          // Even if image fails, we still need to check if all are processed
          if (loadedCount === images.length) {
            setAllImagesLoaded(true);
          }
          resolve(src);
        };
      });
    });

    // Minimum loading time of 1.5 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    Promise.all(loadImages)
      .then(() => {
        clearTimeout(loadingTimeout);
        setIsLoading(false);
      })
      .catch(() => {
        clearTimeout(loadingTimeout);
        setIsLoading(false);
      });

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Set animations ready after a short delay once images are loaded
  useEffect(() => {
    if (allImagesLoaded) {
      // A slight delay to ensure DOM is fully ready for animations
      const animationTimer = setTimeout(() => {
        setAnimationsReady(true);
      }, 100);
      
      return () => clearTimeout(animationTimer);
    }
  }, [allImagesLoaded]);

  // Preload critical CSS animations
  useEffect(() => {
    // Add a style tag to preload animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideInLeft {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideInRight {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      .preload-animations {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        z-index: -1;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f3e8e1] to-[#fff] overflow-hidden">
      {/* Preload animations div */}
      <div className="preload-animations"></div>
      
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div 
            className="h-12 w-12 border-4 border-gray-600 rounded-full animate-spin" 
            aria-label="loading"
          >
          </div>
        </div>
      ) : (
        <>
          <BackgroundEffects />
          <Suspense fallback={
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-white">
              <div className="h-12 w-12 border-4 border-gray-600 rounded-full animate-spin"></div>
            </div>
          }>
            <div 
              className={`relative z-10 transition-all duration-500 ${
                allImagesLoaded ? 'opacity-100' : 'opacity-0'
              } ${
                animationsReady ? 'animation-ready' : ''
              }`}
            >
              <MantineProvider>
                <BrowserRouter>
                  <Navigation />
                  <AnimatePresence mode="wait">
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <>
                            <Hero />
                            <Home />
                          </>
                        }
                      />
                      <Route path="/about" element={<About />} />
                      <Route path="/gallery" element={<Gallery/>}/>
                      <Route path="/reviews" element={<Reviews/>}/>
                      <Route path="/menu" element={<Menu />} />
                      <Route path="/home" element={<Home/>}/>
                    </Routes>
                  </AnimatePresence>
                </BrowserRouter>
              </MantineProvider>
            </div>
          </Suspense>
        </>
      )}
    </div>
  );
};

// Enhanced background effects with subtle animations
const BackgroundEffects = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-radial from-amber-200 via-white to-transparent opacity-30 blur-3xl"></div>
    <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-amber-300 to-transparent opacity-40 blur-2xl animate-pulse" style={{ animationDuration: '8s' }}></div>
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-amber-300 to-transparent opacity-40 blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
  </div>
);

export default App;