import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <header className="h-16 border-b border-pink-100 flex items-center justify-between px-8 bg-pink-50 shrink-0 z-30">
      <div 
        className="text-3xl font-bold text-pink-600 cursor-pointer"
        onClick={() => navigate('/ngo-home')}
      >
        Care4All
      </div>
      <div 
        className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors"
        onClick={() => navigate('/ngoprofile')}
      >
        <CircleUserRound size={32} strokeWidth={1.5} />
      </div>
    </header>
  );
};

export default Topbar;