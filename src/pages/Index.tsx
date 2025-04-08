
import React from 'react';
import Navbar from '../components/Navbar';
import DashboardOverview from '../components/DashboardOverview';
import AccountSummary from '../components/AccountSummary';
import TransactionTable from '../components/TransactionTable';
import RecentActivity from '../components/RecentActivity';

const Index = () => {
  return (
    <div className="min-h-screen bg-finance-gray">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Financial Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back. Here's an overview of your finances for April 2025.
          </p>
        </div>
        
        <div className="mb-8">
          <DashboardOverview />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <TransactionTable />
          </div>
          <div>
            <AccountSummary />
          </div>
        </div>
        
        <div className="mb-8">
          <RecentActivity />
        </div>
      </main>
    </div>
  );
};

export default Index;
