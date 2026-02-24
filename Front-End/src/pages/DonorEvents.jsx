import React from 'react';
import { Calendar, Users, MapPin, Clock, Plus, ArrowRight } from 'lucide-react';
import DonorNav from '../components/DonorNav';
import Footer from '../components/Footer';

const DonorEvents = () => {
  const myEvents = [
    {
      id: 1,
      title: "Birthday Celebration",
      ngo: "HopeNest Orphan Care",
      date: "March 15, 2026",
      time: "4:00 PM - 6:00 PM",
      status: "Confirmed",
      type: "Personal"
    }
  ];

  const communityEvents = [
    {
      id: 101,
      title: "Community Clothing Drive",
      organizedBy: "Grace Foundation",
      date: "March 20, 2026",
      location: "Central Park, Coimbatore",
      description: "Join us for a massive clothing collection drive for rural communities.",
      type: "NGO Drive"
    },
    {
      id: 102,
      title: "Weekend Teaching Session",
      organizedBy: "Bright Future NGO",
      date: "March 22, 2026",
      location: "Bright Future Center",
      description: "Volunteer to teach basic English and Math to primary school students.",
      type: "Volunteer"
    },
    {
      id: 103,
      title: "Anniversary Lunch",
      organizedBy: "User: Rahul K.",
      date: "March 28, 2026",
      location: "HopeNest Orphan Care",
      description: "Rahul is hosting a special lunch. Join as a volunteer to help serve.",
      type: "User Event"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      <DonorNav />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Events</h1>
            <p className="text-gray-500 font-medium">Join community drives or track your personal celebration requests.</p>
          </div>
          <button className="bg-[#eb008b] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#d0007c] transition-all shadow-lg shadow-pink-200 uppercase text-xs tracking-widest flex items-center gap-2">
            <Plus size={18} /> Request New Event
          </button>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            My Events <span className="text-xs bg-pink-50 text-[#eb008b] px-3 py-1 rounded-full">{myEvents.length}</span>
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {myEvents.map(event => (
              <div key={event.id} className="bg-pink-50/50 border border-pink-100 rounded-[2rem] p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6 text-left w-full md:w-auto">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-[#eb008b]">
                    <Calendar size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    <p className="text-sm font-bold text-[#eb008b]">{event.ngo}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 w-full md:w-auto">
                  <div className="bg-white px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold text-gray-500 border border-pink-100">
                    <Clock size={14} className="text-[#eb008b]" /> {event.date} | {event.time}
                  </div>
                  <div className="bg-[#00a651] text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">
                    {event.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Community Events</h2>
            <div className="flex gap-2">
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Filter:</span>
               <button className="text-[10px] font-bold text-[#eb008b] uppercase tracking-widest underline">All</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityEvents.map(event => (
              <div key={event.id} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all flex flex-col text-left group">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-gray-50 text-gray-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-pink-50 group-hover:text-[#eb008b] transition-colors">
                    {event.type}
                  </span>
                  <Users size={20} className="text-gray-200" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{event.title}</h3>
                <p className="text-sm font-bold text-[#eb008b] mb-4">{event.organizedBy}</p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed italic line-clamp-2">"{event.description}"</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <Calendar size={14} className="text-[#eb008b]" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <MapPin size={14} className="text-[#eb008b]" /> {event.location}
                  </div>
                </div>

                <button className="mt-auto w-full border-2 border-gray-900 text-gray-900 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2">
                  Join Event <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DonorEvents;