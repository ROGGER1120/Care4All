import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const NgoDonations = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const availableDonations = [
    {
      id: 1,
      title: 'Gently used Winter Clothes available',
      from: 'Matthew Dane',
      qty: '20 pieces',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Educational Books for Primary Students',
      from: 'Priya Sharma',
      qty: '20 pieces',
      status: 'Available'
    }
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden font-sans text-gray-800">
      <Topbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isMobileOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 p-4 sm:p-8 lg:p-12 bg-white overflow-y-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Available Donations
            </h2>
            <button className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2 sm:py-1.5 border border-gray-300 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors uppercase">
              <Filter size={14} /> Filter
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-5xl">
            {availableDonations.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-2 sm:mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">{item.title}</h3>
                  <span className="bg-blue-100 text-blue-500 text-[9px] sm:text-[10px] font-black px-2.5 sm:px-3 py-1 rounded-md shrink-0">
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium mb-2 ">From: {item.from}</p>
                <p className="text-gray-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">Qty: {item.qty}</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button className="bg-[#00a651] hover:bg-[#008f45] text-white px-4 sm:px-8 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all active:scale-95">
                    Accept
                  </button>
                  <button className="border border-gray-300 text-gray-600 px-4 sm:px-8 py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-gray-50 transition-all">
                    Contact Donor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NgoDonations;