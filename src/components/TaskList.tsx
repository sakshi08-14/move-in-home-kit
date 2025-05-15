
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "@/lib/types";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  // Sort tasks: pending first, then by creation date (newest first)
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  if (tasks.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p>Your checklist is empty. Add some tasks to get started!</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggleTask} />
      ))}
    </div>
  );
};

export default TaskList;
