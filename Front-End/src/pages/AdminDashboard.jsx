import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Heart, 
  TrendingUp, 
  ArrowUpRight, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,284', icon: <Users size={24} />, trend: '+12%', color: 'blue' },
    { label: 'Verified NGOs', value: '156', icon: <ShieldCheck size={24} />, trend: '+5%', color: 'green' },
    { label: 'Lives Impacted', value: '45.2K', icon: <Heart size={24} />, trend: '+18%', color: 'pink' },
    { label: 'Active Needs', value: '892', icon: <TrendingUp size={24} />, trend: '+24%', color: 'orange' },
  ];

  const pendingApprovals = [
    { id: 1, name: "Unity Welfare Trust", location: "Coimbatore", date: "2 hours ago", type: "Health" },
    { id: 2, name: "Green Earth NGO", location: "Chennai", date: "5 hours ago", type: "Environment" },
    { id: 3, name: "Education First", location: "Madurai", date: "Yesterday", type: "Education" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-poppins">
      <AdminSidebar />
      
      <main className="flex-1 ml-72 p-10">
        <header className="flex justify-between items-end mb-10">
          <div className="text-left">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">System Overview</p>
            <h1 className="text-4xl font-black text-gray-900">Dashboard</h1>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">System Status: Optimal</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color === 'pink' ? '[#eb008b]' : stat.color + '-500'}`}>
                  {stat.icon}
                </div>
                <span className="flex items-center gap-1 text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                  {stat.trend} <ArrowUpRight size={12} />
                </span>
              </div>
              <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter flex items-center gap-3">
                <Clock size={20} className="text-[#eb008b]" /> Pending Verification
              </h2>
              <button className="text-xs font-bold text-[#eb008b] hover:underline uppercase tracking-widest">View All Queue</button>
            </div>
            
            <div className="space-y-4">
              {pendingApprovals.map((ngo) => (
                <div key={ngo.id} className="group flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-transparent hover:border-pink-100 hover:bg-white transition-all">
                  <div className="flex items-center gap-5 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center font-bold text-gray-400 group-hover:text-[#eb008b] transition-colors">
                      {ngo.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{ngo.name}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        {ngo.type} • {ngo.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">{ngo.date}</span>
                    <button className="bg-white border border-gray-100 p-3 rounded-xl text-gray-400 hover:text-[#eb008b] hover:border-[#eb008b] transition-all">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#eb008b] blur-[80px] opacity-30"></div>
            <div className="relative z-10 text-left">
              <h3 className="text-2xl font-black mb-4 leading-tight">Platform Safety Guidelines</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Always ensure the "Registration Certificate" and "Trust Deed" are verified before approving an NGO. Check for official government stamps.
              </p>
              <div className="space-y-4">
                <SafetyTip text="Verify 80G Tax Exemption" />
                <SafetyTip text="Cross-check physical address" />
                <SafetyTip text="Validate phone numbers" />
              </div>
              <button className="w-full mt-10 py-4 bg-[#eb008b] rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#d0007c] transition-all">
                Read Admin Handbook
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SafetyTip = ({ text }) => (
  <div className="flex items-center gap-3 text-xs font-bold text-gray-300">
    <div className="w-1.5 h-1.5 rounded-full bg-[#eb008b]"></div>
    {text}
  </div>
);

export default AdminDashboard;