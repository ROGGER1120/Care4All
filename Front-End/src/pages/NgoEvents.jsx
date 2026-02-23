import React from 'react';
import { Plus, Calendar, Users, MapPin } from 'lucide-react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const NgoEvents = () => {
  const myEvents = [
    {
      id: 1,
      title: 'Care Connect – Donation Drive',
      time: '10:00 AM – 3:00 PM',
      location: 'Sunshine Orphanage, Bengaluru',
      description: 'A joyful day filled with games, art sessions, storytelling, and food distribution to bring smiles to children.',
      date: '12',
      month: 'March',
      year: '2026'
    }
  ];

  const eventRequests = [
    {
      id: 1,
      type: 'Birthday Celebration',
      requestedBy: 'Rahul Kumar',
      purpose: 'Birthday Celebration with Children',
      date: '14 March 2026',
      kids: '30 kids',
      location: 'Chennai'
    }
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden font-sans text-gray-800">
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-10 bg-white overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">My Events</h2>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold transition-all shadow-md">
              <Plus size={18} /> Add Events
            </button>
          </div>

          <div className="space-y-4 mb-12">
            {myEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-2xl p-6 flex justify-between items-center bg-white shadow-sm">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><span className="font-semibold">Time:</span> {event.time}</p>
                    <p><span className="font-semibold">Location:</span> {event.location}</p>
                    <p><span className="font-semibold">Description:</span> {event.description}</p>
                  </div>
                </div>
                <div className="w-24 h-24 border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center p-2 shrink-0">
                  <span className="text-4xl font-bold text-gray-800 leading-none">{event.date}</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase mt-1">{event.month}</span>
                  <span className="text-[10px] font-bold text-gray-500">{event.year}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">Event Requests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {eventRequests.map((request) => (
              <div key={request.id} className="bg-pink-50/50 border border-pink-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Calendar className="text-pink-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{request.type}</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-700 font-medium">
                    <span className="text-gray-400">Requested by:</span> {request.requestedBy}
                  </p>
                  <p className="text-gray-700 font-medium">
                    <span className="text-gray-400">Purpose:</span> {request.purpose}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/80 border border-gray-100 rounded-xl px-4 py-2 flex items-center gap-2 text-sm text-gray-700 font-semibold shadow-sm">
                    <Calendar size={16} className="text-pink-500" /> {request.date}
                  </div>
                  <div className="bg-white/80 border border-gray-100 rounded-xl px-4 py-2 flex items-center gap-2 text-sm text-gray-700 font-semibold shadow-sm">
                    <Users size={16} className="text-pink-500" /> {request.kids}
                  </div>
                </div>

                <div className="bg-white/80 border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-gray-700 font-semibold shadow-sm">
                  <MapPin size={18} className="text-pink-500" /> Preferred Location: {request.location}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NgoEvents;