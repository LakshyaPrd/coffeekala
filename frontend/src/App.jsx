import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Home from "./components/Home";
import coffeekala from './assets/coffeekala.png';
import coffeemug from './assets/cup.png';
import l1 from './assets/l1.svg';
import l2 from './assets/l2.svg';
import l3 from './assets/l3.svg';
import r1 from './assets/r1.svg';
import r2 from './assets/r2.svg';
import r3 from './assets/r3.svg';
import About from "./components/About";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const images = [coffeekala, coffeemug, l1, l2, l3, r1, r2, r3];
    let loadedCount = 0;
    
    // Create an image element for each asset to track loading progress
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setIsLoading(false); // All images are loaded
        }
      };
      img.onerror = () => {
        loadedCount += 1; // Handle errors gracefully
        if (loadedCount === images.length) {
          setIsLoading(false);
        }
      };
    });
    
    // Fallback timer in case some images fail to trigger events
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f3e8e1] to-[#fff] overflow-hidden">
      
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-4 border-t-transparent border-gray-600 rounded-full"></div>
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-radial from-amber-200 via-white to-transparent opacity-30 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-amber-300 to-transparent opacity-40 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-amber-300 to-transparent opacity-40 blur-2xl"></div>
      </div>

      {/* Main Content (Hidden during loading) */}
      {!isLoading && (
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <Home/>
          <About/>
        </div>
      )}
    </div>
  );
};

export default App;