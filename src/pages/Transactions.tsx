
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TransactionTable from '../components/TransactionTable';
import { Button } from '@/components/ui/button';
import TransactionForm from '../components/TransactionForm';

const Transactions = () => {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div className="min-h-screen bg-finance-gray">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Transactions</h1>
            <p className="text-muted-foreground">
              View, filter, and manage all your financial transactions
            </p>
          </div>
          <Button onClick={() => setShowForm(true)}>
            Add Transaction
          </Button>
        </div>
        
        {showForm && <TransactionForm onClose={() => setShowForm(false)} />}
        
        <div className="mb-8">
          <TransactionTable showFilters={true} showPagination={true} />
        </div>
      </main>
    </div>
  );
};

export default Transactions;
