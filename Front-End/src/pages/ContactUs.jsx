import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import LandingNav from '../components/LandingNav';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submission:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <LandingNav />
      
      <div className="flex flex-col items-center justify-center pt-32 pb-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have questions or want to support our cause? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="space-y-4">
            <ContactCard 
              icon={<Mail className="text-[#eb008b]" size={24} />}
              title="Email Address"
              value="abc"
            />
            <ContactCard 
              icon={<Phone className="text-[#eb008b]" size={24} />}
              title="Phone Number"
              value="+91 9876543210"
            />
            <ContactCard 
              icon={<MapPin className="text-[#eb008b]" size={24} />}
              title="Location"
              value="abc"
            />
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="text-left">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Enter your name"
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                    required
                  />
                </div>
                <div className="text-left">
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
              </div>

              <div className="text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  placeholder="How can we help?"
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition"
                  required
                />
              </div>

              <div className="text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#eb008b] transition resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#eb008b] hover:bg-[#d0007c] text-white py-4 rounded-2xl font-bold text-xs transition transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
    <div className="bg-pink-50 p-4 rounded-2xl">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-sm font-semibold text-gray-700">{value}</p>
    </div>
  </div>
);

export default ContactUsPage;