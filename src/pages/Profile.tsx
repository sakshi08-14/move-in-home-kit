
import React from "react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // In a real app, this would come from authentication state
  // For now, we'll just use placeholder data
  const user = {
    name: "Demo User",
    email: "demo@example.com",
    profileImage: "https://i.pravatar.cc/150?img=12",
    city: "Mumbai",
    profession: "Student",
  };
  
  const handleEditProfile = () => {
    toast({
      title: "Feature coming soon",
      description: "Profile editing will be available when connected to Supabase.",
    });
  };
  
  const handleLogout = () => {
    // In a real app, this would clear the auth state
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center pt-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Your Profile
          </h1>
          <p className="text-gray-600 text-center max-w-md">
            Manage your account and preferences
          </p>
        </header>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src={user.profileImage} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div>
                <h3 className="text-sm font-medium text-gray-500">City</h3>
                <p>{user.city}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Profession</h3>
                <p>{user.profession}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleEditProfile}>
              Edit Profile
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Log Out
            </Button>
          </CardFooter>
        </Card>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Connect to Supabase</h2>
          <p className="text-gray-600 mb-4">
            To enable full functionality including authentication, data storage, and real-time features,
            connect your Lovable project to Supabase.
          </p>
          <div className="text-center">
            <Button variant="outline">
              Connect to Supabase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
