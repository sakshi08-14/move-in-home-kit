
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CheckSquare, DollarSign, MapPin, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      title: "Find Flatmates",
      description: "Discover compatible flatmates in your area",
      icon: <Users size={24} className="text-blue-500" />,
      path: "/flatmates"
    },
    {
      title: "Move-in Checklist",
      description: "Keep track of everything needed for your new home",
      icon: <CheckSquare size={24} className="text-green-500" />,
      path: "/checklist"
    },
    {
      title: "Split Expenses",
      description: "Manage shared expenses with your flatmates",
      icon: <DollarSign size={24} className="text-yellow-500" />,
      path: "/expenses"
    },
    {
      title: "Local Services",
      description: "Find reliable services in your neighborhood",
      icon: <MapPin size={24} className="text-red-500" />,
      path: "/services"
    },
    {
      title: "Community",
      description: "Connect with others and get advice",
      icon: <MessageSquare size={24} className="text-purple-500" />,
      path: "/community"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center pt-8 pb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-5xl">🏡</span>
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">GharSet</h1>
          </div>
          <p className="text-gray-600 text-center max-w-lg mx-auto text-lg">
            Your all-in-one companion for finding flatmates and managing your shared home
          </p>
          
          <div className="mt-8 flex gap-4">
            <Button size="lg" onClick={() => navigate("/onboarding")}>
              Get Started <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/checklist")}>
              View Demo
            </Button>
          </div>
        </header>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">What can GharSet do for you?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" onClick={() => navigate(feature.path)}>
                    Explore <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-12 bg-blue-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">Just moved to a new city?</h2>
              <p className="text-gray-600 mb-4">
                We'll help you find reliable flatmates, set up your new home, and connect with local services.
              </p>
              <Button onClick={() => navigate("/onboarding")}>
                Start Your Journey
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-56 h-48 bg-gradient-to-br from-blue-200 to-purple-100 rounded-xl flex items-center justify-center text-5xl">
                🌆
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-medium text-lg mb-2">Set Your Preferences</h3>
              <p className="text-gray-600">Tell us about your lifestyle, budget, and what you're looking for</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-medium text-lg mb-2">Connect & Organize</h3>
              <p className="text-gray-600">Find flatmates, set up your checklist, and manage shared expenses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-medium text-lg mb-2">Enjoy Your New Home</h3>
              <p className="text-gray-600">Settle in stress-free with all the tools to manage your shared living</p>
            </div>
          </div>
        </section>
        
        <footer className="text-center text-gray-500 text-sm pt-8 pb-20 md:pb-8">
          <p>© 2023 GharSet. All rights reserved.</p>
          <p className="mt-2">Your companion for stress-free shared living.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
