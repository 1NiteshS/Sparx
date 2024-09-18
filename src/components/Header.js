// src/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">College Events</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#events" className="text-white">Events</a></li>
          <li><a href="#coordinates" className="text-white">Coordinates</a></li>
          <li><a href="#contact" className="text-white">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
