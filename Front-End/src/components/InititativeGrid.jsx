import React from 'react';

const initiatives = [
  { 
    id: 1, 
    title: "Nourishing Lives", 
    description: "Providing daily meals to children.", 
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Winter Warmth", 
    description: "Distributing sweaters and blankets.", 
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "School Essentials", 
    description: "Gifting kits for a better future.", 
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
  },
];

const InitiativesGrid = () => {
  return (
    <section className="bg-pink-50 py-16 px-6 w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-12 tracking-tight">
        Prioritize Your Impact: Live Initiatives
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {initiatives.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-8 text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              <div className="mt-4 w-10 h-1.5 bg-[#eb008b] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InitiativesGrid;