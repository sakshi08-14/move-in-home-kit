
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CalendarDays, DollarSign, Edit, Trash2, Plus, Users } from "lucide-react";
import { useForm } from "react-hook-form";

const Expenses = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [openAddDialog, setOpenAddDialog] = useState(false);

  // This would be fetched from Supabase in a real implementation
  const expenses = [
    {
      id: "1",
      title: "Groceries from BigBasket",
      amount: 1245.50,
      date: new Date(2023, 4, 15),
      category: "food",
      paidBy: "Rahul",
      splitBetween: ["Rahul", "Priya", "Arjun"],
      status: "pending",
      tags: ["Groceries", "Food"]
    },
    {
      id: "2",
      title: "Electricity Bill - May",
      amount: 2300.00,
      date: new Date(2023, 4, 10),
      category: "utility",
      paidBy: "Priya",
      splitBetween: ["Rahul", "Priya", "Arjun"],
      status: "pending",
      tags: ["Utility", "Bills"]
    },
    {
      id: "3",
      title: "Internet Recharge",
      amount: 999.00,
      date: new Date(2023, 4, 5),
      category: "utility",
      paidBy: "Arjun",
      splitBetween: ["Rahul", "Priya", "Arjun"],
      status: "settled",
      tags: ["Internet", "Utility"]
    },
    {
      id: "4",
      title: "Dinner at Paradise",
      amount: 1850.75,
      date: new Date(2023, 4, 2),
      category: "food",
      paidBy: "Rahul",
      splitBetween: ["Rahul", "Priya"],
      status: "settled",
      tags: ["Food", "Dining"]
    }
  ];

  const form = useForm({
    defaultValues: {
      title: "",
      amount: "",
      category: "",
      splitBetween: []
    }
  });

  const handleSubmit = (data: any) => {
    console.log("Expense data submitted:", data);
    setOpenAddDialog(false);
    form.reset();
    // In a real app, this would send data to Supabase
  };

  // Filter expenses based on active tab
  const filteredExpenses = expenses.filter(expense => expense.status === activeTab);

  // Calculate totals
  const pendingTotal = expenses.filter(e => e.status === "pending").reduce((sum, e) => sum + e.amount, 0);
  const settledTotal = expenses.filter(e => e.status === "settled").reduce((sum, e) => sum + e.amount, 0);

  // Helper function to get category emoji
  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case "food": return "🍲";
      case "utility": return "💡";
      case "travel": return "🚕";
      case "rent": return "🏠";
      default: return "💰";
    }
  };

  // Format date helper
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center pt-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Shared Expenses
          </h1>
          <p className="text-gray-600 text-center max-w-md mb-6">
            Track and split expenses with your flatmates
          </p>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-4 w-full mb-6">
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-4">
                <div className="text-sm text-blue-600 mb-1">Pending</div>
                <div className="text-2xl font-bold">₹{pendingTotal.toFixed(2)}</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-50 to-green-100">
              <CardContent className="p-4">
                <div className="text-sm text-green-600 mb-1">Settled</div>
                <div className="text-2xl font-bold">₹{settledTotal.toFixed(2)}</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Tabs and Add Button */}
          <div className="flex items-center justify-between w-full mb-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-[200px] grid-cols-2">
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="settled">Settled</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-1">
                  <Plus size={16} />
                  Add Expense
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Expense</DialogTitle>
                  <DialogDescription>
                    Enter the details of the expense to split with your flatmates.
                  </DialogDescription>
                </DialogHeader>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expense Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Grocery Shopping" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amount (₹)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="0.00" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">Select category</option>
                              <option value="food">Food</option>
                              <option value="utility">Utility</option>
                              <option value="travel">Travel</option>
                              <option value="rent">Rent</option>
                            </select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <DialogFooter>
                      <Button type="submit">Save Expense</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </header>
        
        {/* Expense Feed */}
        <div className="space-y-4">
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map(expense => (
              <Card key={expense.id} className="overflow-hidden border-l-4" style={{
                borderLeftColor: expense.category === "food" ? "#10B981" : 
                                  expense.category === "utility" ? "#3B82F6" : 
                                  expense.category === "travel" ? "#F59E0B" : "#8B5CF6"
              }}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-base flex items-center">
                        <span className="mr-2">{getCategoryEmoji(expense.category)}</span>
                        {expense.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {formatDate(expense.date)}
                        <span className="mx-2">•</span>
                        <span>Paid by {expense.paidBy}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-lg">₹{expense.amount.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">
                        {expense.splitBetween.length} way split 
                        <span className="ml-1">
                          (₹{(expense.amount / expense.splitBetween.length).toFixed(2)} each)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-1">
                      {expense.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-3 bg-gray-50 p-2 rounded-md">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <div className="text-xs text-gray-600">
                      Split with: {expense.splitBetween.join(", ")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-5xl mb-3">💰</div>
              <h3 className="text-xl font-medium mb-2">No Expenses Found</h3>
              <p className="text-gray-600">
                {activeTab === "pending" 
                  ? "You don't have any pending expenses. Add a new expense to get started." 
                  : "You don't have any settled expenses yet."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
