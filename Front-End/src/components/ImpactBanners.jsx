import React from 'react';

const banners = [
  {
    title: "Give a Generous Meal",
    subtitle: "Spark a Child's Smile",
    btnText: "GIFT A MEAL",
    img: "banner1.png",
    reverse: false,
    position: "50% 65%" 
  },
  {
    title: "Gift Your Special Moment,",
    subtitle: "Share the Pure Love.",
    btnText: "GIFT YOUR MOMENT",
    img: "banner2.png",
    reverse: true,
    position: "center"
  }
];

const ImpactBanners = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      {banners.map((banner, index) => (
        <div 
          key={index}
          className={`flex flex-col md:flex-row items-center bg-[#FFF0F6] border border-pink-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative ${
            banner.reverse ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="w-full md:w-3/5 h-40 md:h-44 relative">
            <img 
              src={`/src/assets/${banner.img}`} 
              alt={banner.title}
              className="w-full h-full object-cover"
              style={{
                objectPosition: banner.position,
                maskImage: `linear-gradient(${banner.reverse ? 'to left' : 'to right'}, black 60%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(${banner.reverse ? 'to left' : 'to right'}, black 60%, transparent 100%)`
              }}
            />
          </div>

          <div 
            className={`w-full md:w-2/5 p-4 md:p-8 relative z-10 flex flex-col ${
              banner.reverse ? 'text-left items-start' : 'text-right items-end'
            }`}
          >
            <h4 className="text-base font-semibold text-gray-600 mb-1 tracking-tight">
              {banner.title}
            </h4>
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#eb008b] mb-4 leading-tight">
              {banner.subtitle}
            </h2>
            
            <button className="bg-[#eb008b] hover:bg-[#d0007c] text-white px-8 py-2.5 rounded-full font-bold text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-md uppercase">
              {banner.btnText}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactBanners;