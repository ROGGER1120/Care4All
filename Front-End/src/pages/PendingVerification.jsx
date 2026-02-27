import React from 'react';
import Topbar from '../components/Topbar';
import { useNavigate } from 'react-router-dom';

const PendingVerification = () => {
  const navigate = useNavigate();

  return (
    /* h-screen and overflow-hidden prevent any scrolling */
    <div className="h-screen w-full bg-white font-poppins overflow-hidden flex flex-col">
      
      {/* Fixed Topbar height handled by flex-none */}
      <div className="flex-none">
        <Topbar />
      </div>

      {/* Main content area takes up remaining space and centers items */}
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-[440px] text-center">
          
          {/* Icon Circle */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-pink-50 mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#eb008b]">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Heading & Subtext */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Verify your NGO
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            To start receiving donations and access your dashboard, we need to verify your organization's credentials.
          </p>

          {/* Action Area */}
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/verify-form')}
              className="w-full bg-[#eb008b] hover:bg-black text-white py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg shadow-pink-100 uppercase tracking-widest"
            >
              Get Started
            </button>
            
            <button 
              onClick={() => navigate('/login')} 
              className="w-full py-2 text-gray-400 text-xs font-bold hover:text-gray-900 transition-colors uppercase tracking-widest cursor-pointer"
            >
              Sign Out
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default PendingVerification;