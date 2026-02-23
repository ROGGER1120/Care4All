import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Donor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      name: "Hope Orphanage",
      role: "NGO",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      name: "David Chen",
      role: "Volunteer",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    }
  ];

  return (
    <section className="bg-[#FFF0F6] py-20 px-6 w-full">
      <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-16 font-poppins">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-3xl border border-pink-100 shadow-sm p-8 flex flex-col hover:shadow-md transition-shadow">
            <div className="text-[#eb008b] mb-4">
              <Quote size={32} fill="currentColor" className="opacity-20" />
            </div>
            <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
            <div className="mt-auto flex items-center gap-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center font-bold text-[#eb008b]">
                {review.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
                <span className="text-xs text-[#eb008b] font-medium">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;