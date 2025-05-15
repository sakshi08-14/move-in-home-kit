
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { Task } from "@/lib/types";
import { initialTasks } from "@/lib/dummyData";

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const { toast } = useToast();

  // Add a new task
  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date()
    };

    setTasks((prev) => [newTask, ...prev]);
    toast({
      title: "Task added",
      description: "Your new task has been added to the checklist.",
    });

    // Supabase integration would go here in a real app
    // When connected to Supabase, this would insert the task into the database
  };

  // Toggle task completion status
  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    const task = tasks.find((t) => t.id === id);
    if (task) {
      toast({
        title: task.completed ? "Task pending" : "Task completed",
        description: `"${task.title}" marked as ${
          task.completed ? "pending" : "completed"
        }.`,
      });
    }

    // Supabase integration would go here in a real app
    // When connected to Supabase, this would update the task in the database
  };

  // Get completion statistics
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const percentComplete = totalCount > 0 
    ? Math.round((completedCount / totalCount) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <Header />
        
        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">
              {completedCount} of {totalCount} tasks completed
            </span>
            <span className="text-sm font-medium text-blue-600">
              {percentComplete}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percentComplete}%` }}
            ></div>
          </div>
        </div>

        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
        
        {/* Future Supabase connection note */}
        <div className="mt-10 text-center text-xs text-gray-400">
          <p>
            This is a demo version using local storage. 
            <br />
            Connect to Supabase to enable persistent storage and synchronization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
