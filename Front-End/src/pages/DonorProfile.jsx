    import React from 'react';
import { Pencil, Camera, Heart, MapPin, Mail, Phone } from 'lucide-react';
import DonorNav from '../components/DonorNav';
import Footer from '../components/Footer';

const DonorProfile = () => {
  const donorData = {
    name: "Sridar",
    email: "sridar.g@example.com",
    phone: "+91 9XXXXXXXXX",
    location: "Coimbatore, Tamil Nadu, India",
    memberSince: "15 Oct 2025",
    totalDonations: 12,
    impactScore: "High",
    preferredCategories: ["Clothes", "Education", "Food"]
  };

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      <DonorNav />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-left">Profile Settings</h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="flex-1 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm w-full">
            <div className="space-y-8">
              
              <div className="text-left border-b border-gray-50 pb-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
                <p className="text-sm text-gray-400 font-medium">Manage your contact details and location.</p>
              </div>

              <ProfileField icon={<UserCircle size={18}/>} label="Full Name" value={donorData.name} editable />
              <ProfileField icon={<Mail size={18}/>} label="Email Address" value={donorData.email} editable />
              <ProfileField icon={<Phone size={18}/>} label="Phone Number" value={donorData.phone} editable />
              <ProfileField icon={<MapPin size={18}/>} label="Primary Location" value={donorData.location} editable />

              <div className="pt-6">
                <button className="bg-[#eb008b] text-white px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#d0007c] transition-all shadow-lg shadow-pink-100">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 space-y-8">
            <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#eb008b] blur-[80px] opacity-20"></div>
              
              <div className="relative mb-6 mx-auto">
                <div className="w-24 h-24 rounded-3xl border-2 border-white/20 flex items-center justify-center bg-white/10 mx-auto">
                  <Camera size={32} className="text-white/60" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1">{donorData.name}</h3>
              <p className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-6">Member Since {donorData.memberSince}</p>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Impact</p>
                  <p className="text-lg font-bold">{donorData.totalDonations}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Level</p>
                  <p className="text-lg font-bold">{donorData.impactScore}</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-[2.5rem] p-8 border border-pink-100 text-left">
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Heart size={16} className="text-[#eb008b]" /> Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {donorData.preferredCategories.map(cat => (
                  <span key={cat} className="bg-white px-4 py-2 rounded-xl text-xs font-bold text-gray-700 shadow-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

const ProfileField = ({ label, value, editable = false }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-left">
    <label className="w-full md:w-48 text-xs font-black text-gray-400 uppercase tracking-widest">
      {label}
    </label>
    <div className="flex-1 relative group">
      <div className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-700 font-semibold text-sm flex justify-between items-center group-hover:border-pink-200 transition-all">
        {value}
        {editable && (
          <button className="text-gray-300 hover:text-[#eb008b] transition-colors">
            <Pencil size={16} />
          </button>
        )}
      </div>
    </div>
  </div>
);

const UserCircle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default DonorProfile;