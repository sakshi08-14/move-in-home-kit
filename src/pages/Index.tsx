
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, CheckSquare, DollarSign, MapPin, MessageSquare, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      title: "Find Flatmates",
      description: "Discover compatible flatmates in your area",
      icon: <Users size={24} className="text-blue-500" />,
      path: "/flatmates",
      gradient: "from-blue-50 to-indigo-100",
      iconBg: "bg-blue-100"
    },
    {
      title: "Move-in Checklist",
      description: "Keep track of everything needed for your new home",
      icon: <CheckSquare size={24} className="text-green-500" />,
      path: "/checklist",
      gradient: "from-green-50 to-emerald-100",
      iconBg: "bg-green-100"
    },
    {
      title: "Split Expenses",
      description: "Manage shared expenses with your flatmates",
      icon: <DollarSign size={24} className="text-yellow-500" />,
      path: "/expenses",
      gradient: "from-yellow-50 to-amber-100",
      iconBg: "bg-yellow-100"
    },
    {
      title: "Local Services",
      description: "Find reliable services in your neighborhood",
      icon: <MapPin size={24} className="text-red-500" />,
      path: "/services",
      gradient: "from-red-50 to-rose-100",
      iconBg: "bg-red-100"
    },
    {
      title: "Community",
      description: "Connect with others and get advice",
      icon: <MessageSquare size={24} className="text-purple-500" />,
      path: "/community",
      gradient: "from-purple-50 to-fuchsia-100",
      iconBg: "bg-purple-100"
    }
  ];

  const tips = [
    "Always check the water pressure before finalizing a flat",
    "Meet potential flatmates in person before deciding",
    "Create a shared expenses spreadsheet from day one",
    "Invest in good quality kitchen essentials that last",
    "Schedule a house meeting once a month to discuss issues"
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section with Gradient Background */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 mb-8 shadow-lg">
          <header className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🏡</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">GharSet</h1>
            </div>
            <p className="text-xl md:text-2xl font-light max-w-lg mx-auto mb-8">
              Settle into your new life, stress-free
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
              <Button 
                size="lg" 
                onClick={() => navigate("/onboarding")}
                className="bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-700 w-full"
              >
                Get Started <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/flatmates")}
                className="border-white text-white hover:bg-white/20 w-full"
              >
                Find Flatmates
              </Button>
            </div>
          </header>
        </div>
        
        {/* Welcome Card with Daily Tip */}
        <div className="mb-10 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Hi there! 👋</h2>
              <p className="text-gray-600 mt-1">Ready to organize your home and find compatible flatmates?</p>
              <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-sm text-amber-800 font-medium">💡 Pro Tip</p>
                <p className="text-sm text-amber-700">{randomTip}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Access Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Button 
            onClick={() => navigate("/flatmates")}
            className="h-auto flex-col py-6 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
          >
            <Users size={24} className="mb-2" />
            <span>Find Flatmate</span>
          </Button>
          <Button 
            onClick={() => navigate("/expenses")}
            className="h-auto flex-col py-6 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            <DollarSign size={24} className="mb-2" />
            <span>Add Expense</span>
          </Button>
          <Button 
            onClick={() => navigate("/checklist")}
            className="h-auto flex-col py-6 bg-gradient-to-br from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700"
          >
            <CheckSquare size={24} className="mb-2" />
            <span>View Checklist</span>
          </Button>
          <Button 
            onClick={() => navigate("/services")}
            className="h-auto flex-col py-6 bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
          >
            <MapPin size={24} className="mb-2" />
            <span>Local Services</span>
          </Button>
        </div>
        
        {/* Feature Cards Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore GharSet</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className={`hover:shadow-md transition-all overflow-hidden border-0 bg-gradient-to-br ${feature.gradient}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${feature.iconBg}`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{feature.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white hover:bg-gray-50" 
                  onClick={() => navigate(feature.path)}
                >
                  Explore <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* New City Card */}
        <div className="mt-10 mb-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white shadow-lg overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 z-10">
              <Badge className="bg-white/20 hover:bg-white/30 text-white mb-3">New in town?</Badge>
              <h2 className="text-2xl font-semibold mb-2">Just moved to a new city?</h2>
              <p className="text-white/90 mb-4">
                We'll help you find reliable flatmates, set up your new home, and connect with local services.
              </p>
              <Button 
                onClick={() => navigate("/onboarding")}
                className="bg-white text-indigo-700 hover:bg-gray-100"
              >
                Start Your Journey
              </Button>
            </div>
            <div className="flex-1 flex justify-center z-10">
              <div className="w-48 h-48 bg-gradient-to-br from-indigo-300/30 to-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center text-6xl">
                🌆
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full opacity-30 transform translate-x-20 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full opacity-30 transform -translate-x-20 translate-y-20"></div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              1
            </div>
            <h3 className="font-medium text-lg mb-2">Set Your Preferences</h3>
            <p className="text-gray-600">Tell us about your lifestyle, budget, and what you're looking for</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              2
            </div>
            <h3 className="font-medium text-lg mb-2">Connect & Organize</h3>
            <p className="text-gray-600">Find flatmates, set up your checklist, and manage shared expenses</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              3
            </div>
            <h3 className="font-medium text-lg mb-2">Enjoy Your New Home</h3>
            <p className="text-gray-600">Settle in stress-free with all the tools to manage your shared living</p>
          </div>
        </div>
        
        <footer className="text-center text-gray-500 text-sm pt-8 pb-20 md:pb-8">
          <p>© 2023 GharSet. All rights reserved.</p>
          <p className="mt-2">Your companion for stress-free shared living.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
