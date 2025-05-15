
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, MessageCircle, CheckCircle, MapPin } from "lucide-react";

const Services = () => {
  // In a real app, this would come from Supabase
  const serviceCategories = [
    { id: "internet", name: "Internet", icon: "🌐" },
    { id: "tiffin", name: "Tiffin", icon: "🍱" },
    { id: "gas", name: "Gas", icon: "🔥" },
    { id: "maid", name: "Maid", icon: "🧹" },
    { id: "laundry", name: "Laundry", icon: "👕" },
    { id: "repair", name: "AC Repair", icon: "🔧" }
  ];

  // This would be fetched from Supabase in a real implementation
  const services = [
    {
      id: "1",
      service_type: "internet",
      provider_name: "SpeedyFiber",
      phone: "+91 9876543210",
      rating: 4.8,
      reviews: 145,
      description: "Reliable fiber internet with speeds up to 300 Mbps. Special offers for new tenants.",
      tags: ["Verified", "Fast Response"],
      distance: "1.2 km"
    },
    {
      id: "2",
      service_type: "tiffin",
      provider_name: "HomeTaste Tiffin",
      phone: "+91 9876543211",
      rating: 4.5,
      reviews: 89,
      description: "Home-style meals delivered daily. North and South Indian options available.",
      tags: ["Verified", "Near You"],
      distance: "0.8 km"
    },
    {
      id: "3",
      service_type: "gas",
      provider_name: "QuickGas Supplier",
      phone: "+91 9876543212",
      rating: 4.2,
      reviews: 112,
      description: "Same-day LPG cylinder delivery and connection setup for new homes.",
      tags: ["Fast Response"],
      distance: "2.1 km"
    },
    {
      id: "4",
      service_type: "maid",
      provider_name: "CleanHome Services",
      phone: "+91 9876543213",
      rating: 4.6,
      reviews: 76,
      description: "Professional household help. Daily or weekly service plans available.",
      tags: ["Verified", "Background Checked"],
      distance: "1.5 km"
    },
    {
      id: "5",
      service_type: "laundry",
      provider_name: "FreshPress Laundry",
      phone: "+91 9876543214",
      rating: 4.3,
      reviews: 53,
      description: "Pickup and delivery service. Specialized in all types of fabrics.",
      tags: ["Near You"],
      distance: "0.5 km"
    },
    {
      id: "6",
      service_type: "repair",
      provider_name: "CoolFix AC Repair",
      phone: "+91 9876543215",
      rating: 4.7,
      reviews: 98,
      description: "AC installation, servicing, and repair with 3-month warranty on parts.",
      tags: ["Verified", "Fast Response"],
      distance: "3.2 km"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("internet");

  const filteredServices = services.filter(
    service => service.service_type === activeCategory
  );

  const handleCallProvider = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/\s+/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center pt-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Local Services
          </h1>
          <p className="text-gray-600 text-center max-w-md mb-6">
            Find trusted services in your neighborhood
          </p>
          
          <Tabs defaultValue="internet" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-6">
            <TabsList className="flex w-full h-auto flex-wrap gap-2 bg-transparent">
              {serviceCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-3 py-2 rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                >
                  <span className="mr-2">{category.icon}</span> {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </header>
        
        <div className="space-y-4">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{service.provider_name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                        <span className="font-medium mr-1">{service.rating}</span>
                        <span className="text-gray-400">({service.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex gap-1 mb-2">
                        {service.tags.map((tag, index) => (
                          <Badge key={index} variant={tag === "Verified" ? "default" : "outline"} className="rounded-full">
                            {tag === "Verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                            {tag === "Near You" && <MapPin className="h-3 w-3 mr-1" />}
                            {tag === "Fast Response" && <MessageCircle className="h-3 w-3 mr-1" />}
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        <MapPin className="h-3 w-3 inline mb-0.5 mr-1" />
                        {service.distance} away
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleCallProvider(service.phone)} className="flex-1">
                      <Phone size={16} className="mr-2" />
                      Call Now
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleWhatsApp(service.phone)} className="flex-1">
                      <MessageCircle size={16} className="mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-5xl mb-3">🔍</div>
              <h3 className="text-xl font-medium mb-2">No Services Found</h3>
              <p className="text-gray-600">
                We couldn't find any services in this category. Try another category or check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
