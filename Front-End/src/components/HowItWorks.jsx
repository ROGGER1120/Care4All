import React from 'react';
import { Building2, ClipboardList, Users2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Building2 size={32} strokeWidth={1.5} />, 
      title: "Organizations Register",
      desc: "Orphanages and NGOs sign up with their legal documentation and get verified by our admin team to ensure authenticity."
    },
    {
      icon: <ClipboardList size={32} strokeWidth={1.5} />, 
      title: "Post their needs",
      desc: "Verified organizations share their requirements - food, clothes, educational materials, and even special events they're planning."
    },
    {
      icon: <Users2 size={32} strokeWidth={1.5} />,
      title: "Donors Help",
      desc: "Generous people like you browse needs, donate items directly, and track the impact you're making in real-time."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12 font-poppins">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm text-left hover:border-pink-200 transition-colors">
            <div className="mb-4 text-[#eb008b]">{step.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;