
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BellRing, 
  Lock, 
  ChevronRight, 
  PieChart, 
  Receipt,
  Clock, 
  MousePointer,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SettingsContent = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully",
    });
  };

  return (
    <Tabs defaultValue="general" className="space-y-6">
      <TabsList className="grid w-full grid-cols-5 mb-4">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      
      <TabsContent value="general" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Default Settings</CardTitle>
            <CardDescription>Configure your default views and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Default Dashboard View</Label>
                  <div className="text-xs text-muted-foreground">Choose your preferred dashboard layout</div>
                </div>
                <div className="flex items-center">
                  <select className="border rounded p-2 mr-2">
                    <option>Monthly Overview</option>
                    <option>Transactions Focus</option>
                    <option>Budgets Focus</option>
                    <option>Goals Focus</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">
                    <div className="flex items-center gap-2">
                      <Receipt className="w-4 h-4" />
                      <span>Default Transaction View</span>
                    </div>
                  </Label>
                  <div className="text-xs text-muted-foreground">Set your default transaction sorting</div>
                </div>
                <div className="flex items-center">
                  <select className="border rounded p-2 mr-2">
                    <option>Most Recent First</option>
                    <option>Oldest First</option>
                    <option>Highest Amount</option>
                    <option>By Category</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">
                    <div className="flex items-center gap-2">
                      <PieChart className="w-4 h-4" />
                      <span>Default Budget View</span>
                    </div>
                  </Label>
                  <div className="text-xs text-muted-foreground">Set your default budget display</div>
                </div>
                <div className="flex items-center">
                  <select className="border rounded p-2 mr-2">
                    <option>Categories</option>
                    <option>Monthly View</option>
                    <option>Progress</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSave}>Save Changes</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
            <CardDescription>Manage your data and export options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Data Export Format</Label>
                  <div className="text-xs text-muted-foreground">Choose your preferred export format</div>
                </div>
                <div className="flex items-center space-x-2">
                  <select className="border rounded p-2 mr-2">
                    <option>CSV</option>
                    <option>Excel</option>
                    <option>PDF</option>
                    <option>JSON</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" className="w-full">Export All Data</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="notifications" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose what notifications you receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>Low Balance Alerts</span>
                    </div>
                  </Label>
                  <div className="text-xs text-muted-foreground">Get notified when your account balance is low</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">
                    <div className="flex items-center gap-2">
                      <BellRing className="w-4 h-4" />
                      <span>Bill Reminders</span>
                    </div>
                  </Label>
                  <div className="text-xs text-muted-foreground">Receive reminders for upcoming bills</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Budget Alerts</Label>
                  <div className="text-xs text-muted-foreground">Get notified when approaching budget limits</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Large Transaction Alerts</Label>
                  <div className="text-xs text-muted-foreground">Notifications for transactions above a threshold</div>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Weekly Summaries</Label>
                  <div className="text-xs text-muted-foreground">Receive weekly financial reports</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSave}>Save Preferences</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="security" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Manage your security preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      <span>Two-Factor Authentication</span>
                    </div>
                  </Label>
                  <div className="text-xs text-muted-foreground">Add an extra layer of security</div>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Session Timeout</Label>
                  <div className="text-xs text-muted-foreground">Auto-logout after inactivity</div>
                </div>
                <div className="flex items-center">
                  <select className="border rounded p-2 mr-2">
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" className="w-full">Change Password</Button>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="w-full">Manage Connected Devices</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="appearance" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Appearance Settings</CardTitle>
            <CardDescription>Customize how the application looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Theme</Label>
                  <div className="text-xs text-muted-foreground">Choose your preferred theme</div>
                </div>
                <div className="flex items-center">
                  <select className="border rounded p-2 mr-2">
                    <option>System Default</option>
                    <option>Light</option>
                    <option>Dark</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Font Size</Label>
                  <div className="text-xs text-muted-foreground">Set your preferred text size</div>
                </div>
                <div className="flex items-center">
                  <select className="border rounded p-2 mr-2">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">
                    <div className="flex items-center gap-2">
                      <MousePointer className="w-4 h-4" />
                      <span>Animations</span>
                    </div>
                  </Label>
                  <div className="text-xs text-muted-foreground">Enable or disable UI animations</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSave}>Apply Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="advanced" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Advanced Settings</CardTitle>
            <CardDescription>Configure advanced application options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Auto-sync Frequency</span>
                    </div>
                  </Label>
                  <div className="text-xs text-muted-foreground">How often to synchronize data</div>
                </div>
                <div className="flex items-center">
                  <select className="border rounded p-2 mr-2">
                    <option>Real-time</option>
                    <option>Every 5 minutes</option>
                    <option>Every 15 minutes</option>
                    <option>Hourly</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Cache Management</Label>
                  <div className="text-xs text-muted-foreground">Manage application cache</div>
                </div>
                <Button variant="outline" size="sm">Clear Cache</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Enable Developer Tools</Label>
                  <div className="text-xs text-muted-foreground">Access to advanced debugging options</div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSave}>Save Settings</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SettingsContent;
