
import React from 'react';
import { 
  Wallet,
  CreditCard,
  Building,
  Plus
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Account {
  id: string;
  name: string;
  type: 'bank' | 'credit' | 'investment';
  balance: number;
  currency: string;
}

const accounts: Account[] = [
  {
    id: '1',
    name: 'Business Checking',
    type: 'bank',
    balance: 12458.35,
    currency: 'USD'
  },
  {
    id: '2',
    name: 'Savings Account',
    type: 'bank',
    balance: 38921.77,
    currency: 'USD'
  },
  {
    id: '3',
    name: 'Business Credit Card',
    type: 'credit',
    balance: -2543.21,
    currency: 'USD'
  },
  {
    id: '4',
    name: 'Investment Portfolio',
    type: 'investment',
    balance: 152089.44,
    currency: 'USD'
  }
];

const getAccountIcon = (type: Account['type']) => {
  switch (type) {
    case 'bank':
      return <Building className="h-4 w-4 text-primary" />;
    case 'credit':
      return <CreditCard className="h-4 w-4 text-finance-red" />;
    case 'investment':
      return <TrendingUp className="h-4 w-4 text-finance-green" />;
    default:
      return <Wallet className="h-4 w-4 text-primary" />;
  }
};

import { TrendingUp } from 'lucide-react';

export const AccountSummary = () => {
  const totalBalance = accounts.reduce((total, account) => total + account.balance, 0);
  
  return (
    <Card className="finance-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Accounts</CardTitle>
            <CardDescription>Manage your financial accounts</CardDescription>
          </div>
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            <span>Add Account</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                  {getAccountIcon(account.type)}
                </div>
                <div>
                  <div className="font-medium">{account.name}</div>
                  <div className="text-xs text-muted-foreground">{account.type.charAt(0).toUpperCase() + account.type.slice(1)}</div>
                </div>
              </div>
              <div className={`text-right ${account.balance < 0 ? 'finance-stat-negative' : ''}`}>
                {new Intl.NumberFormat('en-US', { 
                  style: 'currency', 
                  currency: account.currency 
                }).format(account.balance)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border pt-4 flex justify-between">
        <div className="font-medium">Total Balance</div>
        <div className="font-bold">
          {new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' 
          }).format(totalBalance)}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccountSummary;
