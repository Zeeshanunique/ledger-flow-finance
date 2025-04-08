
import React from 'react';
import { 
  FileText, 
  CreditCard, 
  AlertCircle, 
  RefreshCw,
  Check
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

interface Activity {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  type: 'invoice' | 'payment' | 'alert' | 'update' | 'success';
}

const activities: Activity[] = [
  {
    id: '1',
    title: 'Invoice Created',
    description: 'Invoice #INV-2025-042 for $1,250.00 was created',
    timestamp: new Date('2025-04-08T10:23:00'),
    type: 'invoice'
  },
  {
    id: '2',
    title: 'Payment Received',
    description: 'Received $3,500.00 from ABC Corp',
    timestamp: new Date('2025-04-07T14:12:00'),
    type: 'payment'
  },
  {
    id: '3',
    title: 'Expense Alert',
    description: 'Unusual expense detected: $899.99 at Tech Store',
    timestamp: new Date('2025-04-06T09:45:00'),
    type: 'alert'
  },
  {
    id: '4',
    title: 'Account Reconciled',
    description: 'Business Checking account has been reconciled',
    timestamp: new Date('2025-04-05T16:30:00'),
    type: 'update'
  },
  {
    id: '5',
    title: 'Tax Filing Complete',
    description: 'Quarterly tax filing completed successfully',
    timestamp: new Date('2025-04-04T11:05:00'),
    type: 'success'
  }
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'invoice':
      return (
        <div className="h-8 w-8 rounded-full bg-finance-lightblue flex items-center justify-center text-primary">
          <FileText className="h-4 w-4" />
        </div>
      );
    case 'payment':
      return (
        <div className="h-8 w-8 rounded-full bg-finance-green/20 flex items-center justify-center text-finance-green">
          <CreditCard className="h-4 w-4" />
        </div>
      );
    case 'alert':
      return (
        <div className="h-8 w-8 rounded-full bg-finance-red/20 flex items-center justify-center text-finance-red">
          <AlertCircle className="h-4 w-4" />
        </div>
      );
    case 'update':
      return (
        <div className="h-8 w-8 rounded-full bg-finance-yellow/20 flex items-center justify-center text-finance-yellow">
          <RefreshCw className="h-4 w-4" />
        </div>
      );
    case 'success':
      return (
        <div className="h-8 w-8 rounded-full bg-finance-green/20 flex items-center justify-center text-finance-green">
          <Check className="h-4 w-4" />
        </div>
      );
    default:
      return (
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <FileText className="h-4 w-4" />
        </div>
      );
  }
};

const formatTime = (date: Date) => {
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
};

export const RecentActivity = () => {
  return (
    <Card className="finance-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent financial activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4">
              {getActivityIcon(activity.type)}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-medium">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground">
                    {formatTime(activity.timestamp)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
