import React from 'react';
import AdminSidebar from '../components/AdminSidebar';

const AdminSupport = () => {
  const tickets = [
    { id: 101, subject: 'Login issue', user: 'ramesh@example.com', status: 'Open' },
    { id: 102, subject: 'Donation not reflected', user: 'anita@example.com', status: 'Closed' },
    { id: 103, subject: 'NGO verification query', user: 'vikram@example.com', status: 'Open' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-poppins">
      <AdminSidebar />
      <main className="flex-1 ml-72 p-10">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-gray-900">Support Tickets</h1>
        </header>

        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-md transition-all">
              <div>
                <p className="font-bold text-gray-800">#{ticket.id} – {ticket.subject}</p>
                <p className="text-xs text-gray-500">{ticket.user}</p>
              </div>
              <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                ticket.status === 'Open' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
              }`}>{ticket.status}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminSupport;
