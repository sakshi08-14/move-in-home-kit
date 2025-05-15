
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, MessageCircle, Heart, CheckCircle, Star, MapPin, Briefcase } from "lucide-react";

const Flatmates = () => {
  const [activeFlatmate, setActiveFlatmate] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [likedFlatmates, setLikedFlatmates] = useState<string[]>([]);

  // This is just a placeholder - in a real app, you would fetch data from Supabase
  const flatmates = [
    {
      id: "1",
      name: "Rahul Sharma",
      age: 27,
      gender: "Male",
      profession: "Software Engineer",
      location: "Koramangala",
      tags: ["Early riser", "Clean", "Non-smoker"],
      interests: ["Reading", "Photography", "Travel"],
      lifestyle: ["Vegetarian", "Gym-goer", "Occasional party"],
      budget: "20-25K",
      image: "https://i.pravatar.cc/300?img=12",
      flatImages: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ],
      trustScore: 92,
      verified: true,
      about: "Hi, I'm Rahul! I'm a software engineer working at a startup. I'm looking for a clean, organized flatmate who respects privacy but is also up for occasional movie nights or dinners. I'm usually busy on weekdays but enjoy exploring the city on weekends."
    },
    {
      id: "2",
      name: "Priya Patel",
      age: 25,
      gender: "Female",
      profession: "Marketing Manager",
      location: "Indiranagar",
      tags: ["Foodie", "Social", "Pet-friendly"],
      interests: ["Cooking", "Music", "Yoga"],
      lifestyle: ["Non-vegetarian", "Early sleeper", "Weekend socializing"],
      budget: "18-22K",
      image: "https://i.pravatar.cc/300?img=25",
      flatImages: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      ],
      trustScore: 88,
      verified: true,
      about: "Hey there! I'm Priya, working in digital marketing. I have a small, well-behaved cat named Luna. I enjoy cooking, hosting small gatherings, and maintaining a clean living space. Looking for someone who loves pets and doesn't mind some weekend activities at home."
    },
    {
      id: "3",
      name: "Arjun Nair",
      age: 26,
      gender: "Male",
      profession: "Financial Analyst",
      location: "HSR Layout",
      tags: ["Gym enthusiast", "Vegetarian", "Tidy"],
      interests: ["Fitness", "Finance", "Football"],
      lifestyle: ["Strict vegetarian", "Fitness focused", "Minimal drinking"],
      budget: "22-28K",
      image: "https://i.pravatar.cc/300?img=11",
      flatImages: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      ],
      trustScore: 95,
      verified: true,
      about: "I'm Arjun, working in finance. I'm vegetarian and very particular about cleanliness. I work out daily and prefer a quiet environment during weekdays. On weekends, I enjoy watching football and meeting friends. Looking for a like-minded flatmate who values organization and healthy living."
    },
    {
      id: "4",
      name: "Ananya Singh",
      age: 24,
      gender: "Female",
      profession: "UX Designer",
      location: "Whitefield",
      tags: ["Creative", "Night owl", "Minimalist"],
      interests: ["Art", "Design", "Coffee"],
      lifestyle: ["Flexible diet", "Remote work", "Weekend explorer"],
      budget: "15-20K",
      image: "https://i.pravatar.cc/300?img=32",
      flatImages: [
        "https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      ],
      trustScore: 86,
      verified: false,
      about: "Hey! I'm Ananya, a UX designer working remotely. I tend to work late and am quite creative with my space. I'm looking for a flatmate who doesn't mind my occasional late hours and respects my need for a creative environment. I love exploring new cafes and art exhibits on weekends."
    }
  ];

  // Filter flatmates based on gender selection
  const filteredFlatmates = flatmates.filter(flatmate => {
    if (activeFilter === "all") return true;
    return flatmate.gender.toLowerCase() === activeFilter.toLowerCase();
  });

  const handleLikeToggle = (id: string) => {
    if (likedFlatmates.includes(id)) {
      setLikedFlatmates(prev => prev.filter(fId => fId !== id));
    } else {
      setLikedFlatmates(prev => [...prev, id]);
    }
  };

  const openFlatmateDetails = (id: string) => {
    setActiveFlatmate(id);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center pt-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Find Flatmates
          </h1>
          <p className="text-gray-600 text-center max-w-md mb-6">
            Discover compatible flatmates in your area
          </p>
          
          {/* Filters */}
          <div className="w-full mb-6">
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="male">Male</TabsTrigger>
                <TabsTrigger value="female">Female</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </header>
        
        {/* Flatmate cards */}
        <div className="space-y-4">
          {filteredFlatmates.map((flatmate) => (
            <Card 
              key={flatmate.id} 
              className="overflow-hidden hover:shadow-md transition-all cursor-pointer"
              onClick={() => openFlatmateDetails(flatmate.id)}
            >
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
                        <div className="flex items-center text-sm text-gray-600">
                          <span>{flatmate.age}</span>
                          <span className="mx-1">•</span>
                          <span>{flatmate.gender}</span>
                          <span className="mx-1">•</span>
                          <div className="flex items-center">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {flatmate.profession}
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {flatmate.location}
                          <span className="mx-1">•</span>
                          <span>Budget: {flatmate.budget}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {flatmate.verified && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            <CheckCircle className="h-3 w-3 mr-1" /> Verified
                          </Badge>
                        )}
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          <Star className="h-3 w-3 mr-1" fill="currentColor" />
                          {flatmate.trustScore}%
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex flex-wrap gap-1">
                      {flatmate.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLikeToggle(flatmate.id);
                        }}
                      >
                        {likedFlatmates.includes(flatmate.id) ? (
                          <>
                            <Heart size={16} className="mr-1 text-red-500" fill="#ef4444" />
                            Liked
                          </>
                        ) : (
                          <>
                            <Heart size={16} className="mr-1" />
                            Like
                          </>
                        )}
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1"
                        disabled={!likedFlatmates.includes(flatmate.id)}
                        onClick={(e) => {
                          e.stopPropagation();
                          // This would open chat in a real app
                          console.log("Connect with", flatmate.name);
                        }}
                      >
                        <MessageCircle size={16} className="mr-1" /> Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredFlatmates.length === 0 && (
          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <div className="text-5xl mb-3">🔍</div>
            <h3 className="text-xl font-medium mb-2">No Flatmates Found</h3>
            <p className="text-gray-600">
              We couldn't find any flatmates matching your filters. Try changing your search criteria.
            </p>
          </div>
        )}
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Connect to Supabase to see real flatmate profiles in your area.
        </div>
      </div>
      
      {/* Flatmate Details Dialog */}
      {activeFlatmate && (
        <Dialog open={!!activeFlatmate} onOpenChange={() => setActiveFlatmate(null)}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Flatmate Profile</DialogTitle>
              <DialogDescription>
                View detailed information about this potential flatmate.
              </DialogDescription>
            </DialogHeader>
            
            {(() => {
              const flatmate = flatmates.find(f => f.id === activeFlatmate);
              if (!flatmate) return null;
              
              return (
                <div className="mt-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                      <img src={flatmate.image} alt={flatmate.name} className="w-full h-auto rounded-lg" />
                    </div>
                    
                    <div className="md:w-2/3">
                      <h2 className="text-xl font-semibold flex items-center">
                        {flatmate.name}
                        {flatmate.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                        )}
                      </h2>
                      
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <span>{flatmate.age}</span>
                        <span className="mx-1">•</span>
                        <span>{flatmate.gender}</span>
                        <span className="mx-1">•</span>
                        <span>{flatmate.profession}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {flatmate.location}
                        <span className="mx-1">•</span>
                        Budget: {flatmate.budget}
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="font-medium text-gray-800">About</h3>
                        <p className="text-gray-600 text-sm mt-1">{flatmate.about}</p>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="font-medium text-gray-800">Lifestyle</h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {flatmate.lifestyle.map((item, index) => (
                            <Badge key={index} variant="outline">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="font-medium text-gray-800">Interests</h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {flatmate.interests.map((interest, index) => (
                            <Badge key={index} variant="secondary">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium text-gray-800 mb-2">Apartment Photos</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {flatmate.flatImages.map((img, index) => (
                        <img key={index} src={img} alt="Apartment" className="w-full h-40 object-cover rounded-lg" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-2">
                    <Button 
                      className="flex-1"
                      onClick={() => {
                        handleLikeToggle(flatmate.id);
                        setActiveFlatmate(null);
                      }}
                    >
                      {likedFlatmates.includes(flatmate.id) ? (
                        <>
                          <Heart size={16} className="mr-1" fill="#ef4444" />
                          Liked
                        </>
                      ) : (
                        <>
                          <Heart size={16} className="mr-1" />
                          Like Profile
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setActiveFlatmate(null)}
                    >
                      <X size={16} className="mr-1" />
                      Close
                    </Button>
                  </div>
                </div>
              );
            })()}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Flatmates;
