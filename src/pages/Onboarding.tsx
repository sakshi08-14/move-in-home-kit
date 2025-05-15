
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, X, ArrowRight } from "lucide-react";

type OnboardingStep = 
  | "welcome" 
  | "journey" 
  | "city" 
  | "preferences" 
  | "complete";

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<OnboardingStep>("welcome");
  const [journey, setJourney] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [preferences, setPreferences] = useState({
    lifestyle: [] as string[],
    cleanliness: "",
    budget: "",
  });

  const lifestyleOptions = [
    { id: "social", label: "Social" },
    { id: "quiet", label: "Quiet" },
    { id: "studious", label: "Studious" },
    { id: "active", label: "Active" },
    { id: "foodie", label: "Foodie" },
    { id: "creative", label: "Creative" },
    { id: "eco-friendly", label: "Eco-friendly" }
  ];

  const toggleLifestyleOption = (id: string) => {
    if (preferences.lifestyle.includes(id)) {
      setPreferences({
        ...preferences,
        lifestyle: preferences.lifestyle.filter(item => item !== id)
      });
    } else {
      setPreferences({
        ...preferences,
        lifestyle: [...preferences.lifestyle, id]
      });
    }
  };

  const goToNextStep = () => {
    switch (step) {
      case "welcome":
        setStep("journey");
        break;
      case "journey":
        setStep("city");
        break;
      case "city":
        setStep("preferences");
        break;
      case "preferences":
        setStep("complete");
        break;
      case "complete":
        navigate("/checklist");
        break;
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case "welcome":
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-6xl">🏡</span>
              </div>
              <CardTitle className="text-2xl">Welcome to GharSet</CardTitle>
              <CardDescription className="text-lg">
                Let's get your new life started, stress-free!
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={goToNextStep} className="w-full">
                Get Started <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        );
      
      case "journey":
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Choose your journey</CardTitle>
              <CardDescription>
                Tell us a bit about your situation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant={journey === "new-city" ? "default" : "outline"}
                className="w-full justify-start h-auto p-4 text-left"
                onClick={() => setJourney("new-city")}
              >
                <div>
                  <div className="font-medium">I'm moving to a new city</div>
                  <div className="text-sm text-muted-foreground">
                    Find flatmates, apartments, and settle in
                  </div>
                </div>
              </Button>
              
              <Button 
                variant={journey === "with-flatmates" ? "default" : "outline"}
                className="w-full justify-start h-auto p-4 text-left"
                onClick={() => setJourney("with-flatmates")}
              >
                <div>
                  <div className="font-medium">I'm already living with flatmates</div>
                  <div className="text-sm text-muted-foreground">
                    Manage expenses, tasks, and stay organized
                  </div>
                </div>
              </Button>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={goToNextStep} 
                className="w-full"
                disabled={!journey}
              >
                Continue
              </Button>
            </CardFooter>
          </Card>
        );
      
      case "city":
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Where are you based?</CardTitle>
              <CardDescription>
                This helps us connect you with nearby flatmates and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Label htmlFor="city">Your City</Label>
              <Input 
                id="city" 
                placeholder="Enter your city" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1"
              />
            </CardContent>
            <CardFooter>
              <Button 
                onClick={goToNextStep} 
                className="w-full"
                disabled={!city}
              >
                Continue
              </Button>
            </CardFooter>
          </Card>
        );
      
      case "preferences":
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Your Preferences</CardTitle>
              <CardDescription>
                Tell us what matters to you in a living situation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Lifestyle (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {lifestyleOptions.map((option) => (
                    <Button
                      key={option.id}
                      type="button"
                      variant={preferences.lifestyle.includes(option.id) ? "default" : "outline"}
                      className="flex justify-between"
                      onClick={() => toggleLifestyleOption(option.id)}
                    >
                      {option.label}
                      {preferences.lifestyle.includes(option.id) && (
                        <Check className="h-4 w-4 ml-2" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="cleanliness">Cleanliness Preference</Label>
                <Select
                  value={preferences.cleanliness}
                  onValueChange={(value) => setPreferences({...preferences, cleanliness: value})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select cleanliness level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very clean">Very Clean</SelectItem>
                    <SelectItem value="clean">Clean</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="relaxed">Relaxed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="budget">Monthly Budget</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Your monthly budget"
                  value={preferences.budget}
                  onChange={(e) => setPreferences({...preferences, budget: e.target.value})}
                  className="mt-1"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={goToNextStep} 
                className="w-full"
              >
                Continue
              </Button>
            </CardFooter>
          </Card>
        );
      
      case "complete":
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <CardTitle>You're all set!</CardTitle>
              <CardDescription className="text-lg">
                Your profile is ready. Let's explore what GharSet can do for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-gray-500 mb-4">
                Next, check out the move-in checklist to get started with your new home setup.
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-500 h-2.5 rounded-full w-full"></div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={goToNextStep} className="w-full">
                Go to Checklist
              </Button>
            </CardFooter>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Progress indicator */}
      <div className="w-full max-w-md mb-6 px-4">
        <div className="flex justify-between mb-2">
          {["welcome", "journey", "city", "preferences", "complete"].map((s, index) => (
            <div 
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs 
                ${step === s 
                  ? "bg-blue-500 text-white" 
                  : ["complete", "welcome", "journey", "city", "preferences"].indexOf(step) > index
                    ? "bg-blue-200 text-blue-700"
                    : "bg-gray-200 text-gray-500"
                }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-blue-500 h-1 rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${
                step === "welcome" ? "0%" :
                step === "journey" ? "25%" :
                step === "city" ? "50%" :
                step === "preferences" ? "75%" :
                "100%"
              }` 
            }}
          ></div>
        </div>
      </div>
      
      {renderStepContent()}
    </div>
  );
};

export default Onboarding;
