import React from 'react';
import { Pencil, Camera } from 'lucide-react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const NgoProfile = () => {
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
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-10 bg-white overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">My Profile</h2>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-10 shadow-sm max-w-3xl">
              <div className="space-y-6">
                
                <ProfileField label="Email:" value={profileData.email} editable />
                <ProfileField label="Point of Contact (POC) Name:" value={profileData.pocName} editable />
                <ProfileField label="POC Phone Number:" value={profileData.pocPhone} editable />
                <ProfileField label="Location:" value={profileData.location} />
                <ProfileField label="Organization Type:" value={profileData.organizationType} />
                <ProfileField label="Verified on" value={profileData.verifiedOn} />

              </div>
            </div>

            <div className="w-full lg:w-80 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full border-2 border-gray-100 flex items-center justify-center bg-white">
                  <Camera size={32} className="text-gray-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6 leading-tight">
                {profileData.orgName}
              </h3>

              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Verification ID:</p>
                <p className="text-sm font-bold text-gray-700">{profileData.verificationId}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value, editable = false }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
    <label className="text-sm font-bold text-gray-700">{label}</label>
    <div className="md:col-span-2 relative">
      <div className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-600 bg-white flex justify-between items-center transition-all focus-within:border-pink-300">
        <span className="text-sm font-medium">{value}</span>
        {editable && (
          <button className="text-gray-400 hover:text-pink-500 transition-colors">
            <Pencil size={16} />
          </button>
        )}
      </div>
    </div>
  </div>
);

export default NgoProfile;