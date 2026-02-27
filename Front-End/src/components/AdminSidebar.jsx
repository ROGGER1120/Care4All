import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { label: 'Verification', path: '/admin/verify', icon: <ShieldCheck size={20} /> },
    { label: 'User Management', path: '/admin/users', icon: <Users size={20} /> },
    { label: 'Support Tickets', path: '/admin/support', icon: <MessageSquare size={20} /> },
    { label: 'System Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-gray-900 text-white flex flex-col font-poppins z-50">
      <div className="p-8">
        <h2 className="text-2xl font-bold tracking-tight">
          Admin <span className="text-[#eb008b]">Panel</span>
        </h2>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1 font-black">
          Care4All Management
        </p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-[#eb008b] text-white shadow-lg shadow-pink-900/20' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={isActive ? 'text-white' : 'text-gray-500 group-hover:text-[#eb008b]'}>
                  {item.icon}
                </span>
                <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
              </div>
              {isActive && <ChevronRight size={16} />}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="bg-gray-800/50 p-4 rounded-3xl mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#eb008b] flex items-center justify-center font-bold text-sm">
            AD
          </div>
          <div className="text-left">
            <p className="text-xs font-bold truncate w-32 text-gray-200">System Admin</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Root Access</p>
          </div>
        </div>
        
        <button 
          onClick={() => navigate('/login')}
          className="w-full flex items-center gap-4 p-4 text-gray-500 hover:text-red-400 transition-colors font-bold text-xs uppercase tracking-widest"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;