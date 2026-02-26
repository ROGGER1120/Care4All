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

      <main className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 lg:mb-12 text-left">Profile Settings</h1>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
          
          <div className="w-full lg:flex-1 bg-white border border-gray-100 rounded-lg sm:rounded-2xl lg:rounded-[2.5rem] p-4 sm:p-6 lg:p-10 shadow-sm">
            <div className="space-y-6 sm:space-y-8">
              
              <div className="text-left border-b border-gray-50 pb-3 sm:pb-4 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">Personal Information</h2>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">Manage your contact details and location.</p>
              </div>

              <ProfileField icon={<UserCircle size={16}/>} label="Full Name" value={donorData.name} editable />
              <ProfileField icon={<Mail size={16}/>} label="Email Address" value={donorData.email} editable />
              <ProfileField icon={<Phone size={16}/>} label="Phone Number" value={donorData.phone} editable />
              <ProfileField icon={<MapPin size={16}/>} label="Primary Location" value={donorData.location} editable />

              <div className="pt-4 sm:pt-6">
                <button className="w-full sm:w-auto bg-[#eb008b] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#d0007c] transition-all shadow-lg shadow-pink-100">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 space-y-6 sm:space-y-8">
            <div className="bg-gray-900 rounded-lg sm:rounded-2xl lg:rounded-[2.5rem] p-6 sm:p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#eb008b] blur-[80px] opacity-20"></div>
              
              <div className="relative mb-4 sm:mb-6 mx-auto">
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl sm:rounded-3xl border-2 border-white/20 flex items-center justify-center bg-white/10 mx-auto">
                  <Camera size={24} className="text-white/60 sm:w-8 sm:h-8" />
                </div>
              </div>

              <h3 className="text-lg sm:text-2xl font-bold mb-0.5 sm:mb-1">{donorData.name}</h3>
              <p className="text-pink-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">Member Since {donorData.memberSince}</p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-white/10 pt-4 sm:pt-6">
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5 sm:mb-1">Impact</p>
                  <p className="text-base sm:text-lg font-bold">{donorData.totalDonations}</p>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5 sm:mb-1">Level</p>
                  <p className="text-base sm:text-lg font-bold">{donorData.impactScore}</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-lg sm:rounded-2xl lg:rounded-[2.5rem] p-6 sm:p-8 border border-pink-100 text-left">
              <h4 className="text-xs sm:text-sm font-black text-gray-400 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
                <Heart size={14} className="text-[#eb008b] sm:w-4 sm:h-4" /> Interests
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {donorData.preferredCategories.map(cat => (
                  <span key={cat} className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold text-gray-700 shadow-sm">
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
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-8 text-left">
    <label className="w-full sm:w-40 lg:w-48 text-xs font-black text-gray-400 uppercase tracking-widest">
      {label}
    </label>
    <div className="flex-1 relative group">
      <div className="w-full px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 bg-gray-50 border border-gray-100 rounded-lg sm:rounded-xl lg:rounded-2xl text-gray-700 font-semibold text-xs sm:text-sm flex justify-between items-center group-hover:border-pink-200 transition-all">
        <span className="truncate">{value}</span>
        {editable && (
          <button className="text-gray-300 hover:text-[#eb008b] transition-colors shrink-0 ml-2">
            <Pencil size={14} className="sm:w-4 sm:h-4" />
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