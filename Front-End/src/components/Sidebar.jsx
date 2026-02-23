import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  HandHeart, 
  Calendar, 
  LogOut, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const SidebarItem = ({ icon, label, active = false, isMinimized = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-4 py-3.5 px-4 rounded-xl cursor-pointer transition-all ${
      active 
        ? 'bg-pink-200 text-pink-600 font-bold shadow-sm' 
        : 'text-gray-500 hover:bg-white hover:text-pink-500 font-medium'
    }`}
  >
    <div className="shrink-0">{icon}</div>
    {!isMinimized && <span className="text-sm whitespace-nowrap overflow-hidden">{label}</span>}
  </div>
);

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/ngohome' },
    { label: 'Donations', icon: <HandHeart size={20} />, path: '/ngodonation' },
    { label: 'Events', icon: <Calendar size={20} />, path: '/ngoevents' },
  ];

  return (
    <aside className={`${isMinimized ? 'w-20' : 'w-64'} bg-pink-50 border-r border-pink-100 flex flex-col transition-all duration-300 ease-in-out relative h-full shrink-0`}>
      <button 
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute -right-3 top-4 bg-white border border-pink-200 rounded-full p-1 text-pink-600 hover:bg-pink-50 z-40 shadow-sm"
      >
        {isMinimized ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <nav className="p-4 space-y-1 overflow-y-auto h-full text-left">
        
        
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.label}
            icon={item.icon} 
            label={item.label} 
            active={location.pathname === item.path} 
            isMinimized={isMinimized} 
            onClick={() => navigate(item.path)}
          />
        ))}
        
        <div className="mt-8 pt-4 border-t border-pink-200/50">
          <SidebarItem 
            icon={<LogOut size={20} />} 
            label="Sign Out" 
            isMinimized={isMinimized} 
            onClick={() => navigate('/login')}
          />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;