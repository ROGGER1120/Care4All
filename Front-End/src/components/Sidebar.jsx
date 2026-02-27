import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  HandHeart, 
  Calendar, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  X
} from 'lucide-react';

const SidebarItem = ({ icon, label, active = false, isMinimized = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-4 py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
      active 
        ? 'bg-pink-200 text-pink-600 font-bold shadow-sm' 
        : 'text-gray-500 hover:bg-white hover:text-pink-500 font-medium'
    }`}
  >
    <div className="shrink-0">{icon}</div>
    {!isMinimized && <span className="text-xs sm:text-sm whitespace-nowrap overflow-hidden">{label}</span>}
  </div>
);

const Sidebar = ({ isMobileOpen = false, onClose = () => {} }) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/ngohome' },
    { label: 'Donations', icon: <HandHeart size={20} />, path: '/ngodonation' },
    { label: 'Events', icon: <Calendar size={20} />, path: '/ngoevents' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  // Mobile/Tablet drawer view (< 1024px)
  if (isMobile) {
    return (
      <>
        {isMobileOpen && (
          <div 
            className="fixed inset-0 bg-black/30 z-40 lg:hidden" 
            onClick={onClose} 
          />
        )}

        <aside className={`fixed left-0 top-14 sm:top-16 h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] w-64 bg-pink-50 border-r border-pink-100 flex flex-col transition-all duration-300 ease-in-out z-40 transform lg:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-pink-600 transition-colors p-1.5"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>

          <nav className="p-3 sm:p-4 space-y-1 overflow-y-auto h-full text-left mt-6">
            {menuItems.map((item) => (
              <SidebarItem 
                key={item.label}
                icon={item.icon} 
                label={item.label} 
                active={location.pathname === item.path} 
                isMinimized={false} 
                onClick={() => handleNavigation(item.path)}
              />
            ))}
            
            <div className="mt-8 pt-4 border-t border-pink-200/50">
              <SidebarItem 
                icon={<LogOut size={20} />} 
                label="Sign Out" 
                isMinimized={false} 
                onClick={() => handleNavigation('/login')}
              />
            </div>
          </nav>
        </aside>
      </>
    );
  }

  // Desktop sidebar view (>= 1024px)
  return (
    <aside className={`hidden lg:flex ${isMinimized ? 'w-20' : 'w-64'} bg-pink-50 border-r border-pink-100 flex-col transition-all duration-300 ease-in-out relative h-full shrink-0`}>
      <button 
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute -right-3 top-4 bg-white border border-pink-200 rounded-full p-1 text-pink-600 hover:bg-pink-50 z-40 shadow-sm flex"
      >
        {isMinimized ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <nav className="p-2 lg:p-4 space-y-1 overflow-y-auto h-full text-left">
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