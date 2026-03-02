import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

const AdminUsers = () => {
  // static user list with a bit more detail to simulate a real dataset
  const [users] = useState([
    { id: 1, name: 'Ramesh Kumar', email: 'ramesh@example.com', role: 'Donor', joined: '2023-02-14' },
    { id: 2, name: 'Anita Sharma', email: 'anita@example.com', role: 'NGO Admin', joined: '2022-11-03' },
    { id: 3, name: 'Vikram Singh', email: 'vikram@example.com', role: 'Donor', joined: '2024-01-21' },
    { id: 4, name: 'Pooja Patel', email: 'pooja@example.com', role: 'Donor', joined: '2023-08-09' },
    { id: 5, name: 'Suresh Mehta', email: 'suresh@example.com', role: 'NGO Admin', joined: '2024-02-10' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleView = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-poppins">
      <AdminSidebar />
      <main className="flex-1 ml-72 p-10 font-sans">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-gray-900">User Management</h1>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100">
            <thead>
              <tr className="text-left text-xs font-bold text-gray-500 uppercase tracking-widest">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleView(user)}
                      className="text-xs text-[#eb008b] font-bold hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showModal && selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">{selectedUser.name}</h2>
              <p className="text-sm text-gray-600">Email: {selectedUser.email}</p>
              <p className="text-sm text-gray-600">Role: {selectedUser.role}</p>
              <p className="text-sm text-gray-600">Joined: {selectedUser.joined}</p>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-[#eb008b] text-white rounded-2xl font-bold hover:bg-[#d0007c]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminUsers;
