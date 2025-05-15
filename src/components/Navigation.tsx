
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, CheckSquare, DollarSign, Map, MessageSquare, User } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: <Home size={20} /> },
  { path: "/flatmates", label: "Flatmates", icon: <Users size={20} /> },
  { path: "/checklist", label: "Checklist", icon: <CheckSquare size={20} /> },
  { path: "/expenses", label: "Expenses", icon: <DollarSign size={20} /> },
  { path: "/services", label: "Services", icon: <Map size={20} /> },
  { path: "/community", label: "Community", icon: <MessageSquare size={20} /> },
  { path: "/profile", label: "Profile", icon: <User size={20} /> },
];

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-3 flex justify-around shadow-lg md:top-0 md:bottom-auto md:flex-col md:w-20 md:h-screen md:shadow-lg md:justify-start md:py-8 md:gap-8 z-10">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center justify-center text-xs ${
            location.pathname === item.path
              ? "text-blue-500 font-medium"
              : "text-gray-500"
          }`}
        >
          {item.icon}
          <span className="mt-1">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
