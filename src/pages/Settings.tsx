
import React from 'react';
import Navbar from '../components/Navbar';
import SettingsContent from '../components/SettingsContent';

const Settings = () => {
  return (
    <div className="min-h-screen bg-finance-gray">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Customize your account and application preferences
          </p>
        </div>
        
        <SettingsContent />
      </main>
    </div>
  );
};

export default Settings;
