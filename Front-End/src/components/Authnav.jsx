import React from 'react';
import { Link } from 'react-router-dom';

const Authnav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-center md:justify-start">
        <Link to="/" className="text-2xl font-black text-[#eb008b] tracking-tighter">
          Care4All
        </Link>
      </div>
    </nav>
  );
};

export default Authnav;