import React from 'react';
import { UserCircle, Building, CheckCircle2 } from 'lucide-react';

const JoinCommunity = () => {
  const donorFeatures = [
    "Browse verified organizations and their needs",
    "Donate food, clothes, education materials & more",
    "Support special events and celebrations"
  ];

  const ngoFeatures = [
    "Quick verification process with admin support",
    "Post your urgent needs and requirements",
    "Create events and get community support",
    "Receive donations directly from donors"
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-center font-poppins">
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Join Our Community</h2>
      <p className="text-gray-500 mb-12">Whether you want to give or receive help, Care4All makes it easy and secure</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        
        <div className="bg-white border border-gray-200 p-10 rounded-3xl shadow-sm text-left flex flex-col h-full hover:border-pink-100 transition-colors">
          <div className="text-[#eb008b] mb-4">
            <UserCircle size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">For Donors</h3>
          <p className="text-gray-600 text-sm mb-6">Make a difference by donating to verified organizations:</p>
          
          <ul className="space-y-3 mb-8 text-sm text-gray-500">
            {donorFeatures.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#eb008b] mt-0.5 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          
          <button className="mt-auto w-full bg-[#eb008b] text-white py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-[#d0007c] transition shadow-md">
            Start Donating
          </button>
        </div>

        <div className="bg-white border border-gray-200 p-10 rounded-3xl shadow-sm text-left flex flex-col h-full hover:border-pink-100 transition-colors">
          <div className="text-[#eb008b] mb-4">
            <Building size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">For NGOs/Orphanages</h3>
          <p className="text-gray-600 text-sm mb-6">Get the support your organization needs:</p>
          
          <ul className="space-y-3 mb-8 text-sm text-gray-500">
            {ngoFeatures.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#eb008b] mt-0.5 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          
          <button className="mt-auto w-full bg-[#eb008b] text-white py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-[#d0007c] transition shadow-md">
            Register Organization
          </button>
        </div>

      </div>
    </section>
  );
};

export default JoinCommunity;