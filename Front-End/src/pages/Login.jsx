import React, { useState } from 'react';
import LandingNav from '../components/LandingNav';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The backend will check the email and determine if it's a Donor or NGO
    console.log("Attempting login with:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <LandingNav />
      <div className="flex items-center justify-center pt-32 pb-12 px-6">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm mb-8">Please enter your details to sign in</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">
                  Email Address
                </label>
                <input 
                  name="email"
                  type="email" 
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                  required
                />
              </div>

              <div className="text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">
                  Password
                </label>
                <input 
                  name="password"
                  type="password" 
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                  required
                />
              </div>

              <div className="text-right">
                <a href="/forgot-password" size="sm" className="text-xs text-[#eb008b] font-medium hover:underline">
                  Forgot password?
                </a>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#eb008b] hover:bg-[#d0007c] text-white py-4 rounded-2xl font-bold text-xs transition transform hover:scale-[1.02] shadow-lg mt-2 uppercase"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 text-sm text-gray-500">
              Don't have an account? <a href="/signup" className="text-[#eb008b] font-bold hover:underline">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;