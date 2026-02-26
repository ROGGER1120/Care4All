import React, { useState } from 'react';
import { Search, MapPin, CheckCircle, ExternalLink, Heart } from 'lucide-react';
import DonorNav from '../components/DonorNav';
import Footer from '../components/Footer';

const NgoDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const ngos = [
    {
      id: 1,
      name: "HopeNest Orphan Care",
      type: "Orphanage",
      location: "Coimbatore, Tamil Nadu",
      impact: "50+ Children",
      description: "Dedicated to providing a nurturing home and quality education to orphaned children since 2015.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Grace Foundation",
      type: "Women Empowerment",
      location: "Chennai, Tamil Nadu",
      impact: "200+ Families",
      description: "Focuses on providing vocational training and healthcare support to single mothers and widows.",
      image: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Bright Future NGO",
      type: "Education",
      location: "Madurai, Tamil Nadu",
      impact: "15 Village Schools",
      description: "Working towards 100% literacy in rural Tamil Nadu by providing stationery and teaching staff.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      <DonorNav />

      <main className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-left mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-4">NGO Directory</h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl font-medium">
            Explore our network of verified organizations. Every NGO listed here has passed a strict verification process for transparency.
          </p>
        </div>

        <div className="relative mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search NGOs by name, type, or location..."
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-50 border border-gray-100 rounded-lg sm:rounded-2xl text-sm focus:outline-none focus:border-[#eb008b] transition-all shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {ngos.map((ngo) => (
            <div key={ngo.id} className="group bg-white border border-gray-100 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                <img 
                  src={ngo.image} 
                  alt={ngo.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#eb008b] text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-widest shadow-sm">
                    {ngo.type}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1 text-left">
                <div className="flex justify-between items-start gap-2 mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight">{ngo.name}</h3>
                  <CheckCircle size={18} className="text-green-500 shrink-0" />
                </div>

                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
                  <MapPin size={12} className="text-[#eb008b]" /> {ngo.location}
                </div>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                  {ngo.description}
                </p>

                <div className="border-t border-gray-50 pt-4 sm:pt-6 mt-auto flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5 sm:mb-1">Impact</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">{ngo.impact}</p>
                  </div>
                  <div className="flex gap-1 sm:gap-2">
                    <button className="p-2 sm:p-3 bg-pink-50 text-[#eb008b] rounded-lg sm:rounded-xl hover:bg-[#eb008b] hover:text-white transition-colors">
                      <Heart size={16} />
                    </button>
                    <button className="flex items-center gap-1 sm:gap-2 bg-gray-900 text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-black transition-all">
                      Visit <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NgoDirectory;