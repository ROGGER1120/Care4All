import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleUserRound, Menu } from 'lucide-react';

const Topbar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  return (
    <header className="h-14 sm:h-16 border-b border-pink-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-pink-50 shrink-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-pink-600 transition-colors p-1"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
        <div 
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600 cursor-pointer"
          onClick={() => navigate('/ngohome')}
        >
          Care4All
        </div>
      </div>
      <div 
        className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors"
        onClick={() => navigate('/ngoprofile')}
      >
        <CircleUserRound size={24} strokeWidth={1.5} />
      </div>
    </header>
  );
};

export default Topbar;