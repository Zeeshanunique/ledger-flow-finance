
import React from 'react';
import { 
  ArrowUp, 
  ArrowDown,
  DollarSign, 
  CreditCard, 
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

const StatCard = ({ title, value, description, icon, trend, trendValue }: StatCardProps) => {
  return (
    <Card className="finance-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        {trend && (
          <div className="flex items-center mt-2">
            {trend === 'up' && <ArrowUp className="h-4 w-4 text-finance-green mr-1" />}
            {trend === 'down' && <ArrowDown className="h-4 w-4 text-finance-red mr-1" />}
            <span className={
              trend === 'up' ? 'finance-stat-positive text-xs' : 
              trend === 'down' ? 'finance-stat-negative text-xs' : 
              'finance-stat-neutral text-xs'
            }>
              {trendValue}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const DashboardOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$24,512.65"
        description="Total revenue this month"
        icon={<DollarSign className="h-4 w-4" />}
        trend="up"
        trendValue="12.5% from last month"
      />
      <StatCard
        title="Expenses"
        value="$8,921.18"
        description="Total expenses this month"
        icon={<CreditCard className="h-4 w-4" />}
        trend="down"
        trendValue="4.3% from last month"
      />
      <StatCard
        title="Net Income"
        value="$15,591.47"
        description="Net income this month"
        icon={<TrendingUp className="h-4 w-4" />}
        trend="up"
        trendValue="8.2% from last month"
      />
      <StatCard
        title="Pending Invoices"
        value="$5,432.89"
        description="Due in next 30 days"
        icon={<FileText className="h-4 w-4" />}
      />
    </div>
  );
};

export default DashboardOverview;
