import React, { useState } from 'react';
import { Search, Filter, MapPin, Package, AlertCircle } from 'lucide-react';
import DonorNav from '../components/DonorNav';
import Footer from '../components/Footer';

const Needs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const allNeeds = [
    {
      id: 1,
      title: "Winter Clothes for 50 Kids",
      ngo: "HopeNest Orphan Care",
      category: "Clothes",
      location: "Coimbatore",
      urgency: "High",
      description: "Looking for warm sweaters, jackets, and blankets for children aged 5-12.",
      progress: 80
    },
    {
      id: 2,
      title: "Monthly Grocery Kits",
      ngo: "Grace Foundation",
      category: "Food",
      location: "Chennai",
      urgency: "Medium",
      description: "Requirement for rice, pulses, oil, and basic spices for 20 families.",
      progress: 45
    },
    {
      id: 3,
      title: "Stationery for Primary School",
      ngo: "Bright Future NGO",
      category: "Education",
      location: "Madurai",
      urgency: "High",
      description: "Notebooks, pens, pencils, and school bags needed for the upcoming term.",
      progress: 65
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      <DonorNav />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Browse Needs</h1>
          <p className="text-gray-500 max-w-2xl font-medium">
            Discover real-time requirements from verified NGOs. You can filter by category or search for specific items.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search for items (e.g., clothes, books...)"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#eb008b] transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 border border-gray-100 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-all uppercase text-xs tracking-widest">
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNeeds.map((need) => (
            <div key={need.id} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all flex flex-col group text-left">
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                  need.urgency === 'High' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'
                }`}>
                  {need.urgency} Urgency
                </span>
                <Package className="text-gray-200 group-hover:text-[#eb008b] transition-colors" size={24} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{need.title}</h3>
              <p className="text-sm font-bold text-[#eb008b] mb-4">{need.ngo}</p>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                "{need.description}"
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <MapPin size={14} className="text-[#eb008b]" /> {need.location}
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#eb008b] h-full rounded-full" style={{ width: `${need.progress}%` }}></div>
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  {need.progress}% Fulfilled
                </p>
              </div>

              <button className="mt-auto w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95">
                Commit to Donate
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-pink-50 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 text-left">
          <div className="bg-white p-4 rounded-2xl shadow-sm text-[#eb008b]">
            <AlertCircle size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-1">Can't find what you want to give?</h4>
            <p className="text-gray-500 text-sm font-medium">You can create a custom donation post and let NGOs find you.</p>
          </div>
          <button className="md:ml-auto bg-[#eb008b] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#d0007c] transition-all whitespace-nowrap">
            Post Custom Donation
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Needs;