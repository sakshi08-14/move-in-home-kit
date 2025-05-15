
import React from "react";
import { Check, Circle } from "lucide-react";
import { Task } from "@/lib/types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-3 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggle(task.id)}
            className={`h-6 w-6 rounded-full flex items-center justify-center transition-colors ${
              task.completed
                ? "bg-green-500 text-white"
                : "border-2 border-gray-300 text-transparent hover:border-blue-400"
            }`}
          >
            {task.completed ? <Check size={14} /> : <Circle size={14} className="opacity-0" />}
          </button>
          <span
            className={`${
              task.completed ? "completed-task" : "text-gray-800"
            } transition-all duration-200`}
          >
            {task.title}
          </span>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            task.completed
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
