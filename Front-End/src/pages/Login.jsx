import React, { useState } from 'react';
import LandingNav from '../components/LandingNav';

const Login = () => {
  const [userType, setUserType] = useState('donor'); // 'donor' or 'ngo'

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <LandingNav />
      
      <div className="flex items-center justify-center pt-32 pb-12 px-6">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Header & Toggle */}
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h1>
            
            <div className="flex bg-gray-100 p-1 rounded-full mb-8">
              <button
                onClick={() => setUserType('donor')}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${
                  userType === 'donor' ? 'bg-[#eb008b] text-white shadow-md' : 'text-gray-500'
                }`}
              >
                Donor
              </button>
              <button
                onClick={() => setUserType('ngo')}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${
                  userType === 'ngo' ? 'bg-[#eb008b] text-white shadow-md' : 'text-gray-500'
                }`}
              >
                NGO
              </button>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              {userType === 'donor' 
                ? "Login to manage your donations" 
                : "NGO Portal: Manage your requirements"}
            </p>

            {/* Form Section */}
            <form className="space-y-4">
              {/* Common Fields */}
              <div className="text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                />
              </div>

              <div className="text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                />
              </div>

              {/* Unique Field for NGO Only */}
              {userType === 'ngo' && (
                <div className="text-left animate-in fade-in slide-in-from-top-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Organization ID</label>
                  <input 
                    type="text" 
                    placeholder="NGO-XXXX-XXXX" 
                    className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                  />
                </div>
              )}

              <div className="text-right">
                <a href="#" className="text-xs text-[#eb008b] hover:underline">Forgot password?</a>
              </div>

              <button className="w-full bg-[#eb008b] hover:bg-[#d0007c] text-white py-4 rounded-2xl font-bold tracking-widest text-xs transition transform hover:scale-[1.02] shadow-lg mt-4 uppercase">
                Login as {userType}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              Don't have an account? <a href="/signup" className="text-[#eb008b] font-bold hover:underline">Sign up</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;