import React from 'react';
import { Pencil, Camera } from 'lucide-react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const NgoProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileData = {
    email: "contact@hopenestfoundation.org",
    pocName: "Anita Joseph",
    pocPhone: "+91 9876543210",
    location: "Chennai, Tamil Nadu, India",
    organizationType: "Orphanage",
    verifiedOn: "20 Jan 2026",
    orgName: "HopeNest Orphan Care",
    verificationId: "NGO-IND-2026-01458"
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden font-sans text-gray-800">
      <Topbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isMobileOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-10 bg-white overflow-y-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-6 sm:mb-8">My Profile</h2>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
            <div className="w-full lg:flex-1 bg-white border border-gray-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-10 shadow-sm lg:max-w-3xl">
              <div className="space-y-4 sm:space-y-6">
                
                <ProfileField label="Email:" value={profileData.email} editable />
                <ProfileField label="Point of Contact (POC) Name:" value={profileData.pocName} editable />
                <ProfileField label="POC Phone Number:" value={profileData.pocPhone} editable />
                <ProfileField label="Location:" value={profileData.location} />
                <ProfileField label="Organization Type:" value={profileData.organizationType} />
                <ProfileField label="Verified on" value={profileData.verifiedOn} />

              </div>
            </div>

            <div className="w-full lg:w-80 bg-white border border-gray-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm flex flex-col items-center text-center">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-2 border-gray-100 flex items-center justify-center bg-white">
                  <Camera size={24} className="text-gray-400" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                {profileData.orgName}
              </h3>

              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Verification ID:</p>
                <p className="text-xs sm:text-sm font-bold text-gray-700 break-all">{profileData.verificationId}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value, editable = false }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start sm:items-center gap-2 sm:gap-4">
    <label className="text-xs sm:text-sm font-bold text-gray-700">{label}</label>
    <div className="sm:col-span-1 lg:col-span-2 relative w-full">
      <div className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl text-gray-600 bg-white flex justify-between items-center transition-all focus-within:border-pink-300">
        <span className="text-xs sm:text-sm font-medium break-word">{value}</span>
        {editable && (
          <button className="text-gray-400 hover:text-pink-500 transition-colors shrink-0 ml-2">
            <Pencil size={14} />
          </button>
        )}
      </div>
    </div>
  </div>
);

export default NgoProfile;