
import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight,
  Search,
  Filter 
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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Transaction {
  id: string;
  date: Date;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

const transactions: Transaction[] = [
  {
    id: '1',
    date: new Date('2025-04-05'),
    description: 'Client Payment - ABC Corp',
    category: 'Income',
    amount: 3500,
    type: 'income'
  },
  {
    id: '2',
    date: new Date('2025-04-03'),
    description: 'Office Supplies',
    category: 'Expenses',
    amount: -125.45,
    type: 'expense'
  },
  {
    id: '3',
    date: new Date('2025-04-02'),
    description: 'Software Subscription',
    category: 'Expenses',
    amount: -49.99,
    type: 'expense'
  },
  {
    id: '4',
    date: new Date('2025-04-01'),
    description: 'Client Payment - XYZ Ltd',
    category: 'Income',
    amount: 1800,
    type: 'income'
  },
  {
    id: '5',
    date: new Date('2025-03-28'),
    description: 'Utility Bill',
    category: 'Expenses',
    amount: -210.33,
    type: 'expense'
  }
];

export const TransactionTable = () => {
  return (
    <Card className="finance-card">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your recent financial activities</CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-8 md:w-[200px] lg:w-[250px]" 
              />
            </div>
            <Button size="icon" variant="outline">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {transaction.date.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="h-4 w-4 text-finance-green" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-finance-red" />
                    )}
                    {transaction.description}
                  </div>
                </TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell className={`text-right ${transaction.amount < 0 ? 'finance-stat-negative' : 'finance-stat-positive'}`}>
                  {new Intl.NumberFormat('en-US', { 
                    style: 'currency', 
                    currency: 'USD' 
                  }).format(transaction.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="border-t border-border pt-4 flex justify-between items-center">
        <div className="text-sm text-muted-foreground">Showing 5 of 124 transactions</div>
        <Button variant="outline" size="sm">View All</Button>
      </CardFooter>
    </Card>
  );
};

export default TransactionTable;
