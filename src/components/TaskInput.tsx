
import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Add a task (e.g., Buy Gas Stove)"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <PlusCircle size={18} />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
