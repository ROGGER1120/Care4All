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
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      <DonorNav />

      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 text-left">
          <div className="flex-1">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Welcome back, <span className="text-[#eb008b]">Donor!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              There are several NGOs near you currently requesting assistance. Ready to make another impact today?
            </p>
            <div className="flex gap-4">
              <button className="bg-[#eb008b] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#d0007c] transition-all shadow-lg shadow-pink-200 uppercase text-xs tracking-widest flex items-center gap-2">
                <Plus size={18} /> Create New Donation
              </button>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                alt="Children smiling" 
                className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10 text-left">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Urgent Needs Near You</h2>
              <p className="text-gray-500 font-medium">Fulfill these requests to provide immediate relief.</p>
            </div>
            <button className="text-[#eb008b] font-bold flex items-center gap-2 hover:underline text-sm uppercase tracking-wider">
              Browse All Needs <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {urgentNeeds.map(need => (
              <UrgentCard key={need.id} {...need} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Engagement Hub</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Go beyond physical items. Volunteer your time or host a personal milestone celebration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-pink-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="bg-pink-100 p-4 rounded-2xl mb-6 text-[#eb008b] group-hover:scale-110 transition-transform">
                <Calendar size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Join an NGO Drive</h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Find weekend volunteering opportunities, plantation drives, or teaching sessions in your local community.
              </p>
              <button className="mt-auto bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all">
                View Event Calendar
              </button>
            </div>

            <div className="bg-[#eb008b] p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <div className="bg-white/20 p-4 rounded-2xl mb-6">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Request a Celebration</h3>
              <p className="text-pink-100 mb-8 text-sm leading-relaxed">
                Share your joy by requesting a birthday or anniversary celebration slot with children at verified orphanages.
              </p>
              <button className="mt-auto bg-white text-[#eb008b] px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-pink-50 transition-all">
                Book a Slot
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const UrgentCard = ({ title, ngo, progress, tag }) => (
  <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group text-left relative overflow-hidden">
    <div className="flex justify-between items-start mb-6">
      <span className="bg-pink-100 text-[#eb008b] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
        {tag}
      </span>
      <Heart size={20} className="text-gray-300 group-hover:text-[#eb008b] transition-colors cursor-pointer" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2 leading-snug">{title}</h3>
    <p className="text-sm text-gray-400 mb-8 font-medium italic">{ngo}</p>
    
    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-3 overflow-hidden">
      <div
        className="bg-[#eb008b] h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>

    <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
      <span>{progress}% Completed</span>
      <button className="text-[#eb008b] hover:text-[#d0007c] font-black underline underline-offset-4">
        Support Now
      </button>
    </div>
  </div>
);

export default DonorHome;