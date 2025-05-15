
import React from "react";
import Navigation from "@/components/Navigation";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center pt-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Local Services
          </h1>
          <p className="text-gray-600 text-center max-w-md">
            Find trusted services in your neighborhood
          </p>
        </header>
        
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="text-5xl mb-4">🔧</div>
          <h2 className="text-xl font-medium mb-2">Coming Soon</h2>
          <p className="text-gray-600">
            The local services feature is currently under development.
            Connect to Supabase to enable this feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
