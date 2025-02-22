import React, { useState, useEffect, useRef } from "react";
import { FaShoppingBag } from "react-icons/fa"; // Importing shopping bag icon
import logo from "../assets/Logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#5C3623] mt-9 mx-auto max-w-[1100px] h-12 flex items-center px-6 rounded-full text-xs text-white relative md:max-w-[1100px] md:px-4 md:h-15">
      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-2xl focus:outline-none"
        >
          ☰ {/* Replace with an icon if desired */}
        </button>
      </div>

      {/* Left Section */}
      <div className="hidden md:flex space-x-15 pl-20 ">
        <a href="#home" className="hover:text-pink-400">
          HOME
        </a>
        <a href="#about" className="hover:text-gray-400">
          ABOUT
        </a>
        <a href="#menu" className="hover:text-gray-400">
          MENU
        </a>
        <a href="#gallery" className="hover:text-gray-400">
          GALLERY
        </a>
      </div>

      {/* Center Section with Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-white p-2 rounded-lg">
          <img src={logo} alt="Logo" className="rounded-2xl h-15 w-10 md:h-22 md:w-15" />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex space-x-15 ml-auto items-center pr-20">
        <a href="#book" className="hover:text-gray-400">
          BOOK
        </a>
        <a href="#" className="hover:text-gray-400">
          OFFERS
        </a>
        <a href="#contact" className="hover:text-gray-400">
          CONTACT
        </a>
        <FaShoppingBag className="text-2xl hover:text-gray-400" />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-13 left-5 w-32 bg-[#5C3623] text-white flex flex-col items-center space-y-4 py-4 rounded-b-lg md:hidden"
        >
          <a href="#" className="hover:text-pink-400" onClick={closeMenu}>
            HOME
          </a>
          <a href="#about" className="hover:text-gray-400" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#" className="hover:text-gray-400" onClick={closeMenu}>
            MENU
          </a>
          <a href="#" className="hover:text-gray-400" onClick={closeMenu}>
            GALLERY
          </a>
          <a href="#" className="hover:text-gray-400" onClick={closeMenu}>
            BLOG
          </a>
          <a href="#" className="hover:text-gray-400" onClick={closeMenu}>
            OFFERS
          </a>
          <a href="#" className="hover:text-gray-400" onClick={closeMenu}>
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
