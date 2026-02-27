import React, { useState, useEffect } from 'react';
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
  Home,
  Menu,
  X
} from 'lucide-react';

const DonorNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/donor', icon: <Home size={20} /> },
    { label: 'Browse Needs', path: '/needs', icon: <LayoutGrid size={20} /> },
    { label: 'My Donations', path: '/history', icon: <History size={20} /> },
    { label: 'Events', path: '/donorevents', icon: <Calendar size={20} /> },
    { label: 'NGO Directory', path: '/ngodirectory', icon: <Heart size={20} /> },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-b border-gray-100 z-[60] px-6 md:px-12 flex items-center justify-between font-poppins">
        
        {/* Logo */}
        <div 
          className="text-2xl md:text-3xl font-black text-[#eb008b] cursor-pointer select-none tracking-tighter"
          onClick={() => navigate('/donor')}
        >
          Care4All
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors ${
                location.pathname === link.path 
                  ? 'text-[#eb008b]' 
                  : 'text-gray-400 hover:text-[#eb008b]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <button className="text-gray-400 hover:text-[#eb008b] transition-colors relative p-2">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#eb008b] rounded-full border-2 border-white"></span>
          </button>

          {/* Profile Dropdown (Desktop) */}
          <div className="relative hidden md:block">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-50 transition-all"
            >
              <UserCircle size={32} className="text-gray-400" />
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-3 z-50 animate-in fade-in zoom-in duration-200">
                <div className="px-4 py-2 border-b border-gray-50 mb-2">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Account</p>
                  <p className="text-sm font-bold text-gray-800">Sridar</p>
                </div>
                <DropdownItem icon={<UserCircle size={18} />} label="Profile Settings" onClick={() => navigate('/donorprofile')} />
                <div className="mt-2 pt-2 border-t border-gray-50">
                  <DropdownItem icon={<LogOut size={18} />} label="Sign Out" variant="danger" onClick={() => navigate('/login')} />
                </div>
              </div>
            )}
          </div>

          {/* Burger Menu Button (Mobile Only) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#eb008b] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[70] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white z-[80] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <span className="text-xl font-black text-[#eb008b]">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400"><X size={24} /></button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                  location.pathname === link.path 
                    ? 'bg-pink-50 text-[#eb008b]' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-auto border-t border-gray-100 pt-6">
            <div className="flex items-center gap-4 px-4 mb-6">
              <UserCircle size={40} className="text-gray-300" />
              <div>
                <p className="text-sm font-bold text-gray-800">Sridar</p>
                <p className="text-xs text-gray-400">Donor Account</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-red-500 font-bold hover:bg-red-50 transition-all"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
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