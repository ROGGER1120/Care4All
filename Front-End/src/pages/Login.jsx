import React, { useState } from 'react';
import LandingNav from '../components/LandingNav';

const Login = () => {
  const [userType, setUserType] = useState('donor'); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    orgId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = userType === 'donor' 
      ? { email: formData.email, password: formData.password }
      : { orgId: formData.orgId, password: formData.password };
    
    console.log(`Logging in as ${userType}:`, loginData);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <LandingNav />
      <div className="flex items-center justify-center pt-32 pb-12 px-6">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h1>

            <div className="flex bg-gray-100 p-1 rounded-full mb-8">
              {['donor', 'ngo'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all uppercase ${
                    userType === type ? 'bg-[#eb008b] text-white shadow-md' : 'text-gray-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {userType === 'donor' ? (
                <div className="text-left animate-in fade-in duration-300">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="name@example.com"
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                    required
                  />
                </div>
              ) : (
                <div className="text-left animate-in fade-in duration-300">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Organization ID</label>
                  <input 
                    name="orgId"
                    type="text" 
                    placeholder="NGO-XXXX-XXXX"
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                    required
                  />
                </div>
              )}

              <div className="text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Password</label>
                <input 
                  name="password"
                  type="password" 
                  placeholder="••••••••"
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

              <button type="submit" className="w-full bg-[#eb008b] hover:bg-[#d0007c] text-white py-4 rounded-2xl font-bold text-xs transition transform hover:scale-[1.02] shadow-lg mt-2 uppercase">
                Login as {userType}
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