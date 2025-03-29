import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigateToAbout = () => {
    navigate('/about');
    closeMenu();
  };
  const navigateToReservation=()=>{
    navigate('/reservation');
    closeMenu();
  }
  const navigateToHome=()=>{
    navigate('/home');
    closeMenu();
  }
  const naviagteToGallery=()=>{
    navigate('/gallery');
    closeMenu();
  }
  const navigateToReviews=()=>{
    navigate('/reviews');
    closeMenu();
  }
  const navigateToHero=()=>{
    navigate('/');
    closeMenu();

  }
  const navigateToMenu=()=>{
    navigate('/menu');
    closeMenu();
  }
  const navigateToGallery=()=>{
    navigate('/gallery');
    closeMenu();
  }
  const navigateToContact=()=>{
    navigate('/contactus');
    closeMenu();
  }
  return (
    <nav className="bg-[#5C3623] mt-9 mx-4 sm:mx-6 md:mx-auto h-12 flex items-center px-4 sm:px-6 rounded-full text-xs text-white relative w-auto md:max-w-[1100px] md:h-15">
      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden flex items-center">
        <button
          ref={buttonRef}
          onClick={toggleMobileMenu}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Left Section */}
      <div className="hidden md:flex space-x-15 pl-20">
      <button 
          onClick={navigateToHome} 
          className="hover:text-gray-400"
        >
          HOME
        </button>
        <button 
          onClick={navigateToAbout} 
          className="hover:text-gray-400"
        >
          ABOUT
        </button>
        <button className="hover:text-gray-400" onClick={() => navigate('/menu')}>
          MENU
        </button>
        
      </div>

      {/* Center Section with Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-white p-2 rounded-lg">
          <img src={logo} onClick={navigateToHero} alt="Logo" className="rounded-2xl h-15 w-10 md:h-22 md:w-15" />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex space-x-15 ml-auto items-center pr-20">
        <button onClick={naviagteToGallery} className="hover:text-gray-400">
          GALLERY
        </button>
      <button onClick={navigateToReviews} className="hover:text-gray-400">REVIEWS</button>
      
        
        
        <button onClick={navigateToContact} className="hover:text-gray-400">
          CONTACT US
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-13 left-5 w-32 bg-[#5C3623] text-white flex flex-col items-center space-y-4 py-4 rounded-b-lg md:hidden z-50"
        >
          <button 
            className="hover:text-gray-400" 
            onClick={navigateToHome}
          >
            HOME
          </button>
          <button 
            className="hover:text-gray-400" 
            onClick={navigateToAbout}
          >
            ABOUT
          </button>
          <button 
            className="hover:text-gray-400" 
            onClick={navigateToMenu}
          >
            MENU
          </button>
          <button 
            className="hover:text-gray-400" 
            onClick={navigateToGallery}
          >
            GALLERY
          </button>
          <button 
            className="hover:text-gray-400" 
            onClick={navigateToReviews}
          >
            REVIEWS
          </button>
          <button 
            onClick={navigateToContact}
            className="hover:text-gray-400"
            
          >
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
