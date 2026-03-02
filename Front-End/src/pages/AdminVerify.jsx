import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const AdminVerify = () => {
  const pendingList = [
    { id: 1, name: "Unity Welfare Trust", location: "Coimbatore", submitted: "2 hours ago" },
    { id: 2, name: "Green Earth NGO", location: "Chennai", submitted: "5 hours ago" },
    { id: 3, name: "Education First", location: "Madurai", submitted: "Yesterday" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-poppins">
      <AdminSidebar />
      <main className="flex-1 ml-72 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black text-gray-900">Verification Queue</h1>
          <button className="text-xs font-bold text-[#eb008b] hover:underline uppercase tracking-widest">
            Refresh
          </button>
        </header>

        <div className="space-y-4">
          {pendingList.map((ngo) => (
            <div key={ngo.id} className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center font-bold text-gray-400 group-hover:text-[#eb008b] transition-colors">
                  {ngo.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{ngo.name}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ngo.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase">{ngo.submitted}</span>
                <button className="bg-white border border-gray-100 p-3 rounded-xl text-gray-400 hover:text-[#eb008b] hover:border-[#eb008b] transition-all">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminVerify;
