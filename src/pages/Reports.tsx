
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Monthly Income/Expense data
const monthlyData = [
  { month: 'Jan', income: 12500, expenses: 9200 },
  { month: 'Feb', income: 13100, expenses: 9600 },
  { month: 'Mar', income: 14200, expenses: 9100 },
  { month: 'Apr', income: 13800, expenses: 10200 },
  { month: 'May', income: 15100, expenses: 9800 },
  { month: 'Jun', income: 16200, expenses: 10500 },
  { month: 'Jul', income: 16800, expenses: 11200 },
  { month: 'Aug', income: 18000, expenses: 12000 },
  { month: 'Sep', income: 17500, expenses: 11500 },
  { month: 'Oct', income: 18700, expenses: 12100 },
  { month: 'Nov', income: 19200, expenses: 12600 },
  { month: 'Dec', income: 22000, expenses: 14500 },
];

// Category Breakdown data
const categoryData = [
  { name: 'Rent', value: 2500, color: '#FF5C5C' },
  { name: 'Utilities', value: 450, color: '#FFAB00' },
  { name: 'Groceries', value: 850, color: '#36B37E' },
  { name: 'Transportation', value: 400, color: '#00B8D9' },
  { name: 'Entertainment', value: 300, color: '#6554C0' },
  { name: 'Healthcare', value: 200, color: '#4C9AFF' },
  { name: 'Education', value: 150, color: '#403294' },
  { name: 'Miscellaneous', value: 250, color: '#FF8B00' },
];

// Cash Flow Trend data
const cashFlowData = [
  { month: 'Jan', cashFlow: 3300 },
  { month: 'Feb', cashFlow: 3500 },
  { month: 'Mar', cashFlow: 5100 },
  { month: 'Apr', cashFlow: 3600 },
  { month: 'May', cashFlow: 5300 },
  { month: 'Jun', cashFlow: 5700 },
  { month: 'Jul', cashFlow: 5600 },
  { month: 'Aug', cashFlow: 6000 },
  { month: 'Sep', cashFlow: 6000 },
  { month: 'Oct', cashFlow: 6600 },
  { month: 'Nov', cashFlow: 6600 },
  { month: 'Dec', cashFlow: 7500 },
];

const Reports = () => {
  const [timeframe, setTimeframe] = useState('yearly');
  const [chartType, setChartType] = useState('bar');
  const { toast } = useToast();
  
  const handleExportReport = () => {
    toast({
      title: "Report exported",
      description: "Your report has been exported successfully",
    });
  };
  
  const renderIncomeExpenseChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="income" fill="#36B37E" name="Income" />
              <Bar dataKey="expenses" fill="#FF5C5C" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#36B37E" activeDot={{ r: 8 }} name="Income" />
              <Line type="monotone" dataKey="expenses" stroke="#FF5C5C" name="Expenses" />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-finance-gray">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Financial Reports</h1>
            <p className="text-muted-foreground">
              Analyze your financial data with interactive reports
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Select defaultValue={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleExportReport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="income-expense">Income vs Expenses</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Income</CardTitle>
                  <CardDescription>Year to date (2025)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-finance-green">$196,100</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="text-finance-green font-semibold">↑ 12.3%</span> from last year
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Total Expenses</CardTitle>
                  <CardDescription>Year to date (2025)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-finance-red">$132,300</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="text-finance-red font-semibold">↑ 8.7%</span> from last year
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Net Profit</CardTitle>
                  <CardDescription>Year to date (2025)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$63,800</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="text-finance-green font-semibold">↑ 15.2%</span> from last year
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                  <div>
                    <CardTitle>Income vs Expenses</CardTitle>
                    <CardDescription>Monthly comparison for 2025</CardDescription>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant={chartType === 'bar' ? 'default' : 'outline'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setChartType('bar')}
                    >
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={chartType === 'line' ? 'default' : 'outline'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setChartType('line')}
                    >
                      <LineChartIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {renderIncomeExpenseChart()}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Expense Breakdown</CardTitle>
                  <CardDescription>By category for current month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="income-expense">
            <Card>
              <CardHeader>
                <CardTitle>Income vs Expenses Detailed Analysis</CardTitle>
                <CardDescription>Monthly breakdown with trend analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Legend />
                      <Bar dataKey="income" fill="#36B37E" name="Income" />
                      <Bar dataKey="expenses" fill="#FF5C5C" name="Expenses" />
                    </BarChart>
                  </ResponsiveContainer>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Summary</h3>
                    <p className="text-muted-foreground">
                      Your income has shown steady growth through 2025, with a significant uptick in December. 
                      Expenses have remained relatively consistent in proportion to income, with slight 
                      increases during summer months and year-end.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium">Average Monthly Income</h4>
                      <p className="text-2xl font-bold text-finance-green">
                        ${(monthlyData.reduce((acc, curr) => acc + curr.income, 0) / monthlyData.length).toLocaleString(undefined, {maximumFractionDigits: 0})}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Average Monthly Expenses</h4>
                      <p className="text-2xl font-bold text-finance-red">
                        ${(monthlyData.reduce((acc, curr) => acc + curr.expenses, 0) / monthlyData.length).toLocaleString(undefined, {maximumFractionDigits: 0})}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Average Net Profit</h4>
                      <p className="text-2xl font-bold">
                        ${((monthlyData.reduce((acc, curr) => acc + curr.income, 0) - monthlyData.reduce((acc, curr) => acc + curr.expenses, 0)) / monthlyData.length).toLocaleString(undefined, {maximumFractionDigits: 0})}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="categories">
            <Card>
              <CardHeader>
                <CardTitle>Expense Categories Analysis</CardTitle>
                <CardDescription>Detailed breakdown of spending by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `$${value}`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
                    <div className="space-y-3">
                      {categoryData.map((category) => (
                        <div key={category.name} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div 
                              className="h-3 w-3 rounded-full mr-2" 
                              style={{ backgroundColor: category.color }}
                            ></div>
                            <span>{category.name}</span>
                          </div>
                          <div className="font-medium">${category.value.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex justify-between font-bold">
                        <span>Total Expenses</span>
                        <span>${categoryData.reduce((acc, curr) => acc + curr.value, 0).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Cash Flow Trends</CardTitle>
                <CardDescription>Monthly net cash flow analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={cashFlowData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Line 
                      type="monotone" 
                      dataKey="cashFlow" 
                      stroke="#36B37E" 
                      activeDot={{ r: 8 }} 
                      name="Net Cash Flow"
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Trend Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    Your net cash flow shows a consistent upward trend throughout 2025, with particularly 
                    strong performance in March, May, and December. The plateau in August-September may 
                    indicate seasonal effects.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm">Lowest Cash Flow</h4>
                      <p className="text-xl font-bold mt-1">
                        ${Math.min(...cashFlowData.map(d => d.cashFlow)).toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        January 2025
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm">Highest Cash Flow</h4>
                      <p className="text-xl font-bold mt-1">
                        ${Math.max(...cashFlowData.map(d => d.cashFlow)).toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        December 2025
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm">Average Monthly Growth</h4>
                      <p className="text-xl font-bold mt-1">
                        $382
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        11.6% annually
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Reports;
