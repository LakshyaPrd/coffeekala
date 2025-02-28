import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core'; // Import MantineProvider

import coffeekala from './assets/coffeekala.png';
import coffeemug from './assets/cup.png';
import l1 from './assets/l1.svg';
import l2 from './assets/l2.svg';
import l3 from './assets/l3.svg';
import r1 from './assets/r1.svg';
import r2 from './assets/r2.svg';
import r3 from './assets/r3.svg';

const Navigation = React.lazy(() => import('./components/Navigation'));
const Hero = React.lazy(() => import('./components/Hero'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Reservation = React.lazy(() => import('./components/Reservation'));
const Menu = React.lazy(() => import('./components/Menu'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = [coffeekala, coffeemug, l1, l2, l3, r1, r2, r3];
    const loadImages = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(loadImages)
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
      .finally(() => setIsLoading(false));

    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f3e8e1] to-[#fff] overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin h-12 w-12 border-4 border-t-transparent border-gray-600 rounded-full" aria-label="Loading"></div>
        </div>
      ) : (
        <>
          <BackgroundEffects />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="relative z-10">
              <MantineProvider> {/* Wrap with MantineProvider */}
                <BrowserRouter>
                  <Navigation />
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
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/menu" element={<Menu />} />
                  </Routes>
                </BrowserRouter>
              </MantineProvider>
            </div>
          </Suspense>
        </>
      )}
    </div>
  );
};

const BackgroundEffects = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-radial from-amber-200 via-white to-transparent opacity-30 blur-3xl"></div>
    <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-amber-300 to-transparent opacity-40 blur-2xl"></div>
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-amber-300 to-transparent opacity-40 blur-2xl"></div>
  </div>
);

export default App;