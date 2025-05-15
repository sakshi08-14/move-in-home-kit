
import React from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, MessageSquare } from "lucide-react";

const Flatmates = () => {
  // This is just a placeholder - in a real app, you would fetch data from Supabase
  const flatmates = [
    {
      id: "1",
      name: "Rahul Sharma",
      age: 27,
      gender: "Male",
      profession: "Software Engineer",
      tags: ["Early riser", "Clean", "Non-smoker"],
      image: "https://i.pravatar.cc/150?img=1",
      trustScore: 92,
      verified: true
    },
    {
      id: "2",
      name: "Priya Patel",
      age: 25,
      gender: "Female",
      profession: "Marketing Manager",
      tags: ["Foodie", "Social", "Pet-friendly"],
      image: "https://i.pravatar.cc/150?img=5",
      trustScore: 88,
      verified: true
    },
    {
      id: "3",
      name: "Arjun Nair",
      age: 26,
      gender: "Male",
      profession: "Financial Analyst",
      tags: ["Gym enthusiast", "Vegetarian", "Tidy"],
      image: "https://i.pravatar.cc/150?img=3",
      trustScore: 95,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center pt-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Find Flatmates
          </h1>
          <p className="text-gray-600 text-center max-w-md">
            Discover compatible flatmates in your area
          </p>
        </header>
        
        {/* Flatmate cards */}
        <div className="space-y-4">
          {flatmates.map((flatmate) => (
            <Card key={flatmate.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-32 h-32 md:h-auto overflow-hidden">
                    <img 
                      src={flatmate.image} 
                      alt={flatmate.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{flatmate.name}</h3>
                        <p className="text-gray-600 text-sm">{flatmate.age} • {flatmate.gender} • {flatmate.profession}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {flatmate.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Verified
                          </span>
                        )}
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {flatmate.trustScore}% Trust
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex flex-wrap gap-1">
                      {flatmate.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <X size={16} className="mr-1" /> Skip
                      </Button>
                      <Button size="sm" className="flex-1">
                        <MessageSquare size={16} className="mr-1" /> Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Connect to Supabase to see real flatmate profiles in your area.
        </div>
      </div>
    </div>
  );
};

export default Flatmates;
