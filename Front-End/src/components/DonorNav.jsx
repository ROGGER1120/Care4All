import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Heart, 
  LayoutGrid, 
  History, 
  UserCircle, 
  LogOut,
  ChevronDown,
  Bell,
  Calendar,
  Home
} from 'lucide-react';

const DonorNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/donor', icon: <Home size={18} /> },
    { label: 'Browse Needs', path: '/needs', icon: <LayoutGrid size={18} /> },
    { label: 'My Donations', path: '/history', icon: <History size={18} /> },
    { label: 'Events', path: '/donorevents', icon: <Calendar size={18} /> },
    { label: 'NGO Directory', path: '/ngodirectory', icon: <Heart size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-100 z-50 px-8 flex items-center justify-between font-poppins">
      <div 
        className="text-3xl font-bold text-[#eb008b] cursor-pointer select-none"
        onClick={() => navigate('/donor')}
      >
        Care4All
      </div>

      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              location.pathname === link.path 
                ? 'text-[#eb008b]' 
                : 'text-gray-500 hover:text-[#eb008b]'
            }`}
          >
            {link.icon}
            {link.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-[#eb008b] transition-colors relative">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#eb008b] rounded-full border-2 border-white"></span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
          >
            <UserCircle size={32} className="text-gray-400" />
            <ChevronDown size={16} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-3 z-50 animate-in fade-in zoom-in duration-200">
              <div className="px-4 py-2 border-b border-gray-50 mb-2 text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account</p>
                <p className="text-sm font-bold text-gray-800 truncate">Sridar</p>
              </div>
              
              <DropdownItem 
                icon={<UserCircle size={18} />} 
                label="Profile Settings" 
                onClick={() => { navigate('/donorprofile'); setIsProfileOpen(false); }} 
              />
              
              <div className="mt-2 pt-2 border-t border-gray-50">
                <DropdownItem 
                  icon={<LogOut size={18} />} 
                  label="Sign Out" 
                  variant="danger"
                  onClick={() => navigate('/login')} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const DropdownItem = ({ icon, label, onClick, variant = 'default' }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors text-left ${
      variant === 'danger' 
        ? 'text-red-500 hover:bg-red-50' 
        : 'text-gray-600 hover:bg-pink-50 hover:text-[#eb008b]'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default DonorNav;