
import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight,
  Search,
  Filter, 
  ChevronLeft,
  ChevronRight
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
import { useToast } from "@/hooks/use-toast";

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
  },
  {
    id: '6',
    date: new Date('2025-03-25'),
    description: 'Marketing Services',
    category: 'Expenses',
    amount: -350,
    type: 'expense'
  },
  {
    id: '7',
    date: new Date('2025-03-23'),
    description: 'Consulting Project - DEF Inc',
    category: 'Income',
    amount: 2750,
    type: 'income'
  },
  {
    id: '8',
    date: new Date('2025-03-20'),
    description: 'Rental Expenses',
    category: 'Expenses',
    amount: -1500,
    type: 'expense'
  },
  {
    id: '9',
    date: new Date('2025-03-18'),
    description: 'Equipment Purchase',
    category: 'Expenses',
    amount: -899.99,
    type: 'expense'
  },
  {
    id: '10',
    date: new Date('2025-03-15'),
    description: 'Online Course Subscription',
    category: 'Expenses',
    amount: -79.99,
    type: 'expense'
  },
  {
    id: '11',
    date: new Date('2025-03-12'),
    description: 'Refund from Vendor',
    category: 'Income',
    amount: 150,
    type: 'income'
  },
  {
    id: '12',
    date: new Date('2025-03-10'),
    description: 'Insurance Payment',
    category: 'Expenses',
    amount: -320.5,
    type: 'expense'
  }
];

interface TransactionTableProps {
  showFilters?: boolean;
  showPagination?: boolean;
  limit?: number;
}

export const TransactionTable = ({ 
  showFilters = false, 
  showPagination = false,
  limit
}: TransactionTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { toast } = useToast();
  
  const pageSize = limit || 5;
  const filteredTransactions = transactions.filter(transaction => 
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredTransactions.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + pageSize);
  
  const handleDelete = (id: string) => {
    // In a real app, this would delete from database
    toast({
      title: "Transaction deleted",
      description: "The transaction has been removed",
    });
  };
  
  const handleEdit = (id: string) => {
    setEditingId(id);
    // In a real app, this would open an edit form
    toast({
      title: "Edit mode",
      description: "Editing functionality would be implemented here",
    });
    
    // Reset editing state after 2 seconds
    setTimeout(() => setEditingId(null), 2000);
  };

  return (
    <Card className="finance-card">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your recent financial activities</CardDescription>
          </div>
          {showFilters && (
            <div className="flex gap-2">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  className="pl-8 md:w-[200px] lg:w-[250px]" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button size="icon" variant="outline">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          )}
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
              {showFilters && <TableHead className="text-right">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {(limit ? paginatedTransactions : filteredTransactions).map((transaction) => (
              <TableRow key={transaction.id} className={editingId === transaction.id ? 'bg-primary/5' : ''}>
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
                {showFilters && (
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(transaction.id)}>
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-finance-red" onClick={() => handleDelete(transaction.id)}>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="border-t border-border pt-4 flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          {showPagination 
            ? `Showing ${startIndex + 1} to ${Math.min(startIndex + pageSize, filteredTransactions.length)} of ${filteredTransactions.length} transactions`
            : `Showing ${(limit ? paginatedTransactions.length : filteredTransactions.length)} of ${transactions.length} transactions`
          }
        </div>
        {showPagination && totalPages > 1 ? (
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">{currentPage} of {totalPages}</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button variant="outline" size="sm">View All</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TransactionTable;
