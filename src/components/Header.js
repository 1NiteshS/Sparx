// src/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-white text-2xl">College Events</h1>
        <ul className="flex space-x-4">
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
