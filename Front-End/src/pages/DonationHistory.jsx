import React from 'react';
import { Package, CheckCircle2, Clock, Truck, ArrowUpRight, Heart } from 'lucide-react';
import DonorNav from '../components/DonorNav';
import Footer from '../components/Footer';

const DonationHistory = () => {
  const historyData = [
    {
      id: "DON-9921",
      item: "15 Winter Sweaters",
      ngo: "HopeNest Orphan Care",
      date: "Feb 12, 2026",
      status: "Delivered",
      color: "text-green-500 bg-green-50"
    },
    {
      id: "DON-8842",
      item: "Primary School Textbooks",
      ngo: "Bright Future NGO",
      date: "Jan 28, 2026",
      status: "In Transit",
      color: "text-blue-500 bg-blue-50"
    },
    {
      id: "DON-7710",
      item: "Monthly Ration Kit",
      ngo: "Grace Foundation",
      date: "Jan 15, 2026",
      status: "Accepted",
      color: "text-pink-500 bg-pink-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      <DonorNav />

      <main className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2">Donation History</h1>
            <p className="text-sm sm:text-base text-gray-500 font-medium">Track your impact and the journey of your contributions.</p>
          </div>
          <div className="bg-pink-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-2xl border border-pink-100 text-left shrink-0">
            <p className="text-[10px] sm:text-xs font-bold text-pink-600 uppercase tracking-widest mb-0.5 sm:mb-1">Total Impact</p>
            <p className="text-lg sm:text-2xl font-black text-gray-800">12 Donations</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {historyData.map((donation) => (
            <div 
              key={donation.id} 
              className="group border border-gray-100 rounded-lg sm:rounded-2xl lg:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 bg-white hover:shadow-xl hover:border-pink-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6"
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-6 text-left flex-1">
                <div className={`p-2.5 sm:p-4 rounded-lg sm:rounded-2xl shrink-0 ${donation.color}`}>
                  <Package size={20} className="sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">{donation.item}</h3>
                    <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-tighter bg-gray-50 px-2 py-0.5 rounded border border-gray-100 w-fit">
                      {donation.id}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#eb008b] mb-1">{donation.ngo}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-widest">{donation.date}</p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 sm:gap-4 border-t md:border-t-0 pt-4 sm:pt-6 md:pt-0 shrink-0">
                <div className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-widest whitespace-nowrap ${donation.color}`}>
                  {donation.status === "Delivered" && <CheckCircle2 size={12} className="sm:w-3.5 sm:h-3.5" />}
                  {donation.status === "In Transit" && <Truck size={12} className="sm:w-3.5 sm:h-3.5" />}
                  {donation.status === "Accepted" && <Clock size={12} className="sm:w-3.5 sm:h-3.5" />}
                  {donation.status}
                </div>
                <button className="text-gray-400 hover:text-[#eb008b] transition-colors flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 duration-300">
                  View <ArrowUpRight size={12} className="sm:w-3.5 sm:h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center border-t border-gray-100 pt-12 sm:pt-16">
          <div className="bg-gray-50 inline-flex p-4 sm:p-6 rounded-full mb-4 sm:mb-6">
            <Heart size={32} className="text-[#eb008b] sm:w-10 sm:h-10" fill="#eb008b" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Every donation counts.</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed px-4">
            Your consistent support helps NGOs provide essential services to those who need them most. Thank you for being a part of Care4All.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonationHistory;