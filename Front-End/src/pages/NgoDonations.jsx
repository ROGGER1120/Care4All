import React from 'react';
import { Filter } from 'lucide-react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const NgoDonations = () => {
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
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-12 bg-white overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Available Donations
            </h2>
            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors uppercase">
              <Filter size={16} /> Filter
            </button>
          </div>

          <div className="space-y-6 max-w-5xl">
            {availableDonations.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <span className="bg-blue-100 text-blue-500 text-[10px] font-black px-3 py-1 rounded-md ">
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm font-medium mb-4">From: {item.from}</p>
                <p className="text-gray-400 text-sm font-medium mb-6">Qty: {item.qty}</p>
                <div className="flex gap-3">
                  <button className="bg-[#00a651] hover:bg-[#008f45] text-white px-8 py-2 rounded-lg text-sm font-bold transition-all active:scale-95">
                    Accept
                  </button>
                  <button className="border border-gray-300 text-gray-600 px-8 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all">
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