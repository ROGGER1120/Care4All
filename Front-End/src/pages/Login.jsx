import React, { useState } from 'react';
import AuthNav from '../components/Authnav';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen w-full bg-gray-50 font-poppins overflow-hidden flex flex-col">
      <AuthNav />
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="bg-white w-full max-w-md rounded-[2rem] shadow-xl border border-gray-100 p-10">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Please enter your details to sign in</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Email Address</label>
              <input 
                name="email" type="email" placeholder="name@example.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                required 
              />
            </div>

            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Password</label>
              <input 
                name="password" type="password" placeholder="••••••••"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                required 
              />
            </div>

            <div className="text-right">
              <a href="/forgot-password" size="sm" className="text-xs text-[#eb008b] font-medium hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-[#eb008b] hover:bg-[#d0007c] text-white py-4 rounded-2xl font-bold text-xs transition transform hover:scale-[1.01] shadow-lg mt-2 uppercase tracking-widest">
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account? <a href="/signup" className="text-[#eb008b] font-bold hover:underline ml-1">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;