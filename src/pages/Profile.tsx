
import React from 'react';
import Navbar from '../components/Navbar';
import ProfileContent from '../components/ProfileContent';

const Profile = () => {
  return (
    <div className="min-h-screen bg-finance-gray">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and account details
          </p>
        </div>
        
        <ProfileContent />
      </main>
    </div>
  );
};

export default Profile;
