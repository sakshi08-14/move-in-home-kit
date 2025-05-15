
import { Task } from "./types";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Buy Gas Stove",
    completed: false,
    createdAt: new Date()
  },
  {
    id: "2",
    title: "Schedule Internet Installation",
    completed: true,
    createdAt: new Date(Date.now() - 86400000)
  },
  {
    id: "3",
    title: "Update Address with Bank",
    completed: false,
    createdAt: new Date(Date.now() - 172800000)
  },
  {
    id: "4",
    title: "Buy Kitchen Utensils",
    completed: false,
    createdAt: new Date(Date.now() - 259200000)
  },
  {
    id: "5",
    title: "Purchase Cleaning Supplies",
    completed: true,
    createdAt: new Date(Date.now() - 345600000)
  }
];
