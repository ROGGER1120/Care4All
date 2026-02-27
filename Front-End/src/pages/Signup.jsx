import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AuthNav from '../components/Authnav';

const Signup = () => {
  const location = useLocation();
  const [userType, setUserType] = useState('donor');

  useEffect(() => {
    if (location.state?.userType) setUserType(location.state.userType);
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins flex flex-col">
      <AuthNav />
      <div className="flex-grow flex items-center justify-center pt-28 pb-12 px-6">
        <div className="bg-white w-full max-w-md rounded-[2rem] shadow-xl border border-gray-100 p-10">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">Create Account</h1>

          <div className="flex bg-gray-100 p-1.5 rounded-full mb-8">
            {['donor', 'ngo'].map((type) => (
              <button 
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                  userType === type ? 'bg-[#eb008b] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <form className="space-y-5">
            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
                {userType === 'donor' ? 'Full Name' : 'Organization Name'}
              </label>
              <input 
                type="text" placeholder={userType === 'donor' ? "John Doe" : "NGO Foundation"}
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Email Address</label>
              <input type="email" placeholder="email@example.com" className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition" required />
            </div>

            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition" required />
            </div>

            <button className="w-full bg-[#eb008b] hover:bg-[#d0007c] text-white py-4 rounded-2xl font-bold text-xs shadow-lg mt-4 uppercase tracking-widest transition-transform hover:scale-[1.01]">
              Register as {userType}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account? <a href="/login" className="text-[#eb008b] font-bold hover:underline ml-1">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;