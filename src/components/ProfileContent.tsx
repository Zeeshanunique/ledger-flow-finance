
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Globe, 
  Upload
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProfileContent = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Industries',
    position: 'Financial Director',
    address: '123 Main Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    website: 'www.sarahjohnson.com',
    bio: 'Financial director with over 10 years of experience in corporate accounting and financial management.'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{profileData.firstName} {profileData.lastName}</CardTitle>
                <CardDescription>{profileData.position} at {profileData.company}</CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  <Button onClick={handleSave}>Save Changes</Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>First Name</span>
                  </Label>
                  {isEditing ? (
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={profileData.firstName} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.firstName}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Last Name</span>
                  </Label>
                  {isEditing ? (
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={profileData.lastName} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.lastName}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </Label>
                  {isEditing ? (
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={profileData.email} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.email}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Phone</span>
                  </Label>
                  {isEditing ? (
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={profileData.phone} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.phone}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span>Company</span>
                  </Label>
                  {isEditing ? (
                    <Input 
                      id="company" 
                      name="company" 
                      value={profileData.company} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.company}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position" className="flex items-center gap-2">
                    <span>Position</span>
                  </Label>
                  {isEditing ? (
                    <Input 
                      id="position" 
                      name="position" 
                      value={profileData.position} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.position}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Website</span>
                  </Label>
                  {isEditing ? (
                    <Input 
                      id="website" 
                      name="website" 
                      value={profileData.website} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.website}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Street Address</span>
                  </Label>
                  {isEditing ? (
                    <Input 
                      id="address" 
                      name="address" 
                      value={profileData.address} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.address}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  {isEditing ? (
                    <Input 
                      id="city" 
                      name="city" 
                      value={profileData.city} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.city}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  {isEditing ? (
                    <Input 
                      id="state" 
                      name="state"
                      value={profileData.state} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.state}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Postal Code</Label>
                  {isEditing ? (
                    <Input 
                      id="zipCode" 
                      name="zipCode" 
                      value={profileData.zipCode} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.zipCode}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  {isEditing ? (
                    <Input 
                      id="country" 
                      name="country" 
                      value={profileData.country} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="text-sm p-2 bg-gray-50 rounded">{profileData.country}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              {isEditing ? (
                <textarea 
                  id="bio" 
                  name="bio" 
                  className="w-full min-h-[100px] p-3 border rounded-md"
                  value={profileData.bio} 
                  onChange={handleInputChange} 
                />
              ) : (
                <div className="text-sm p-3 bg-gray-50 rounded">{profileData.bio}</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documents & Attachments</CardTitle>
          <CardDescription>Upload and manage your important documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <div className="flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <h3 className="font-medium">Drag & drop files here</h3>
                <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
                <Button size="sm" variant="outline">Select Files</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-medium mb-2">Uploaded Documents</h3>
              <div className="text-center text-sm text-muted-foreground py-6">
                No documents uploaded yet
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileContent;
