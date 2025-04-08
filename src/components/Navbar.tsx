
import React from 'react';
import { 
  CircleDollarSign,
  FileText,
  BarChart2,
  Settings,
  User,
  Menu,
  PieChart,
  Receipt
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-finance-navy text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CircleDollarSign className="h-7 w-7 text-finance-teal" />
          <span className="text-xl font-bold">Ledger Flow</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`flex items-center space-x-1 ${isActive('/') ? 'text-finance-teal' : 'text-white/80 hover:text-finance-teal'} transition-colors`}>
            <BarChart2 className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          <Link to="/transactions" className={`flex items-center space-x-1 ${isActive('/transactions') ? 'text-finance-teal' : 'text-white/80 hover:text-finance-teal'} transition-colors`}>
            <Receipt className="h-4 w-4" />
            <span>Transactions</span>
          </Link>
          <Link to="/budget" className={`flex items-center space-x-1 ${isActive('/budget') ? 'text-finance-teal' : 'text-white/80 hover:text-finance-teal'} transition-colors`}>
            <PieChart className="h-4 w-4" />
            <span>Budget</span>
          </Link>
          <Link to="/reports" className={`flex items-center space-x-1 ${isActive('/reports') ? 'text-finance-teal' : 'text-white/80 hover:text-finance-teal'} transition-colors`}>
            <FileText className="h-4 w-4" />
            <span>Reports</span>
          </Link>
          <a href="#" className="flex items-center space-x-1 text-white/80 hover:text-finance-teal transition-colors">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="p-2 text-white/90 hover:text-white">
            <User className="h-5 w-5" />
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="p-2 md:hidden text-white/90 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-finance-navy border-t border-finance-navy/20 mt-4">
          <div className="container mx-auto py-3 px-4 space-y-3">
            <Link to="/" className={`flex items-center space-x-2 py-2 ${isActive('/') ? 'text-finance-teal' : 'text-white/80 hover:text-finance-teal'} transition-colors`}>
              <BarChart2 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/transactions" className={`flex items-center space-x-2 py-2 ${isActive('/transactions') ? 'text-finance-teal' : 'text-white/80 hover:text-finance-teal'} transition-colors`}>
              <Receipt className="h-5 w-5" />
              <span>Transactions</span>
            </Link>
            <Link to="/budget" className={`flex items-center space-x-2 py-2 ${isActive('/budget') ? 'text-finance-teal' : 'text-white/80 hover:text-finance-teal'} transition-colors`}>
              <PieChart className="h-5 w-5" />
              <span>Budget</span>
            </Link>
            <Link to="/reports" className={`flex items-center space-x-2 py-2 ${isActive('/reports') ? 'text-finance-teal' : 'text-white/80 hover:text-finance-teal'} transition-colors`}>
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </Link>
            <a href="#" className="flex items-center space-x-2 py-2 text-white/80 hover:text-finance-teal transition-colors">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
