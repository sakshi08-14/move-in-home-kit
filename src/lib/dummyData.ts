
import { Task } from "./types";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Buy Gas Stove",
    completed: false,
    createdAt: new Date(),
    category: "Kitchen"
  },
  {
    id: "2",
    title: "Schedule Internet Installation",
    completed: true,
    createdAt: new Date(Date.now() - 86400000),
    category: "General"
  },
  {
    id: "3",
    title: "Update Address with Bank",
    completed: false,
    createdAt: new Date(Date.now() - 172800000),
    category: "Admin"
  },
  {
    id: "4",
    title: "Buy Kitchen Utensils",
    completed: false,
    createdAt: new Date(Date.now() - 259200000),
    category: "Kitchen"
  },
  {
    id: "5",
    title: "Purchase Cleaning Supplies",
    completed: true,
    createdAt: new Date(Date.now() - 345600000),
    category: "Cleaning"
  },
  {
    id: "6",
    title: "Install Door Locks",
    completed: false,
    createdAt: new Date(Date.now() - 432000000),
    category: "Safety"
  },
  {
    id: "7",
    title: "Set Up Bedroom Furniture",
    completed: false,
    createdAt: new Date(Date.now() - 518400000),
    category: "Bedroom"
  },
  {
    id: "8",
    title: "Buy Bathroom Essentials",
    completed: true,
    createdAt: new Date(Date.now() - 604800000),
    category: "Bathroom"
  }
];
