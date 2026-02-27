import React from 'react';
import { Heart, ArrowRight, Calendar, Users, Plus } from 'lucide-react';
import DonorNav from '../components/DonorNav';
import Footer from '../components/Footer';

const DonorHome = () => {
  const urgentNeeds = [
    { id: 1, title: "Winter Clothes for 50 Kids", ngo: "HopeNest Orphan Care", progress: 80, tag: "Urgent" },
    { id: 2, title: "Meal for Single Mothers", ngo: "Grace Foundation", progress: 45, tag: "Immediate" },
    { id: 3, title: "School Kits for Village Kids", ngo: "Bright Future NGO", progress: 65, tag: "Urgent" }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800 flex flex-col">
      <DonorNav />
      
      {/* Navbar Spacer */}
      <div className="h-20 flex-none" />

      <main className="flex-grow">
        
        {/* HERO SECTION - Wider Max Width */}
        <section className="py-12 md:py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
                Welcome back, <br className="hidden xl:block" />
                <span className="text-[#eb008b]">Donor!</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                There are several NGOs near you currently requesting assistance. Ready to make another impact today?
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="w-full sm:w-auto bg-[#eb008b] text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition-all duration-300 shadow-xl shadow-pink-200 uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3">
                  <Plus size={20} /> Create New Donation
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute -inset-6 bg-pink-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                  alt="Impact"
                  className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-video lg:aspect-square xl:aspect-video"
                />
              </div>
            </div>

          </div>
        </section>

        {/* URGENT NEEDS - Responsive Grid */}
        <section className="py-20 px-6 sm:px-10 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Urgent Needs Near You</h2>
                <p className="text-gray-500 text-lg mt-2 font-medium">Fulfill these requests for immediate relief.</p>
              </div>
              <button className="text-[#eb008b] font-bold flex items-center gap-2 hover:gap-4 transition-all text-sm uppercase tracking-widest group">
                Browse All Needs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Adjusted Grid for larger screens: 1 col (mobile), 2 cols (tablet), 3 cols (desktop), 4 cols (ultra-wide) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
              {urgentNeeds.map(need => (
                <UrgentCard key={need.id} {...need} />
              ))}
            </div>
          </div>
        </section>

        {/* ENGAGEMENT HUB - Expansive Layout */}
        <section className="py-24 px-6 sm:px-10 lg:px-16 bg-gray-50/50">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Engagement Hub</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Go beyond physical items. Volunteer your time or host a personal milestone celebration.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Card 1 */}
              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10 group hover:shadow-2xl transition-all duration-500">
                <div className="bg-pink-50 p-6 rounded-3xl text-[#eb008b] group-hover:bg-[#eb008b] group-hover:text-white transition-colors duration-500">
                  <Calendar size={48} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">Join an NGO Drive</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">Local volunteering opportunities and community drives in your neighborhood.</p>
                  <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#eb008b] transition-all">
                    View Events
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#eb008b] p-10 md:p-14 rounded-[3.5rem] shadow-xl text-white flex flex-col md:flex-row items-center gap-10 hover:scale-[1.02] transition-transform duration-500">
                <div className="bg-white/20 p-6 rounded-3xl">
                  <Users size={48} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-white">Request a Celebration</h3>
                  <p className="text-pink-100 mb-8 leading-relaxed">Share your joy by hosting a birthday or anniversary at a verified orphanage.</p>
                  <button className="bg-white text-[#eb008b] px-8 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const UrgentCard = ({ title, ngo, progress, tag }) => (
  <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border-b-4 border-b-transparent hover:border-b-[#eb008b]">
    <div className="flex justify-between items-start mb-8">
      <span className="bg-gray-100 text-gray-500 text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-[0.2em] group-hover:bg-pink-50 group-hover:text-[#eb008b] transition-colors">
        {tag}
      </span>
      <Heart size={24} className="text-gray-200 group-hover:text-[#eb008b] transition-colors cursor-pointer fill-transparent group-hover:fill-pink-50" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight flex-grow">{title}</h3>
    <p className="text-sm text-gray-400 mb-8 font-medium italic tracking-wide">by {ngo}</p>

    <div className="w-full bg-gray-50 rounded-full h-3 mb-5 overflow-hidden">
      <div className="bg-[#eb008b] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}></div>
    </div>

    <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
      <span className="text-gray-900">{progress}% <span className="text-gray-400 font-medium">Completed</span></span>
      <button className="text-[#eb008b] font-black hover:underline underline-offset-8 decoration-2">Support Now</button>
    </div>
  </div>
);

export default DonorHome;