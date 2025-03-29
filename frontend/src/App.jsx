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
import { AnimatePresence, motion } from "framer-motion";

// Pre-load the Hero component separately with higher priority
const Hero = React.lazy(() => 
  import('./components/Hero').then(module => {
    // Force browser to prioritize Hero component
    window.__HERO_COMPONENT_LOADED = true;
    return module;
  })
);

// Other components
const Navigation = React.lazy(() => import('./components/Navigation'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Menu = React.lazy(() => import('./components/Menu'));
const Contact = React.lazy(()=>import('./components/Contatct'));

const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center ">
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-8">
        {/* Coffee Cup */}
        <div className="absolute w-16 h-20 bg-white rounded-b-3xl bottom-0 left-1/2 transform -translate-x-1/2 border-4 border-amber-900"></div>
        <div className="absolute w-20 h-4 bg-white rounded-full bottom-20 left-1/2 transform -translate-x-1/2 border-4 border-amber-900"></div>
        
        {/* Coffee Animation */}
        <div className="absolute w-10 h-6 bg-amber-800 rounded-t-md bottom-4 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        
        {/* Steam Animation */}
        <div className="absolute w-2 h-8 bg-amber-800/40 rounded-full bottom-24 left-[40%] transform -translate-x-1/2 animate-steam1"></div>
        <div className="absolute w-2 h-10 bg-amber-800/40 rounded-full bottom-24 left-[60%] transform -translate-x-1/2 animate-steam2"></div>
      </div>
      
      <h2 className="text-amber-900 text-2xl font-bold mb-6">Your coffee is brewing...</h2>
      
      <div className="relative w-64 h-3 bg-amber-900/30 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-amber-500 rounded-full animate-progress"></div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [animationsReady, setAnimationsReady] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [heroPreloaded, setHeroPreloaded] = useState(false);
  const [heroRendered, setHeroRendered] = useState(false);

  // Preload Hero more aggressively
  useEffect(() => {
    // Create and preload the Hero component immediately 
    const preloadHero = async () => {
      try {
        const HeroModule = await import('./components/Hero');
        // Store the component in a global variable for faster access
        window.__HERO_COMPONENT = HeroModule.default;
        setHeroPreloaded(true);
      } catch (err) {
        console.error('Failed to preload Hero:', err);
        // Even if there's an error, we should set this to true to avoid hanging
        setHeroPreloaded(true);
      }
    };
    
    preloadHero();
    
    // Also prefetch any other critical components
    import('./components/Navigation').catch(() => {});
    import('./components/Home').catch(() => {});
  }, []);

  // Handle image preloading
  useEffect(() => {
    const images = [coffeekala, coffeemug, l1, l2, l3, r1, r2, r3];
    
    // Add any hero-specific images that need preloading
    // Assuming there might be background images in the Hero component
    try {
      // Try to find hero background images from imported CSS modules
      const heroStyles = document.querySelectorAll('style');
      const heroBackgroundRegex = /url\(['"]([^'"]+)['"]\)/g;
      
      heroStyles.forEach(style => {
        let match;
        while ((match = heroBackgroundRegex.exec(style.textContent)) !== null) {
          if (match[1] && !images.includes(match[1])) {
            images.push(match[1]);
          }
        }
      });
    } catch (e) {
      console.warn('Could not extract hero images from CSS', e);
    }
    
    let loadedCount = 0;
    
    const loadImages = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setAllImagesLoaded(true);
          }
          resolve(src);
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          loadedCount++;
          if (loadedCount === images.length) {
            setAllImagesLoaded(true);
          }
          resolve(src);
        };
      });
    });

    // Important change: Only transition from loading to content when BOTH 
    // images are loaded AND hero is preloaded
    Promise.all([...loadImages, heroPreloaded ? Promise.resolve() : new Promise(resolve => {
      // Check every 100ms if hero is loaded
      const checkHero = setInterval(() => {
        if (heroPreloaded) {
          clearInterval(checkHero);
          resolve();
        }
      }, 100);
      
      // Safety timeout
      setTimeout(() => {
        clearInterval(checkHero);
        resolve();
      }, 3000);
    })])
    .then(() => {
      // Allow minimum loading time for the animation
      setTimeout(() => {
        setAllImagesLoaded(true);
        setIsLoading(false);
      }, 2500);
    });

    return () => {
      // Rest of your code...
    };
  }, [heroPreloaded]);

  // Set animations ready after a short delay once images are loaded
  useEffect(() => {
    if (allImagesLoaded) {
      const animationTimer = setTimeout(() => {
        setAnimationsReady(true);
      }, 100);
      
      return () => clearTimeout(animationTimer);
    }
  }, [allImagesLoaded]);

  // Handle transition between loading and content
  useEffect(() => {
    if (!isLoading) {
      // Pre-render the hero in background
      const img = new Image();
      img.src = coffeekala; // Use your hero background image
      
      // Force browser to process the hero render
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setContentReady(true);
        });
      });
    }
  }, [isLoading]);

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
      @keyframes steam1 {
        0%, 100% { transform: translateY(0) translateX(-4px) scale(1); opacity: 0.7; }
        50% { transform: translateY(-10px) translateX(4px) scale(1.2); opacity: 0.2; }
      }
      @keyframes steam2 {
        0%, 100% { transform: translateY(0) translateX(4px) scale(1); opacity: 0.7; }
        50% { transform: translateY(-14px) translateX(-4px) scale(1.2); opacity: 0.2; }
      }
      @keyframes progress {
        0% { width: 0%; }
        20% { width: 20%; }
        40% { width: 45%; }
        60% { width: 65%; }
        80% { width: 85%; }
        100% { width: 100%; }
      }
      .preload-animations {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        z-index: -1;
      }
      .animate-steam1 {
        animation: steam1 2s infinite ease-in-out;
      }
      .animate-steam2 {
        animation: steam2 2.3s infinite ease-in-out;
      }
      .animate-progress {
        animation: progress 2.5s ease-in-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Create a more efficient cached Hero component
  const CachedHero = React.useMemo(() => {
    // We can use the globally stored component if it's available
    const CachedHeroComponent = window.__HERO_COMPONENT || Hero;
    
    return (
      <Suspense fallback={
        <div className="h-screen w-full bg-[#f3e8e1] flex items-center justify-center">
          <div className="h-10 w-10 border-4 border-amber-700 rounded-full animate-spin"></div>
        </div>
      }>
        <div onLoad={() => setHeroRendered(true)}>
          <CachedHeroComponent />
        </div>
      </Suspense>
    );
  }, [heroPreloaded]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f3e8e1] to-[#fff] overflow-hidden">
      {/* Preload animations div */}
      <div className="preload-animations"></div>
      
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <BackgroundEffects />
          
          {/* IMPORTANT: Render Hero invisibly during loading */}
          {isLoading && (
            <div className="opacity-0 absolute">
              {CachedHero}
            </div>
          )}
          
          <MantineProvider>
            <BrowserRouter>
              <Suspense fallback={
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#f3e8e1]">
                  <div className="h-12 w-12 border-4 border-amber-700 rounded-full animate-spin"></div>
                </div>
              }>
                <Navigation />
              </Suspense>
              
              <div 
                className={`relative z-10 transition-all duration-300 ${
                  contentReady ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          {CachedHero}
                          <Suspense fallback={<div className="min-h-screen"></div>}>
                            <Home />
                          </Suspense>
                        </>
                      }
                    />
                    <Route path="/about" element={
                      <Suspense fallback={<div className="min-h-screen"></div>}>
                        <About />
                      </Suspense>
                    } />
                    <Route path="/gallery" element={
                      <Suspense fallback={<div className="min-h-screen"></div>}>
                        <Gallery/>
                      </Suspense>
                    }/>
                    <Route path="/reviews" element={
                      <Suspense fallback={<div className="min-h-screen"></div>}>
                        <Reviews/>
                      </Suspense>
                    }/>
                    <Route path="/menu" element={
                      <Suspense fallback={<div className="min-h-screen"></div>}>
                        <Menu />
                      </Suspense>
                    } />
                    <Route path="/home" element={
                      <Suspense fallback={<div className="min-h-screen"></div>}>
                        <Home/>
                      </Suspense>
                    }/>
                    <Route path="/contactus" element={
                      <Suspense fallback={<div className="min-h-screen"></div>}>
                        <Contact/>
                      </Suspense>
                    }/>
                  </Routes>
                </AnimatePresence>
              </div>
            </BrowserRouter>
          </MantineProvider>
        </motion.div>
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