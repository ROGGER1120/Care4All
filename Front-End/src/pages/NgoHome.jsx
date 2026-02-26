import React, { useState } from 'react';
import { Bell, History, Lock, Plus, MessageCircle } from 'lucide-react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const NgoHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { label: 'Number of Requests', value: '06', icon: <Bell size={20} /> },
    { label: 'Open Request', value: '05', icon: <History size={20} /> },
    { label: 'Closed Request', value: '01', icon: <Lock size={20} /> },
  ];

  const postedNeeds = [
    {
      id: 1,
      title: 'Winter Clothes for Children',
      description: 'Need warm clothes for 50 children',
      tags: [{ text: 'Urgent', color: 'bg-pink-400' }, { text: 'Active', color: 'bg-green-400' }],
      progress: 80,
    },
    {
      id: 2,
      title: 'Food For 50 Children',
      description: 'Need a meal for all children in this home',
      tags: [{ text: 'Active', color: 'bg-green-400' }],
      progress: 40,
    }
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden font-sans text-gray-800">
      <Topbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isMobileOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 p-4 sm:p-8 lg:p-12 relative overflow-y-auto bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-col lg:flex-row lg:justify-between lg:items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gray-50 p-3 rounded-full text-gray-500 border border-gray-100 mb-3 sm:mb-3 lg:mb-0">
                  {stat.icon}
                </div>
                <div className="text-left sm:text-left lg:text-right">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-none">{stat.value}</div>
                  <div className="text-gray-400 font-medium mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Posted Needs</h2>
            <button className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-bold shadow-lg shadow-pink-100">
              <Plus size={16} strokeWidth={3} /> Post New Need
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8 pb-10">
            {postedNeeds.map((need) => (
              <div key={need.id} className="border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">{need.title}</h3>
                      <div className="flex gap-2 flex-wrap">
                        {need.tags.map(tag => (
                          <span key={tag.text} className={`text-[10px] px-2 sm:px-2.5 py-1 rounded-md uppercase font-black text-white ${tag.color}`}>
                            {tag.text}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg">{need.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button className="px-4 sm:px-8 py-2 border-2 border-gray-800 rounded-xl text-xs sm:text-sm font-bold hover:bg-gray-800 hover:text-white transition-all">Close</button>
                    <button className="px-4 sm:px-8 py-2 border-2 border-pink-400 text-pink-500 rounded-xl text-xs sm:text-sm font-bold hover:bg-pink-50 transition-all">Delete</button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 lg:mt-12 w-full bg-gray-100 rounded-full h-3 sm:h-4 overflow-hidden">
                  <div className="bg-gray-400 h-full rounded-full" style={{ width: `${need.progress}%` }} />
                </div>
              </div>
            ))}
          </div>

          
        </main>
      </div>
    </div>
  );
};

export default NgoHome;