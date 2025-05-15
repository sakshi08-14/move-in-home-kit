
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/components/ui/use-toast";
import { Task } from "@/lib/types";
import { initialTasks } from "@/lib/dummyData";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";

const Checklist = () => {
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
  };

  // Get completion statistics
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const percentComplete = totalCount > 0 
    ? Math.round((completedCount / totalCount) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 md:pl-20">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="flex flex-col items-center justify-center pt-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Your Move-in Checklist
          </h1>
          <p className="text-gray-600 text-center max-w-md">
            Keep track of everything you need for your new home
          </p>
        </header>
        
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
      </div>
    </div>
  );
};

export default Checklist;
