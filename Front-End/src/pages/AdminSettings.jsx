import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

const AdminSettings = () => {
  // actual settings state
  const [settings, setSettings] = useState([
    { id: 1, label: 'Require NGO verification', enabled: true },
    { id: 2, label: 'Email notifications', enabled: false },
    { id: 3, label: 'Maintenance mode', enabled: false },
  ]);

  const toggleSetting = (id) => {
    setSettings((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, enabled: !s.enabled } : s
      )
    );
  };

  const handleSave = () => {
    // this is where you'd post to an API in real app
    console.log('Saved settings', settings);
    alert('Settings saved!');
  };

  const resetDefaults = () => {
    setSettings([
      { id: 1, label: 'Require NGO verification', enabled: true },
      { id: 2, label: 'Email notifications', enabled: false },
      { id: 3, label: 'Maintenance mode', enabled: false },
    ]);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-poppins">
      <AdminSidebar />
      <main className="flex-1 ml-72 p-10">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-gray-900">System Settings</h1>
        </header>

        <div className="space-y-6 max-w-xl">
          {settings.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between bg-white p-6 rounded-3xl border border-gray-100">
              <p className="font-bold text-gray-800">{setting.label}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleSetting(setting.id)}
                  className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none ${
                    setting.enabled ? 'bg-[#eb008b]' : 'bg-[#eb008b]/50'
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-6 w-6 bg-white rounded-full shadow transform transition-transform ${
                      setting.enabled ? 'translate-x-full' : ''
                    }`}
                  />
                  <span className="sr-only">Toggle</span>
                </button>
                <span className="text-sm font-medium text-gray-700">
                  {setting.enabled ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-[#eb008b] text-white font-bold rounded-2xl hover:bg-[#d0007c] transition"
          >
            Save Changes
          </button>
          <button
            onClick={resetDefaults}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition"
          >
            Reset to Defaults
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
