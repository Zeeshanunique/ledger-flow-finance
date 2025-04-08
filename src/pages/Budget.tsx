
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import { Plus, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface BudgetCategory {
  id: string;
  name: string;
  plannedAmount: number;
  spentAmount: number;
  color: string;
}

const initialBudgetData: BudgetCategory[] = [
  { 
    id: '1', 
    name: 'Housing', 
    plannedAmount: 2000, 
    spentAmount: 1800, 
    color: '#36B37E' 
  },
  { 
    id: '2', 
    name: 'Transportation', 
    plannedAmount: 400, 
    spentAmount: 350, 
    color: '#FFAB00' 
  },
  { 
    id: '3', 
    name: 'Food', 
    plannedAmount: 800, 
    spentAmount: 750, 
    color: '#FF5C5C' 
  },
  { 
    id: '4', 
    name: 'Utilities', 
    plannedAmount: 300, 
    spentAmount: 280, 
    color: '#00B8D9' 
  },
  { 
    id: '5', 
    name: 'Insurance', 
    plannedAmount: 200, 
    spentAmount: 200, 
    color: '#6554C0' 
  },
  { 
    id: '6', 
    name: 'Entertainment', 
    plannedAmount: 250, 
    spentAmount: 300, 
    color: '#FF8B00' 
  },
  { 
    id: '7', 
    name: 'Personal Care', 
    plannedAmount: 150, 
    spentAmount: 120, 
    color: '#4C9AFF' 
  },
  { 
    id: '8', 
    name: 'Savings', 
    plannedAmount: 500, 
    spentAmount: 400, 
    color: '#403294' 
  }
];

const Budget = () => {
  const [budgetData, setBudgetData] = useState<BudgetCategory[]>(initialBudgetData);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', plannedAmount: '' });
  const [editMode, setEditMode] = useState(false);
  const { toast } = useToast();
  
  const totalPlanned = budgetData.reduce((sum, item) => sum + item.plannedAmount, 0);
  const totalSpent = budgetData.reduce((sum, item) => sum + item.spentAmount, 0);
  
  const pieChartData = budgetData.map(item => ({
    name: item.name,
    value: item.plannedAmount
  }));
  
  const handleAddCategory = () => {
    if (!newCategory.name || !newCategory.plannedAmount) {
      toast({
        title: "Error",
        description: "Please enter both name and amount",
        variant: "destructive"
      });
      return;
    }
    
    const plannedAmount = parseFloat(newCategory.plannedAmount);
    if (isNaN(plannedAmount) || plannedAmount <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive"
      });
      return;
    }
    
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    
    const newBudgetCategory: BudgetCategory = {
      id: `new-${Date.now()}`,
      name: newCategory.name,
      plannedAmount: plannedAmount,
      spentAmount: 0,
      color: randomColor
    };
    
    setBudgetData([...budgetData, newBudgetCategory]);
    setNewCategory({ name: '', plannedAmount: '' });
    setShowAddCategory(false);
    
    toast({
      title: "Category added",
      description: "New budget category has been added"
    });
  };
  
  const handleSaveChanges = () => {
    setEditMode(false);
    toast({
      title: "Changes saved",
      description: "Your budget changes have been saved"
    });
  };
  
  const handleUpdateAmount = (id: string, newAmount: string) => {
    const amount = parseFloat(newAmount);
    if (!isNaN(amount)) {
      setBudgetData(budgetData.map(item => 
        item.id === id ? { ...item, plannedAmount: amount } : item
      ));
    }
  };
  
  const handleRemoveCategory = (id: string) => {
    setBudgetData(budgetData.filter(item => item.id !== id));
  };
  
  const calculateProgress = (spent: number, planned: number) => {
    return (spent / planned) * 100;
  };

  return (
    <div className="min-h-screen bg-finance-gray">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Budget Planning</h1>
            <p className="text-muted-foreground">
              Plan, track, and manage your monthly budget
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            {editMode ? (
              <>
                <Button onClick={handleSaveChanges}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setEditMode(false)}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setEditMode(true)}>
                Edit Budget
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Budget Overview</CardTitle>
                <CardDescription>April 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Total Budget</span>
                      <span className="text-sm font-bold">${totalPlanned.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Total Spent</span>
                      <span className="text-sm font-bold">${totalSpent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Remaining</span>
                      <span className={`text-sm font-bold ${totalPlanned - totalSpent >= 0 ? 'text-finance-green' : 'text-finance-red'}`}>
                        ${(totalPlanned - totalSpent).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Budget Usage</span>
                      <span>{Math.round((totalSpent / totalPlanned) * 100)}%</span>
                    </div>
                    <Progress value={(totalSpent / totalPlanned) * 100} />
                  </div>
                </div>
                
                <div className="mt-6">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={budgetData[index].color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value}`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Budget Categories</CardTitle>
                  <CardDescription>Allocation and spending by category</CardDescription>
                </div>
                {!showAddCategory && (
                  <Button size="sm" onClick={() => setShowAddCategory(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                )}
              </CardHeader>
              
              {showAddCategory && (
                <div className="px-6 py-3 border-b">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Label htmlFor="category-name">Category Name</Label>
                      <Input 
                        id="category-name" 
                        value={newCategory.name} 
                        onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                        placeholder="e.g. Entertainment"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="category-amount">Planned Amount ($)</Label>
                      <Input 
                        id="category-amount" 
                        value={newCategory.plannedAmount} 
                        onChange={(e) => setNewCategory({...newCategory, plannedAmount: e.target.value})}
                        placeholder="e.g. 200"
                        type="number"
                      />
                    </div>
                    <div className="flex items-end gap-2">
                      <Button onClick={handleAddCategory}>Add</Button>
                      <Button variant="outline" onClick={() => setShowAddCategory(false)}>Cancel</Button>
                    </div>
                  </div>
                </div>
              )}
              
              <CardContent>
                <div className="space-y-4">
                  {budgetData.map((category) => (
                    <div key={category.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <div 
                            className="h-3 w-3 rounded-full" 
                            style={{ backgroundColor: category.color }}
                          ></div>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <div className="flex items-center">
                          {editMode ? (
                            <div className="flex gap-2 items-center">
                              <Input 
                                value={category.plannedAmount}
                                onChange={(e) => handleUpdateAmount(category.id, e.target.value)}
                                className="w-24 h-8"
                                type="number"
                              />
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="text-finance-red h-8 w-8"
                                onClick={() => handleRemoveCategory(category.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <div className="text-right">
                              <div className="font-medium">
                                ${category.spentAmount.toLocaleString()} <span className="text-muted-foreground">/ ${category.plannedAmount.toLocaleString()}</span>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {Math.round((category.spentAmount / category.plannedAmount) * 100)}% used
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <Progress 
                        value={calculateProgress(category.spentAmount, category.plannedAmount)} 
                        className={calculateProgress(category.spentAmount, category.plannedAmount) > 100 ? "bg-finance-red/20" : ""}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Budget;
