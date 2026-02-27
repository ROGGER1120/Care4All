// Signup page component
// Handles registration for both donors and NGOs.  
// Uses `location.state` to pre‑select userType when redirected.
// Form fields adapt based on type and basic responsiveness is
// provided with Tailwind container and spacing utilities.
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LandingNav from '../components/LandingNav';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup = () => {
  const location = useLocation();
  const [userType, setUserType] = useState('donor');

  // On mount, check if location.state has userType
  useEffect(() => {
    if (location.state?.userType) {
      setUserType(location.state.userType);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50 font-poppins backdrop-blur-sm">
      <div className="w-full px-10 md:px-20 py-4 flex items-center justify-between ">
        
        <Link
          to="/"
          className="text-3xl font-bold text-pink-600 cursor-pointer"
        >
          Care4All
        </Link>
        </div>
      </nav>
      <div className="flex items-center justify-center pt-24 pb-12 px-6">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-xl border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Create Account</h1>

          <div className="flex bg-gray-100 p-1 rounded-full mb-8">
            {['donor', 'ngo'].map((type) => (
              <button 
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-2 rounded-full text-xs font-bold transition uppercase ${
                  userType === type ? 'bg-[#eb008b] text-white' : 'text-gray-500'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <form className="space-y-4">
            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">
                {userType === 'donor' ? 'Full Name' : 'Organization Name'}
              </label>
              <input 
                type="text" 
                placeholder={userType === 'donor' ? "John Doe" : "NGO Foundation"}
                className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b]"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Email Address</label>
              <input type="email" placeholder="email@example.com" className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b]" required />
            </div>

            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b]" required />
            </div>

            <button className="w-full bg-[#eb008b] hover:bg-[#d0007c] text-white py-4 rounded-2xl font-bold text-xs shadow-lg mt-4 uppercase">
              Register as {userType}
            </button>
            <div className="flex items-center justify-center mt-4 text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition">
              <Link
              to="/"><ArrowLeft /></Link>
            </div>

          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account? <a href="/login" className="text-[#eb008b] font-bold hover:underline">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;