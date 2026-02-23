import React from 'react';

const PartnerBanner = () => {
  return (
    <div className="bg-white w-full py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="border border-gray-100 shadow-sm rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="text-left max-w-3xl">
            <h2 className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
              Bridge the gap between your needs and the world's generosity. 
              List your requirements today and <span className="text-[#eb008b] font-semibold">let's make a difference together.</span>
            </h2>
          </div>

          <button className="bg-[#eb008b] hover:bg-[#d0007c] text-white px-10 py-4 rounded-full font-bold text-xs tracking-widest transition-all whitespace-nowrap uppercase">
            PARTNER WITH US
          </button>

        </div>
      </div>
    </div>
  );
};

export default PartnerBanner;